# AGENTS.md

## Commands
- Package manager: **Bun** (`bun.lock` present). Do not use npm/yarn/pnpm.
- `bun run dev` — dev server at localhost:3000
- `bun run build` — static export to `dist/` (not `.next/`)
- `bun run lint` — `biome check`
- `bun run format` — `biome format --write`
- No test runner configured. Verify with `bun run lint` (and `bun run build` only with permission).

## Forbidden
- Never run `bun run dev`, `bun run build`, or `next start` without explicit user permission.

## Stack
- Next.js 16.2.9 (App Router) + React 19.2.4. Check `node_modules/next/dist/docs/` before assuming APIs.
- Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.css`; theme in `@theme inline` there; PostCSS uses `@tailwindcss/postcss`; no `tailwind.config.*`.
- Biome for lint/format (not ESLint/Prettier). 2-space indent.

## Build quirks
- `next.config.ts`: `output: "export"`, `distDir: "dist"`, `images.unoptimized: true`, `reactCompiler: false`.
- `next-env.d.ts` is generated — do not edit.

## Layout
- Entrypoints: `src/app/page.tsx`, `src/app/layout.tsx`
- Alias `@/*` → `src/*` (`tsconfig.json`)
- Static assets: `public/`
