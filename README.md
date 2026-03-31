# agent-brain

Your AI already knows your stack, your repos, and your failures. Zero cold starts.

> **[Read the full blog post](https://www.railly.dev/blog/agentic-second-brain)** for architecture, diagrams, and the thinking behind the system.

An open-source personal OS built on Obsidian, compatible with Claude Code, Codex, and any AI agent that reads markdown. Every coding session starts from your vault, every terminal inherits your preferences, and the AI gets smarter every day because it remembers everything.

## Why This Exists

Every AI coding tool starts from zero. You open Claude Code, Codex, Cursor, and the first thing you do is explain your stack, your repos, your preferences. Every session.

This system eliminates that. Your CLAUDE.md loads on startup with your identity, stack, goals, and anti-patterns. Your `07_System/context-files/` folder contains deep context for each project, loaded on demand. The result: 10+ parallel terminal sessions, each starting from the same vault, each able to cross-reference any project.

## Quick Start

```bash
git clone https://github.com/Railly/agent-brain.git
cd agent-brain && claude
/init
```

`/init` asks your name, your stack, your goals, and one recurring failure. Then it creates your vault, generates a personalized CLAUDE.md, copies all commands, scans your machine for repos, and creates your first daily log. Two minutes, zero manual setup.

## What's Inside

### Vault Structure

| Folder | Purpose |
|--------|---------|
| `01_Inbox/` | Raw captures from Web Clipper |
| `02_Journal/` | Daily logs, weekly plans, reflections |
| `03_Garden/` | Evergreen atomic notes (concepts, people, meetings) |
| `04_Projects/` | Active project work |
| `05_Areas/` | Ongoing contexts (work, content, health) |
| `06_Content/` | Ready-to-publish drafts |
| `07_System/` | Context files and configuration |

### 15 Commands

**Daily**: `/morning`, `/today`, `/log`, `/ship`, `/week`

**Knowledge**: `/inbox`, `/relink`, `/vault-search`, `/meeting`, `/research`

**Thinking**: `/challenge`, `/pulse`

**Content**: `/draft`, `/de-ai`

**Setup**: `/init`

### System Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Identity, stack, goals, anti-patterns (read by Claude Code and Codex) |
| `AGENTS.md` | Same content (read by Codex and other agents) |
| `PURPOSE.md` | Architecture and design decisions, for any LLM |
| `HOME.md` | Vault dashboard, stats, quick start |
| `HUMAN.md` | How-to guide for the human |

### Works With Multiple AI Tools

Commands live in both formats:

| Tool | Location | Invocation |
|------|----------|------------|
| Claude Code | `.claude/commands/*.md` | `/command-name` |
| Codex CLI | `.agents/skills/*/SKILL.md` | `$skill-name` |

Same instructions, native format for each tool. No wrappers.

## Key Features

### Programming From Your Vault

Every session starts here, not in the project repo. CLAUDE.md knows your stack preferences (Bun not npm, Biome not ESLint), where every repo lives, and what you've been working on. Context files load on demand:

```
@07_System/context-files/clerk-context.md
@07_System/context-files/crafter-station-context.md
@07_System/context-files/repos-map.md
```

10+ terminal sessions in parallel, all rooted in the vault, each able to reach into any project.

### Auto-Logging With /ship

Every `/ship` commits your code, pushes, and auto-logs to the daily journal. You never manually write "today I worked on auth". Over months, those data points become a complete record of what you actually do vs what you think you do.

### Anti-Pattern Detection

Formalize your recurring failures in CLAUDE.md. `/pulse` checks them against actual data weekly:

```
PATTERN ALERT: No exercise logs in 10 days (recurring x2)
BLIND SPOT: "Math for ML", no engagement in 14 days
```

### /challenge (Anti-Sycophancy)

Argues against your own beliefs using vault evidence across six lenses: opportunity cost, survivorship bias, sunk cost, contrarian evidence, second-order effects, and anti-pattern matches.

### Pareto Analysis (/pulse)

Weekly analysis that ranks your interests by engagement weight, flags drift, and surfaces blind spots:

```
VITAL 20%
1. Auth/Clerk    ████████████ 45%
2. AI Agents     ██████░░░░░░ 25%
3. Community     ████░░░░░░░░ 15%
```

## Documentation

| Doc | Content |
|-----|---------|
| [Setup Guide](docs/SETUP.md) | Detailed installation and configuration |
| [Command Reference](docs/COMMANDS.md) | All 15 commands with examples |
| [Philosophy](docs/PHILOSOPHY.md) | Why this system works |
| [Customization](docs/CUSTOMIZATION.md) | Add your own commands |
| [Advanced](docs/ADVANCED.md) | Always-on assistant, cron, multi-agent |

## The System, Not the Config

Other repos share AI configs. This shares a system where commands reference each other, knowledge flows from capture to publication, and the AI knows your weaknesses better than you do.

`/today` feeds `/pulse`. `/inbox` feeds the garden. `/relink` connects the dots. `/ship` logs everything. The flow is the product.

## Built by

[Railly Hugo](https://railly.dev), AI Software Engineer at [Clerk](https://clerk.com), founder of [Crafter Station](https://crafterstation.com). Used daily for 4+ months across 20+ repos.

## License

MIT
