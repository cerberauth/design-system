# @cerberauth/design-system

Internal monorepo for the CerberAuth Design System, publishing two independent packages:

| Package | Version | Description |
|---|---|---|
| `@cerberauth/tokens` | ![npm](https://img.shields.io/npm/v/@cerberauth/tokens) | Framework-agnostic CSS design tokens |
| `@cerberauth/ui` | ![npm](https://img.shields.io/npm/v/@cerberauth/ui) | Shared React components (Shadcn/ui-based) |

## Repository structure

```
design-system/
├── apps/
│   └── storybook/          # Storybook 8 + Vite — component documentation
├── packages/
│   ├── tokens/             # CSS design tokens (no build step)
│   ├── ui/                 # React components (tsup, ESM + CJS)
│   ├── tsconfig/           # Shared TypeScript base config
│   └── eslint-config/      # Shared ESLint flat config
├── turbo.json
└── pnpm-workspace.yaml
```

## Getting started

### Install & build

```bash
pnpm install
pnpm build      # builds @cerberauth/ui (tokens has no build step)
```

### Run Storybook

```bash
pnpm storybook  # opens http://localhost:6006
```

---

## Adding a new component

1. **Create the component file** in `packages/ui/src/components/my-component.tsx`:

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const myComponentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg",
        // add variants...
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {}

function MyComponent({ className, variant, ...props }: MyComponentProps) {
  return (
    <div
      data-slot="my-component"
      className={cn(myComponentVariants({ variant }), className)}
      {...props}
    />
  );
}

export { MyComponent, myComponentVariants };
```

2. **Export it** from `packages/ui/src/index.ts`:

```ts
export { MyComponent, myComponentVariants } from "./components/my-component";
export type { MyComponentProps } from "./components/my-component";
```

3. **Add a story** in `apps/storybook/stories/my-component.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "@cerberauth/ui";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {};
```

4. **Rebuild** the package:

```bash
pnpm --filter @cerberauth/ui build
```

---

## Consuming the packages

### Next.js (App Router + Tailwind CSS v4)

**Install:**

```bash
pnpm add @cerberauth/tokens @cerberauth/ui
```

**`app/globals.css`** — replace your existing Tailwind import:

```css
@import "@cerberauth/tokens/css";

/* Scan component files for Tailwind class usage */
@source "../../node_modules/@cerberauth/ui/dist";
```

**`next.config.ts`** — no changes needed; the CSS import handles everything.

**`app/layout.tsx`:**

```tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**Dark mode** — add `data-theme="dark"` to the `<html>` element. Works with any dark-mode library (next-themes, etc.):

```tsx
// With next-themes
<html data-theme={resolvedTheme === "dark" ? "dark" : ""}>
```

**Usage:**

```tsx
import { Button, Card, CardContent, Input, Badge } from "@cerberauth/ui";

export default function Page() {
  return (
    <Card className="w-80">
      <CardContent className="pt-6 flex flex-col gap-4">
        <Input label="Email" placeholder="you@example.com" type="email" />
        <Button>Sign in</Button>
        <Badge variant="secondary">Beta</Badge>
      </CardContent>
    </Card>
  );
}
```

---

### Astro (@astrojs/react + Tailwind CSS v4)

**Install:**

```bash
pnpm add @cerberauth/tokens @cerberauth/ui
pnpm add -D @tailwindcss/vite
```

**`astro.config.mjs`:**

```js
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**`src/styles/global.css`:**

```css
@import "@cerberauth/tokens/css";

@source "../../node_modules/@cerberauth/ui/dist";
```

**`src/layouts/Layout.astro`:**

```astro
---
import "../styles/global.css";
---
<html lang="en">
  <body>
    <slot />
  </body>
</html>
```

**Dark mode** — Astro SSR sets `data-theme` server-side (no JavaScript required):

```astro
---
const theme = Astro.cookies.get("theme")?.value ?? "light";
---
<html lang="en" data-theme={theme === "dark" ? "dark" : ""}>
```

**Usage in React islands:**

```tsx
// src/components/LoginForm.tsx
import { Button, Input } from "@cerberauth/ui";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
```

```astro
---
import { LoginForm } from "../components/LoginForm";
---
<LoginForm client:load />
```

---

## Releasing packages

This monorepo uses [Changesets](https://github.com/changesets/changesets) for independent versioning.

```bash
# 1. Create a changeset describing your changes
pnpm changeset

# 2. Version packages (bumps versions + updates changelogs)
pnpm version-packages

# 3. Build and publish to npm
pnpm release
```

`@cerberauth/tokens` and `@cerberauth/ui` can be released on separate schedules.

---

## Token architecture

```
primitives.css          raw scale values (--primitive-blue-600, --primitive-space-4, …)
    ↓
semantic.css            intent aliases (--token-primary, --token-bg, --token-fg, …)
    ↓
dark.css                dark mode overrides ([data-theme="dark"] { --token-primary: … })
    ↓
index.css               @theme inline { --color-primary: var(--token-primary) }
                        generates Tailwind utilities: bg-primary, text-fg, rounded-md, …
```
