
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

Read:
- `CHECKLIST.md` before editing
- `prompt-template.md` when the task is ambiguous