---
name: meeting
description: Process meeting notes into structured notes + action items
---

---
description: Process meeting notes into structured notes + action items
---

Process meeting notes: $ARGUMENTS

## IMPORTANT: Be direct
- Don't check if folders exist
- Don't search existing notes
- Just create and append

## Step 0: Transcribe (if audio/video input)

If the user provides an audio or video file (`.mp3`, `.mp4`, `.wav`, `.m4a`, `.webm`, `.ogg`) or a URL (YouTube, Google Meet recording, etc.), transcribe it first using [trx](https://github.com/crafter-station/trx):

```bash
trx "$ARGUMENTS" --output json --fields text
```

This outputs the full transcript as text. Use that as the meeting content for the steps below.

If the user provides text directly, skip this step.

## Flow

1. **Create meeting note** in `03_Garden/meetings/{YYYY-MM-DD}/{slug}.md`:
   ```markdown
   ---
   type: meeting
   created: {{date}}
   attendees:
     - "[[Person 1]]"
     - "[[Person 2]]"
   project:
   ---
   # {Meeting Title}

   ## Key Decisions
   -

   ## Insights
   -

   ## Action Items
   - [ ] @{person}: {task}

   ## Notes
   {summary of discussion}
   ```

2. **Create corrected transcript** in `03_Garden/meetings/{YYYY-MM-DD}/{slug}-transcript.md`:
   - Fix common transcription errors (tool names, product names, technical terms)
   - Format as dialogue: `**{Person 1}:** ...` / `**{Person 2}:** ...`
   - Keep the natural spoken language as-is
   - Add `[Pause]`, `[Screen share]`, `[Laughter]` annotations where evident
   - Frontmatter:
   ```markdown
   ---
   type: transcript
   created: {{date}}
   meeting: "[[{slug}]]"
   language: {detected language}
   coverage: {full (~Xmin) | partial (~Xmin of Ymin)}
   ---
   # Transcript: {Title} - {duration}
   ```

3. **Create summary** in `03_Garden/meetings/{YYYY-MM-DD}/{slug}-summary.md`:
   - Written in first person reflecting on the conversation
   - Structured sections: Context, Key Topics, Learnings, Takeaways
   - Frontmatter:
   ```markdown
   ---
   type: summary
   created: {{date}}
   meeting: "[[{slug}]]"
   ---
   ```

4. **Create person notes** for attendees not yet in `03_Garden/people/`

5. **Extract YOUR action items** -> append to `02_Journal/daily/{{date}}.md`:
   ```markdown
   ## Action Items (from {meeting})
   - [ ] {task 1}
   - [ ] {task 2}
   ```

## Example

User pastes meeting notes or provides a recording, run `/meeting`:

```
Created: 03_Garden/meetings/2026-01-04/team-sync.md
Created: 03_Garden/meetings/2026-01-04/team-sync-transcript.md
Created: 03_Garden/meetings/2026-01-04/team-sync-summary.md
Attendees: [[Alice]], [[Bob]]
Action items added to daily log:
- [ ] Review API proposal
- [ ] Send follow-up email
```
