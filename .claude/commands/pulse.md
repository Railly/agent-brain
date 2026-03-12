---
description: Weekly goal alignment + Pareto analysis + drift detection
---

Analyze engagement, apply 80/20 rule, detect drift and blind spots.

## Philosophy

You have many interests. Pareto says 20% of your focus drives 80% of results.
But you also drift, get distracted, and forget goals.
`/pulse` is your honest mirror.

## Data Sources

- `CLAUDE.md` Goals section
- `01_Inbox/*.md` - what you capture/consume
- `03_Garden/**/*.md` - what you process into durable notes
- `02_Journal/daily/*.md` - what you do
- Git commits across repos (if accessible)

## Analysis

### 1. Pareto Ranking
```
engagement = (clips * 1) + (notes * 3) + (logs * 2) + (commits * 5)
```

Sort topics, find vital 20%:
```
VITAL 20%
━━━━━━━━━
1. Rust         ████████████ 45%
2. AI Agents    ██████░░░░░░ 25%
3. Auth         ████░░░░░░░░ 15%
                         ─────
                          85%
```

### 2. Drift Detection
Topics with HIGH engagement but NOT in stated goals:
```
DRIFT DETECTED
You clipped 8 articles about "AI Agents" this week
but it's not in your goals.
→ Add to priorities?
→ Or consciously ignore?
```

### 3. Hidden Patterns
Cluster connected notes:
```
HIDDEN PATTERN
[[rust-ownership]] + [[react-hooks]] + [[gpui-state]]
→ Emerging interest: "Memory models across languages"
→ Content opportunity: Blog series comparing ownership patterns?
```

### 4. Blind Spots
Goals with LOW/NO engagement:
```
BLIND SPOTS
- "Math for ML" - No engagement in 14 days
- "Content creation" - 5 ideas queued, 0 published
```

### 5. Interest Lifecycle
```
EMERGING  : {topics}
GROWING   : {topics}
PEAK      : {topics}
DECLINING : {topics}
DORMANT   : {topics} (30+ days)
```

### 6. MITs (Most Important Things)
3 tasks for the week based on Pareto + deadlines:
```
YOUR 3 MITs THIS WEEK
1. [ ] {vital 20% topic}
2. [ ] {deadline-driven item}
3. [ ] {compounds over time}
```

## Output Format

```markdown
# Pulse Report - {{date}}

## Alignment Score: {X}%

## Pareto: Your Vital 20%
| Topic | Engagement | % | In Goals? |
|-------|------------|---|-----------|
| {topic} | {bar} | {%} | Yes / DRIFT |

## Drift Detected
- **{topic}**: {n} clips, {n} notes - not in goals
  → Promote to goal? Or conscious distraction?

## Hidden Patterns
- [[note1]] + [[note2]] + [[note3]]
  → Theme: "{emerging theme}"
  → Content: {opportunity}?

## Blind Spots
- {goal}: {n} engagement, {n} days

## Interest Lifecycle
EMERGING: {topics}
GROWING: {topics}
PEAK: {topics}
DECLINING: {topics}
DORMANT: {topics}

## Your 3 MITs This Week
1. [ ] _____ (vital 20%)
2. [ ] _____ (deadline)
3. [ ] _____ (compounds)

## Recommendations
1. {action 1}
2. {action 2}
3. {action 3}
```

## Health Check (Optional)

If `05_Areas/health/daily/` exists, read files for the past 7 days.
Fields to look for: steps, sleep_minutes, active_calories, exercise_minutes, avg_heart_rate, avg_hrv.

```
## Health (Last 7 Days)
| Metric | Avg | Target | Status |
|--------|-----|--------|--------|
| Sleep | {avg}h | 7h+ | {ok/warning} |
| Steps | {avg} | 8,000+ | {ok/warning} |
| Exercise | {avg} min/day | 30+ min | {ok/warning} |

Warning: {any metric below target}
```

If no health files exist, skip this section.

## Study Consistency (Optional)

If `05_Areas/learning/daily/` exists, read files for the past 30 days.

```
## Study Consistency (Last 30 Days)
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Days studied | {n}/30 | 25/30 | {status} |
| Avg daily minutes | {avg} | 60 min | {status} |
| Topics covered | {list} | 3+ interleaved | {status} |
```

If no study files exist, skip this section.

## Anti-Pattern Check

If `07_System/context-files/anti-patterns.md` exists, read it for historical failure patterns.
If engagement data suggests a pattern is repeating, flag it briefly:

```
Pattern alert: No exercise logs in 14 days
```

Don't lecture. Just flag and move on.

## Command Usage (Optional)

If `07_System/logs/command-usage.jsonl` exists, include brief workflow insights:

```
## Workflow Patterns
Commands used most: {top 3}
Commands unused: {list}
Recommendation: {1 line}
```

Keep it 3-5 lines max.

## Notify (Optional)
If you have a notification hook configured in CLAUDE.md, run it with the pulse summary.

## Options
- `/pulse` - Full weekly report
- `/pulse --mit` - Just 3 MITs
- `/pulse --pareto` - Ranking only
- `/pulse --blind` - Blind spots only
- `/pulse --drift` - Drift detection only
