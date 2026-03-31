---
name: morning
description: Morning briefing - curated task list from multiple sources
---

---
description: Morning briefing - curated task list from multiple sources
---

Morning brain shouldn't decide priorities. Systems decide. This command curates everything into one focused view.

## WAVE 0: Gather Data (ALL PARALLEL)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Read | `02_Journal/daily/{YESTERDAY}.md` | Carry-over tasks from "## Tomorrow" section |
| 2 | Read | `02_Journal/weekly/week-{YEAR}-W{WEEK_NUM}.md` | MITs + weekly goal |
| 3 | Grep | `priority: [12]` in `05_Areas/content-creation/ideas/` | High-priority content ideas |
| 4 | Glob | `01_Inbox/*.md` | Count unprocessed inbox clips |

Compute dates mentally (you know today's date from system context).

## WAVE 1: Optional Integrations (PARALLEL)

Only run these if the tools are available:

| # | Tool | When | Purpose |
|---|------|------|---------|
| 1 | Calendar MCP | If configured | Today's events |
| 2 | Glob | `~/Programming/**/.git` (maxdepth 3) | Discover local repos for activity check |

## WAVE 2: Render (NO tool calls)

Combine all results:

```
# Morning Focus - {WEEKDAY}, {TODAY}

## Today's Calendar
{events if calendar available, or "No calendar configured"}

## Must Do (from yesterday)
{tasks from "Tomorrow" section, or "No carry-over" if empty}

## Weekly MITs Progress
{numbered MITs with completion status}

## Creative Opportunities
{top 2-3 content ideas from grep}
Inbox: {n} clips pending

## Suggested Focus Order
1. Morning: {highest priority task}
2. Midday: {deep work}
3. Afternoon: {creative/content}
```

## Rules

- Terminal output ONLY. No file creation.
- Skip sections with no data rather than showing "N/A"
- Keep it scannable, this should take 30 seconds to read
- Do NOT add intermediate messages between waves
