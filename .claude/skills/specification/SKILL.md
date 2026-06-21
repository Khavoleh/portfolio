---
name: specification
description: Maintain and consult per-feature specs colocated in each feature slice. Use before working on a feature (read its spec first) and whenever the user supplies feature details the spec doesn't yet capture (update it as part of the same change).
---

# Per-feature specs

Document each feature with a small spec file living **inside the feature's own slice**, next to its code — not in a separate spec-tooling directory. This is a self-driven, lightweight convention; no external spec-driven-development tooling is involved.

## Rules

- **Read before you touch.** Before making any change to a feature, read its spec file (if one exists) to recover intent and constraints instead of re-deriving them from the code.
- **Update, don't bypass.** If the user states a detail the spec is missing, or that contradicts it, fold that detail into the spec as part of the same change. A stale spec is worse than none.
- **Created on request, not retrofitted automatically.** One spec per feature, written when asked for — don't generate specs for every slice proactively.
- **No spec yet?** Proceed with the work as normal; don't block on it or invent one unprompted.

## Required structure

When applicable, every spec uses these six sections, **in this order**:

1. **Purpose** — what this feature is, for whom, and how it's used. Detailed enough that someone unfamiliar with the feature understands its role without reading the code.
2. **Data model** — a Mermaid **ERD** (`erDiagram`) of the entities/types this feature owns or operates on, with their relations and a short description per field. Only include if the feature has a real data shape of its own.
3. **Sequence diagram** — for each main flow: a one-line description of what it shows, **then** its Mermaid **sequence diagram** (`sequenceDiagram`) — description first, diagram after, never the reverse. Only include if the feature has a flow beyond "render static markup."
4. **Implementation nuances** — only what's genuinely non-obvious for *this* feature: behavior a reader would get wrong by guessing, or a constraint not visible from the surrounding code. Don't restate architectural, theming, or i18n conventions that already apply project-wide. Don't invent a nuance just to fill the section.
5. **Validation rules** — field-level validation, allowed values, required/optional, access/role constraints. Only include if the feature actually accepts input and enforces something on it.
6. **Dependencies** — only **other features** this one relies on, and **third-party/external services** (a paid/external API, SaaS, CDN, env var tied to an external account, etc.). Never list shared/widget-layer modules, internal helpers/constants/types, or framework lifecycle hooks — those are ordinary architecture, not a dependency worth calling out. Only include if there's real cross-feature reliance or an external service involved.

**Omit a section entirely when it doesn't apply** — no heading, no "skipped" placeholder, nothing. Purpose is the only section that's always present; the rest appear only when they have real content. Never pad a section with boilerplate just to have content in it.

Keep the whole spec concise — enough to orient quickly, not a novel.

---

## In this repo (portfolio)

- Path: `src/features/<feature>/<FEATURE-NAME>.md`, where `<FEATURE-NAME>` is the slice name upper-cased (e.g. `src/features/home/HOME.md`, `src/features/not-found/NOT-FOUND.md`).
- Don't restate FSD layering, i18n, or theming conventions already covered by `architecture` and `frontend-expert` — only this feature's nuances.
- Most feature slices here are static/presentational (legal pages, landing sections) with no owned data model or multi-step flow beyond render — expect sections 2 and 3 to be explicitly skipped for those, and reserved for features with real data shape or interaction (e.g. the home reviews carousel, the contacts timezone computation).
