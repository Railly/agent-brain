---
description: Log daily accomplishments and generate content ideas
---

End-of-day summary: auto-detect commits across repos, merge with manual entries, generate daily log.

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

## Rules

- PRESERVE Ship Log entries when updating existing files
- Content ideas must have SPECIFIC hooks
- YAML frontmatter: quote wikilinks (`"[[week-2026-W07]]"`)
