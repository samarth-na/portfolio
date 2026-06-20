# Portfolio Scraper

Pulls profile data and content from **GitHub**, **LinkedIn**, and **X / Twitter**
into a single normalized JSON document. Built for re-running — output is written
to `./out/<platform>.json` plus a merged `./out/portfolio.json`.

## Targets (from your links)

| Platform | Handle / Vanity                     | Source                                    |
| -------- | ----------------------------------- | ----------------------------------------- |
| GitHub   | `samarth-na`                         | `https://github.com/samarth-na`           |
| LinkedIn | `na-samarth`                         | `https://www.linkedin.com/in/na-samarth/`  |
| Twitter  | `samarth7na`                         | `https://x.com/samarth7na`                |

## Install

```bash
cd scraper
bun install
bun run install-browsers   # one-time, ~150MB
```

The script is written for Bun but also runs on Node 20+.

## Run

```bash
# All three platforms
bun run scrape

# Only one
bun run scrape:github
bun run scrape:linkedin
bun run scrape:twitter

# Custom handles
bun run scrape -- --platform=github --github-user=torvalds
```

## Environment

Copy `.env.example` to `.env` and fill in any values you have:

```bash
GITHUB_TOKEN=ghp_...           # raises rate limit from 60 → 5000 req/h
LINKEDIN_COOKIE=...            # li_at session cookie; unlocks fuller profile
HEADLESS=true                  # set to false to watch the browser
```

Without the LinkedIn cookie, the script captures only what is visible to
logged-out visitors (name, headline, about text, og:image). With the cookie it
sees the full profile as you would.

## Output

```
scraper/out/
├── github.json          # user, stats, repos, pinned, starred, profile README
├── linkedin.json        # json-ld, meta, visible text snippet, screenshot path
├── twitter.json         # profile, tweets, image URLs
├── linkedin-na-samarth.png   # full-page screenshot
└── portfolio.json       # merged: { generatedAt, config, github, linkedin, twitter }
```

## Notes & caveats

- **GitHub** uses the public REST API — fast, no browser, well structured.
- **Twitter** scrapes the public timeline via headless Chromium. The site
  sometimes rate-limits; if you see empty results, wait a few minutes and
  retry. Only public posts are captured.
- **LinkedIn** aggressively blocks scrapers. The script uses stealth-style
  defaults and a real user agent. For the richest data, set `LINKEDIN_COOKIE`
  to your own `li_at` value (DevTools → Application → Cookies → li_at).
- Image URLs are saved, not downloaded. Pass them to a downloader if you
  want local copies.

## Adding a new platform

1. Create a new `scrapeXxx` async function returning the normalized shape.
2. Register it in `main()` inside `scrapers`.
3. Add a `--platform=xxx` flag in `parseArgs()` and a script in `package.json`.
