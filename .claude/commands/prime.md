---
description: Pre-lesson briefing for a topic you don't remember or haven't studied
---

Pre-lesson briefing: $ARGUMENTS

## Flow

### 1. Parse Arguments

- `/prime fourier series` -> topic: fourier series, area: infer
- `/prime eigenvalues --area linear-algebra` -> explicit area
- `/prime binary search trees --area algorithms` -> explicit area

If topic is ambiguous, ask with AskUserQuestion.

### 2. Check Existing Notes

Search `03_Garden/concepts/math/` for notes matching the topic (Glob + Grep).

**If note exists**: Read it. Extract Definition + Key Concepts + Essential Formulas + Related Topics. Skip to Step 4 (briefing from own notes).

**If no note exists**: Research the topic (WebSearch or context7 docs). Build briefing from scratch.

### 3. Check Prerequisites

Search existing notes for topics referenced in the briefing. For each prerequisite:
- If note exists in vault -> wikilink it
- If note doesn't exist -> flag as gap

### 4. Generate Briefing

Output format (terminal only, NO file creation):

```
PRE-LESSON BRIEFING: {Topic} ({Area})
Time: ~3 min read

IN ONE SENTENCE:
{What this thing IS, in plain words. No jargon. One sentence max.}

INTUITION:
{One concrete analogy or visual. "It's like..." or "Think of..."}

THE KEY FORMULA:
$$
{The central formula they'll see in the lesson}
$$
{One line explaining what each symbol means}

WHAT YOU NEED TO KNOW BEFORE:
{2-4 prerequisites, each with status}
- [[{prerequisite-1}]] --- {one line what it is} {EXISTS / GAP}
- [[{prerequisite-2}]] --- {one line what it is} {EXISTS / GAP}

{If any GAP: "Consider reviewing {gap topic} first. Run /learn {gap topic} or /prime {gap topic}."}

QUICK SELF-CHECK:
{2 yes/no questions to test if prerequisites are solid}
1. Can you {prerequisite skill}? (If no -> review {note})
2. Do you know what {key term} means? (If no -> review {note})

WHAT TO WATCH FOR IN THE LESSON:
- {Specific thing that's easy to miss or confusing}
- {Common point where students get lost}

Go to your lesson. After, run /learn {topic slug} to create your note.
```

### 5. Log (Optional)

If a study daily file exists for today, append under `## AM Recall` or `## PM New Material`:
- `- 5min {topic} (priming) @ {HH:MM}`

Do NOT create a study file just for priming. Only append if file already exists.

## Rules

- Terminal output ONLY. Never create a note file. That's what `/learn` is for AFTER the lesson.
- Keep it SHORT. Target 3 minutes of reading. If the briefing is longer than ~25 lines, cut it.
- The analogy/intuition is MANDATORY. Abstract concepts without a mental image don't prime anything.
- Do NOT teach the full topic. You're building scaffolding, not the building.
- Do NOT include worked examples. Save those for the lesson + `/learn`.
- Prerequisites MUST link to existing vault notes when they exist.
- If the topic already has a full note in the vault, say: "You already have a note on this. Run `/recall --topic {slug}` to test yourself instead."
- Use `$...$` for inline LaTeX, `$$...$$` for display. NEVER `\(...\)`.
- Language: match the user's language.

## Examples

- `/prime fourier series` -> Briefing with trig + series as prerequisites
- `/prime gradient descent --area algorithms` -> Briefing with derivatives + linear algebra as prerequisites
- `/prime bayes theorem` -> "You already have a note on this. Run /recall --topic bayes-theorem instead."
- `/prime convex optimization` -> Briefing with no existing note, research via web
