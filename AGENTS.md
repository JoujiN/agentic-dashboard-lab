# AGENTS.md

## Project purpose
This repository is a practice sandbox for learning agentic AI development workflows in Codex.

The main learning goals are:
- persistent repo instructions
- reusable workflow modules
- tool integration later
- subagent decomposition later
- guardrails and testing

## Stack
- React
- TypeScript
- Vite
- Vitest
- Testing Library

## App concept
This is a tiny authenticated dashboard app using a mocked local auth flow shaped similarly to Supabase session/user patterns.

The app should feel like a realistic product surface, but remain intentionally small and easy to change.

## Current architecture
- `src/auth/` contains auth types, provider, hook, and mocked session state
- `src/api/` contains app-facing data functions
- `src/ui/` contains layout, widgets, and auth-gated UI helpers
- `tests/` contains behavior-focused tests
- `workflows/` contains reusable repo-local workflow instructions for Codex

## Commands
- install: `npm install`
- dev: `npm run dev`
- test: `npm run test`
- test once: `npm run test -- --run`
- lint: `npm run lint`
- build: `npm run build`

## Coding rules
- Prefer small focused components and functions
- Prefer explicit types over clever abstractions
- Do not add new dependencies unless necessary
- Keep files reasonably short and easy to scan
- Avoid premature generalization
- Reuse existing patterns before inventing new ones

## Testing rules
- Add or update tests for behavior changes
- Test user-visible behavior first
- Prefer simple tests over over-mocked implementation-heavy tests
- For auth changes, verify both authenticated and unauthenticated cases where relevant

## Decomposition rules
Use subagent-style decomposition when the task meaningfully spans more than one concern, such as:
- shared layout/composition
- shared data shape
- existing test behavior

For small additive tasks with an obvious existing pattern, decomposition is optional rather than default.

## Workflow rules
When asked to make a change:
1. First inspect likely relevant files
2. State the minimal implementation plan
3. Make the smallest safe change set
4. Run relevant tests
5. Summarize:
   - what changed
   - what assumptions were made
   - any follow-up risks or next steps

Before planning, classify the task as `copy-only`, behavior, layout/composition, data-shape, or alignment, and default to the narrowest task shape.
For copy-only tasks, do not change data logic, auth flow, or composition unless the request explicitly requires it.

## Feature design rules
For new features:
- start with a narrow version
- integrate into existing dashboard patterns
- keep UI simple and readable
- avoid introducing backend complexity unless explicitly requested

## Auth rules
The auth system in this repo is mocked locally.
Treat it as if it were a simplified Supabase-style session flow:
- session may be present or null
- user may be present or null
- auth-gated UI should be explicit
- do not introduce real network auth unless explicitly requested

For small authenticated dashboard changes:
- prefer wiring through existing auth surfaces (`useAuth`, `RequireAuth`, `DashboardLayout`) before changing provider shape
- prefer new read-only widgets in `src/ui/widgets/` with mock data from `src/api/dashboard.ts`
- add at least one user-visible test for the new behavior

## External reference alignment

When working against a spec, requirement, or external data:
- compare first, do not assume a change is needed
- identify exact mismatches
- only implement changes that clearly improve alignment
- keep alignment changes minimal and localized
- when inputs conflict, resolve them in this order: repo instructions and workflows, then task-specific constraints or reference docs, then issue or stakeholder comments, then existing implementation
- state the conflict and the winning constraint before editing

## Definition of done
A task is done when:
- the requested behavior exists
- the implementation matches existing repo patterns
- tests pass or any failures are clearly explained
- assumptions and limitations are stated

## Commit message rule

When a task is complete, propose a learning-focused commit message using this format:

<type>(area): short description

What Codex did:
- ...
- ...

What I had to correct:
- ...
- ...

What I learned:
- ...
- ...

If no meaningful correction was needed, say:
- no significant correction needed

## Multi-issue selection rule

When multiple open issues are viable:
- compare them by blast radius, clarity of acceptance criteria, and number of concerns touched
- for each viable issue, note likely files touched, what should stay unchanged, and validation cost before choosing
- prefer the issue that can be solved with the most localized change and one focused test
- deprioritize issues that imply layout restructuring, shared data changes, or multi-widget coordination unless explicitly requested
- before editing, explicitly state what should stay unchanged and why the chosen issue is the safest current move
