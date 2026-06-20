/**
 * Portfolio data scraper.
 *
 * Pulls profile + content data for the three platforms into a single
 * normalized JSON document. Designed to be re-run safely; output is
 * written to ./out/<platform>.json plus a merged ./out/portfolio.json.
 *
 * Usage:
 *   bun run scrape.ts                          # all platforms
 *   bun run scrape.ts --platform=github        # one platform
 *   bun run scrape.ts --platform=github,twitter
 *   bun run scrape.ts --twitter-handle=foo     # override handles
 *
 * Environment (optional):
 *   GITHUB_TOKEN        raises rate limit from 60 to 5000 req/h
 *   LINKEDIN_COOKIE     li_at session cookie for fuller profile data
 *   HEADLESS=true|false default true
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

type Platform = "github" | "linkedin" | "twitter";

const DEFAULTS = {
	github: { username: "samarth-na" },
	linkedin: { vanity: "na-samarth" },
	twitter: { handle: "samarth7na" },
} as const;

type Scrapers = Partial<Record<Platform, () => Promise<unknown>>>;

function parseArgs() {
	const args = process.argv.slice(2);
	const get = (flag: string) => {
		const hit = args.find((a) => a.startsWith(`--${flag}=`));
		return hit ? hit.split("=")[1] : undefined;
	};
	const platformsRaw =
		get("platform") ?? "github,linkedin,twitter";
	const platforms = platformsRaw.split(",").map((p) => p.trim()) as Platform[];
	return {
		platforms,
		githubUser: get("github-user") ?? DEFAULTS.github.username,
		linkedinVanity: get("linkedin-vanity") ?? DEFAULTS.linkedin.vanity,
		twitterHandle: get("twitter-handle") ?? DEFAULTS.twitter.handle,
		headless: (process.env.HEADLESS ?? "true") !== "false",
	};
}

async function ensureOut() {
	await mkdir(OUT_DIR, { recursive: true });
}

async function writeJson(name: string, data: unknown) {
	const path = join(OUT_DIR, name);
	await writeFile(path, JSON.stringify(data, null, 2));
	console.log(`  wrote ${path}`);
	return path;
}

/* ------------------------------------------------------------------ */
/* GitHub                                                              */
/* ------------------------------------------------------------------ */

type GhRepo = {
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	topics: string[];
	updated_at: string;
	created_at: string;
	fork: boolean;
	archived: boolean;
	private: boolean;
	pushed_at: string;
};

async function scrapeGithub(username: string): Promise<unknown> {
	const headers: Record<string, string> = {
		Accept: "application/vnd.github+json",
		"User-Agent": "portfolio-scraper",
		"X-GitHub-Api-Version": "2022-11-28",
	};
	if (process.env.GITHUB_TOKEN) {
		headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
	}

	const api = (path: string) =>
		fetch(`https://api.github.com${path}`, { headers }).then(async (r) => {
			if (!r.ok) {
				const body = await r.text();
				throw new Error(`GitHub ${path} -> ${r.status}: ${body.slice(0, 200)}`);
			}
			return r.json();
		});

	console.log(`[github] fetching ${username}`);
	const user = await api(`/users/${username}`);
	const repos = (await api(
		`/users/${username}/repos?per_page=100&sort=updated`,
	)) as GhRepo[];
	const starred = (await api(`/users/${username}/starred?per_page=100`)) as GhRepo[];
	const followers = await api(`/users/${username}/followers?per_page=100`);
	const following = await api(`/users/${username}/following?per_page=100`);

	const profileReadme = await fetch(
		`https://raw.githubusercontent.com/${username}/${username}/main/README.md`,
		{ headers },
	).then(async (r) => (r.ok ? r.text() : null));

	const publicEvents = await api(`/users/${username}/events/public`);

	const totalStars = repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0);
	const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))];
	const topics = [
		...new Set(repos.flatMap((r) => r.topics ?? [])),
	].sort();

	return {
		source: "github",
		fetchedAt: new Date().toISOString(),
		user: {
			login: user.login,
			name: user.name,
			bio: user.bio,
			company: user.company,
			location: user.location,
			blog: user.blog,
			twitter: user.twitter_username,
			avatar_url: user.avatar_url,
			html_url: user.html_url,
			followers: user.followers,
			following: user.following,
			public_repos: user.public_repos,
			public_gists: user.public_gists,
			created_at: user.created_at,
			updated_at: user.updated_at,
		},
		stats: {
			totalStars,
			languages,
			topics,
		},
		repos: repos.map((r) => ({
			name: r.name,
			full_name: r.full_name,
			description: r.description,
			html_url: r.html_url,
			homepage: r.homepage,
			language: r.language,
			stargazers_count: r.stargazers_count,
			forks_count: r.forks_count,
			topics: r.topics,
			updated_at: r.updated_at,
			created_at: r.created_at,
			fork: r.fork,
			archived: r.archived,
		})),
		starred: starred.map((r) => ({
			name: r.name,
			full_name: r.full_name,
			description: r.description,
			html_url: r.html_url,
			language: r.language,
		})),
		followers,
		following,
		profileReadme,
		recentEvents: publicEvents,
	};
}

/* ------------------------------------------------------------------ */
/* Twitter / X                                                         */
/* ------------------------------------------------------------------ */

async function scrapeTwitter(
	handle: string,
	headless: boolean,
): Promise<unknown> {
	console.log(`[twitter] launching browser for @${handle}`);
	const { chromium } = await import("playwright");
	const browser = await chromium.launch({ headless });
	const context = await browser.newContext({
		userAgent:
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
		viewport: { width: 1280, height: 900 },
	});
	const page = await context.newPage();

	try {
		await page.goto(`https://x.com/${handle}`, {
			waitUntil: "domcontentloaded",
			timeout: 60000,
		});
		await page
			.waitForSelector("article", { timeout: 30000 })
			.catch(() => null);

		const profile = await page.evaluate(() => {
			const get = (sel: string) =>
				document.querySelector(sel)?.textContent?.trim() ?? null;
			return {
				displayName: get(
					'[data-testid="UserName"] span, [data-testid="UserName"]',
				),
				bio: get('[data-testid="UserDescription"]'),
				location: get('[data-testid="UserLocation"]'),
				url: get('[data-testid="UserUrl"] a'),
				avatar:
					document
						.querySelector('[data-testid="UserAvatar-Container-Unknown"] img')
						?.getAttribute("src") ?? null,
				banner:
					document
						.querySelector('a[href="/photo"] img, [data-testid="UserProfileHeader_Items"] img')
						?.getAttribute("src") ?? null,
			};
		});

		await page.evaluate(async () => {
			await new Promise<void>((resolve) => {
				let y = 0;
				const step = 600;
				const id = setInterval(() => {
					window.scrollBy(0, step);
					y += step;
					if (y > 4000) {
						clearInterval(id);
						resolve();
					}
				}, 250);
			});
		});
		await page
			.waitForTimeout(1500)
			.catch(() => null);

		const tweets = await page.$$eval("article", (nodes) => {
			return nodes.map((node) => {
				const links = Array.from(node.querySelectorAll('a[href*="/status/"]'));
				const statusHref = links
					.map((a) => (a as HTMLAnchorElement).getAttribute("href") ?? "")
					.find((h) => /\/status\/\d+/.test(h));
				const time =
					node.querySelector("time")?.getAttribute("datetime") ?? null;
				const text = (node.textContent ?? "").trim();
				const images = Array.from(
					node.querySelectorAll('img[src*="pbs.twimg.com/media"]'),
				)
					.map((i) => (i as HTMLImageElement).src)
					.filter((s) => /\/media\//.test(s));
				const metrics = Array.from(
					node.querySelectorAll('[data-testid="app-text-transition-container"] span, [aria-label]'),
				)
					.map((m) => m.textContent?.trim() ?? "")
					.filter(Boolean);
				return { statusHref, time, text, images, metrics };
			});
		});

		const seen = new Set<string>();
		const uniqueTweets = tweets.filter((t) => {
			if (!t.statusHref || seen.has(t.statusHref)) return false;
			seen.add(t.statusHref);
			return true;
		});

		const allImages = uniqueTweets.flatMap((t) => t.images);

		return {
			source: "twitter",
			fetchedAt: new Date().toISOString(),
			profile: { handle, ...profile },
			tweetCount: uniqueTweets.length,
			tweets: uniqueTweets,
			images: [...new Set(allImages)],
		};
	} finally {
		await browser.close();
	}
}

/* ------------------------------------------------------------------ */
/* LinkedIn                                                            */
/* ------------------------------------------------------------------ */

async function scrapeLinkedIn(
	vanity: string,
	headless: boolean,
): Promise<unknown> {
	console.log(`[linkedin] launching browser for /in/${vanity}`);
	const { chromium } = await import("playwright");
	const browser = await chromium.launch({ headless });
	const context = await browser.newContext({
		userAgent:
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
		viewport: { width: 1280, height: 900 },
	});
	if (process.env.LINKEDIN_COOKIE) {
		await context.addCookies([
			{
				name: "li_at",
				value: process.env.LINKEDIN_COOKIE,
				domain: ".linkedin.com",
				path: "/",
				httpOnly: true,
				secure: true,
			},
		]);
	}
	const page = await context.newPage();

	try {
		await page.goto(`https://www.linkedin.com/in/${vanity}/`, {
			waitUntil: "domcontentloaded",
			timeout: 60000,
		});
		await page.waitForTimeout(3000).catch(() => null);

		const jsonLd = await page
			.$$eval('script[type="application/ld+json"]', (nodes) =>
				nodes.map((n) => {
					try {
						return JSON.parse(n.textContent ?? "");
					} catch {
						return null;
					}
				}),
			)
			.then((arr) => arr.filter(Boolean));

		const meta = await page.evaluate(() => {
			const get = (sel: string) =>
				document
					.querySelector(sel)
					?.getAttribute("content")
					?.trim() ?? null;
			return {
				title: document.title,
				ogTitle: get('meta[property="og:title"]'),
				ogDescription: get('meta[property="og:description"]'),
				ogImage: get('meta[property="og:image"]'),
				ogUrl: get('meta[property="og:url"]'),
				description: get('meta[name="description"]'),
			};
		});

		const visibleText = await page.evaluate(() => {
			const main = document.querySelector("main") ?? document.body;
			return (main.textContent ?? "").replace(/\s+/g, " ").trim();
		});

		const screenshots: string[] = [];
		try {
			const buf = await page.screenshot({ fullPage: true });
			const out = join(OUT_DIR, `linkedin-${vanity}.png`);
			const { writeFile } = await import("node:fs/promises");
			await writeFile(out, buf);
			screenshots.push(out);
			console.log(`  wrote ${out}`);
		} catch (err) {
			console.warn("  linkedin screenshot failed:", (err as Error).message);
		}

		return {
			source: "linkedin",
			fetchedAt: new Date().toISOString(),
			vanity,
			url: `https://www.linkedin.com/in/${vanity}/`,
			jsonLd,
			meta,
			visibleTextSnippet: visibleText.slice(0, 4000),
			screenshots,
		};
	} finally {
		await browser.close();
	}
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function main() {
	const cfg = parseArgs();
	await ensureOut();

	const scrapers: Scrapers = {};
	for (const p of cfg.platforms) {
		if (p === "github") scrapers.github = () => scrapeGithub(cfg.githubUser);
		if (p === "linkedin")
			scrapers.linkedin = () => scrapeLinkedIn(cfg.linkedinVanity, cfg.headless);
		if (p === "twitter")
			scrapers.twitter = () => scrapeTwitter(cfg.twitterHandle, cfg.headless);
	}

	const merged: Record<string, unknown> = {
		generatedAt: new Date().toISOString(),
		config: cfg,
	};

	for (const [name, fn] of Object.entries(scrapers)) {
		try {
			const data = await fn!();
			merged[name] = data;
			await writeJson(`${name}.json`, data);
		} catch (err) {
			console.error(`[${name}] failed:`, (err as Error).message);
			merged[name] = { error: (err as Error).message };
		}
	}

	await writeJson("portfolio.json", merged);
	console.log("\nDone. Open ./scraper/out/portfolio.json");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
