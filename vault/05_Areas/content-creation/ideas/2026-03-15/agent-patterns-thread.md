---
type: content-idea
format: thread
status: idea
source: "[[03_Garden/concepts/tool-use-patterns]]"
created: 2026-03-15
priority: 2
---
# 3 Agent Patterns That Survive Production

Most agent demos work perfectly. Most agent products don't. Here's what separates them.

## Hook
Every agent tutorial shows the happy path. Nobody talks about what happens when step 5 of 8 fails at 3am.

## Thread outline
1. Hook (above)
2. Pattern 1: Checkpoint & Resume, save state between steps
3. Pattern 2: Error-aware retries, parse the error, adjust the prompt
4. Pattern 3: Human escalation, build the escape hatch before you need it
5. The common thread: assume failure, design for recovery
6. CTA: link to blog post (if written)

## Notes
- Source article in inbox, good examples to reference
- Could pair with a code snippet showing checkpoint pattern
