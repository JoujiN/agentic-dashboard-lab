# align-to-reference

A reusable workflow for aligning repo implementation with an external reference.

Use this when:
- comparing code to a spec, requirement, or data source
- updating UI to match product copy or design rules
- integrating external data into existing patterns

## Process
1. Inspect the reference and relevant repo files
2. Identify exact mismatches (not general improvements)
3. Decide if any mismatch is worth fixing
4. Choose the smallest useful alignment change
5. Select appropriate validation level:
   - focused test
   - full test suite
   - typecheck/build
6. Implement only if justified
7. Summarize changes, assumptions, and risks

## Rules
- Do not change code if the repo already aligns well enough
- Do not introduce new abstractions unless required
- Prefer adapting existing patterns over creating new ones