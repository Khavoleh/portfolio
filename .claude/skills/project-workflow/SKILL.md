---
name: project-workflow
description: Handle all GitHub operations for this portfolio repo — branches, commits, PRs, and issues — using GitHub MCP tools exclusively, following the `[id]/task-name` branch convention, Conventional Commits (drives semantic-release versioning), PR base = `develop`, and a required approval gate before filing any issue. Use this skill when: creating a branch, writing a commit message, opening or updating a PR, drafting or filing an issue, assigning labels, or wiring `Closes #N` in a PR body. Also trigger when wondering about the right commit type (feat/fix/chore/docs/refactor) and its version impact, or whether something belongs in `develop` vs `main`. Examples: "create a branch for this task", "open a PR for my changes", "file a GitHub issue for the redesign", "what commit type should this be?".
---

# Project workflow

Work with GitHub in line with the repo's conventions and automation. Don't fight the hooks or CI.

## Safety

- **Don't commit, push, open PRs, or create issues unless the user explicitly asks.**
- Never commit directly to the default/protected branch — branch first.
- Pre-commit secret scanning may run; never introduce secrets.

## Branches

- Follow the enforced branch-naming pattern exactly (a non-matching name is rejected on push).
- Branch off the correct base for the workflow.

## Commits

- Use **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`, `style:`) when releases are automated from commit history — the type drives the version bump and changelog. Keep messages accurate; they become release notes.

## Pull requests

- Target the correct base branch (`develop` in this repo). Let CI run; fix failures rather than bypassing.
- **Title:** Conventional-Commit style (`type: concise summary`), matching the branch id prefix so branch ↔ PR ↔ release stay traceable. The type drives the eventual version bump.

### PR body template — always use this

```markdown
## Purpose

<One or two sentences: why this PR exists — the problem it solves or the value it adds.>

## Changes

- <Done work item 1 — what was actually built/changed, present tense>
- <Done work item 2>
- <…>

## Testing

- <How it was verified — commands run and their result, e.g. `pnpm validate` passing, new e2e specs, manual checks. Omit section if genuinely nothing to report.>

## Related

<`Closes #N` for issues this PR resolves; links to related PRs/issues. Omit section if none.>
```

Guidelines:

- **Purpose** and **Changes** are mandatory; **Testing** and **Related** are included whenever there's anything to report (usually there is).
- Keep **Changes** a scannable bullet list of finished work, not a narrative — one bullet per meaningful unit of change.
- Reference and close issues from the body via `Closes #N` so the merge auto-closes them.

## Issues / tasks (with labels & tags)

### Approval gate — always required

Before creating any issue, draft the full issue content (title + body) and **present it to the user for approval**. Do not call any MCP tool until the user explicitly confirms. If the user requests changes, revise and show the draft again before proceeding.

### Issue structure

Every issue body must follow this template:

```markdown
## Overview

<One concise paragraph: what this issue is about and why it matters.>

## Purpose

<Why this work needs to happen — the problem it solves or the value it adds.>

## Acceptance Criteria

- [ ] <Criterion 1 — specific, verifiable, written in present tense>
- [ ] <Criterion 2>
- [ ] <…>

## Notes

<Optional: constraints, related issues/PRs (`#N`), design links, open questions. Omit section if empty.>
```

Guidelines:

- Title: action-oriented, matches the branch id prefix (`[id]/task-name`) so task ↔ branch ↔ PR is traceable.
- Acceptance criteria: each item is independently verifiable and unambiguous. Aim for 3–7 items.
- **Always apply labels.** Fetch the current label set via the GitHub MCP before assigning — don't invent labels. Assign at minimum a _type_ label (`Front-End`/`DevOps`/`Organisation`/`Bug`) and an _area_ label when one matches the touched slice.
- Reference related issues/PRs and close them from the PR body via `Closes #N`.

## Tooling

- Use **GitHub MCP tools exclusively** for all GitHub operations (issues, PRs, labels, branches). Load deferred tools via `ToolSearch` with `+github <action>` before calling. Do **not** use the `gh` CLI.

---

## In this repo (portfolio)

- Repo: `Khavoleh/portfolio`. CI runs for PRs to `main` and `develop`.
- **Branch name:** `[id]/[task-name]`, lowercase + hyphens, e.g. `284/redesign-theme-brand-colors`. Pre-push hook (lefthook) rejects anything else; hooks are skipped on `main` by design.
- **Releases:** `semantic-release` on push to `main` derives the version from commit types — `feat:` → minor, `fix:` → patch, `feat!:`/`BREAKING CHANGE:` → major; `chore:`/`docs:`/`refactor:`/`test:`/`ci:`/`style:` → no release.
- **PR base = `develop`.**
- CI on PRs: build, unit, e2e (Playwright), lint, type-check, CodeQL, DAST. Pre-commit runs `gitleaks` (note `localhost*.pem` are committed dev certs). Pre-push runs lint, prettier --check, astro check, unit, depcruise.
- **Labels:** fetch with `mcp__github__list_issues` or a label-list MCP call before assigning; map commit type → label and add an area label for the touched feature/widget.
