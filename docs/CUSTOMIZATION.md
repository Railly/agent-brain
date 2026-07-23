# Customization

## Canonical workflow source

Edit workflows only in:

```text
.agents/skills/<name>/SKILL.md
```

The Claude Code surfaces are generated adapters:

```text
.claude/skills/<name>/SKILL.md
.claude/commands/<name>.md
```

Do not edit adapters directly. Regenerate them from the canonical skills.

## Add a workflow

Create the canonical file:

```text
.agents/skills/standup/SKILL.md
```

Use this structure:

```markdown
---
name: standup
description: Generate a concise standup from recent vault evidence
---

Generate a standup update.

1. Read yesterday's daily log.
2. Read today's weekly priorities.
3. Report yesterday, today, and blockers in five lines or fewer.
```

Generate the adapters:

```bash
bun run sync
```

Add the workflow to `docs/COMMANDS.md` and extend `scripts/check-template.ts` when contributing it to this template. Run `bun run check` before committing.

## Personal context

Customize `CLAUDE.md` and `AGENTS.md` with:

- identity and current roles
- stack and tool constraints
- current goals
- recurring failures with observable signals
- communication preferences
- pointers to deeper context files

Keep the startup files lean. Put detailed repo maps, project histories, and reference material under `07_System/context-files/`, then load them only when relevant.

## Extend the vault

Add ongoing contexts under `05_Areas/` and document structural changes in `07_System/context-files/knowledge-system.md`.

Your folder names can evolve. The workflows only need their referenced paths updated together.
