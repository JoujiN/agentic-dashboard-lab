# Dashboard Widget Spec

## Purpose
This spec defines the standard shape for small authenticated dashboard widgets in this repo.

## Rules
- Every dashboard widget must render a top-level `<section>`.
- Every dashboard widget must include a visible `<h2>` heading.
- Widget display data should come from `src/api/dashboard.ts`, not be hardcoded in the component, unless the task explicitly says otherwise.
- Each widget should stay read-only unless the task explicitly requires interaction.
- Each new widget should have at least one focused test that verifies user-visible output.
- New widget changes should prefer minimal edits to existing composition patterns.

## Notes
This spec is intentionally small and local. It exists to practice aligning implementation work to an external reference.