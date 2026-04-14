
# Checklist

Before editing:
- identify likely files to inspect
- check current UI and auth patterns
- confirm whether tests already cover similar behavior
- verify the documented commands exist in the repo
- run the baseline test command if the task is expected to end with tests
- if the test infrastructure is broken, either fix it first or explicitly include that work in the minimal plan

During implementation:
- keep components focused
- avoid unnecessary abstractions
- avoid new dependencies
- preserve mocked auth shape

Before finishing:
- update or add tests
- run relevant test commands
- verify authenticated behavior if applicable
- state assumptions
- mention any edge cases not yet covered
- propose a learning-focused commit message
- include type, area, summary, and key observation