# Setup Guide

## Prerequisites

1. **Obsidian** (free), [obsidian.md](https://obsidian.md)
2. **Claude Code** ($20/mo), [claude.ai/claude-code](https://claude.ai/claude-code)
3. **Git**, for version control of your vault

## Quick Start

```bash
git clone https://github.com/Railly/agent-brain.git
cd agent-brain
```

### Option A: Interactive Setup (Recommended)
```bash
bun run setup.sh
```

This will:
1. Ask for your name, role, and goals
2. Copy the vault template to your chosen location
3. Generate a personalized CLAUDE.md
4. Set up commands

### Option B: Manual Setup

1. Copy the `vault/` directory to your preferred location:
```bash
cp -r vault/ ~/my-brain/
```

2. Copy `.claude/commands/` into your vault:
```bash
cp -r .claude/ ~/my-brain/.claude/
```

3. Copy and customize `CLAUDE.md`:
```bash
cp CLAUDE.md ~/my-brain/CLAUDE.md
```

4. Edit `CLAUDE.md` with your personal info (name, goals, anti-patterns)

5. Open Obsidian → "Open folder as vault" → select your vault directory

## Web Clipper Setup (Optional but Recommended)

1. Install [Obsidian Web Clipper](https://obsidian.md/clipper) browser extension
2. Configure:
   - **Folder**: `01_Inbox/`
   - **Note name**: `{{date}}-{{title|slugify}}`
   - **Behavior**: Create new note

Now anything you clip lands in your inbox, ready for `/inbox` to process.

## Recommended Obsidian Plugins

- **Dataview**, Query your notes programmatically
- **Calendar**, Visual daily note navigation
- **Graph View** (built-in), See your knowledge graph

## Verify Installation

1. Open terminal in your vault directory
2. Run `claude`
3. Try: `/log "Testing my second brain"`
4. Check: `02_Journal/daily/` should have today's file with your entry

## Next Steps

- Read [COMMANDS.md](COMMANDS.md) for the full command reference
- Read [PHILOSOPHY.md](PHILOSOPHY.md) to understand the system
- Start with `/log` and `/inbox`, they're the gateway commands
