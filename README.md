# second-brain

An agent-powered knowledge system built on Obsidian + Claude Code.

Your AI maintains your knowledge system: processes web clips into atomic notes, extracts buried ideas from daily logs, finds missing connections, warns you when you're repeating old mistakes, and argues against your own thinking when you ask it to.

## What This Is

This is not a dotfiles repo. It's a **knowledge operating system** — a vault structure, 22 commands, and a philosophy that work together as a system.

```
Web Clipper -> 01_Inbox/ -> /inbox -> 03_Garden/ -> /graduate -> 06_Content/
                                          |
                                       /relink (finds connections)
                                       /challenge (argues against you)
                                       /pulse (checks goal alignment)
```

## What's Inside

### Vault Template
Pre-configured Obsidian vault with 7 folders following the Zettelkasten + PARA hybrid:

| Folder | Purpose |
|--------|---------|
| `01_Inbox/` | Raw captures from Web Clipper |
| `02_Journal/` | Daily logs, weekly plans, reflections |
| `03_Garden/` | Evergreen atomic notes (concepts, people, meetings) |
| `04_Projects/` | Active project work |
| `05_Areas/` | Ongoing contexts (learning, content creation) |
| `06_Content/` | Ready-to-publish drafts |
| `07_System/` | System configuration and context files |

### 22 Commands

**Daily Workflow**: `/today`, `/log`, `/ship`, `/close-day`, `/morning`, `/week`

**Knowledge Management**: `/inbox`, `/graduate`, `/relink`, `/vault-search`, `/meeting`

**Thinking & Analysis**: `/challenge`, `/pulse`

**Content Creation**: `/draft`, `/de-ai`

**Learning System**: `/prime`, `/learn`, `/recall`, `/study`

**Advanced**: `/research`, `/overnight`, `/status`

### CLAUDE.md Template
Your AI's personality, goals, anti-patterns, and communication style — all in one file that Claude Code reads on every interaction.

## What Makes This Different

### Anti-Pattern Detection
Your `anti-patterns.md` file captures your recurring failures honestly. `/pulse` reads it and warns you when you're repeating them.

```
PATTERN ALERT: No exercise logs in 14 days (recurring x2 in reviews)
```

### The /challenge Command
Built-in anti-sycophancy. Uses 6 analytical lenses to argue against your beliefs using YOUR vault data:

1. **Opportunity Cost** — What are you NOT doing?
2. **Survivorship Bias** — Are you cherry-picking evidence?
3. **Sunk Cost** — Would you start this today if you hadn't already invested?
4. **Contrarian Evidence** — What in your vault contradicts this?
5. **Second-Order Effects** — What if you're right but the consequences are bad?
6. **Anti-Pattern Match** — Does this match a historical failure?

### Bidirectional Knowledge Flow
Not just note-taking — note-graduating and note-publishing:

```
/inbox  ->  Clips become atomic notes with connections
/graduate  ->  Buried ideas in dailies become permanent notes
/relink  ->  Missing connections get found and created
/draft  ->  Knowledge becomes publishable content
```

### Pareto Goal Alignment (/pulse)
Weekly analysis that tells you if your actions match your stated goals:

```
VITAL 20%
1. Rust         ████████████ 45%
2. AI Agents    ██████░░░░░░ 25%   <- DRIFT (not in goals)
3. Auth         ████░░░░░░░░ 15%

BLIND SPOTS
- "Math for ML" - No engagement in 14 days
- "Content creation" - 5 ideas queued, 0 published
```

### Learning System
Spaced retrieval and knowledge formulation built into your notes:

```
/prime -> Pre-lesson scaffolding (3 min)
/learn -> Create note with review questions
/recall -> Morning quiz from your own notes
/study -> Track consistency
```

## Quick Start

### Prerequisites
- [Obsidian](https://obsidian.md) (free)
- [Claude Code](https://claude.ai/claude-code) ($20/mo)

### Setup

```bash
git clone https://github.com/Railly/second-brain.git
cd second-brain

# Copy vault to your preferred location
cp -r vault/ ~/my-brain/

# Copy commands
cp -r .claude/ ~/my-brain/.claude/

# Copy and customize CLAUDE.md
cp CLAUDE.md ~/my-brain/CLAUDE.md
# Edit CLAUDE.md with your name, goals, anti-patterns

# Open in Obsidian
# File -> Open Vault -> ~/my-brain/
```

### First Commands to Try

```bash
cd ~/my-brain && claude

/log "Setting up my second brain"    # Quick entry
/inbox                                # Process any clips
/challenge "I should use AI for everything"  # Test the anti-sycophancy engine
```

## Documentation

- [Setup Guide](docs/SETUP.md) — Detailed installation and configuration
- [Command Reference](docs/COMMANDS.md) — All 22 commands with examples
- [Philosophy](docs/PHILOSOPHY.md) — Why this system works
- [Customization](docs/CUSTOMIZATION.md) — Add your own commands
- [Advanced](docs/ADVANCED.md) — Always-on assistant, cron, notifications

## The System, Not the Config

Other repos share Claude Code configs. This shares a **system** — commands that reference each other, a vault where knowledge flows from capture to publication, and an AI that knows your weaknesses better than you do.

`/today` feeds `/pulse`. `/inbox` feeds `/graduate`. `/graduate` feeds `/draft`. The flow is the product.

## Built by

[Railly Hugo](https://railly.dev) — AI Software Engineer, founder of [Crafter Station](https://crafterstation.com). I've used this system daily for 4+ months across 20+ projects.

## License

MIT
