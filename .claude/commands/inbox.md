---
description: Process unprocessed clips from Web Clipper into atomic notes
---

Process pending clips from `01_Inbox/`.

## IMPORTANT: Be direct
- Don't check if folders exist - they do
- Don't search for existing notes - just write
- Don't read ideas.md before appending - just append
- Minimize tool calls

## Flow

1. **Find unprocessed clips**
   List all `.md` files directly in `01_Inbox/` - these are unprocessed.

2. **For each clip** (read content, extract insight, identify topic)

3. **Create atomic note** in `03_Garden/concepts/{topic-slug}.md` (FLAT, evergreen):

   ```markdown
   ---
   type: concept
   created: {{date}}
   themes: []
   sources:
     - "[[01_Inbox/processed/{{date}}/{processed-slug}]]"
   people: []
   ---
   # {Topic}

   {1-2 sentence insight}

   ## Key ideas
   - {extracted points}

   ## Connections
   - [[Related concept]] - how it relates
   ```

   **If concept already exists**: Append to Key ideas + add new source to `sources:` array

4. **Extract content ideas** to `05_Areas/content-creation/ideas/{{date}}/{slug}.md`:

   ```markdown
   ---
   type: content-idea
   format: tweet | thread | blog | short | tutorial
   status: idea
   source: "[[03_Garden/concepts/{concept-slug}]]"
   created: {{date}}
   priority: 3
   ---
   # {Title}

   {The content idea - actual tweet text, thread hook, or blog thesis}

   ## Hook
   {Why this will resonate}

   ## Notes
   - {Additional context}
   ```

5. **Enrich with metadata**:
   - **People**: If author or people mentioned, create `03_Garden/people/{person-name}.md` if doesn't exist
   - **Location**: If place mentioned, add coordinates to concept note

6. **Find connections**
   - List existing notes: `03_Garden/concepts/`
   - Look for related topics (semantic similarity, shared tags)
   - Add backlinks to the new concept and existing related concepts

7. **Mark clip as processed** - add `generated:` links + move to date folder:

   First, update the clip's frontmatter to add the `generated:` field:
   ```yaml
   ---
   generated:
     - "[[03_Garden/concepts/{concept-slug}]]"
     - "[[05_Areas/.../ideas/{{date}}/{idea-slug}]]"
   ---
   ```

   Then move to `01_Inbox/processed/{{date}}/{semantic-slug}.md`.

   **Naming rules** for semantic slug:
   - Extract the core insight/topic, NOT the source title
   - Use lowercase, hyphens, 3-6 words
   - Bad: `thread-by-bryan-johnson.md`
   - Good: `life-systems-over-willpower.md`

8. **Summary**
   ```
   Processed: 3 clips → 01_Inbox/processed/{{date}}/
   Created concepts: willpower-vs-systems.md, ai-auth.md
   Content ideas: 2 created
     - ideas/{{date}}/willpower-tweet.md
     - ideas/{{date}}/ai-auth-deep-dive.md
   Connections: [[clerk-context]] ↔ [[ai-auth]]
   ```

## Bidirectional Linking (CRITICAL)

```
┌─────────────────────────────────────────────────────────────────┐
│  01_Inbox/processed/2026-01-21/life-systems-over-willpower.md   │
│    frontmatter.generated:                                       │
│      - "[[03_Garden/concepts/willpower-vs-systems]]"            │
│      - "[[05_Areas/.../ideas/2026-01-21/willpower-tweet]]"      │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────────┐  ┌─────────────────────────────────┐
│ 03_Garden/concepts/         │  │ 05_Areas/.../ideas/2026-01-21/  │
│ willpower-vs-systems.md     │  │ willpower-tweet.md              │
│   frontmatter.sources:      │  │   frontmatter.source:           │
│     - "[[01_Inbox/processed │  │     "[[03_Garden/concepts/      │
│        /2026-01-21/...]]"   │  │        willpower-vs-systems]]"  │
└─────────────────────────────┘  └─────────────────────────────────┘
```

**Rules:**
- `processed/*.md` → `generated:` array (forward links)
- `concepts/*.md` → `sources:` array (back links to clips)
- `ideas/*.md` → `source:` string (back link to concept)

## Notify (Optional)
If you have a notification hook configured in CLAUDE.md, run it with the summary.

## Options
- `/inbox` - Process all pending
- `/inbox 3` - Process only 3 most recent
- `/inbox --dry` - Show what would be processed without doing it
