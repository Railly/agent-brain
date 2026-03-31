---
type: system
---
# How to Use This Vault

## Daily Workflow

### Morning
```bash
cd ~/brain && claude    # open Claude Code in the vault
/morning                # calendar, tasks, MITs, anti-pattern check
```

### During Work
```bash
/ship                   # commit + push + auto-log to daily journal
/log "had an idea"      # quick timestamped entry
```

### Processing
```bash
/inbox                  # process Web Clipper captures into atomic notes
/meeting recording.mp4  # transcribe and extract action items
```

### End of Day
```bash
/today                  # review tasks, rate the day, prep tomorrow
```

### Weekly
```bash
/week                   # set weekly goals and MITs
/pulse                  # Pareto analysis + anti-pattern check
```

## Key Concepts

**Commands** live in `.claude/commands/`. Each is a markdown file with a multi-step workflow that Claude Code executes.

**Context files** live in `07_System/context-files/`. They provide deep per-project context, loaded on demand with `@` references in CLAUDE.md.

**Anti-patterns** in CLAUDE.md are your formalized recurring failures. `/pulse` checks them against actual data weekly.

**Auto-logging**: `/ship` and `/log` capture your work automatically. You never manually write "today I did X".

## Folder Guide

| I want to... | Go to |
|---|---|
| Capture something quickly | `/log "thing"` or Web Clipper to 01_Inbox/ |
| See what I did today | 02_Journal/daily/{today}.md |
| Find a concept I noted | 03_Garden/concepts/ |
| Check project status | 04_Projects/{project}/ |
| See content ideas | 05_Areas/content-creation/ideas/ |
| Read a draft | 06_Content/ |
| Add project context | 07_System/context-files/ |

## Tips

- Run `/init` to set up a new vault with personalized CLAUDE.md
- Install Obsidian Web Clipper to feed the inbox
- Every correction you give Claude Code gets saved to memory automatically
- The more you use `/ship`, the more accurate `/pulse` becomes
