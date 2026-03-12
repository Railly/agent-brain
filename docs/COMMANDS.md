# Command Reference

All commands are Claude Code slash commands. Run them from your vault directory.

## Daily Workflow

### /today
Generate end-of-day log from git commits + manual entries.
- Auto-detects commits across repos
- Carries over unfinished tasks from yesterday
- Generates content ideas from your work
```
/today
```

### /log
Quick timestamped entry to today's daily file.
```
/log "Learned about WebSocket connection pooling"
/log "Had great meeting with Sarah about the API redesign"
```

### /ship
Commit, push, and log to daily file.
```
/ship              # commit + push
/ship pr           # commit + push + create PR
```

### /close-day
End-of-day reflection: task audit, energy map, learnings, tomorrow prep.
```
/close-day         # full review
/close-day --quick # just learnings + carry-over
```

### /morning
Morning briefing: calendar, carry-over tasks, MITs, opportunities.
```
/morning
```
*Requires: Calendar integration (optional)*

### /week
Weekly planning with MITs and goal setting.
```
/week "Ship the API v2"
```

## Knowledge Management

### /inbox
Process Web Clipper captures into atomic notes + content ideas.
```
/inbox             # process all
/inbox 3           # process 3 most recent
/inbox --dry       # preview without changes
```

### /graduate
Extract buried ideas from daily logs into permanent notes.
```
/graduate          # last 14 days
/graduate 30       # last 30 days
/graduate --auto   # auto-promote high-scoring candidates
```

### /relink
Find and create missing connections between notes.
```
/relink            # scan all
/relink rust       # focus on "rust" related notes
/relink --orphans  # show disconnected notes
```

### /vault-search
Search your vault semantically and by keyword.
```
/vault-search "authentication patterns"
```

### /meeting
Process meeting notes into structured notes + action items.
```
/meeting           # then paste notes or provide recording
```

## Thinking & Analysis

### /challenge
Argue against your own beliefs using vault evidence. Anti-sycophancy engine.
```
/challenge "I should learn Rust"
/challenge "Remote work is better" --quick
```

### /pulse
Weekly Pareto analysis + goal alignment + drift detection.
```
/pulse             # full report
/pulse --mit       # just 3 MITs
/pulse --blind     # blind spots only
/pulse --drift     # drift detection only
```

## Content Creation

### /draft
Create content drafts from your ideas (tweets, threads, blogs, videos).
```
/draft "Systems over willpower" --thread
```

### /de-ai
Remove AI-generated jargon from text.
```
/de-ai path/to/file.md
```

## Learning System

### /prime
Pre-lesson briefing: scaffolding, prerequisites, intuition (3 min read).
```
/prime "fourier series"
/prime "binary search" --area algorithms
```

### /learn
Create study note with review questions and knowledge formulation guidance.
```
/learn "vector spaces"
/learn "bayes theorem" --area probability
```

### /recall
Morning retrieval practice quiz from your math/study notes.
```
/recall
```

### /study
Log a study session to the daily tracker.
```
/study "linear algebra" 45min
/study recall algorithms 15min
```

## Advanced

### /overnight
Build POCs overnight with parallel agents.
```
/overnight Build landing page: Hero, Features, Footer. Next.js, Tailwind.
```

### /research
Web research on a topic, saved to vault.
```
/research "WebSocket scaling patterns"
```

### /status
Real-time snapshot of all your repos.
```
/status
```
