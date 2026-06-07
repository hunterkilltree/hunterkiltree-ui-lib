# CLAUDE.md

Guidance for Claude (and any AI agent or developer) working in this repository.

---

## ⚡ Start here — every session

1. **Read [`memory/PROGRESS-LOG.md`](./memory/PROGRESS-LOG.md) first.** The newest entry at the top tells you what was last completed and the **"Next up"** pointer tells you what to do next. Do not guess the state of the project — read the log.
2. Skim [`ROADMAP.md`](./ROADMAP.md) for the bigger plan and priority order.
3. Do the work, following the conventions below.
4. **Before finishing, append a new entry to `memory/PROGRESS-LOG.md`** (see [Memory protocol](#memory-protocol)). This is mandatory — it is how the next agent knows where to pick up.

---

## What this project is

`@hunterkilltree/ui-lib` — a shared React UI component library so HunterKillTree developers depend on **one** library instead of many. Architecture closely follows [Flowbite React](https://flowbite.com/docs/getting-started/react/): theme-driven, fully typed, Tailwind-styled, built with Vite library mode.

**Stack:** TypeScript · Vite (library mode) · React 18 · Tailwind CSS · Storybook · Node 20.9.0.

**Distribution:** published to GitHub Packages under the `@hunterkilltree` scope; entry point is `src/lib/main.ts` → `dist/ui-lib.js`.

---

## Architecture & conventions

### Directory layout

```
src/lib/
  components/<Name>/
    <Name>.tsx            # component + its TS interfaces (props + theme type)
    theme.ts              # default theme object via createTheme(...)
    index.ts             # re-exports component + types
    <Name>Context.tsx     # (optional) React context for compound components
  helpers/                # createTheme, mergeDeep, cloneDeep, omit, twMerge usage, is-client...
  hooks/                  # useThemeMode, useFloating, useIsMounted...
  theme-store/            # global theme store + getTheme()
  theme.ts                # registers EVERY component theme into one object
  main.ts                 # PUBLIC API — only what's here is importable by consumers
src/stories/              # Storybook stories, one per component
```

### The theme pattern (important — every component follows it)

1. Define the theme **interface** in `<Name>.tsx` (e.g. `FlowbiteCardTheme`).
2. Define the default theme in `theme.ts` using `createTheme(...)`.
3. In the component, resolve the active theme with:
   ```ts
   const theme = mergeDeep(getTheme().<name>, customTheme);
   ```
   where `customTheme` comes from an optional `theme?: DeepPartial<Flowbite<Name>Theme>` prop.
4. Compose class names with `twMerge(...)` (from `tailwind-merge`) so consumer classes win.
5. Strip custom props before spreading onto the DOM using the `omit([...])` helper.
6. Register the theme in `src/lib/theme.ts` **and** the type in `components/Flowbite/FlowbiteTheme.ts`.

Use `src/lib/components/Card/Card.tsx` as the reference implementation. Compound components (Accordion, Rating, Datepicker) use a `*Context.tsx` file to share state/theme between sub-components.

### Conventions

- TypeScript everywhere; export prop types and theme types from the component's `index.ts`.
- Styling is **Tailwind utility classes inside theme objects** — no CSS modules, no inline styles for variants.
- Always provide `dark:` variants in themes (the library supports dark mode).
- Add a `data-testid="flowbite-<name>"` to root elements (matches existing components).
- Forward refs and spread remaining native props where it makes sense.
- A component is not "done" until it is: exported from `main.ts`, registered in `theme.ts` + `FlowbiteTheme.ts`, has a Storybook story, and `npm run build` passes.

### Commands

```bash
npm install
npm run storybook   # develop in isolation (port 6006)
npm run dev         # Vite playground
npm run build       # tsc -b tsconfig.lib.json && vite build  → /dist
npm run lint        # ESLint
```

---

## Checklist: adding a new component

Copy this into the PR description and tick it off.

- [ ] Read `memory/PROGRESS-LOG.md` for current state and "Next up".
- [ ] Create `src/lib/components/<Name>/` with `<Name>.tsx`, `theme.ts`, `index.ts` (+ `*Context.tsx` if compound).
- [ ] Define props interface + `Flowbite<Name>Theme` interface.
- [ ] Implement theme with `createTheme`; resolve with `mergeDeep(getTheme().<name>, customTheme)`; compose with `twMerge`; strip props with `omit`.
- [ ] Include `dark:` variants and a `data-testid`.
- [ ] Register theme in `src/lib/theme.ts` and type in `components/Flowbite/FlowbiteTheme.ts`.
- [ ] Export from `src/lib/main.ts`.
- [ ] Add `src/stories/<Name>.stories.tsx` covering main variants.
- [ ] `npm run build` and `npm run lint` pass.
- [ ] **Append an entry to `memory/PROGRESS-LOG.md`** with what changed and the new "Next up".

---

## Memory protocol

This repo keeps a lightweight, append-only memory so any contributor — human or AI — can resume work without re-deriving context.

**Files:**
- `memory/PROGRESS-LOG.md` — newest-first, dated entries. Each entry records: what was done, files touched, decisions made, and **"Next up"** (the single most important pointer).
- `memory/README.md` — explains the format and rules.

**Rules for agents:**
1. **On start:** read the top entry of `memory/PROGRESS-LOG.md`. Treat its "Next up" as your default task unless the user says otherwise.
2. **On finish:** prepend a new entry (template is in `memory/README.md`). Never edit or delete past entries — the log is append-only history.
3. Keep entries short and factual. The "Next up" line is the most valuable part — make it specific and actionable.
4. If you complete a roadmap item, also update its status in `ROADMAP.md`.

---

## Guardrails

- Don't add new runtime dependencies without a clear reason; prefer what's already installed (`@floating-ui/react`, `classnames`, `tailwind-merge`, `debounce`, `react-icons`).
- Keep `react` / `react-dom` as **peer** dependencies (never bundle them).
- Don't break the public API in `main.ts` without bumping the version and noting it in the log.
- Match the existing Flowbite-style patterns rather than introducing a new styling approach.
