# Customization Guide

## Adding Your Own Commands

Commands are markdown files in `.claude/commands/`. Claude Code reads them as instructions.

### Command Structure

```markdown
---
description: Short description shown in command list
---

{Instructions for Claude Code}
```

### Tips

1. **Be specific**: Tell Claude exactly what files to read/write and what format to use
2. **Use waves**: Group independent operations into parallel waves for speed
3. **Add options**: Support flags like `--dry`, `--quick` for flexibility
4. **Show examples**: Include example input/output so Claude knows what you expect

### Example: Custom /standup Command

```markdown
---
description: Generate standup update from yesterday and today
---

Generate a standup update.

1. Read yesterday's daily log: `02_Journal/daily/{YESTERDAY}.md`
2. Read today's tasks from weekly: `02_Journal/weekly/week-{YEAR}-W{WEEK}.md`

Output format:
\```
Yesterday: {accomplishments from daily log}
Today: {planned tasks from weekly MITs}
Blockers: {any carry-over items marked as blocked}
\```

Keep it under 5 lines total. No fluff.
```

## Customizing CLAUDE.md

The `CLAUDE.md` file is your AI's personality and context. Key sections to personalize:

### Identity
Your name, role, goals. The more specific, the better the AI's responses.

### Anti-Patterns
Be brutally honest. These are YOUR recurring failures. The more specific the signals, the better `/pulse` can detect them.

### Communication Style
Tell the AI how you want it to talk to you. Some people want Jarvis-style efficiency. Others want a collaborative tone.

### Goals
Keep these updated quarterly. `/pulse` uses them to check if your actions match your intentions.

## Adding Notification Hooks

Commands support an optional notification step. To add notifications:

1. Create a notification script (e.g., Slack webhook, email, push notification)
2. Add to your CLAUDE.md:
```markdown
## Notifications
After completing /inbox, /pulse, or /meeting, run:
\`\`\`bash
./scripts/notify.sh "{summary}"
\`\`\`
```

## Extending the Vault Structure

Need more areas? Add folders under `05_Areas/`:
```
05_Areas/
├── content-creation/
├── learning/
├── health/          # Add health tracking
├── finances/        # Add finance tracking
└── {your-area}/     # Add whatever you need
```

Then update `07_System/context-files/knowledge-system.md` to document the new structure.
