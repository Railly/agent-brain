---
name: today
description: Log daily accomplishments, reflect on the day, and prep tomorrow
---

---
description: Log daily accomplishments, reflect on the day, and prep tomorrow
---

End-of-day summary: auto-detect commits across repos, merge with manual entries, generate daily log, reflect.

## WAVE 0: Gather Data (ALL PARALLEL, one message)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Bash | Scan repos under `~/Programming` for today's commits via `git log --oneline --since="today"` per repo | Collect commits |
| 2 | Read | `02_Journal/daily/{TODAY}.md` | Check if log exists (preserve Ship Log entries) |
| 3 | Read | `02_Journal/daily/{YESTERDAY}.md` | Extract uncompleted `- [ ]` tasks for carry-over |
| 4 | Read | `02_Journal/weekly/week-{YEAR}-W{WEEK_NUM}.md` | Weekly goal + MITs |

Compute dates mentally (you know today's date from system context).

## WAVE 1: Show + Ask

1. Display auto-detected data summary (repos, commits)
2. Show carried-over tasks from yesterday
3. Ask: "What else did you do today? (meetings, research, calls, ideas, decisions, learnings)"
   - If user says nothing/skip, proceed with auto-detected data only

## WAVE 2: Generate Log

Create or UPDATE `02_Journal/daily/{TODAY}.md`.

### If file already exists

PRESERVE these sections:
- `## Ship Log` (timestamped entries from /log and /ship)
- Any manual `- [HH:MM]` entries

UPDATE these sections with fresh data:
- `## Accomplishments`
- `## Stats`
- `## Projects Touched`

### Template

```markdown
---
type: daily
week: "[[week-{YEAR}-W{WEEK_NUM}]]"
rating:
---
# {TODAY} - {Weekday}

## Weekly Goal
{from weekly file, or "No weekly goal set -- run /week"}

## Today's Tasks
- [ ] {from carry-over or user input}

## Pending (from yesterday)
- [ ] {uncompleted tasks from yesterday's log}

## Accomplishments

### {repo} ({n} commits)
1. {commit message -- expand with context}

### Other
1. {user-provided activities}

## Projects Touched
1. **{repo}**: {one-line summary of what changed}

## Content Ideas
{Generate 2-4 SPECIFIC ideas with hooks:}
1. Tweet: "{actual hook text}"
2. Thread: "{topic}" -- {why it's interesting}

## Learnings
1. {specific technical or strategic insight}

## Tomorrow
- [ ] {planned tasks}

## Ship Log
{preserved from existing file}

## Stats
- **Total commits**: {n}
- **Repos touched**: {n} ({list})
```

## WAVE 3: Day Close (Reflection)

Appends a reflection section after the main log is generated.

### 1. Task Completion Audit

Compare Today's Tasks + Pending vs Accomplishments:

```
TASK AUDIT
Planned:
  [x] Ship feature X          <- DONE
  [ ] Fix bug Y               <- carry over
Unplanned:
  [+] Debugged webhook         <- reactive
```

Calculate: `completion_rate = done / total * 100`

### 2. MIT Progress

Check weekly MITs from the weekly file:

```
MIT PROGRESS (Week {N})
1. [===>    ] Project A (40%)
2. [=>      ] Project B (15%)
3. [=======>] Project C (80%)
```

### 3. Append to daily log

```markdown
## Day Close

### Completion: {rate}%
- Planned: {done}/{total}
- Unplanned: {n} items emerged

### Carry Over -> Tomorrow
- [ ] {unresolved item 1}
- [ ] {unresolved item 2}

### MIT Status
{progress bars from weekly MITs}

### Rating: {1-7}
```

### 4. Ask for day rating

Ask: "Day rating? (1-7, where 5=good, 7=life-changing)"
Write the rating to both the `## Day Close` section AND the YAML frontmatter `rating:` field.

## Rules

- PRESERVE Ship Log entries when updating existing files
- Content ideas must have SPECIFIC hooks
- YAML frontmatter: quote wikilinks (`"[[week-2026-W07]]"`)
- Carry-over items from Day Close feed into tomorrow's `/today` via WAVE 0 step 3
