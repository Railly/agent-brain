# Agent Brain review conventions

## Oracles

- `bun run check` verifies canonical skills, runtime adapters, documented workflow names, mirrored templates, and vault folders.
- `git diff --check` verifies patch integrity.

## Surfaces

```surfaces
.agents/skills/*/SKILL.md :: .claude/commands/*.md, .claude/skills/*, docs/COMMANDS.md, scripts/check-template.ts, scripts/sync-adapters.ts
.claude/commands/* :: .agents/skills/*/SKILL.md, scripts/check-template.ts, scripts/sync-adapters.ts
.claude/skills/* :: .agents/skills/*/SKILL.md, scripts/check-template.ts, scripts/sync-adapters.ts
CLAUDE.md :: AGENTS.md
AGENTS.md :: CLAUDE.md
HOME.md :: vault/HOME.md
vault/HOME.md :: HOME.md
HUMAN.md :: vault/HUMAN.md
vault/HUMAN.md :: HUMAN.md
PURPOSE.md :: vault/PURPOSE.md
vault/PURPOSE.md :: PURPOSE.md
VERSION :: package.json, CHANGELOG.md, README.md
docs/SETUP.md :: .agents/skills/init/SKILL.md
docs/COMMANDS.md :: scripts/check-template.ts
```

## Norms

- Use Bun for template checks.
- Keep the seven vault folders and all 15 v1 workflow names compatible in v2.
- Treat `.agents/skills/` as the only workflow source of truth.
- Generate `.claude/skills/` and `.claude/commands/` with `bun run sync`.
- Never overwrite personal notes or personalized context during migration.
- Keep `CLAUDE.md` and `AGENTS.md` identical in the template.
- Keep root and `vault/` copies of `HOME.md`, `HUMAN.md`, and `PURPOSE.md` identical.
- Do not use em dashes in added prose.

## Gate-miss ledger

Empty at v2.0.0.
