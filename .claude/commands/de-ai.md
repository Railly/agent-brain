---
description: Remove AI-generated jargon and restore human voice to text
---

De-AI-ify text: $ARGUMENTS

## IMPORTANT: Be direct
- Read file, create -HUMAN version, apply changes

## What Gets Removed

### Overused Transitions
- "Moreover," "Furthermore," "Additionally," "Nevertheless"
- Excessive "However" usage
- "While X, Y" openings

### AI Clichés
- "In today's fast-paced world"
- "Let's dive deep"
- "Unlock your potential"
- "Harness the power of"
- "Game-changer"
- "Cutting-edge"

### Hedging Language
- "It's important to note"
- "It's worth mentioning"
- Vague quantifiers: "various," "numerous," "myriad"

### Corporate Buzzwords
- "utilize" → "use"
- "facilitate" → "help"
- "optimize" → "improve"
- "leverage" → "use"
- "streamline" → "simplify"
- "robust" → "strong"

### Robotic Patterns
- Rhetorical questions + immediate answers
- Obsessive parallel structures
- Always exactly three examples
- "Let me explain..."

## What Gets Added

- Varied sentence lengths
- Conversational tone
- Direct statements
- Confident assertions
- Natural rhythm

## Flow

1. **Read** original file at $ARGUMENTS
2. **Create** copy: `{filename}-HUMAN.md`
3. **Apply** de-AI-ification
4. **Output** change log

## Example

**Before (AI):**
"In today's rapidly evolving digital landscape, it's crucial to understand that leveraging AI effectively isn't just about utilizing cutting-edge technology—it's about harnessing its transformative potential."

**After (Human):**
"AI works best when you use it for specific tasks. Focus on what it does well: writing code, analyzing data, answering questions."

## Output

```
Created: {filename}-HUMAN.md

Changes:
- Removed 3 AI clichés
- Simplified 5 corporate buzzwords
- Shortened 2 run-on sentences
- Added direct statements

Manual review needed:
- Line 15: needs specific example
- Line 42: vague claim, add data
```
