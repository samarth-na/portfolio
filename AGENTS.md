# Agent notes for portfolio-resume

## Forbidden commands

- **NEVER run `bun run dev` or `bun run build`** without explicit, in-the-moment user permission. They are strictly forbidden as autonomous actions. If a verification feels needed, ask first or use a read-only alternative (e.g. read files, run `bun run lint`).
- Do not run `next start` either — it requires a built site.

## This is NOT the Next.js from training data

- Next.js here is **16.2.9** with React **19.2.4**. APIs and conventions may differ from your training data.
- Before writing Next.js code, read the local guide in `node_modules/next/dist/docs/` and heed any deprecation notices.

## Repo layout

- **Root**: Next.js app. Entry page is `src/app/page.tsx`; layout is `src/app/layout.tsx`.
- **Path alias**: `@/*` maps to `./src/*` (see `tsconfig.json`).
- **No scraper package**: `scraper/` is listed in `.gitignore` and no longer exists in the working tree.

## Package manager & commands

- Use **Bun** (`bun.lock` is present). Do not use npm/yarn/pnpm.
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
- `turbopack.root` is hardcoded to `/home/samarth/portfolios/portfolio-resume`. If the repo is moved or regenerated, update or remove that path.
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

## Verification order

```bash
bun run lint
bun run build
```

There are no tests to run.

## Design context

- See `PRODUCT.md` for brand register, users, personality, and design principles.
- See `DESIGN.md` for tokens, typography, and component rules.
- Run `$impeccable document` to generate or refresh `DESIGN.md`.
- Run `$impeccable live` once configured for in-browser visual variants.
