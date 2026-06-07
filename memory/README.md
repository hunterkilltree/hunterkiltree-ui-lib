# Memory

Lightweight, append-only project memory so any contributor — human or AI agent — can resume work without re-deriving context.

## Files

- **`PROGRESS-LOG.md`** — the log. Newest entry at the **top**. Append-only: never edit or delete past entries.

## Protocol

**When you START work:**
1. Open `PROGRESS-LOG.md` and read the **top (most recent) entry**.
2. The **"Next up"** line is your default task unless the user asks for something else.
3. For broader context, read `../ROADMAP.md` and `../CLAUDE.md`.

**When you FINISH work:**
1. **Prepend** a new entry to the top of `PROGRESS-LOG.md` using the template below.
2. If you completed a roadmap item, update its status in `../ROADMAP.md`.
3. Keep it short and factual. The **"Next up"** line matters most — make it specific and actionable.

## Entry template

```markdown
## YYYY-MM-DD — <short title>

- **Who:** <name or agent>
- **Done:** <what was completed, 1–3 bullets>
- **Files touched:** <key files/dirs>
- **Decisions:** <any notable choices or trade-offs>
- **Next up:** <the single most important next task — be specific>

---
```

## Why this exists

Work on this library happens in bursts and across different people and agents. The log is the hand-off note: read the top, do the work, write a new top. That single discipline keeps the project resumable indefinitely.
