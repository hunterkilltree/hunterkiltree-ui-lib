# Progress Log

Append-only. **Newest entry on top.** Read the top entry before starting work; prepend a new entry when you finish. Format and rules: see [`README.md`](./README.md).

---

## 2026-06-07 — Built Toast component (Phase 3 complete)

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **Toast** (`Toast` + `Toast.Toggle`, `ToastContext`; self-dismiss via internal `isClosing`/`isRemoved` state + fade transition; `duration`). Files: `src/lib/components/Toast/{Toast.tsx, ToastToggle.tsx, ToastContext.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (27 exports), added story. **Phase 3 (feedback & status) complete.**
- **Decisions / notes:** `Toast` is exported as `Object.assign(ToastComponent, { Toggle })` (re-exported `ToastWithToggle as Toast`). Edits via bash. **Build STILL not run** (no npm in sandbox) — a large batch of components (Phases 1-3) now awaits a real `npm run build` + `npm run lint`/CI. This is the highest-priority follow-up.
- **Next up:** Phase 4 — navigation & layout. Build **Navbar** (compound: `Navbar`, `Navbar.Brand`, `Navbar.Toggle`, `Navbar.Collapse`, `Navbar.Link`) with a context for the mobile open/close state. Then Sidebar, Breadcrumb, Pagination, Tabs, Drawer (Drawer reuses the Modal overlay).

---

## 2026-06-07 — Built Avatar component

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **Avatar** (`img` / `placeholderInitials` / SVG placeholder, `size` xs-xl, `rounded`, `bordered`+`color` ring, `status` dot online/busy/away/offline + `statusPosition`, `stacked`). Files: `src/lib/components/Avatar/{Avatar.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (26 exports), added story.
- **Notes:** Edits via bash. **Build STILL not run** (no npm in sandbox).
- **Next up:** Build **Toast** (Phase 3, item 12, the Phase 3 finisher): self-dismissing notification container with `Toast` + `Toast.Toggle`; manages visible state + fade transition. Then Phase 4 (navigation: Navbar, Sidebar, Breadcrumb, Pagination, Tabs, Drawer).

---

## 2026-06-07 — Built Progress component

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **Progress** (`progress` 0-100, `color`, `size` sm/md/lg/xl, `textLabel`/`labelText`/`labelProgress`, ARIA progressbar). Files: `src/lib/components/Progress/{Progress.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (25 exports), added story.
- **Notes:** Edits via bash. **Build STILL not run** (no npm in sandbox).
- **Next up:** Build **Avatar** (Phase 3, item 15): image or initials placeholder, `size` xs-xl, `rounded`, `bordered`, `status` dot (online/busy/away/offline) + `statusPosition`, `stacked`. Then Toast. Register + export + story.

---

## 2026-06-07 — Built Badge component

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **Badge** (`color`, `size` xs/sm, optional `icon`, optional `href` wrapper). Files: `src/lib/components/Badge/{Badge.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (24 exports), added story.
- **Notes:** Edits via bash. **Build STILL not run** (no npm in sandbox).
- **Next up:** Build **Progress** (Phase 3, item 14): progress bar with `progress` (0-100), `color`, `size` sm/md/lg/xl, optional `textLabel` + `labelText`/`labelProgress` (% inside bar). Then Avatar, Toast.

---

## 2026-06-07 — Built Alert component (Phase 3 started)

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **Alert** (`color` info/gray/failure/success/warning, optional `icon`, `onDismiss` close button, `rounded`, `withBorderAccent`, `additionalContent`). Files: `src/lib/components/Alert/{Alert.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (23 exports), added story.
- **Notes:** Edits via bash. **Build STILL not run** (no npm in sandbox).
- **Next up:** Build **Badge** (Phase 3, item 13): inline label with `color`, `size` (xs/sm), optional `icon`, optional `href`. Then Progress, Avatar, Toast. Register + export + story.

---

## 2026-06-07 — Built RangeSlider component (Phase 2 complete)

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **RangeSlider** (themed `<input type="range">`, `forwardRef`, `sizing` sm/md/lg). Files: `src/lib/components/RangeSlider/{RangeSlider.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (22 exports), added story. **Phase 2 (forms) complete.**
- **Notes:** Edits via bash. **Build STILL not run** (no npm in sandbox).
- **Next up:** Phase 3 (feedback & status). Build **Alert** (item 11): dismissible status banner with `color` (info/success/failure/warning + others), optional `icon`, `onDismiss`, `additionalContent`, `rounded`, `withBorderAccent`. Model on flowbite-react Alert. Register + export + story.

---

## 2026-06-07 — Built ToggleSwitch component

- **Who:** Claude (Cowork) for @aquaman
- **Done:** Built **ToggleSwitch** (`role="switch"` button + sliding knob; controlled `checked`/`onChange(checked)`; `color`, `sizing` sm/md/lg, `label`, `disabled`; optional hidden checkbox when `name` set). Files: `src/lib/components/ToggleSwitch/{ToggleSwitch.tsx, theme.ts, index.ts}`. Registered theme+type, exported from `main.ts` (21 exports), added story.
- **Decisions / notes:** Not a thin input wrapper — own `useId` + a11y attrs. Edits via bash. **Build STILL not run** (no npm in sandbox) — validate via CI/local.
- **Next up:** Build **RangeSlider** (Phase 2, item 10): a themed `<input type="range">` with `sizing` (sm/md/lg) + optional label; mirror the input theme approach. Register + export + story.

---

## 2026-06-07 — Built FileInput component

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **FileInput** component (`<input type="file">`), mirroring TextInput/Textarea/Select styling.
    - Files: `src/lib/components/FileInput/{FileInput.tsx, theme.ts, index.ts}`.
    - `forwardRef<HTMLInputElement>`; props: `color`, `helperText`, `shadow`, `sizing` (sm/md/lg), `theme`; `type` is fixed to `"file"` (omitted from props); spreads native input props (`multiple`, `accept`, `disabled`, etc.). Theme styles the native file-selector button via `file:` Tailwind variants.
  - Registered `fileInput` theme in `src/lib/theme.ts` and `FlowbiteFileInputTheme` type in `FlowbiteTheme.ts`; exported `FileInput` from `main.ts` (now 20 export lines).
  - Added `src/stories/FileInput.stories.tsx` (default, small, multiple+helperText, disabled, failure).
  - Updated `ROADMAP.md`: FileInput done; ToggleSwitch now next.
- **Files touched:** `src/lib/main.ts`, `src/lib/components/FileInput/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/FileInput.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - All theme/main edits via bash `sed`/heredoc.
  - **Build STILL not run** — no npm-registry access in the sandbox. Validate with `npm run build` + `npm run lint` (CI or local) before relying on the growing component set.
- **Next up:** Build the **ToggleSwitch** component (Phase 2, item 9): a controlled boolean switch (`checked` + `onChange`), with `label`, `sizing`, `color`, `disabled`. This one is NOT a thin input wrapper — model it on flowbite-react's ToggleSwitch (a button[role=switch] with a sliding knob; manages its own `useId`). Register + export + story as usual.

---

## 2026-06-07 — Built Select component

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **Select** component, mirroring `TextInput` but rendering a `<select>` with `option` children.
    - Files: `src/lib/components/Select/{Select.tsx, theme.ts, index.ts}`.
    - `forwardRef<HTMLSelectElement>`; props: `addon`, `color` (gray/info/failure/warning/success), `helperText`, `icon` (left), `shadow`, `sizing` (sm/md/lg), `theme`; spreads native select props; renders `children` as options.
  - Registered `select` theme in `src/lib/theme.ts` and `FlowbiteSelectTheme` type in `FlowbiteTheme.ts`; exported `Select` from `main.ts` (now 19 export lines).
  - Added `src/stories/Select.stories.tsx` (default, with-icon, small, disabled, failure+helperText).
  - Updated `ROADMAP.md`: Select done; FileInput now next.
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Select/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Select.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Reused TextInput's addon/icon/color/size class strings for consistency.
  - All theme/main edits via bash `sed`/heredoc.
  - **Build STILL not run** — no npm-registry access in the sandbox. Backlog of unverified components keeps growing; validate with `npm run build` + `npm run lint` (CI or local) as soon as possible.
- **Next up:** Build the **FileInput** component (Phase 2, item 8): a themed `<input type="file">` mirroring TextInput sizing/colors + helperText. Use `TextInput` as reference. Register + export + story as usual.

---

## 2026-06-07 — Built Textarea component (Phase 2 started)

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **Textarea** component, mirroring `TextInput` but for a `<textarea>` (no icons/addon).
    - Files: `src/lib/components/Textarea/{Textarea.tsx, theme.ts, index.ts}`.
    - `forwardRef<HTMLTextAreaElement>`; props: `color` (gray/info/failure/warning/success), `shadow`, `helperText` (renders `<HelperText>`), `theme`; spreads native textarea props (`rows`, `placeholder`, `disabled`, etc.).
  - Registered `textarea` theme in `src/lib/theme.ts` and `FlowbiteTextareaTheme` type in `FlowbiteTheme.ts`; exported `Textarea` from `main.ts` (now 18 export lines).
  - Added `src/stories/Textarea.stories.tsx` (default, with-shadow, disabled, failure+helperText).
  - Updated `ROADMAP.md`: Textarea done; Select now next.
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Textarea/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Textarea.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Reused TextInput's color class strings for visual consistency.
  - All theme/main edits via bash `sed`/heredoc (avoids NUL/truncation on CRLF files).
  - **Build STILL not run** — no npm-registry network access in the sandbox. A growing stack of unverified components (4 floating-ui overlays + this) now awaits a real `npm run build` + `npm run lint`. **Strongly recommend validating via CI / locally before building more.**
- **Next up:** Build the **Select** component (Phase 2, item 7): a themed `<select>` mirroring TextInput/Textarea (color/sizing/shadow + optional left icon). Use `TextInput` as reference. Register + export + story as usual.

---

## 2026-06-07 — Built Dropdown component (Phase 1 complete)

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **Dropdown** component (compound: `Dropdown`, `Dropdown.Item`, `Dropdown.Header`, `Dropdown.Divider`) using the standard `@floating-ui/react` menu pattern.
    - Files: `src/lib/components/Dropdown/{Dropdown.tsx, DropdownItem.tsx, DropdownHeader.tsx, DropdownDivider.tsx, DropdownContext.tsx, theme.ts, index.ts}`.
    - Interactions: `useClick` + `useDismiss` + `useRole({role:"menu"})` + `useListNavigation` (arrow keys, looped) + `useTypeahead`; `FloatingList` + `useListItem` register items; `FloatingFocusManager` (non-modal) + `FloatingPortal` for focus + portalling; positioning via `offset/flip/shift` + `autoUpdate`.
    - Props: `label`, `placement`, `dismissOnClick`, `arrowIcon`, `renderTrigger`, plus pass-through `color`/`size`/`disabled`/`className` to the default `Button` trigger. `Dropdown.Item` supports an `icon` and `onClick`.
  - Registered `dropdown` theme in `src/lib/theme.ts` and `FlowbiteDropdownTheme` type in `FlowbiteTheme.ts`; exported `Dropdown` from `main.ts` (now 17 component export lines).
  - Added `src/stories/Dropdown.stories.tsx` (default, no-arrow, placement right-start, stay-open-on-click).
  - Updated `ROADMAP.md`: Dropdown done; **Phase 1 (core overlays) complete**; next is Textarea (Phase 2).
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Dropdown/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Dropdown.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Scoped to **single-level** menus (no nested submenus) to bound complexity; nested submenus can be added later if needed.
  - Default trigger is the library `Button` (forwards refs); a `renderTrigger` escape hatch is provided for custom triggers.
  - Used bash `sed`/heredoc for `theme.ts` / `FlowbiteTheme.ts` / `main.ts` edits again (avoids NUL/truncation issues with the file-editor on these CRLF files).
  - **Build NOT run locally** — no npm-registry network access in the sandbox. **Validate via CI / local `npm run build` + `npm run lint`.** Watch the floating-ui prop spreads (`getReferenceProps()`/`getItemProps()`/`getFloatingProps()`) — the standard library pattern, but the most likely spot for a minor type tweak.
- **Next up:** Build the **Textarea** component (Phase 2, item 6): a themed `<textarea>` mirroring `TextInput` (color/sizing/shadow, helper-text friendly). Use `TextInput` as the reference implementation. Register + export + story as usual.

---

## 2026-06-07 — Built Popover component

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **Popover** component as a wrapper over the existing `Floating` helper, mirroring Tooltip but defaulting `trigger="click"` and `style="light"`.
    - Files: `src/lib/components/Popover/{Popover.tsx, theme.ts, index.ts}`.
    - `PopoverProps = Omit<FloatingProps, "theme"> & { theme?: DeepPartial<FlowbitePopoverTheme> }`; `FlowbitePopoverTheme` aliases `FlowbiteFloatingTheme`.
    - Popover theme styled as a light, bordered container (vs Tooltip's dark default); arrow gets a matching border.
  - Registered `popover` theme in `src/lib/theme.ts` and type in `FlowbiteTheme.ts`; exported `Popover` from `main.ts`.
  - Added `src/stories/Popover.stories.tsx` (default click, hover, placement-right, no-arrow).
  - Updated `ROADMAP.md` (Popover done; Dropdown now next).
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Popover/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Popover.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Did the `theme.ts` / `FlowbiteTheme.ts` registrations and the `main.ts` rewrite **via bash `sed`/heredoc** this time (not the Edit tool), which avoided the NUL-byte/truncation problems seen in earlier entries. Recommended approach for these CRLF files going forward.
  - **Build NOT run locally** — no npm-registry network access in the sandbox. Validate via CI / local `npm run build` + `npm run lint`.
- **Next up:** Build the **Dropdown** component (Phase 1, item 5): menu with floating positioning + keyboard navigation. It is more involved than Tooltip/Popover (needs `Dropdown.Item`, `Dropdown.Divider`, `Dropdown.Header` sub-components and `useListNavigation` from `@floating-ui/react`); reuse the `use-floating` hook where possible.

---

## 2026-06-07 — Built Tooltip component

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Built the **Tooltip** component as a thin wrapper over the existing `Floating` helper (which already implements positioning, hover/click triggers, focus, arrow, and `flowbite-tooltip` test IDs via `@floating-ui/react`).
    - Files: `src/lib/components/Tooltip/{Tooltip.tsx, theme.ts, index.ts}`.
    - `TooltipProps = Omit<FloatingProps, "theme"> & { theme?: DeepPartial<FlowbiteTooltipTheme> }`; props include `content`, `placement`, `style` (dark/light/auto), `trigger` (hover/click), `arrow`, `animation`.
    - `FlowbiteTooltipTheme` aliases `FlowbiteFloatingTheme` (avoids empty-interface lint).
  - Registered `tooltip` theme in `src/lib/theme.ts` and `FlowbiteTooltipTheme` type in `components/Flowbite/FlowbiteTheme.ts`; exported `Tooltip` from `main.ts`.
  - Added `src/stories/Tooltip.stories.tsx` (default, light, placement-right, click trigger, no arrow).
  - Updated `ROADMAP.md` (Tooltip done; Popover now next).
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Tooltip/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Tooltip.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Reused `Floating` rather than reimplementing — Popover/Dropdown should do the same.
  - **Tooling caveat (important for future agents):** in this Cowork sandbox the Write/Edit file tools and the bash-mounted git working tree can fall out of sync, and editing the CRLF files (`theme.ts`, `FlowbiteTheme.ts`) leaves trailing NUL bytes; an Edit on `main.ts` also truncated it. Mitigations applied: stripped NULs and rewrote `main.ts` **via bash** (the authoritative git view), then cross-checked with the Read tool. **After any edit here, verify with bash (`tr -cd '\000' | wc -c` and `tail`).**
  - **Build NOT run locally** — no npm-registry network access in the sandbox. Validate via the "Check Build Success" CI workflow / a local `npm run build` + `npm run lint`.
- **Next up:** Build the **Popover** component (Phase 1, item 4): wrap `Floating` with `trigger="click"`, add header/title + content slots and its theme; register + export + story, mirroring Tooltip. Then continue Phase 1 with **Dropdown**.

---

## 2026-06-07 — Exported Accordion + HelperText; built Modal component

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Exported `Accordion` and `HelperText` from `src/lib/main.ts` (were already built + theme-registered).
  - Built the **Modal** component (compound: `Modal`, `Modal.Header`, `Modal.Body`, `Modal.Footer`) following the Card/Accordion theme pattern and the ROADMAP build plan.
    - Files: `src/lib/components/Modal/{Modal.tsx, ModalHeader.tsx, ModalBody.tsx, ModalFooter.tsx, ModalContext.tsx, theme.ts, index.ts}`.
    - Overlay/focus via `@floating-ui/react`: `FloatingPortal` + `FloatingOverlay` (lockScroll) + `FloatingFocusManager` (focus trap + restore) + `useDismiss` (Esc/outside-press, gated by `dismissible`) + `useRole`.
    - Props: `show`, `onClose`, `dismissible`, `size` (sm–7xl), `position`, `popup`, `theme`, `initialFocus`, `root`.
  - Registered `modal` theme in `src/lib/theme.ts` and `FlowbiteModalTheme` type in `components/Flowbite/FlowbiteTheme.ts`; exported `Modal` from `main.ts`.
  - Added `src/stories/Modal.stories.tsx` (default, dismissible, popup-sm, large/top-center).
  - Updated `ROADMAP.md` (Modal marked done, Tooltip now next).
- **Files touched:** `src/lib/main.ts`, `src/lib/components/Modal/*`, `src/lib/theme.ts`, `src/lib/components/Flowbite/FlowbiteTheme.ts`, `src/stories/Modal.stories.tsx`, `ROADMAP.md`
- **Decisions / notes:**
  - Header `as` polymorphism was intentionally skipped (fixed `<h3>`) to keep typing simple; revisit if needed.
  - **Build NOT run locally:** the Cowork sandbox has no network access to the npm registry, so `npm install` / `npm run build` could not be executed here. Code was written to the repo's exact conventions and reviewed statically. **Validate via the "Check Build Success" CI workflow on PR.** Watch the `getFloatingProps(props)` spread in `Modal.tsx` as the most likely (minor) type-friction point.
  - While editing `theme.ts` and `FlowbiteTheme.ts`, the editor left 6 trailing NUL bytes at EOF in each (CRLF files); these were stripped — files re-verified clean.
- **Next up:** Build the **Tooltip** component (Phase 1, item 3) reusing the `Floating` helper + `@floating-ui/react`. Before merging, run `npm run build` + `npm run lint` locally (or rely on CI) since they could not be run in the authoring environment.

---

## 2026-06-07 — Project documentation & memory system established

- **Who:** Claude (Cowork) for @aquaman
- **Done:**
  - Rewrote `README.md` into a real library overview (purpose, stack, quick start, component table, dev scripts, release process).
  - Added `SETUP.md` — full consumer integration guide (GitHub Packages auth, install, Tailwind content path, usage, troubleshooting) + maintainer setup.
  - Added `ROADMAP.md` — Modal documented as the next component (scope + 9-step build plan + acceptance criteria) and a 5-phase backlog derived from the commented entries in `theme.ts`.
  - Added `CLAUDE.md` — architecture, theme pattern, conventions, "add a component" checklist, and the memory protocol.
  - Created this memory system (`memory/README.md` + `memory/PROGRESS-LOG.md`).
- **Files touched:** `README.md`, `SETUP.md`, `ROADMAP.md`, `CLAUDE.md`, `memory/`
- **Decisions:**
  - Documented the existing reality: GitHub Packages distribution, Flowbite-React-style theme architecture, Node 20.9.0.
  - Noted that Accordion + HelperText are built but not exported from `main.ts` (a quick win).
  - Chose Modal as the next component because its overlay/focus infrastructure unblocks Tooltip/Popover/Dropdown/Drawer.
- **Next up:** **Export Accordion + HelperText** from `src/lib/main.ts` (trivial, they already exist and are registered in `theme.ts`). Then **build the Modal component** following the build plan in `ROADMAP.md` → "Next component: Modal".

---
