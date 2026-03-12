---
description: Review what happened today, capture learnings, and flag unresolved items for tomorrow
---

End-of-day review: capture what happened, what you learned, what's unresolved.

Different from `/today` (which generates the log). `/close-day` is the REFLECTION after the day is done.

## WAVE 0: Gather Context (ALL PARALLEL)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Read | `02_Journal/daily/{TODAY}.md` | Today's log |
| 2 | Glob | Find `.git` dirs in `~/Programming` (maxdepth 3) | Discover repos to check for late commits |
| 3 | Read | `02_Journal/weekly/week-{YEAR}-W{WEEK_NUM}.md` | Weekly goal + MITs |
| 4 | Read | `05_Areas/health/daily/{TODAY}.md` | Health data (skip if absent) |
| 5 | Read | `05_Areas/learning/daily/{TODAY}.md` | Study session data (skip if absent) |

For step 2: for each discovered repo, run `git log --oneline --since="today" --author="$(git config user.name)"` to surface late commits not in the log.

## WAVE 1: Analyze the Day

### 1. Task Completion Audit

Compare planned tasks vs actual:

```
TASK AUDIT
Planned (from morning/weekly):
  [x] Ship feature X          <- DONE
  [ ] Fix bug Y               <- NOT DONE (carry over?)
  [-] Review PR Z             <- PARTIAL

Unplanned work (emerged during day):
  [+] Debugged timeout        <- reactive
```

Calculate: `completion_rate = done / (planned + unplanned) * 100`

### 2. Energy Map

Infer from timestamps and commit patterns:

```
ENERGY MAP
06-09  ░░░░░░░░  (no activity)
09-12  ████████  HIGH - 8 commits
12-14  ██░░░░░░  LOW - lunch
14-17  ██████░░  MEDIUM - debugging
17-20  ████████  HIGH - shipping mode
```

### 3. Learning Extraction

```
LEARNINGS
1. [technical] {specific insight}
2. [process] {workflow learning}
3. [insight] {strategic observation}
```

### 4. Unresolved Items

```
UNRESOLVED
1. [ ] {task not done} (carry over?)
2. [?] {decision pending}
3. [!] {urgent issue}
```

Categorize: `[ ]` = task, `[?]` = decision, `[!]` = urgent

### 5. MIT Progress

```
MIT PROGRESS (Week {N})
1. [===>    ] {MIT 1} (40%)
2. [=>      ] {MIT 2} (15%)
3. [=======>] {MIT 3} (80%)
```

## WAVE 2: Present Review

Show the full analysis. Ask:
"Anything to add? Wins, frustrations, ideas that came up?"

If user adds input, incorporate it.

## WAVE 3: Update Daily Log

Append to `02_Journal/daily/{TODAY}.md`:

```markdown
## Day Close

### Completion: {rate}%
- Planned: {done}/{total}
- Unplanned: {n} items emerged

### Energy Pattern
{Peak hours, low hours, total active hours}

### Learnings
1. {synthesized learning 1}
2. {synthesized learning 2}

### Carry Over -> Tomorrow
- [ ] {unresolved item 1}
- [ ] {unresolved item 2}
- [?] {pending decision}

### MIT Status
{progress bars}

### Day Rating: {1-7}
{Ask user for subjective rating using Kepano scale}
```

### Health Integration

If `05_Areas/health/daily/{TODAY}.md` exists:

```markdown
### Health
- Sleep: {hours}h ({quality})
- Steps: {count}
- Exercise: {minutes} min
```

If no health file: skip section silently.

### Study Integration

If `05_Areas/learning/daily/{TODAY}.md` exists:

```markdown
### Study
- Total: {total_minutes}min (Grade {grade})
- Topics: {topics list}
- Self-generated questions: {count}
```

If no study file: "No study session logged today."

## WAVE 4: Tomorrow Prep

```
TOMORROW'S STARTER
Priority (from carry-over + MITs):
1. [ ] {highest priority unresolved}
2. [ ] {MIT task that's behind}
3. [ ] {quick win from today's partial work}
```

## Rules

- NEVER create a new daily file. Only APPEND to existing.
- If no daily log exists for today, tell user to run `/today` first.
- Keep learnings SPECIFIC (not "learned about webhooks" but the actual insight)
- Energy map is inferred from timestamps — do not ask user to self-report
- Day rating is the ONLY thing to ask the user for (1-7 Kepano scale)
- Carry-over items become tomorrow's planned tasks automatically

## Options

- `/close-day` — Full review
- `/close-day --quick` — Just learnings + carry-over, skip energy map and MIT progress
- `/close-day --no-tomorrow` — Skip tomorrow prep
