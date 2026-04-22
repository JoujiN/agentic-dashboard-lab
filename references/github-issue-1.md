# Issue: Recommendation feels inconsistent

## Description
Users reported that the dashboard recommendation sometimes feels disconnected from the activity shown below.

Example:
- Status says "At risk"
- Recommendation says to "take action"
- But activity shows multiple negative signals without being referenced directly

## Comment from PM
We should make the recommendation feel grounded in the actual activity shown, not generic.

## Comment from Designer
Agree. It should feel like:
"You’re falling behind because of X and Y"
Not just:
"You should take action"

## Constraints
- Keep it to one sentence
- Do not overwhelm the user
- No layout changes