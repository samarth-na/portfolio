# Agent notes for portfolio-resume

## This is NOT the Next.js from training data

- Next.js here is **16.2.9** with React **19.2.4**. APIs and conventions may differ from your training data.
- Before writing Next.js code, read the local guide in `node_modules/next/dist/docs/` and heed any deprecation notices.

## Repo layout

- **Root**: Next.js app. Entry page is `src/app/page.tsx`; layout is `src/app/layout.tsx`.
- **`scraper/`**: separate Bun package that scrapes GitHub / LinkedIn / X data. Entry is `scraper/scrape.ts`.

## Package manager & commands

- Use **Bun** in both root and `scraper/` (`bun.lock` files are present).
- Root scripts:
  - `bun run dev` — dev server on http://localhost:3000
  - `bun run build` — static export into `dist/`
  - `bun run start` — runs `next start`
  - `bun run lint` — `biome check`
  - `bun run format` — `biome format --write`
- No test runner is configured.

## Next.js build quirks

- `next.config.ts` sets `output: "export"` and `distDir: "dist"`, so `bun run build` writes a static site to `dist/`, not `.next/`.
- `reactCompiler: true` is enabled; `babel-plugin-react-compiler` is installed.
- `turbopack.root` is hardcoded to `/home/samarth/frameworks/portfolio-resume`. If the repo is moved or regenerated, update or remove that path.
- `next-env.d.ts` is generated; do not edit it.

## Tailwind v4 setup

- Tailwind v4 is loaded via `@import "tailwindcss"` in `src/app/globals.css`.
- Theme extensions live in `@theme inline` in the same CSS file; there is no `tailwind.config.*`.
- PostCSS uses `@tailwindcss/postcss`.
- Biome disables `suspicious/noUnknownAtRules` in `biome.json` so Tailwind at-rules do not lint-fail.

## Code style

- Biome handles linting and formatting (not ESLint / Prettier).
- Biome respects `.gitignore` and ignores `node_modules`, `.next`, `dist`, `build`.
- Indent: 2 spaces.

## Scraper (`scraper/`)

Install and run from inside the `scraper/` directory:

```bash
cd scraper
bun install
bunx playwright install chromium   # one-time, ~150MB
bun run scrape                     # all platforms
bun run scrape:github
bun run scrape:linkedin
bun run scrape:twitter
```

- Optional env in `scraper/.env`: `GITHUB_TOKEN`, `LINKEDIN_COOKIE`, `HEADLESS`.
- Output is written to `scraper/out/` (`github.json`, `linkedin.json`, `twitter.json`, `portfolio.json`).
- LinkedIn often fails or returns partial data without a valid `li_at` cookie; Twitter/X is brittle and may be rate-limited.

## Verification order

```bash
bun run lint
bun run build
```

There are no tests to run.
