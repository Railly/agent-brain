---
description: Extract ideas buried in daily notes and promote them to standalone permanent notes
---

Extract ideas, insights, and patterns buried in daily logs and promote them to permanent evergreen notes in `03_Garden/`.

Dailies are where ideas go to die. This command rescues them.

## WAVE 0: Scan Recent Dailies (PARALLEL)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Glob | `02_Journal/daily/*.md` | Find all daily files |
| 2 | Read | `02_Journal/weekly/week-{YEAR}-W{WEEK_NUM}.md` | Current weekly context |
| 3 | Glob | `03_Garden/concepts/*.md` | Existing concepts (avoid duplicates) |

Default: scan last 14 days of dailies. With `$ARGUMENTS`:
- `/graduate 7` - last 7 days
- `/graduate 30` - last 30 days
- `/graduate all` - entire journal history

## WAVE 1: Deep Read + Extract

Read each daily file. Extract candidates that match ANY of these patterns:

### Extraction Patterns

| Pattern | Signal | Example |
|---------|--------|---------|
| **Insight** | "TIL", "learned", "realized", "discovered" | "TIL bun workspaces need explicit exports" |
| **Decision** | "decided to", "chose", "going with" | "Decided to use sqlite-vec over pgvector" |
| **Pattern** | Recurring topic across 3+ dailies | "Rust ownership" mentioned in 5 dailies |
| **Technique** | How-to buried in accomplishments | "Fixed by wrapping in try/catch with fallback" |
| **Question** | Open questions never answered | "How does Linear handle webhook retries?" |
| **Content Seed** | Ideas in Content Ideas section never drafted | "Thread: comparing auth providers" |
| **Mental Model** | Frameworks or principles mentioned | "Pareto applies to feature prioritization too" |

### Scoring

Each candidate gets a promotion score:

```
score = frequency(mentions across dailies) * 2
      + depth(detail level: brief=1, paragraph=2, section=3)
      + actionability(can act on it: no=0, yes=2)
      + connection_potential(relates to existing notes: 0-3)
```

Minimum score to promote: 4

## WAVE 2: Present Candidates

Show candidates ranked by score:

```
GRADUATION CANDIDATES (14 days scanned)

READY TO PROMOTE (score >= 6)
1. [8] "Bun workspace module resolution" (5 mentions, technique)
   → Found in: 02-10, 02-11, 02-12, 02-14, 02-15
   → Connects to: [[bun-runtime]], [[monorepo-patterns]]

2. [7] "Linear webhook idempotency patterns" (3 mentions, pattern)
   → Found in: 02-08, 02-10, 02-14
   → Connects to: [[kai-linear-agent]], [[webhook-design]]

MAYBE PROMOTE (score 4-5)
3. [5] "Voice-first AI interaction" (2 mentions, insight)
   → Found in: 02-10, 02-12

CONTENT SEEDS (never drafted)
4. "Thread: How I built a cron system in 200 lines of Bun"
   → From: 02-08 Content Ideas section
   → Would connect to: [[kai-cron]], [[bun-runtime]]

OPEN QUESTIONS (never resolved)
5. "Is sqlite-vec good enough for 100k+ chunks?"
   → From: 02-09
```

Ask: "Which ones should I graduate? (numbers, 'all ready', or 'skip')"

## WAVE 3: Create Permanent Notes

For each approved candidate, create in `03_Garden/concepts/{slug}.md`:

```markdown
---
type: concept
created: {today}
graduated_from:
  - "[[02_Journal/daily/{source-date}]]"
themes: [{extracted themes}]
sources: []
people: []
---
# {Topic Title}

{Synthesized insight from ALL daily mentions, not just one}

## Key ideas
- {point 1 - synthesized across mentions}
- {point 2}

## Context
{Why this matters, when it applies}

## Connections
- [[existing-note]] - {how it relates}
```

Rules:
- **Synthesize, don't copy-paste**: Combine mentions from multiple dailies into one coherent note
- **Check for existing concepts**: If `03_Garden/concepts/{similar-slug}.md` exists, APPEND to it instead of creating duplicate
- **Bidirectional links**: Add `[[new-concept]]` reference back to source dailies in their Learnings section
- **Content seeds**: Create in `05_Areas/content-creation/ideas/{today}/{slug}.md` instead of concepts

## WAVE 4: Summary

```
GRADUATED: 3 ideas → permanent notes
  1. bun-workspace-resolution.md (from 5 dailies)
  2. linear-webhook-patterns.md (from 3 dailies)
  3. voice-first-ai.md (from 2 dailies)

CONTENT QUEUED: 1 idea
  1. ideas/{today}/bun-cron-thread.md

SKIPPED: 2 candidates (user choice)

CONNECTIONS ADDED: 4 new backlinks across existing notes

Garden health: {n} concepts total (+{new})
```

## Options
- `/graduate` - Last 14 days (default)
- `/graduate 7` - Last 7 days
- `/graduate 30` - Last month
- `/graduate all` - Full journal scan
- `/graduate --dry` - Show candidates without creating
- `/graduate --auto` - Auto-promote all score >= 6
