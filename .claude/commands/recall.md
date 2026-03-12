---
description: Morning retrieval practice quiz from recent math notes
---

Morning retrieval quiz from math notes.

## WAVE 0: Gather Material (PARALLEL)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Glob | `03_Garden/concepts/math/**/*.md` | All math notes |
| 2 | Glob | `05_Areas/learning/daily/*.md` | Recent study session files |
| 3 | Read | `05_Areas/learning/daily/{YESTERDAY}.md` | Yesterday's study topics |

## WAVE 1: Select Questions (interleaved retrieval)

Read math notes found in Wave 0. Extract `## Quick Review Questions` from each.

Selection strategy:
- **40% from yesterday's topic** (fresh recall)
- **40% from 3-7 days ago** (spaced practice via study session dates)
- **20% random from any prior topic** (interleaving)

If notes have associated media files (check for `.png`, `.jpg` in same directory):
- Include 1-2 image-based questions: "What concept does this diagram represent?"

Pick **5-8 questions** total. Mix Concept Check and Deeper Thinking types.

If no math notes exist:
> "No study material found. Run `/learn {topic}` first to create your first math note."
> Exit here.

## WAVE 2: Interactive Quiz

Present questions ONE AT A TIME. Format:

```
RECALL PRACTICE --- {date}

Q1 [{area} > {subarea}]:
{question text}

Take a moment. Think before answering.
If it involves a formula, try to write it from memory.
```

After user answers, evaluate their response:

**If correct:**
```
Correct.
```

**If partially correct:**
```
Partial. You got: {what they got right}
Missing: {what they missed}
The full answer: {answer}
```

**If incorrect:**
```
Not quite.
Answer: {answer}

Self-explain: WHY does this work? (Say it in your own words -- this is where learning happens)
```

Wait for self-explanation on incorrect answers before proceeding.

## WAVE 3: Summary + Generation Prompt

After all questions:

```
RECALL SUMMARY
Correct: {n}/{total} ({percent}%)
Strong: {topics where correct}
Review tonight: {topics where incorrect}

GENERATION EXERCISE (g=0.55 effect, Slamecka & Graf 1978)
Write 1 new question about something you got wrong or found hard.
Format: Q: ... / A: ...
I'll add it to the relevant note.
```

If user provides a self-generated question:
1. Identify which note it belongs to
2. Append to that note's `## Quick Review Questions` section
3. Increment `self_generated_questions` in today's study daily file

## WAVE 4: Log Session

Calculate total quiz time (approximate from interaction). Log via the `/study` flow:
- Read/create today's study daily file
- Update `recall_minutes` with estimated duration (default 15 if unclear)
- Update `topics` with all topics covered in quiz
- Append to `method`: "retrieval-practice"

## Rules

- Questions MUST come from actual notes, never invented
- Always encourage self-explanation on wrong answers (self-explanation effect, g=0.55)
- Never skip the generation exercise prompt at the end
- Keep the quiz conversational but focused
- If user says "skip" or "pass", mark as incorrect and move on
- Show the source note filename after revealing each answer so user can review later
- LaTeX in questions: render as-is (terminal shows raw `$...$` but user can read it)
