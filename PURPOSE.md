---
type: system
---
# Purpose

## For AI Agents Reading This

This vault is a **personal OS**, a persistent knowledge system designed to give AI coding agents full context about the user across every session.

## How It Works

The vault stores identity, goals, anti-patterns, project context, daily logs, and atomic notes. When an AI agent starts a session here, it reads CLAUDE.md (or AGENTS.md) and immediately knows:

- Who the user is and what they do
- Their stack preferences and tooling choices
- Where every repo lives on their machine
- Their active projects and current priorities
- Their recurring failures and how to detect them

This eliminates cold starts. Session 100 is more useful than session 1 because the system accumulates real context over time.

## Architecture

```
CLAUDE.md / AGENTS.md    -> Agent reads on startup (identity, stack, goals, anti-patterns)
07_System/context-files/ -> Deep per-project context, loaded on demand via @ references
02_Journal/daily/        -> Auto-logged daily activity from /ship and /log
03_Garden/concepts/      -> Permanent knowledge notes with backlinks
.claude/commands/        -> 14 executable workflows
```

## Design Decisions

1. **Obsidian as persistence**: Markdown files, local-first, no vendor lock-in, graph view for connections
2. **Commands as workflows**: Each `.claude/commands/*.md` is a multi-step recipe the AI executes
3. **Context files over memory**: Explicit files the user controls, not opaque AI memory
4. **Anti-patterns as data**: Formalized failures with signals and interventions, checked weekly by `/pulse`
5. **Auto-logging over manual journaling**: `/ship` captures work automatically, reducing friction to zero
