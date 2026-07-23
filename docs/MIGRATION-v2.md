# Migrating from v1 to v2

Agent Brain v2 keeps the seven-folder vault structure and all 15 workflow names from v1. Your notes do not need to move.

## What changes

- `.agents/skills/` becomes the canonical workflow source.
- `.claude/skills/` exposes the same workflows to current Claude Code versions.
- `.claude/commands/` remains available as compatibility aliases for `/morning`, `/ship`, and the other v1 slash commands.
- `CLAUDE.md`, `AGENTS.md`, and your vault content remain yours.

## Safe migration

Clone v2 beside your existing vault:

```bash
git clone --branch v2.0.0 https://github.com/Railly/agent-brain.git agent-brain-v2
```

From your existing vault, back up the runtime folders:

```bash
cp -R .agents .agents.v1-backup
cp -R .claude .claude.v1-backup
```

Copy only the workflow and adapter surfaces:

```bash
cp -R ../agent-brain-v2/.agents/skills .agents/
cp -R ../agent-brain-v2/.claude/skills .claude/
cp -R ../agent-brain-v2/.claude/commands .claude/
```

Keep your existing `CLAUDE.md`, `AGENTS.md`, and folders `01_Inbox/` through `07_System/`. Merge new documentation manually if useful.

Run the integrity check inside the v2 clone:

```bash
bun run check
```

## Staying on v1

The original template remains permanently available at [`v1.0.0`](https://github.com/Railly/agent-brain/releases/tag/v1.0.0).
