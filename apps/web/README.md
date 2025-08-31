# Web App (Next.js)

Search and explore bands and albums with genre filters. Built with Next.js 15 (App Router), React 19, TailwindCSS, and a reusable UI library.

## Highlights

- Accessible, responsive UI with `@lyrics-challenge/ui`
- Fast search and multi-genre filtering
- Strong typing and clean component architecture

## Develop

```sh
npm install
npx nx run web:dev    # http://localhost:3000
```

## Commands

- Test: No unit tests configured (covered by E2E in `apps/e2e`)
- Lint: `npx nx run web:lint`
- Format: `npx nx format:write --projects=web`
- Build: `npx nx run web:build`
- Start: `npx nx run web:start`

## Structure

- `src/app/(bands)` — features, components, queries, and types
- `src/app/global.css` — Tailwind and design tokens from `@lyrics-challenge/ui`

## Roadmap

- Add unit tests for UI logic and utilities
- Add loading/skeleton states for more routes
- Expand accessibility audits


