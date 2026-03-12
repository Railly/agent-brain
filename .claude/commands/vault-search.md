---
description: Research topic by searching vault and synthesizing findings
---

Research in vault: $ARGUMENTS

## IMPORTANT: Be direct
- Search vault with Grep, read notes, synthesize
- This is vault-only search (not web)

## Flow

1. **Keyword search** (primary)
   Search across all vault folders using Grep with the topic keywords:
   - `01_Inbox/`
   - `02_Journal/`
   - `03_Garden/`
   - `04_Projects/`
   - `05_Areas/`
   - `06_Content/`

2. **Read top results** thoroughly
   - Read matching files for full context
   - Deduplicate overlapping results

3. **Synthesize findings** into summary

## Output Format

```markdown
# Vault Research: {topic}

## Matches
- [[note1]]: {key insight}
- [[note2]]: {key insight}

## Key Themes
1. **Theme 1**
   - Supporting: [[note1]], [[note2]]
   - Insight: {synthesis}

## Contradictions
- {where ideas conflict}

## Gaps
- What's missing in vault

## Connections
- Related: [[topic1]], [[topic2]]

## Next Steps
1. {specific action}
```

## When to Use
- `/vault-search` - search YOUR vault (what you already know)
- `/research` - search the WEB (new information)
