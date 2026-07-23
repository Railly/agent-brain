# Advanced architecture

Agent Brain v2 is the persistence and workflow layer. It can support more automation, but the vault should remain the durable source of intent and evidence.

## Replaceable workers

A coding model is a worker, not the owner of task state. If you add background agents, keep admission, retries, dependencies, risk, and completion state outside the model session.

```text
vault -> task state -> isolated worker -> checks -> review -> durable artifact
```

The worker may change. The task contract and evidence should survive it.

## Bounded automation

Before scheduling a workflow, define:

1. What inputs admit the task.
2. Which files and systems it may change.
3. Which actions require human approval.
4. What evidence marks completion.
5. How failure and partial progress are recorded.

Cron and messaging gateways are transport. They do not provide these guarantees by themselves.

## Retrieval

Keyword search is a reliable baseline. Semantic search can improve recall, but indexes become stale. Track freshness and preserve a keyword fallback.

## Review and quality

A review gate can track findings that escape each review round and turn recurring findings into deterministic checks. That measures review effectiveness.

It does not fully measure software quality. Reliability, maintainability, recovery time, human review time, escaped production defects, and user outcomes need separate evidence.

## Private control planes

The public template does not include a queue daemon, provider scheduler, WhatsApp gateway, or autonomous promotion pipeline. Those systems can sit above this vault, but they should be released only when their state model, authority boundaries, and recovery behavior are stable.
