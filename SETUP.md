# Setup & Integration Guide

How to add **@hunterkilltree/ui-lib** to a React + Tailwind project. Target: a developer can go from zero to a styled component on screen in ~5 minutes.

There are two audiences:

1. [Consumers](#part-1--consuming-the-library) — you want to *use* the components in your app.
2. [Maintainers](#part-2--developing-the-library) — you want to *develop* the library itself.

---

## Prerequisites

- Node.js **20.9.0** (match the version the library is built/published with).
- A React **18** project.
- Tailwind CSS installed and configured in your app (the library is styled with Tailwind utility classes — your app's Tailwind build generates the actual CSS).

---

## Part 1 — Consuming the library

### Step 1: Authenticate to GitHub Packages

The package is published to **GitHub Packages** (not the public npm registry), so npm needs to know where the `@hunterkilltree` scope lives and how to authenticate.

Create or edit `.npmrc` in your **project root**:

```ini
@hunterkilltree:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then expose a GitHub Personal Access Token (classic) with the **`read:packages`** scope as an environment variable:

```bash
# macOS / Linux
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# Windows (PowerShell)
$env:GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
```

> **CI tip:** in GitHub Actions you can use the built-in `secrets.GITHUB_TOKEN` and set `registry-url: https://npm.pkg.github.com` + `scope: "@hunterkilltree"` on `actions/setup-node` — see this repo's `.github/workflows/check_build.yml` for a working example.
>
> **Never commit your token.** Keep it in an environment variable or a git-ignored `.npmrc`.

### Step 2: Install

```bash
npm install @hunterkilltree/ui-lib
```

React and React DOM are **peer dependencies** (`^18.3.1`) — your app must already have them installed.

### Step 3: Wire up Tailwind

This is the step people forget. The library ships class names, not compiled CSS, so **your** Tailwind build must scan the library's files to generate those classes. Add the dist path to `content` in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 required so Tailwind generates the classes the library uses
    "./node_modules/@hunterkilltree/ui-lib/dist/**/*.{js,mjs}",
  ],
  theme: { extend: {} },
  plugins: [],
};
```

Make sure your global stylesheet includes the Tailwind layers:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Use a component

```tsx
import { Button, Card, TextInput, Spinner } from "@hunterkilltree/ui-lib";

export default function SignInCard() {
  return (
    <Card className="max-w-sm">
      <h5 className="text-xl font-bold">Sign in</h5>
      <TextInput type="email" placeholder="name@company.com" />
      <Button color="info">
        <Spinner size="sm" className="mr-2" />
        Continue
      </Button>
    </Card>
  );
}
```

### Step 5 (optional): Global theming

Every component reads from a shared theme and also accepts a per-instance `theme` prop:

```tsx
// Per-component override (merged with the default theme)
<Button theme={{ color: { info: "bg-brand-600 text-white" } }}>Branded</Button>
```

To override the theme app-wide, edit your design tokens through the theme store / Flowbite provider pattern used in `src/lib/theme-store`. (A top-level provider export is on the roadmap; until then per-component `theme` props cover most needs.)

### Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Components render unstyled | Tailwind isn't scanning the library | Add the `dist` glob to `content` (Step 3) |
| `401 Unauthorized` on install | Missing/invalid token | Check `GITHUB_TOKEN` and `read:packages` scope |
| `404 Not Found` on install | Scope not pointed at GitHub Packages | Check the `@hunterkilltree:registry` line in `.npmrc` |
| Type errors on import | Types not resolving | Ensure TypeScript `moduleResolution` is `bundler` or `node16`+ |
| Two copies of React | React not deduped | Ensure a single React 18 install (peer dep) |

---

## Part 2 — Developing the library

### Clone & install

```bash
git clone <repo-url>
cd hunterkilltree-ui-lib
nvm use 20.9.0      # or otherwise ensure Node 20.9.0
npm install
```

### Day-to-day scripts

```bash
npm run storybook   # browse / develop components in isolation (port 6006)
npm run dev         # Vite playground (src/App.tsx)
npm run build       # build the publishable library to /dist (tsc + vite build)
npm run lint        # ESLint
```

### Build output

`npm run build` runs `tsc -b ./tsconfig.lib.json && vite build`, producing:

- `dist/ui-lib.js` — ES module bundle (entry: `src/lib/main.ts`)
- `dist/main.d.ts` + per-component `.d.ts` — TypeScript definitions (via `vite-plugin-dts`)

`react` and `react/jsx-runtime` are marked **external** so they aren't bundled.

### Publishing

See the [Release process](./README.md#release-process) in the README. Short version: bump `version`, merge to `release`, run the manual **Publish package** workflow.

### Adding a new component

Follow the conventions and checklist in **[CLAUDE.md](./CLAUDE.md)**, and the priority order in **[ROADMAP.md](./ROADMAP.md)**. After finishing, log it in **[memory/PROGRESS-LOG.md](./memory/PROGRESS-LOG.md)**.
