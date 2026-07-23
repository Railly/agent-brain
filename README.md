# Agent Brain

Your AI already knows your stack, repos, goals, and recurring failures. Zero cold starts.

Agent Brain is a local-first personal operating system built with Obsidian and Markdown. It gives Claude Code, Codex, and other coding agents a shared source of context plus reusable workflows for daily work, retrieval, reflection, and shipping.

Read the series:

- [Obsidian as a Personal OS for AI Coding Agents](https://www.railly.dev/blog/agentic-second-brain), the v1 architecture
- [My Agentic Second Brain, Four Months Later](https://www.railly.dev/blog/agentic-second-brain-four-months-later), the v2 update

## Releases

- [`v2.0.0`](https://github.com/Railly/agent-brain/releases/tag/v2.0.0), canonical skills and multi-runtime adapters
- [`v1.0.0`](https://github.com/Railly/agent-brain/releases/tag/v1.0.0), frozen March 2026 template

## Quick start

```bash
git clone --branch v2.0.0 https://github.com/Railly/agent-brain.git
cd agent-brain
claude
/init
```

`/init` asks for your identity, stack, goals, recurring failure, and vault location. It creates the seven-folder vault, installs all runtime adapters, generates personalized context files, discovers local repos, and creates the first daily log.

Already using v1? Follow the [non-destructive migration guide](docs/MIGRATION-v2.md). Your notes and personalized context do not need to move.

## What changed in v2

The first release proved that a vault could remove the cold start from coding sessions. The second release makes the template easier to evolve without runtime drift.

- `.agents/skills/` is the canonical source for all workflows.
- `.claude/skills/` exposes generated copies to Claude Code.
- `.claude/commands/` preserves generated slash command aliases.
- The seven-folder vault and all 15 workflow names remain unchanged.
- `bun run check` verifies skills, adapters, documentation, and mirrored templates.
- Migration copies system surfaces only. It never replaces personal notes or context files.

## Vault structure

| Folder | Purpose |
|---|---|
| `01_Inbox/` | Raw captures from Web Clipper |
| `02_Journal/` | Daily logs, weekly plans, and reflections |
| `03_Garden/` | Evergreen concepts, people, tools, and meetings |
| `04_Projects/` | Active project work |
| `05_Areas/` | Ongoing contexts such as work, learning, and health |
| `06_Content/` | Drafts ready to refine or publish |
| `07_System/` | Context maps, conventions, and system configuration |

## Fifteen workflows

**Daily:** `/morning`, `/today`, `/log`, `/ship`, `/week`

**Knowledge:** `/inbox`, `/relink`, `/vault-search`, `/meeting`, `/research`

**Thinking:** `/challenge`, `/pulse`

**Content:** `/draft`, `/de-ai`

**Setup:** `/init`

## One source, multiple runtimes

```text
.agents/skills/<name>/SKILL.md   canonical workflow contract
.claude/skills/<name>/SKILL.md   Claude Code skill adapter
.claude/commands/<name>.md       v1-compatible slash command alias
```

Run `bun run sync` after changing a canonical skill. The generated adapters are normal files so the template works on macOS, Linux, and Windows. `bun run check` fails if any adapter drifts.

## System files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Identity, stack, goals, and operating preferences for Claude Code |
| `AGENTS.md` | The same context for Codex and other agents |
| `PURPOSE.md` | Architecture and design decisions |
| `HOME.md` | Vault dashboard and entry points |
| `HUMAN.md` | Daily workflow guide for the owner |

## Core loop

```text
capture -> process -> connect -> use -> reflect
```

- `/inbox` turns raw captures into durable notes.
- `/relink` finds missing relationships.
- `/vault-search` retrieves local evidence.
- `/ship` commits and pushes work, then logs it to the daily journal.
- `/today` and `/pulse` turn activity into reflection and course correction.

The system improves through explicit files and version history, not opaque model memory.

## What this template does not include

The public template is the portable persistence and workflow layer. It does not ship the private queue, daemon, messaging gateways, background workers, or policy engine described in the second article. Those systems are still evolving and should not be presented as a stable starter kit.

It also does not claim to measure software quality. Checks can verify template integrity, and review gates can track findings that escape review, but neither is a complete measure of reliability, maintainability, or user outcomes.

## Documentation

| Document | Purpose |
|---|---|
| [Setup](docs/SETUP.md) | New installation and manual setup |
| [Migration v2](docs/MIGRATION-v2.md) | Safe upgrade from v1 |
| [Commands](docs/COMMANDS.md) | All 15 workflows |
| [Customization](docs/CUSTOMIZATION.md) | Add or change canonical skills |
| [Philosophy](docs/PHILOSOPHY.md) | Principles behind the system |
| [Advanced](docs/ADVANCED.md) | Boundaries for automation and control planes |
| [v2 review](docs/REVIEW-v2.0.0.md) | Deterministic checks, migration proof, and lens results |
| [Changelog](CHANGELOG.md) | Release history |

## Verify the template

```bash
bun run check
```

The check fails when a canonical skill is missing, frontmatter is invalid, an adapter is stale, a documented workflow does not exist, or mirrored templates drift.

## Built by

[Railly Hugo](https://railly.dev), Software Engineer at Vercel Labs and founder of [Crafter Station](https://crafterstation.com).

## License

MIT
