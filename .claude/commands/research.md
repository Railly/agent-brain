---
description: Research a topic and save findings to vault
---

Topic: $ARGUMENTS

## Research Methods (choose based on need)

### Static Content (default)
1. Use WebSearch to find relevant information
2. Use WebFetch to read key sources

### Dynamic/Interactive Content (use agent-browser)
When pages require JavaScript, login, or interaction:
```bash
agent-browser open "https://example.com"
agent-browser snapshot -i
agent-browser click @e3  # if needed
agent-browser snapshot -i  # get updated content
agent-browser close
```

## Process
1. Search and gather sources (WebSearch + WebFetch or agent-browser)
2. Synthesize findings into structured notes
3. Save to `05_Areas/research/$ARGUMENTS.md` with:
   - Summary
   - Key points
   - Sources
   - Action items if applicable

Format:

```markdown
# $ARGUMENTS

## Summary
Brief overview of the topic.

## Key Points
- Point 1
- Point 2

## Sources
- [Title](url)

## Action Items
- [ ] Next step

## Related
- [[Related Topic]]
```

Link to relevant existing notes if applicable.
