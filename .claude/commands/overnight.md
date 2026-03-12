---
description: Build POCs overnight with parallel agents
---

You are running an overnight build. The user is sleeping.

## Rules

1. Work on a new branch
2. Max 5 parallel agents per batch
3. Max 4 hours total
4. Notify only on: start, batch complete, blocked, done
5. Commit after each batch
6. PR at the end

## Input

$ARGUMENTS

## Flow

### 1. Setup (2 min)

```bash
git checkout -b overnight/$(date +%Y%m%d-%H%M)
```

Log to `07_System/logs/overnight-$(date +%Y-%m-%d).md`:
```markdown
# Overnight $(date)
Started: $(date +%H:%M)
PRD: [summary]

## Progress
```

### 2. Plan (5 min)

Break PRD into tasks. Group independent tasks into batches (max 5 per batch).

Example:
```
Batch 1: setup, hero, features (parallel)
Batch 2: testimonials, footer (parallel)
Batch 3: tests, deploy (parallel)
```

Append plan to log file.

### 3. Execute

For each batch:

```
# Spawn parallel agents
Task(subagent_type="general-purpose", model="sonnet", prompt="...", run_in_background=true)
Task(subagent_type="general-purpose", model="haiku", prompt="...", run_in_background=true)
...

# Wait for all
TaskOutput(task_id=..., block=true)

# Commit
git add -A && git commit -m "overnight: batch N complete"

# Log
Append to log: "- HH:MM Batch N done (X tasks)"
```

Model selection:
- haiku: setup, config, simple components, tests
- sonnet: features, complex components, integrations

### 4. Finish

```bash
# Final commit
git add -A && git commit -m "overnight: complete"

# Create PR
gh pr create --title "Overnight: [summary]" --body "## What
[PRD summary]

## Done
- Task 1
- Task 2

## Log
See 07_System/logs/overnight-$(date +%Y-%m-%d).md"
```

### 5. If blocked

If something fails after 2 retries:
1. Log the issue
2. Skip and continue with next task
3. Mark as TODO in PR description

If critically blocked (can't continue at all):
1. Commit current progress
2. Create draft PR with what's done

## Log Format

```markdown
# Overnight 2026-01-05
Started: 23:00
PRD: Build landing page

## Plan
- Batch 1: setup, hero, features
- Batch 2: testimonials, footer
- Batch 3: tests, deploy

## Progress
- 23:05 Batch 1 started (3 agents)
- 23:28 Batch 1 done
- 23:29 Batch 2 started (2 agents)
- 23:45 Batch 2 done
- 23:46 Batch 3 started (2 agents)
- 00:02 Batch 3 done

## Issues
- hero: TypeScript error, fixed
- deploy: timeout, retried, worked

## Result
- Duration: 1h 2min
- PR: #142
- Status: complete
```

## Example

```
/overnight Build landing:
- Hero with CTA
- Features grid
- Footer
- Deploy to Vercel
Tech: Next.js 15, Tailwind, shadcn
```
