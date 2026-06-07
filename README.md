# @hunterkilltree/ui-lib

A single, shared React UI component library for all HunterKillTree projects. The goal is simple: **one library to depend on**. Developers should not have to hunt across Material UI, Ant Design, Chakra, Flowbite, etc. for every project — they install this package once, and get a consistent, themeable set of components that drop straight into any React + Tailwind app.

Built on the proven [Flowbite React](https://flowbite.com/docs/getting-started/react/) architecture (theme-driven, fully typed, Tailwind-styled).

---

## Why this library

- **One dependency.** Every project pulls components from here instead of mixing libraries.
- **Consistent look & feel.** All components share one theme system, so apps stay visually consistent.
- **Easy integration.** Install, add one Tailwind content path, import, use. See [SETUP.md](./SETUP.md).
- **Fully typed.** Ships TypeScript definitions (`.d.ts`) for every component and theme.
- **Themeable.** Every component accepts a `theme` prop and the whole app can be themed globally.

---

## Tech stack

TypeScript · Vite (library mode) · React 18 · Tailwind CSS · Storybook

**Node version:** 20.9.0

---

## Quick start (consumers)

> Full instructions, including GitHub Packages authentication, are in **[SETUP.md](./SETUP.md)**.

```bash
# 1. Tell npm where the @hunterkilltree scope lives (.npmrc in your project root)
echo "@hunterkilltree:registry=https://npm.pkg.github.com" >> .npmrc

# 2. Install
npm install @hunterkilltree/ui-lib
```

```ts
// 3. Add the library to your Tailwind content globs (tailwind.config.js)
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@hunterkilltree/ui-lib/dist/**/*.{js,mjs}",
],
```

```tsx
// 4. Use it
import { Button, Card, TextInput } from "@hunterkilltree/ui-lib";

export default function Example() {
  return (
    <Card>
      <TextInput placeholder="Email" />
      <Button color="info">Submit</Button>
    </Card>
  );
}
```

---

## Available components

| Component | Exported | Notes |
| --- | --- | --- |
| Button / ButtonGroup | ✅ | colors, sizes, outline, gradients, processing state |
| Card | ✅ | horizontal & image variants |
| Checkbox | ✅ | |
| Datepicker | ✅ | day/month/year/decade views |
| FloatingLabel | ✅ | |
| Input | ✅ | |
| Label | ✅ | |
| Radio | ✅ | |
| Rating / RatingAdvanced | ✅ | |
| Spinner | ✅ | |
| TextInput | ✅ | |
| Accordion | ⚠️ built, not yet exported | add to `src/lib/main.ts` |
| HelperText | ⚠️ built, not yet exported | |
| Floating | ⚠️ internal helper | used by tooltip-style components |

See the live catalogue in Storybook (`npm run storybook`).

---

## Local development

```bash
npm install        # install dependencies
npm run dev        # run the Vite playground
npm run storybook  # browse components in Storybook (http://localhost:6006)
npm run build      # build the distributable library into /dist
npm run lint       # run ESLint
```

### Project layout

```
src/lib/
  components/<Name>/   # each component: <Name>.tsx, theme.ts, index.ts
  helpers/             # createTheme, mergeDeep, twMerge wrappers, omit, etc.
  hooks/               # useTheme, useFloating, ...
  theme-store/         # global theme provider + getTheme()
  theme.ts             # registers every component theme
  main.ts              # public entry point — what consumers import
src/stories/           # Storybook stories
```

---

## Contributing & roadmap

- **Adding a component / coding conventions:** read [CLAUDE.md](./CLAUDE.md).
- **What's planned next (Modal is next up):** read [ROADMAP.md](./ROADMAP.md).
- **What's been done & what to do next (for any contributor or AI agent):** read [memory/PROGRESS-LOG.md](./memory/PROGRESS-LOG.md).

---

## Release process

The package is published to **GitHub Packages** under the `@hunterkilltree` scope.

1. Create a new branch from `master` (e.g. `release/v0.0.x`).
2. Bump `version` in `package.json`.
3. Open a PR into the `release` branch and merge.
4. Run the **"Publish package to GitHub Packages"** GitHub Action (manual `workflow_dispatch`). It checks out `release`, builds, and runs `npm publish`.

### Git: resolving conflicts with master

```bash
git pull
git rebase master
git rebase --continue
git push origin <feature-branch> --force-with-lease  # safe: won't overwrite others' work
```

---

## License

See [LICENSE](./LICENSE).

## Reference

- React component library with Vite library mode — https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
- Component design reference — https://flowbite.com/docs/components/accordion/
