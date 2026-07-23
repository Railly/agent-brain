# Workflow reference

All workflows live in `.agents/skills/`. Claude Code can invoke them through skills or the original slash command aliases.

## Daily

### /morning

Build a morning briefing from the weekly plan, unfinished tasks, calendar context when available, and current priorities.

### /today

Summarize completed work, carry unfinished tasks forward, reflect on the day, and prepare tomorrow.

### /log

Append a timestamped thought, decision, or activity to today's journal.

```text
/log "Learned why the cache invalidation path was stale"
```

### /ship

Inspect the current Git changes, create and push a conventional commit, optionally open a PR, and append the result to the daily journal.

```text
/ship
/ship pr
```

### /week

Create or update the weekly goal and most important tasks.

## Knowledge

### /inbox

Process Web Clipper captures into atomic notes and mark the source as processed.

### /relink

Find related notes that should reference each other and propose or create backlinks.

### /vault-search

Search the local vault and synthesize an answer from its notes without using the web.

### /meeting

Turn meeting notes or a transcript into a structured record with decisions and action items.

### /research

Research a topic on the web, preserve sources, and save the result in the vault.

## Thinking

### /challenge

Argue against a belief or decision using evidence from the vault and explicit counter-lenses.

### /pulse

Run a weekly review across goals, activity, recurring failures, drift, and neglected areas.

## Content

### /draft

Turn a vault idea or cluster of notes into a content draft.

### /de-ai

Remove generic AI phrasing while preserving the author's meaning and voice.

## Setup

### /init

Create a new personalized vault and install the runtime adapters. It does not migrate an existing vault.
