# Roadmap

The north star: cover the **full component set a typical app needs** so HunterKillTree teams never reach for another UI library. The component catalogue mirrors [Flowbite React](https://flowbite.com/docs/getting-started/react/); the commented-out entries in `src/lib/theme.ts` and `FlowbiteTheme.ts` are the backlog made visible.

> **Process:** pick the next item → build it (see the checklist in [CLAUDE.md](./CLAUDE.md)) → log it in [memory/PROGRESS-LOG.md](./memory/PROGRESS-LOG.md). Any agent or developer starting work should read the latest log entry first.

---

## Status snapshot

**Done & exported:** Accordion, Alert, Avatar, Badge, Button, ButtonGroup, Card, Checkbox, Datepicker, Dropdown, FileInput, FloatingLabel, HelperText, Input, Label, Modal, Popover, Progress, Radio, RangeSlider, Rating, RatingAdvanced, Select, Spinner, Textarea, TextInput, Toast, ToggleSwitch, Tooltip.

**Internal:** Floating (helper used by overlay components), Flowbite (theme provider).

---

## ✅ Modal — DONE (2026-06-07)

Built with `@floating-ui/react` (`FloatingPortal` + `FloatingOverlay` + `FloatingFocusManager` + `useDismiss`/`useRole`). Compound API: `Modal`, `Modal.Header`, `Modal.Body`, `Modal.Footer`. Supports `show`, `onClose`, `dismissible`, `size` (sm–7xl), `position`, `popup`. Theme registered in `theme.ts` + `FlowbiteTheme.ts`, exported from `main.ts`, story in `src/stories/Modal.stories.tsx`. The overlay/focus plumbing is now available to reuse for Tooltip/Popover/Dropdown/Drawer.

> **Next component is now Tooltip** (see Phase 1, item 3) — it reuses the same `Floating` helper + `@floating-ui/react` machinery.

<details>
<summary>Original Modal build plan (kept for reference)</summary>

Chosen because dialogs/confirmations are the most-requested missing primitive, and the overlay/focus plumbing it introduces (`@floating-ui/react` is already a dependency) is reused by Drawer, Popover, Tooltip and Dropdown later.

### Scope

A composable Modal in the Flowbite style:

- `Modal` (root: `show`, `onClose`, `size`, `dismissible`, `position`, `popup`, `theme`)
- `Modal.Header`, `Modal.Body`, `Modal.Footer`
- Backdrop overlay + click-outside / `Esc` to dismiss
- Body scroll lock while open
- Focus trap + focus restore on close (accessibility)
- Sizes: `sm | md | lg | xl | 2xl ... 7xl`
- Positions: top/center/bottom × left/center/right

### Build plan

1. **Scaffold** `src/lib/components/Modal/` with:
   - `Modal.tsx` (root + context)
   - `ModalHeader.tsx`, `ModalBody.tsx`, `ModalFooter.tsx`
   - `ModalContext.tsx` (shares `onClose`, `popup`, theme down the tree)
   - `theme.ts` (`FlowbiteModalTheme`: `root`, `content`, `body`, `header`, `footer` slots)
   - `index.ts` (export component + types)
2. **Overlay & positioning** — render into a portal; use `@floating-ui/react` `FloatingFocusManager`, `FloatingOverlay`, and `useDismiss`/`useRole`/`useInteractions` for click-outside, `Esc`, and ARIA roles.
3. **Body scroll lock** while `show` is true; restore on unmount.
4. **Theme** — port the Flowbite modal theme tokens; wire through `createTheme` + `getTheme().modal` + `mergeDeep`, exactly like `Card`.
5. **Register** the theme in `src/lib/theme.ts` and the type in `FlowbiteTheme.ts` (uncomment/add the `modal` lines).
6. **Export** from `src/lib/main.ts`: `export { Modal } from "./components/Modal";`
7. **Story** — `src/stories/Modal.stories.tsx` (default, dismissible, popup, sizes).
8. **Verify** — `npm run build` passes, story renders, `Esc`/backdrop/close button all work, focus is trapped and restored.
9. **Log it** in `memory/PROGRESS-LOG.md`.

### Acceptance criteria

- Opens/closes via `show` prop and `onClose`.
- Dismiss via backdrop click and `Esc` when `dismissible`.
- Keyboard focus is trapped inside and restored to the trigger on close.
- Background page does not scroll while open.
- Type-checks, builds, and has a Storybook story.

</details>

---

## Further plan (priority order)

The backlog is grouped into phases. Earlier phases unblock later ones (e.g. the Modal overlay work makes Drawer/Popover/Tooltip cheap).

### Phase 1 — Finish what's started & core overlays
1. ~~**Export Accordion + HelperText**~~ — ✅ done (2026-06-07).
2. ~~**Modal**~~ — ✅ done (2026-06-07).
3. ~~**Tooltip**~~ — ✅ done (2026-06-07). Thin wrapper over the existing `Floating` helper.
4. ~~**Popover**~~ — ✅ done (2026-06-07). Wraps `Floating` with `trigger="click"` + light theme.
5. ~~**Dropdown**~~ — ✅ done (2026-06-07). Single-level menu with floating positioning, list-navigation, typeahead, focus management; `Dropdown.Item` / `.Header` / `.Divider`. (Nested submenus deferred — see backlog.)

**Phase 1 complete.** ✅ All core overlays shipped. Next focus is Phase 2 (forms).

### Phase 2 — Forms (round out inputs)
6. ~~**Textarea**~~ — ✅ done (2026-06-07). Mirrors TextInput (colors, shadow, helperText).
7. ~~**Select**~~ — ✅ done (2026-06-07). Mirrors TextInput (color/sizing/shadow/icon/helperText, option children).
8. ~~**FileInput**~~ — ✅ done (2026-06-07). `<input type="file">` with colors/sizes/shadow/helperText.
9. ~~**ToggleSwitch**~~ — ✅ done (2026-06-07). `role=switch` button, controlled `checked`/`onChange`, colors/sizes/label.
10. ~~**RangeSlider**~~ — ✅ done (2026-06-07). Themed `<input type="range">` with sizing.

**Phase 2 complete.** ✅ Forms rounded out.

### Phase 3 — Feedback & status
11. ~~**Alert**~~ — ✅ done (2026-06-07). Dismissible banner, colors, icon, border accent, additionalContent.
12. ~~**Toast**~~ — ✅ done (2026-06-07). `Toast` + `Toast.Toggle`, self-dismiss with fade.
13. ~~**Badge**~~ — ✅ done (2026-06-07). Colors, sizes, optional icon/href.
14. ~~**Progress**~~ — ✅ done (2026-06-07). Bar with progress %, colors, sizes, labels.
15. ~~**Avatar**~~ — ✅ done (2026-06-07). Image / initials / placeholder, sizes, status dot, bordered, stacked.

**Phase 3 complete.** ✅ Feedback & status shipped. Next focus is Phase 4 (navigation & layout): Navbar.

### Phase 4 — Navigation & layout
16. **Navbar**
17. **Sidebar**
18. **Breadcrumb**
19. **Pagination**
20. **Tabs**
21. **Drawer** (reuses Modal overlay)
22. **Footer**
23. **MegaMenu**

### Phase 5 — Data display & misc
24. **Table**
25. **List / ListGroup**
26. **Timeline**
27. **Carousel**
28. **Card extensions**, **Blockquote**, **HR**, **Kbd**, **Clipboard**, **DarkThemeToggle**

### Cross-cutting / infrastructure (do alongside)
- **Export a top-level theme `Provider`** so consumers can theme the whole app in one place.
- **Accessibility pass** — consistent ARIA roles, keyboard support, focus management across all components.
- **Automated tests** — add a test runner (e.g. Vitest + Testing Library); none exists today.
- **Dark mode docs** — every theme already has `dark:` variants; document how to toggle.
- **Tree-shaking / per-component entry points** so consumers can import only what they use.
- **Versioned changelog** generated from `memory/PROGRESS-LOG.md`.

---

## How priorities were chosen

Components were ranked by (a) demand in typical apps, (b) how much shared infrastructure they unlock for later components, and (c) effort. Overlays come first because they share one hard problem (portals, focus, dismiss) that, once solved for Modal, makes Tooltip/Popover/Dropdown/Drawer fast to ship.
