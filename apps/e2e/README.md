# E2E Tests (Playwright)

End-to-end tests for the Next.js app using Playwright and the Nx preset. The test runner will automatically start the dev server.

## Run

```sh
npm install
npx nx run e2e:e2e
```

The config uses `webServer` to start `web:start`. Set `BASE_URL` to target a deployed environment.

## Commands

- Test: `npx nx run e2e:e2e`
- Lint: `npx nx run e2e:lint`
- Format: `npx nx format:write --projects=e2e`

## Structure

- `playwright.config.ts` — baseURL, server, and projects
- `src/` — test specs

## Tips

- Use `--ui` with Playwright locally for debugging: `npx playwright test --ui`
- Traces are collected on first retry; open with `npx playwright show-trace`.


