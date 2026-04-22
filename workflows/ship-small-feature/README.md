
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
7. Propose a learning-focused commit message using the repo format:
   - `<type>(area): short description`
   - `What Codex did`
   - `What I had to correct`
   - `What I learned`

## Common small-feature shapes
- auth behavior change:
  inspect the auth provider, auth gate, layout entry point, and existing auth tests
- dashboard widget:
  inspect sibling widgets, `src/api/dashboard.ts`, `src/App.tsx`, and add one focused widget test

## Decomposition rules
Use subagent-style decomposition when the task meaningfully spans more than one concern, such as:
- shared layout/composition
- shared data shape
- existing test behavior

For small additive tasks with an obvious existing pattern, decomposition is optional rather than default.

## Subagent-style decomposition

Use decomposition only when the task spans multiple concerns or the minimal path is not obvious.

For each analysis pass, return:
- Files to touch
- What should stay unchanged
- Smallest implementation path
- Tests needed

Do not suggest new abstractions, files, or test layers unless the existing pattern clearly breaks.

If no changes are made:
- explicitly state that no tests were required because no files were modified

Read:
- `CHECKLIST.md` before editing
- `prompt-template.md` when the task is ambiguous