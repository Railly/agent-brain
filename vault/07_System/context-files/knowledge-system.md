# Knowledge System Reference

## Vault Structure
```
your-brain/
├── 01_Inbox/           # Raw captures (Web Clipper, quick notes)
│   └── processed/      # Processed clips organized by date
├── 02_Journal/         # Time-based reflections
│   ├── daily/          # Daily logs (YYYY-MM-DD.md)
│   ├── weekly/         # Weekly plans (week-YYYY-WXX.md)
│   └── reflections/    # Longer-form thinking
├── 03_Garden/          # Evergreen atomic notes
│   ├── _MOCs/          # Maps of Content (entry points)
│   ├── concepts/       # Idea and insight notes
│   ├── tools/          # Tool-specific notes
│   ├── people/         # Person notes
│   └── meetings/       # Meeting notes + transcripts
├── 04_Projects/        # Active project work
├── 05_Areas/           # Ongoing life contexts
│   ├── content-creation/
│   │   └── ideas/      # Content ideas by format
│   └── learning/       # Study sessions and tracking
├── 06_Content/         # Ready-to-publish drafts
└── 07_System/          # System config and references
    └── context-files/  # Context docs for AI
```

## Note Types

### Atomic Concept Note (`03_Garden/concepts/`)
```yaml
---
type: concept
created: YYYY-MM-DD
themes: [topic1, topic2]
sources:
  - "[[source-note]]"
people: []
---
```

### Daily Log (`02_Journal/daily/`)
```yaml
---
type: daily
week: "[[week-YYYY-WXX]]"
---
```

### Person Note (`03_Garden/people/`)
```yaml
---
type: person
created: YYYY-MM-DD
---
```

### Meeting Note (`03_Garden/meetings/`)
```yaml
---
type: meeting
created: YYYY-MM-DD
attendees: ["[[Person 1]]", "[[Person 2]]"]
project:
---
```

## YAML Frontmatter Rules

Wikilinks in frontmatter MUST be quoted strings in arrays:

```yaml
# WRONG
sources: [[note1]], [[note2]]

# CORRECT
sources:
  - "[[note1]]"
  - "[[note2]]"
```

## Bidirectional Linking

Every note should link to related notes AND be linked back:
- Concepts link to sources and related concepts
- Dailies link to weekly plans
- Meetings link to people and projects
- Content ideas link to source concepts
