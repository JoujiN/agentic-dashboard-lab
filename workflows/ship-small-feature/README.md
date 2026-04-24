
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
2. Classify the task shape and explain the smallest viable implementation plan
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
Default to the narrowest task shape that matches the request.

- copy-only change:
  inspect the affected component and test first, and keep data logic, auth flow, and composition unchanged unless explicitly requested
- auth behavior change:
  inspect the auth provider, auth gate, layout entry point, and existing auth tests
- dashboard widget:
  inspect sibling widgets, `src/api/dashboard.ts`, `src/App.tsx`, and add one focused widget test

## Subagent-style decomposition

Use subagent-style decomposition when the task spans multiple concerns or the minimal path is not obvious, such as:
- UI copy or component behavior
- dashboard data shape or mock data
- focused test coverage
- external guidance or an issue where scope is ambiguous

Do not use decomposition when:
- the change is clearly copy-only in one file
- the affected pattern is obvious from a sibling component
- the task can be safely handled with one focused edit and one focused test
- decomposition would add more process than clarity

Each subagent should return:
- files inspected
- proposed changes, if any
- files they would be allowed to change
- what must stay unchanged
- risks, conflicts, or assumptions
- recommendation: implement, partially implement, or make no change

The coordinator should:
- compare proposals before editing
- resolve conflicts using repo instructions first
- choose the smallest useful implementation plan
- explicitly decide whether to make a change or no change
- keep execution limited to the chosen plan

Additional rules:
- do not suggest new abstractions, files, or test layers unless the existing pattern clearly breaks
- if no changes are made, explicitly state that no tests were required because no files were modified