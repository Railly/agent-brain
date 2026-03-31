---
name: ship
description: Commit, push, and optionally create PR
---

---
description: Commit, push, and optionally create PR
---

Ship current changes: $ARGUMENTS

1. Run `git status` to see changes
2. Run `git diff --stat` for overview
3. Stage relevant files (or all if no specific files mentioned)
4. Create commit with conventional format:
   - feat: new feature
   - fix: bug fix
   - docs: documentation
   - refactor: refactoring
   - chore: maintenance
5. Push to remote
6. If $ARGUMENTS contains "pr" or "--pr", create PR with `gh pr create`
7. Log to daily file: append `- [HH:MM] **shipped**: {commit message}` to `02_Journal/daily/YYYY-MM-DD.md`

Commit message format: `type(scope): description`
