# Setup

## Prerequisites

1. [Obsidian](https://obsidian.md) for browsing and editing the vault
2. Claude Code, Codex, or another agent that reads Markdown instructions
3. Git for local history and synchronization
4. Bun for the template integrity check

## Guided setup

Clone the latest release:

```bash
git clone --branch v2.0.0 https://github.com/Railly/agent-brain.git
cd agent-brain
claude
```

Run:

```text
/init
```

The workflow asks for your identity, stack, goals, one recurring failure, and the destination for your vault. It then:

1. Creates the seven-folder structure.
2. Installs canonical skills and Claude Code adapters.
3. Generates personalized `CLAUDE.md` and `AGENTS.md`.
4. Discovers local Git repositories.
5. Creates the first daily log.

`/init` stops when the destination already looks like an existing vault. Use the [v2 migration guide](MIGRATION-v2.md) instead of overwriting it.

## Manual setup

Copy the vault template:

```bash
cp -R vault ~/my-brain
```

Copy canonical skills and adapters:

```bash
cp -R .agents ~/my-brain/.agents
cp -R .claude ~/my-brain/.claude
```

Copy and personalize the context templates:

```bash
cp CLAUDE.md ~/my-brain/CLAUDE.md
cp AGENTS.md ~/my-brain/AGENTS.md
```

Open `~/my-brain` as an Obsidian vault, then start your agent from that directory.

## Verify the release clone

```bash
bun run check
```

This verifies the packaged template. Your personalized vault does not need to keep the checker.

## Web Clipper

Configure the Obsidian Web Clipper to create notes in `01_Inbox/`. `/inbox` processes those captures into durable notes.

## First loop

```text
/log "Testing my second brain"
/morning
/today
```

Then read [COMMANDS.md](COMMANDS.md) and customize only the workflows you actually use.
