---
description: Create a new math/concept note with knowledge formulation guidance
---

Create a new study note: $ARGUMENTS

## Flow

### 1. Parse Arguments

- `/learn vector spaces` -> area: linear-algebra, topic: vector-spaces
- `/learn bayes theorem --area probability` -> explicit area
- `/learn binary search --area algorithms` -> explicit area
- `/learn eigenvalues` -> area: linear-algebra (infer from topic)

If area is ambiguous, ask with AskUserQuestion:
- `linear-algebra`
- `probability`
- `algorithms`

If topic is too broad (e.g., "linear algebra"), narrow it:
> "That's an area, not a concept. Specific topic? e.g., 'vector spaces', 'eigenvalues', 'linear independence'"

### 2. Check Existing

Check: `03_Garden/concepts/math/{area}/{slug}.md`
- If exists: read it, suggest updates or new questions
- If not: create from template

### 3. Present Knowledge Formulation Guidance

Before the user starts writing, show:

```
BEFORE YOU WRITE --- Knowledge Formulation Principles

From Wozniak's 20 Rules + Matuschak's Evergreen Notes:

1. MINIMUM INFORMATION: Each Q/A tests ONE thing.
   Bad: "Explain vector spaces"
   Good: "What is the dimension of R^3?"

2. SELF-EXPLAIN: For every formula, write WHY it works.
   "Why does this work?" is more memorable than "What is this?"

3. CONCRETE FIRST: Start with a specific example, THEN generalize.
   Example -> Pattern -> Abstract formula (concreteness fading)

4. CLOZE PATTERN: Great for formulas.
   "The determinant of a 2x2 matrix [[a,b],[c,d]] is ___" -> ad - bc

5. GENERATE, DON'T COPY: Write questions in YOUR words.
   Self-generated material is recalled ~40% better.

6. CONNECT: Link to at least 2 other notes with [[wikilinks]].
   Isolated notes die. Connected notes compound.

Write at least 4 Quick Review Questions: 2 concept checks + 2 deeper thinking.
```

### 4. Create Note from Template

Create file at `03_Garden/concepts/math/{area}/{slug}.md`:

```markdown
---
type: math-concept
created: {TODAY}
area: {area}
subarea: {subarea}
difficulty: foundation
themes:
  - {area}
  - {subarea}
  - math
sources: []
---
# {Topic Name} ({Area} > {Subarea})

## Definition

**Formal:**

$$
{display math}
$$

**In plain words:** {verbal explanation}

## Key Concepts

1. {Fundamental idea 1}
2. {Fundamental idea 2}
3. {Fundamental idea 3}

## Important Properties

1. $property_1$
2. $property_2$

## Essential Formulas

$$
{formula 1}
$$

## Core Examples

### Fundamental

{Worked example with full solution}

### Advanced

{Harder example demonstrating edge cases}

## Related Theorems/Rules

- **{Theorem 1}:** {brief statement}

## Common Pitfalls

1. {Mistake 1} --- {why it's wrong}
2. {Mistake 2} --- {why it's wrong}

## Related Topics

- [[{related-concept-1}]] --- {how it connects}
- [[{related-concept-2}]] --- {how it connects}

## Quick Review Questions

### Concept Check

Q1: {Question testing basic understanding}
A1: {Answer}

Q2: {Question testing application}
A2: {Answer}

### Deeper Thinking

Q3: {Question requiring synthesis or proof}
A3: {Answer}

Q4: {Why does {concept} work? Explain the intuition.}
A4: {Answer}
```

### 5. Help User Fill the Note

Work with the user to fill in each section. Research if needed (WebSearch). For each section:
- **Definition**: Help formalize with correct LaTeX
- **Examples**: Start concrete, then abstract (concreteness fading)
- **Questions**: Ensure minimum information principle per Q/A

### 6. Multimedia Offer (optional, after note is complete)

After the note content is written, offer:

**Generate concept diagram:**
Use the `fal-generate` skill if available.
Prompt: "Clean mathematical diagram of {concept}, white background, minimal style, educational illustration"
Save image to `03_Garden/concepts/math/{area}/{slug}-diagram.png`
Embed in note: `![[{slug}-diagram.png]]`

**Screenshot reference visualization:**
Use agent-browser skill if available:
```bash
agent-browser open "https://www.desmos.com/calculator"
agent-browser screenshot  # save to note dir
agent-browser close
```

### 7. Log Session

Auto-log via `/study {area} {estimated_duration} new`

### 8. Update MOC

Add wikilink to `03_Garden/_MOCs/math-foundations.md` under the appropriate area section.

## LaTeX Rules (SACRED)

- Inline math: `$...$` (single dollar signs, no spaces after/before dollars)
- Display math: `$$...$$` (double dollar signs, no spaces after/before dollars)
- NEVER use `\(...\)` or `\[...\]`
- COUNTER EXAMPLE: Eigenvectors are the nonzero solutions to \( (A - \lambda I)v = 0 \)
- CORRECT: Eigenvectors are the nonzero solutions to $(A - \lambda I)v = 0$

## Rules

- Always create in `03_Garden/concepts/math/{area}/` not root `concepts/`
- Slug format: kebab-case, no dates in filename
- Encourage user to write THEIR OWN examples (generation effect)
- Wikilinks in frontmatter MUST be quoted strings in arrays
- After creation, update the math-foundations MOC
