---
description: Log a study session to daily tracker
---

Log study session: $ARGUMENTS

## Flow

1. Parse `$ARGUMENTS` for:
   - **Topic** (required): e.g., "linear algebra", "binary search", "bayes theorem"
   - **Duration** (optional): e.g., "30min", "45m", "1h". If missing, ask.
   - **Type** (optional): "recall" or "new". Default: infer from time of day (before noon = recall, after = new)
   - **Method** (optional): "worked-examples", "problems", "anki", "reading", "proof", "exercises"

2. Get today's study file: `05_Areas/learning/daily/{TODAY}.md`
   - If file doesn't exist, create from template:

```yaml
---
date: YYYY-MM-DD
type: study
recall_minutes: 0
new_minutes: 0
total_minutes: 0
anki_cards: 0
topics: []
method: []
self_generated_questions: 0
tags:
  - study
  - daily
---

# Study --- YYYY-MM-DD

## AM Recall (15 min target)

## PM New Material (45 min target)

## Self-Generated Questions

## Key Insights

## Notes Created

## Media Generated
```

3. Read the existing file and update YAML frontmatter:
   - Add duration to `recall_minutes` or `new_minutes` based on type
   - Recalculate `total_minutes = recall_minutes + new_minutes`
   - Append topic to `topics[]` if not already present
   - Append method to `method[]` if not already present
   - If method is "anki", also increment `anki_cards` (ask how many cards reviewed)

4. Append session entry to appropriate body section:
   - If type = recall: append under `## AM Recall`
   - If type = new: append under `## PM New Material`
   - Format: `- {duration}min {topic} ({method}) @ {HH:MM}`

5. Calculate consistency: count files in `05_Areas/learning/daily/` for current month where `total_minutes > 0`

## Output

```
Logged: {topic} ({duration}min, {type}). Today: {total}min (Grade {grade}).
This month: {X}/{days_so_far} days ({Y}% toward 25-day target)
```

## Examples

- `/study linear algebra 45min` -> PM new material, 45 min, method inferred
- `/study recall algorithms 15min` -> AM recall, 15 min
- `/study anki 20min` -> Anki review, asks for card count
- `/study probability 1h worked-examples` -> PM new, 60 min, worked examples

## Rules

- NEVER create files outside `05_Areas/learning/`
- If `total_minutes` hits 60+, show: "Full session today."
- If this is first session in 3+ days, note it briefly without lecturing
- Use Edit tool to update YAML frontmatter, not rewrite entire file
- Keep output concise --- one summary line + consistency line
