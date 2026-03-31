---
name: week
description: Set weekly goal and MITs for the week
---

---
description: Set weekly goal and MITs for the week
---

Create/open weekly plan: $ARGUMENTS

## IMPORTANT: Be direct
- Create file if not exists, update if exists
- Week starts Monday

## Flow

1. **Calculate week dates**
   - Monday of current week
   - File: `02_Journal/weekly/week-YYYY-WXX.md` (e.g., week-2026-W02)

2. **Fetch calendar events** (if calendar integration available)
   If you have a calendar MCP or integration configured in CLAUDE.md, list events for the week (Mon 00:00 to Sun 23:59).

3. **Read health data for this week** (optional)
   If `05_Areas/health/daily/` exists, read files for each day (Mon-Sun) of this week.
   Compute from available days:
   - avg_sleep = mean of sleep_minutes
   - avg_steps = mean of steps
   - exercise_days = count of days with exercise_minutes > 0

   If `05_Areas/health/weekly/YYYY-WXX.md` exists, read it instead (pre-computed).

4. **Create weekly plan**:

```markdown
---
type: week
start: YYYY-MM-DD
end: YYYY-MM-DD
---
# Week {N} - {Month} {Year}

## Weekly Goal
{One clear goal for the week - from $ARGUMENTS or ask}

## MITs (Most Important Things)
- [ ] {MIT 1}
- [ ] {MIT 2}
- [ ] {MIT 3}

## Calendar
| Day | Meetings | Deep Work |
|-----|----------|-----------|
| Mon | {count} | {hours}h |
| Tue | {count} | {hours}h |
| Wed | {count} | {hours}h |
| Thu | {count} | {hours}h |
| Fri | {count} | {hours}h |
| Sat | {count} | {hours}h |
| Sun | {count} | {hours}h |

**Key Events This Week:**
- {event 1}
- {event 2}

## Days
| Day | Focus | Status |
|-----|-------|--------|
| Mon [[YYYY-MM-DD]] | | |
| Tue [[YYYY-MM-DD]] | | |
| Wed [[YYYY-MM-DD]] | | |
| Thu [[YYYY-MM-DD]] | | |
| Fri [[YYYY-MM-DD]] | | |
| Sat [[YYYY-MM-DD]] | | |
| Sun [[YYYY-MM-DD]] | | |

## Wins
-

## Learnings
-

## Next Week
-
```

5. **Warn if calendar is packed**
   - More than 5 meetings/day = warn "heavy meeting day"
   - Less than 2h deep work available = warn "no focus time"
   - Conflicts with MITs = suggest rescheduling

6. **If week exists**, show current status:
   - MITs progress
   - Days completed
   - Calendar changes since last view
   - Suggest updates

## Example

```
/week "Ship auth feature"
```

## End of Week

Run `/pulse` for full analysis.

## Notify (Optional)
If you have a notification hook configured in CLAUDE.md, run it with the week summary.
