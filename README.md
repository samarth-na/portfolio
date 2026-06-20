# Samarth Nagar — Portfolio

A personal portfolio and resume site for a backend/systems/DevOps developer. Built as a static-exported Next.js app with a warm, mechanical, opinionated design voice.

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

This project is configured for static export:

```bash
bun run build
```

The output is written to `dist/` (not `.next/`).

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
