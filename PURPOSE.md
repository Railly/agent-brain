---
type: system
---
# Purpose

## For agents reading this

This vault is a local-first personal operating system. It gives coding agents persistent, user-controlled context across sessions without depending on opaque model memory.

## What the vault stores

- identity, goals, preferences, and recurring failures
- repository and project context
- daily and weekly activity
- atomic notes and relationships
- drafts, decisions, and evidence

## Architecture

```text
CLAUDE.md / AGENTS.md       lean startup context and pointers
07_System/context-files/    deeper context loaded when relevant
.agents/skills/             canonical workflow contracts
.claude/skills/             generated Claude Code skill adapters
.claude/commands/           generated v1-compatible aliases
02_Journal/                 durable activity and reflection
03_Garden/                  durable knowledge
```

## Design decisions

1. Markdown is the persistence layer so the user owns and can inspect the system.
2. `.agents/skills/` is the only workflow source of truth.
3. Runtime adapters are generated and checked against the canonical skills.
4. Startup context stays lean and points to deeper files.
5. `/ship` and `/log` reduce journaling friction by recording real activity.
6. `/pulse` checks stated goals and recurring failures against vault evidence.
7. Migration changes system surfaces without replacing personal notes.

## Quality boundary

Template checks verify packaging integrity. Review gates can measure findings that escape review. Neither is a complete measure of software quality, production reliability, maintainability, or user outcomes.
