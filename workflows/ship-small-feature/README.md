
# ship-small-feature

A reusable repo-local workflow for Codex when implementing a small feature safely.

Use this workflow when:
- adding a small UI feature
- adding a small dashboard widget
- fixing a contained bug
- making a narrowly scoped behavior change

## Goals
- keep changes minimal
- follow existing repo patterns
- update tests
- clearly state assumptions and risks

## Process
1. Inspect likely relevant files first
2. Explain the smallest viable implementation plan
3. Reuse existing patterns and component structure
4. Implement the smallest safe change set
5. Run relevant tests
6. Summarize changes, assumptions, and follow-ups

## Common small-feature shapes
- auth behavior change:
  inspect the auth provider, auth gate, layout entry point, and existing auth tests
- dashboard widget:
  inspect sibling widgets, `src/api/dashboard.ts`, `src/App.tsx`, and add one focused widget test

Read:
- `CHECKLIST.md` before editing
- `prompt-template.md` when the task is ambiguous