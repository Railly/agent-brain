# v2.0.0 review

## Scope

This review covers the v2 template migration from duplicated runtime instructions to canonical skills with generated adapters.

The author and reviewer used the same model family. This can preserve shared blind spots, so the deterministic and filesystem checks below carry more weight than the judgment pass.

## Deterministic results

- `bun run check`: passed with 15 skills, 30 adapters, and seven vault folders.
- `git diff --check`: passed.
- Review gate style check: passed.
- Review gate surface map: passed.
- Retired `setup.sh`, `/graduate`, and `/prime` references: zero hits in active documentation.
- Canonical workflow sibling sweep: passed.

## Empirical results

- Migrated a temporary checkout of `v1.0.0` using the documented copy commands.
- Confirmed `CLAUDE.md` was unchanged.
- Confirmed the `ship` command and skill adapters matched the canonical skill.
- Exported the staged v2 tree and ran the template checker successfully.
- Replaced one generated adapter with the wrong skill and confirmed the checker failed.

## Lens dispositions

- Deliberate default: passed. All v1 workflow names and vault folders remain available.
- Error path forcing: passed. A stale adapter was forced and rejected.
- Boundary pipeline trace: passed. Canonical skills materialize into both Claude Code surfaces.
- Substrate verification: passed on the exported filesystem tree.
- Docs behavior parity: passed across README, setup, migration, commands, customization, and advanced docs.
- Demonstrative example: passed by executing the documented migration shape against v1.
- Inverse regression surface: skipped because no parser, matcher, or lookup source changed.
- New domain matrix: skipped because no validator or input domain widened.
- Fresh seam scan: skipped because no runtime was patched.
- Reference implementation oracle: skipped because no external behavior was reimplemented.
- Flag propagation: skipped because no flag or mode was added.
- New failure outcome propagation: skipped because no callable contract changed.
- Non-destructive recovery: skipped because no heuristic recovery action was added.
- Cancellation and timeout hygiene: skipped because no asynchronous operation changed.
- Choice audit: skipped because no decision trail was emitted.

## Finding fixed

The first adapter design used Git symlinks. That can degrade on Windows when symlink checkout is unavailable. v2 now materializes normal files with `bun run sync`, and `bun run check` rejects drift.

## Exemptions claimed

The private queue, daemon, messaging gateways, background workers, and policy engine are intentionally outside this public template. The README and advanced guide state that boundary directly.

## Issue candidates

None.
