---
name: init
description: Set up your personal OS from scratch with guided questions
---

---
description: Set up your personal OS from scratch with guided questions
---

Interactive setup wizard for your personal OS. Asks questions, builds your vault, generates your CLAUDE.md.

## WAVE 0: Welcome

Print:

```
Welcome to your Personal OS.

I'll ask you a few questions to set everything up.
This takes about 2 minutes.
```

## WAVE 1: Questions (sequential, use AskUserQuestion for each)

Ask these one at a time. Wait for each answer before asking the next.

1. "What's your name and what do you do? (e.g. 'Sarah, frontend engineer at Stripe')"
2. "What's your main stack? (e.g. 'TypeScript, React, Next.js, Tailwind, PostgreSQL')"
3. "What are your top 3 goals right now? (career, learning, personal, anything)"
4. "What's one recurring failure you keep repeating? Be honest, nobody reads this except your AI. (e.g. 'I start side projects and never finish them')"
5. "Where should I create your vault? (default: ~/brain)"

Store all answers for WAVE 2.

## WAVE 2: Create vault structure

Use the path from question 5 (default `~/brain`).

```bash
mkdir -p "{path}/01_Inbox/processed"
mkdir -p "{path}/02_Journal/daily"
mkdir -p "{path}/02_Journal/weekly"
mkdir -p "{path}/02_Journal/reflections"
mkdir -p "{path}/03_Garden/_MOCs"
mkdir -p "{path}/03_Garden/concepts"
mkdir -p "{path}/03_Garden/people"
mkdir -p "{path}/03_Garden/tools"
mkdir -p "{path}/03_Garden/meetings"
mkdir -p "{path}/04_Projects"
mkdir -p "{path}/05_Areas/content-creation/ideas"
mkdir -p "{path}/05_Areas/health/daily"
mkdir -p "{path}/06_Content"
mkdir -p "{path}/07_System/context-files"
```

## WAVE 3: Copy commands

Copy all commands from this repo's `.claude/commands/` to `{path}/.claude/commands/`:

```bash
mkdir -p "{path}/.claude/commands"
cp .claude/commands/*.md "{path}/.claude/commands/"
```

Do NOT copy `init.md` itself (it's only needed for setup).

## WAVE 4: Generate CLAUDE.md

Create `{path}/CLAUDE.md` using the answers from WAVE 1. Follow this structure:

```markdown
# {Name}'s Brain

## Identity
{Name}. {What they do, from question 1}.

## Stack
{Stack from question 2, formatted as a list}

## Goals
{Goals from question 3, formatted as numbered list}

## Anti-Patterns

### {Failure from question 4} (x1)
**Pattern**: {the failure, rephrased as a pattern}
**Signal**: {infer a reasonable signal from the failure}
**Intervention**: {infer a reasonable intervention}

## Vault Structure
```
01_Inbox/        -> Raw captures from Web Clipper
02_Journal/      -> Daily logs, weekly plans, reflections
03_Garden/       -> Evergreen atomic notes (concepts, people, meetings)
04_Projects/     -> Active project work
05_Areas/        -> Ongoing life contexts
06_Content/      -> Ready-to-publish drafts
07_System/       -> Context files and configuration
```

## Context Files
@07_System/context-files/repos-map.md

## Commands
```bash
/morning    # Start your day with calendar, tasks, MITs
/ship       # Commit, push, auto-log to daily journal
/log        # Quick timestamped entry to today's file
/today      # End-of-day review and reflection
/inbox      # Process Web Clipper captures into atomic notes
/pulse      # Weekly Pareto analysis + anti-pattern check
/challenge  # Argue against your own beliefs with vault evidence
/relink     # Find missing connections between notes
/draft      # Create content from ideas
/meeting    # Process meeting notes or recordings
/research   # Deep research with Firecrawl
/vault-search  # Search your vault
/week       # Set weekly goals and MITs
/de-ai      # Strip AI jargon from text
```

## Communication
- Be direct and concise
- Challenge my thinking when it seems off
- No emojis unless I ask
```

Adapt the tone and details based on their answers. If they mentioned specific tools, preferences, or constraints, include those.

Also create `{path}/AGENTS.md` as a copy of `CLAUDE.md` so Codex and other agents read the same context.

## WAVE 5: Scan for repos

Scan common directories for git repos and create `{path}/07_System/context-files/repos-map.md`:

```bash
find ~/Programming ~/Projects ~/Code ~/Developer ~/repos ~/work ~/Clerk -maxdepth 2 -name ".git" -type d 2>/dev/null | sed 's/\/.git$//'
```

Generate a repos-map.md with a table:

```markdown
# Repos Map

| Repo | Local Path | Stack |
|------|------------|-------|
{for each found repo: name, path, and infer stack from package.json/Cargo.toml/go.mod/etc if readable}
```

If no repos found, create the file with an empty table and a note saying "Run /init again after cloning some repos, or add them manually."

## WAVE 6: Create first daily log

Create `{path}/02_Journal/daily/{TODAY}.md`:

```markdown
---
type: daily
rating:
---
# {TODAY} - {WEEKDAY}

## Today's Tasks
- [x] Set up personal OS

## Ship Log
- [{HH:MM}] *initialized*: personal OS created with {N} commands

## Tomorrow
- Try /morning to see the full briefing
- Clip an article and run /inbox
```

## WAVE 7: Summary

Print:

```
Your personal OS is ready.

Vault: {path}
Commands: 14 installed
CLAUDE.md: personalized
Repos found: {N}
First daily log: created

Next steps:
1. Open {path} in Obsidian
2. Open a new terminal in {path} and run: claude
3. Try: /morning

The system gets better every day you use it.
```
