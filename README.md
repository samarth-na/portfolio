# Samarth Nagar — Portfolio

A personal portfolio and resume site for a backend/systems/DevOps developer. Built with Next.js on Cloudflare Workers via OpenNext.

## Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.2.9 (App Router)
- **UI library**: [React](https://react.dev/) 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with custom CSS theme tokens
- **Linting / formatting**: [Biome](https://biomejs.dev/)
- **Package manager**: [Bun](https://bun.sh/)

## Getting started

Install dependencies and run the dev server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
bun run build        # builds for Cloudflare Workers (.open-next/)
bun run build:next   # raw Next.js build only (.next/)
```

The production build uses `@opennextjs/cloudflare` to produce a Workers-compatible bundle in `.open-next/`.

## Deploy (Cloudflare Workers)

Local deploy via Wrangler/OpenNext:

```bash
bun run deploy   # build + deploy via opennextjs-cloudflare
bun run preview  # build + local preview in workerd
```

Workers Builds (Git-connected) — set in Cloudflare dashboard → Workers → Settings → Build:

- **Build command**: `npx opennextjs-cloudflare build` (or `bun run build`)
- **Deploy command**: `npx opennextjs-cloudflare deploy`

> Previous `output: "export"` + `dist/` static export was removed in favor of Workers SSR (see `next.config.ts`). The `dist/` output is no longer used; Workers assets live in `.open-next/assets`.

## Lint and format

```bash
bun run lint
bun run format
```

## Project structure

- `src/app/` — Next.js app entry points (`page.tsx`, `layout.tsx`, `globals.css`)
- `src/components/` — page sections and UI components
- `src/hooks/` — shared React hooks
- `public/` — static assets
- `PRODUCT.md` — product intent, audience, and design principles
- `DESIGN.md` — design tokens, typography, and component rules

## Design notes

- Custom fonts: Geist Sans, Geist Mono, Playfair Display (loaded via `next/font/google`)
- Color and animation tokens live in `src/app/globals.css`
- Tailwind v4 theme extensions are defined via `@theme inline` in `globals.css`
