# Lyrics Challenge

Elegant, production-grade monorepo showcasing a Next.js 15 app, a reusable UI library, and Playwright E2E tests. Built with Nx for developer ergonomics and consistency.

## Tech Stack

- Next.js 15 (App Router) + React 19
- TypeScript 5 + ESLint + Prettier
- TailwindCSS 3 for styling and design tokens
- Nx 21 for monorepo orchestration
- Storybook 8 for UI components
- Vitest 3 for unit tests (UI library)
- Playwright for E2E tests

## Apps & Packages

- `apps/web`: Next.js app featuring band/album browsing with search and genre filters
- `apps/e2e`: Playwright tests, auto-starts the web app for end-to-end coverage
- `ui`: Reusable React component library (Button, Card, Input, Badge, Skeleton) with tokens

## Getting Started

```sh
npm install
npm run dev       # starts apps/web
# Storybook for the UI library
npm run ui:dev
```

Build everything:

```sh
npm run build
```

## Commands per Project

### web (Next.js app)

- Test: No unit tests configured (covered via E2E in `apps/e2e`)
- Lint: `npx nx run web:lint`
- Format: `npx nx format:write --projects=web`
- Dev: `npx nx run web:dev`
- Build: `npx nx run web:build`
- Start: `npx nx run web:start`

### ui (component library)

- Test: `npx nx run ui:test`
- Lint: `npx nx run ui:lint`
- Format: `npx nx format:write --projects=ui`
- Storybook: `npx nx run ui:storybook` (or `npm run ui:dev`)
- Build: `npx nx run ui:build`

### e2e (Playwright)

- Test: `npx nx run e2e:e2e`
- Lint: `npx nx run e2e:lint`
- Format: `npx nx format:write --projects=e2e`

Notes:
- E2E tests will start the dev server automatically via Playwright config.
- Use `BASE_URL` to point E2E tests at a deployed environment.

## Key Features

- Accessible, responsive UI with TailwindCSS
- Fast search and genre filtering over a curated dataset
- Reusable component library published internally via workspace imports
- Strict typing and clean, readable code

## Roadmap / Improvements

- Add unit tests for `apps/web` pages and utilities
- Package and publish the `ui` library to an internal registry
- Add visual regression tests for critical pages
- Expand Storybook docs and usage examples

## Requirements

- Node.js 20 LTS recommended
- npm (workspace uses npm)


