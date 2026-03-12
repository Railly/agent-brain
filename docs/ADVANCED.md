# Advanced: Always-On Assistant

This repo includes the core knowledge system. For power users who want an always-on AI assistant, here's what's possible.

## The Gateway Pattern

Instead of only using Claude Code in the terminal, you can set up a webhook server that:
1. Receives messages from WhatsApp/Telegram/Slack
2. Processes them with Claude Code (`claude -p`)
3. Replies through the same channel

This turns your second brain into a conversational assistant you can message anytime.

## Architecture

```
Message (WhatsApp/Telegram/Slack)
    ↓
Webhook Server (Bun + Hono)
    ↓
claude -p --model sonnet "Process this message using my vault"
    ↓
Reply via API
```

## Scheduled Tasks (Cron)

Set up recurring jobs:
- **Morning pulse**: Daily MITs at 9am
- **Weekly review**: Full `/pulse` report on Fridays
- **Nightly reindex**: Update search index at 3am
- **Memory extraction**: Consolidate learnings at 3:30am

## Proactive Nudges (Initiative Engine)

Rules that check your state and nudge you:
- No study in 2 days → suggest `/recall`
- 10+ unprocessed clips → suggest `/inbox`
- No commits in 48h → "shipping drought?"
- Late commits (after midnight) → "sleep > shipping"

## Soul System

Give your assistant a persistent personality:
- `IDENTITY.md` — Name, role, capabilities
- `PREFERENCES.md` — Communication style
- `USER.md` — Your context, goals, relationships
- `RELATIONSHIPS.md` — People in your life

The assistant loads these on every message, creating consistent personality across conversations.

## Coming Soon

A premium package with:
- Full webhook server code
- Launchd/systemd service configs
- WhatsApp + Telegram + Slack integration
- Soul system templates
- Cron daemon with job management

Star the repo to get notified when it's available.
