---
name: challenge
description: Argue against your own thinking on a topic using evidence from your vault
---

---
description: Argue against your own thinking on a topic using evidence from your vault
---

Read your current thinking on a topic and argue against it. Anti-sycophancy engine.

Usage: `/challenge {topic or belief}`

Examples:
- `/challenge YC is the right path for my startup`
- `/challenge I should focus on Rust`
- `/challenge v0 templates are worth my time`
- `/challenge I need to learn math for ML`
- `/challenge this is the best long-term career move`

## WAVE 0: Understand the Belief (PARALLEL)

| # | Tool | Call | Purpose |
|---|------|------|---------|
| 1 | Grep | Search $ARGUMENTS keywords across `03_Garden/concepts/`, `02_Journal/daily/`, `04_Projects/` | Direct mentions in vault |
| 2 | Grep | Search $ARGUMENTS keywords in `05_Areas/` | Area-specific context |
| 3 | Read | `CLAUDE.md` | Goals and priorities context |
| 4 | Grep | Search $ARGUMENTS keywords in `02_Journal/weekly/` | Weekly goal history |

## WAVE 1: Map the Belief

Synthesize what you currently believe about this topic:

```
YOUR POSITION (as I understand it)
Topic: "{topic}"

Current stance:
{What you've written/done that supports this belief}

Evidence from your vault:
1. [{date}] {daily/note}: "{relevant quote or action}"
2. [{date}] {daily/note}: "{relevant quote or action}"
3. [{date}] {daily/note}: "{relevant quote or action}"

Strength of conviction: {HIGH/MEDIUM/LOW}
(based on: frequency of mentions, actions taken, resources invested)
```

Present this first. "Is this an accurate read of your position?"

If you correct it, I'll adjust before proceeding.

## WAVE 2: Build the Counter-Case

Construct the strongest possible argument AGAINST the belief. Use these lenses:

### Lens 1: Opportunity Cost
What are you NOT doing because of this belief?
```
OPPORTUNITY COST
By pursuing {belief}, you're implicitly deprioritizing:
- {thing 1} (evidence: {n} days since last engagement)
- {thing 2} (was in goals but dropped)
Time invested: ~{hours/weeks} based on commit/note frequency
What if that time went to {alternative}?
```

### Lens 2: Survivorship Bias
Are you cherry-picking evidence?
```
SURVIVORSHIP BIAS
You remember: {the wins, the positive signals}
You might be ignoring:
- {failed attempt from vault}
- {abandoned related project}
- {negative signal you noted but didn't act on}
```

### Lens 3: Sunk Cost
Are you continuing because you've already invested?
```
SUNK COST CHECK
Investment so far: {time, money, reputation}
Would you start this today if you hadn't already invested?
If the answer is "probably not", that's a signal.
```

### Lens 4: Contrarian Evidence
What in your OWN vault contradicts this?
```
YOUR OWN CONTRADICTIONS
- [{date}]: You wrote "{quote that contradicts the belief}"
- [{date}]: You did {action that contradicts the belief}
- {Pattern}: Your engagement with {topic} is actually {declining/inconsistent}
```

### Lens 5: Second-Order Effects
What happens if you're RIGHT but the consequences are bad?
```
SECOND-ORDER EFFECTS
Even if {belief} is correct:
- It could lead to {negative consequence 1}
- It requires {dependency that might not hold}
- The timeline assumes {assumption that might be wrong}
```

### Lens 6: The Anti-Pattern Check
Does this match any historical failure pattern?
```
ANTI-PATTERN MATCH
From your anti-patterns file (if it exists):
- "{pattern}", similarity score: {HIGH/MEDIUM/LOW}
- Previous outcome: {what happened last time}
```

## WAVE 3: The Steel-Man Counter

Present the BEST alternative position:

```
THE STRONGEST COUNTER-ARGUMENT

Instead of "{belief}", consider:

{Alternative position, fully argued}

Supporting evidence from YOUR vault:
1. {evidence 1}
2. {evidence 2}

What this would look like in practice:
- {concrete action 1}
- {concrete action 2}

Risk of NOT considering this: {what you might lose}
```

## WAVE 4: Verdict

```
CHALLENGE VERDICT

Your belief: "{topic}"

Strength of counter-case: {WEAK / MODERATE / STRONG / DEVASTATING}

Key vulnerabilities found:
1. {biggest weakness in your position}
2. {second biggest}

My honest assessment:
{1-3 sentences. Be direct. No hedging. If the belief is solid, say so.
If it's shaky, say that too. Reference specific vault evidence.}

Recommended action:
- [ ] {what to do with this information}
```

## Rules

- NEVER agree with the position just because you hold it
- ALWAYS use evidence from the vault, not generic arguments
- If the belief is actually well-supported, say so honestly (don't manufacture disagreement)
- Be specific: cite dates, quotes, patterns from actual notes
- The goal is CLARITY, not winning the argument
- If vault has insufficient data on the topic, say so: "Your vault has {n} mentions. Limited evidence to challenge with. Consider writing more about this first."
- Don't lecture about "both sides", take a clear position in the verdict
- Tone: respectful but unflinching. Like a trusted advisor, not a yes-man.

## Options
- `/challenge {topic}` - Full challenge (all 6 lenses)
- `/challenge {topic} --quick` - Just opportunity cost + contrarian evidence
- `/challenge {topic} --evidence-only` - Show vault evidence without analysis
