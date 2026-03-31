---
type: concept
created: 2026-02-18
themes:
  - ai
  - agents
  - patterns
sources: []
people: []
---
# Tool Use Patterns

How AI agents interact with external tools effectively.

## Key ideas
- Tools extend what a model can do beyond text generation
- The tool description matters more than the implementation, models decide what to call based on the description
- Fewer, well-described tools > many vague tools
- Error messages from tools should be actionable, not just "failed"

## Common patterns
- **Read-then-write**, Always read current state before modifying
- **Confirmation loop**, Show the plan, ask for approval, then execute
- **Fallback chains**, If tool A fails, try tool B with adjusted params
- **Batching**, Group independent tool calls to reduce round trips

## Anti-patterns
- Giving models 50+ tools (decision paralysis)
- Tools with overlapping functionality (ambiguous routing)
- Tools that silently fail (model doesn't know something went wrong)

## Connections
- [[context-engineering]] - Tool descriptions are part of the context window
