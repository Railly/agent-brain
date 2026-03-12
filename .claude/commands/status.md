---
description: Real-time snapshot of all repos - branches, commits, changes
---

Show current state across your repositories.

## Phase 1: Discover Repos

Scan common locations for git repos:

```bash
find ~/Programming -maxdepth 3 -name ".git" -type d 2>/dev/null | sed 's/\/.git$//'
```

## Phase 2: Check Each Repo

For each discovered repo with recent activity (changes or commits in last 7 days):

```bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
AHEAD=$(git rev-list --count @{u}..HEAD 2>/dev/null || echo "0")
BEHIND=$(git rev-list --count HEAD..@{u} 2>/dev/null || echo "0")
STAGED=$(git diff --cached --numstat | wc -l | xargs)
MODIFIED=$(git diff --numstat | wc -l | xargs)
UNTRACKED=$(git ls-files --others --exclude-standard | wc -l | xargs)
STASHES=$(git stash list | wc -l | xargs)
LAST_COMMIT=$(git log --all -1 --pretty=format:"%cr - %s")
RECENT=$(git log --all --since="7 days ago" --oneline 2>/dev/null | wc -l | xargs)
```

Only show repos where activity exists: staged, modified, untracked, stashed, or recent commits.

## Phase 3: Format Output

```
┌─ {repo-name} ──────────────────────────────────────────
│ Branch: {branch} ({ahead} ahead, {behind} behind origin)
│ Staged: {n} files
│ Modified: {n} files
│ Untracked: {n} files
│ Stashed: {n} entries
│ Last commit: {time} - "{message}"
└────────────────────────────────────────────────────────
```

**Simplifications:**
- If ahead=0 and behind=0, show "(up to date)"
- If no remote tracking, show "(no remote)"
- If staged=0, omit line
- If modified=0, omit line
- If untracked=0, omit line
- If stashes=0, omit line

## Phase 4: Summary Stats

```
────────────────────────────────────────────────────────
Summary:
- {n} repos with uncommitted changes
- {n} commits not pushed
- {n} stashed changes
- {n} repos active in last 7 days
────────────────────────────────────────────────────────
```

## Phase 5: Actionable Suggestions

Based on findings:
- If 3+ repos with uncommitted changes: "Consider committing or stashing work in progress"
- If 5+ commits not pushed: "Push your work to backup progress"
- If 2+ stashed changes: "Review stashes — might have WIP worth resuming"
- If diverged branches: "Pull {repo} to sync with remote"

## Implementation Notes

1. **Performance**: Only scan repos with activity (git status shows changes OR commits in last 7 days)
2. **All branches**: `git log --all` to catch commits on any branch, not just current
3. **Skip clean repos**: Don't show repos with zero activity to reduce noise
4. **Time format**: Use `git log --pretty=format:"%cr"` for human-readable time (2h ago, 3 days ago)
5. **Monorepos**: For large monorepos, show root status only
