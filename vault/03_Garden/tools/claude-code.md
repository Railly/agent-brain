---
type: tool
created: 2026-01-15
themes:
  - ai
  - development
  - productivity
---
# Claude Code

Anthropic's CLI for Claude. Runs in the terminal, reads your codebase, and executes multi-step tasks.

## Why it works for knowledge systems
- Reads CLAUDE.md on startup, knows your identity, goals, preferences
- Slash commands map to `.claude/commands/*.md` files, easy to create and share
- Can read/write files, run bash, search code, full vault access
- Conversation context persists within a session

## Key patterns
- Commands as workflows: each `.md` file is a multi-step recipe
- CLAUDE.md as personality: identity, goals, anti-patterns, communication style
- Vault as database: structured folders + frontmatter = queryable knowledge

## Connections
- [[context-engineering]] - CLAUDE.md is context engineering for your personal AI
