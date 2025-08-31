# @lyrics-challenge/ui

Reusable React component library used by `apps/web`. Built with TypeScript, TailwindCSS, and Storybook. Includes foundational components and design tokens for fast, consistent UI.

## What’s Inside

- Button, Card, Input, Badge, Skeleton
- Utilities for class composition
- Tokens and global styles (`tokens.css`, `styles.css`)
- Storybook docs and Vitest unit tests

## Install & Develop

```sh
# from repo root
npm install
npm run ui:dev        # Storybook on http://localhost:6006
```

## Commands

- Test: `npx nx run ui:test`
- Lint: `npx nx run ui:lint`
- Format: `npx nx format:write --projects=ui`
- Storybook: `npx nx run ui:storybook`
- Build: `npx nx run ui:build`

## Usage

Import components from the package entrypoint and CSS tokens in your app-level CSS.

```tsx
import { Button, Card, CardBody, CardTitle } from '@lyrics-challenge/ui';

export const Example = () => (
  <Card>
    <CardBody>
      <CardTitle>Example</CardTitle>
      <Button>Click me</Button>
    </CardBody>
  </Card>
);
```

In your app stylesheet (already configured in `apps/web`):

```css
@import '@lyrics-challenge/ui/tokens.css';
@import '@lyrics-challenge/ui/styles.css';
```

## Roadmap

- Add more form primitives (Select, Checkbox, Switch)
- Add accessibility docs per component
- Publish package to an internal registry


