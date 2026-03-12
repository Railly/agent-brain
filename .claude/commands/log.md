---
description: Log activity to today's daily file
---

Quick log to daily file: $ARGUMENTS

1. Get today's log path: `02_Journal/daily/$(date +%Y-%m-%d).md`
2. If file doesn't exist, create with minimal template
3. Append entry with timestamp:

```markdown
- [HH:MM] $ARGUMENTS
```

4. Confirm logged

Examples:
- `/log Learned about petgraph traversal patterns`
- `/log Research: compared auth providers`
- `/log Content idea: thread about X`

No output verbosity. Just confirm: "Logged to YYYY-MM-DD.md"
