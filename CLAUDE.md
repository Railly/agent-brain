# {Your Name}'s Brain

## Identity
{Your name}. {Age}. {Location}. {Languages you speak}.

## Work

### {Primary Role}
{Your role}. {Company/project}. {What you're working on}.

### {Secondary Role} (optional)
{Side project, freelance, open source}.

## Goals

### This Quarter
- [ ] {Goal 1}
- [ ] {Goal 2}
- [ ] {Goal 3}

### This Year
- [ ] {Goal 1}
- [ ] {Goal 2}

### 3-5 Years
- {Vision statement}

## Stack

### Always Use
- {Runtime}: {e.g., Bun, Node, Deno}
- {Framework}: {e.g., Next.js, Astro}
- {Database}: {e.g., Postgres, SQLite}
- {Deploy}: {e.g., Vercel, Cloudflare}

### Avoid
- {Things you don't want the AI suggesting}

## Knowledge System

### Vault Structure
```
01_Inbox/           -> Raw captures (Web Clipper)
02_Journal/         -> Daily logs, weekly plans, reflections
03_Garden/          -> Evergreen atomic notes
04_Projects/        -> Active project work
05_Areas/           -> Ongoing life contexts
06_Content/         -> Ready-to-publish drafts
07_System/          -> System config and references
```

Full reference: `07_System/context-files/knowledge-system.md`

### Commands
| Command | Purpose |
|---------|---------|
| `/today` | End-of-day log from commits + manual entries |
| `/log` | Quick timestamped entry to daily file |
| `/ship` | Commit + push + log to daily |
| `/close-day` | End-of-day reflection + tomorrow prep |
| `/morning` | Morning briefing: calendar, tasks, MITs |
| `/week` | Weekly planning with MITs |
| `/inbox` | Process Web Clipper clips into atomic notes |
| `/graduate` | Extract buried ideas from dailies into permanent notes |
| `/relink` | Find missing connections between notes |
| `/vault-search` | Search vault by keyword and synthesize |
| `/meeting` | Process meeting notes into structured notes |
| `/challenge` | Argue against your own thinking (anti-sycophancy) |
| `/pulse` | Weekly Pareto analysis + goal alignment |
| `/draft` | Create content drafts from ideas |
| `/de-ai` | Remove AI-generated jargon from text |
| `/prime` | Pre-lesson briefing (3 min scaffolding) |
| `/learn` | Create study note with review questions |
| `/recall` | Morning retrieval practice quiz |
| `/study` | Log a study session |
| `/research` | Web research saved to vault |
| `/overnight` | Build POCs overnight with parallel agents |
| `/status` | Real-time snapshot of all repos |

## Anti-Patterns (Recurring Failures)

{Your honest failure patterns. /pulse checks these and warns you.}

### {Pattern 1} (x{times})
**Pattern**: {What you keep doing wrong}
**Signal**: {How to detect it early — be specific}
**Intervention**: {What to tell yourself when flagged}

### {Pattern 2} (x{times})
**Pattern**: {What you keep doing wrong}
**Signal**: {How to detect it early}
**Intervention**: {What to tell yourself when flagged}

## Communication

### Tone
- {How you want the AI to talk to you}
- {e.g., "Direct and efficient", "Jarvis-like", "Collaborative"}

### Do
- Be proactive, suggest without asking
- Challenge my thinking, be honest
- Use evidence from the vault when possible

### Don't
- No sycophancy — don't tell me what I want to hear
- No unnecessary verbosity
- No emojis unless I ask

## Conventions
- Conventional commits: feat, fix, docs, refactor, chore
- {Your code conventions}
