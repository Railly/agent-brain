---
type: concept
created: 2026-02-20
themes:
  - ai
  - agents
  - engineering
sources:
  - "[[01_Inbox/processed/2026-02-20/context-window-management]]"
people:
  - "[[Simon Willison]]"
---
# Context Engineering

The art of deciding what an AI model sees. Not prompt engineering (what you say), but context engineering (what surrounds what you say).

## Key ideas
- Context windows are large but attention is finite, more tokens != better results
- The skill is curation: what to include, what to exclude, what order to present it
- System prompts, few-shot examples, retrieved documents, conversation history, all compete for attention
- Put the most important information at the beginning and end (primacy/recency effects apply to LLMs too)

## Techniques
- **Summarize, don't dump**, Condense long documents before including them
- **Relevance filtering**, Only include files/docs that matter for the current task
- **Progressive disclosure**, Start with high-level context, add detail only when needed
- **Structured formatting**, Headers, lists, and clear sections help the model parse

## Connections
- [[tool-use-patterns]] - Tools are a form of dynamic context injection
- [[agent-led-growth]] - Agents that parse docs well are doing context engineering

## Content potential
- Thread: "Prompt engineering is dead. Context engineering is what matters now."
