# Philosophy

## Why Most Knowledge Systems Fail

Note-taking apps are graveyards. Notes go in, nothing comes out. You clip articles, highlight books, jot ideas, then never look at them again.

The problem isn't the tool. It's that knowledge systems require **discipline** that humans don't have consistently. You need to:
- Process raw captures into useful notes
- Connect ideas across contexts
- Review and challenge your thinking
- Extract content from your knowledge
- Stay aligned with your actual goals

Nobody does all of this manually, consistently, for years.

## The Agent Solution

What if an AI maintained your knowledge system FOR you?

That's what this project is. Your AI agent acts as your knowledge maintenance agent:
- `/inbox` processes your web clips into atomic notes with connections
- `/graduate` rescues buried ideas from daily logs
- `/relink` finds missing connections between notes
- `/pulse` tells you if your actions match your stated goals
- `/challenge` argues against your own thinking using YOUR data

You still do the thinking. The agent handles the maintenance.

## Core Principles

### 1. Atomic Notes (Zettelkasten)
Each note captures ONE idea. Not a page of notes from a meeting, one specific insight. This makes notes composable and connectable.

### 2. Bidirectional Linking
Every connection goes both ways. If Note A references Note B, Note B should know about Note A. The `/relink` command enforces this.

### 3. Progressive Refinement
Knowledge flows through stages:
```
Capture (01_Inbox) → Process (/inbox) → Connect (/relink) → Mature (03_Garden) → Publish (/draft → 06_Content)
```

Raw captures become atomic notes. Atomic notes connect into clusters. Clusters become content.

### 4. Anti-Sycophancy
Your AI should challenge you, not agree with you. The `/challenge` command uses 6 analytical lenses to argue against your own beliefs using evidence from your vault.

### 5. Goal Alignment
It's easy to drift. You say you care about X but spend all your time on Y. `/pulse` applies Pareto analysis to your actual engagement and flags the mismatch.

### 6. Anti-Pattern Detection
We all have recurring failures. The `anti-patterns.md` file captures yours honestly. `/pulse` checks if you're repeating them and warns you before it's too late.

## The Knowledge Flow

```
Web Clipper → 01_Inbox/
                 ↓
              /inbox
                 ↓
         03_Garden/concepts/  ←→  /relink
                 ↓
              /graduate (from daily logs)
                 ↓
         05_Areas/content-creation/ideas/
                 ↓
              /draft
                 ↓
         06_Content/ → Publish
```

## The Daily Loop

```
Morning:  /morning → see what matters today
During:   /log, /ship → capture work automatically
Evening:  /today → generate daily log
Weekly:   /pulse → check goal alignment
```

## Credits

Inspired by:
- [Andy Matuschak's Evergreen Notes](https://notes.andymatuschak.org/Evergreen_notes)
- [Tiago Forte's PARA Method](https://fortelabs.com/blog/para/)
- [Niklas Luhmann's Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten)
- [Piotr Wozniak's 20 Rules of Knowledge Formulation](https://supermemo.guru/wiki/20_rules_of_knowledge_formulation)
