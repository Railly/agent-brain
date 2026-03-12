---
description: Create content draft from ideas using the Shipping Bible
---

Create content draft: $ARGUMENTS

## Philosophy
- Ship > Perfect
- Build in public
- Story > Features
- Time-box everything

## IMPORTANT: Be direct
- Don't check if folders exist
- Just create the draft

## Flow

1. **Show available ideas** from `05_Areas/content-creation/ideas/`
   - List ideas with source notes
   - Ask which to draft (or use $ARGUMENTS if specified)

2. **Determine content type**:
   - Tweet (single post)
   - Thread (multi-post story)
   - LinkedIn (longer story format)
   - Blog (full article)
   - Video script (demo/tutorial)

3. **Create draft** in `06_Content/{{YYYY-MM-DD}}/{slug}/{type}.md`:

   ```markdown
   ---
   type: {tweet|thread|linkedin|blog|video}
   status: draft
   created: {{date}}
   source: [[{source-note}]]
   publish_date:
   ---
   # {Title}

   ## Hook
   {First line that grabs attention}

   ## Story
   {What + Why + How long it took}

   ## Key Points
   - {Point 1}
   - {Point 2}
   - {Point 3}

   ## CTA
   {What do you want them to do?}

   ## Draft
   {Actual content here}

   ---
   ## Pre-Launch Checklist
   - [ ] Teaser posted (24-48h before)
   - [ ] WIP shots shared
   - [ ] 3-5 people ready to engage
   - [ ] Demo video recorded (if applicable)
   - [ ] Captions added (video)

   ## Launch Checklist
   - [ ] Posted on primary platform
   - [ ] Cross-posted
   - [ ] Shared in communities
   - [ ] Responded to comments (first 2h)

   ## Post-Launch
   - [ ] Wins captured
   - [ ] Feedback noted
   - [ ] Retro done
   ```

4. **Generate draft content** based on type:

   **Tweet**:
   ```
   {Hook - one punchy line}

   {2-3 key points}

   {CTA + link}
   ```

   **Thread**:
   ```
   1/ {Hook}
   2/ {Context/Why}
   3/ {What I built}
   4/ {Key learning 1}
   5/ {Key learning 2}
   6/ {Demo/Screenshot}
   7/ {CTA}
   ```

   **LinkedIn**:
   ```
   I just built [THING] in [TIME].

   Here's what it does:
   → {Feature 1}
   → {Feature 2}
   → {Feature 3}

   Why I built it:
   {1-2 sentences}

   What I learned:
   {Key insight}

   Try it: [LINK]
   Star it: [GITHUB]

   #buildinpublic
   ```

   **Blog**: Full article structure with intro, sections, code examples, conclusion

   **Video Script**: Hook → Demo → Explain → CTA (60-90 sec for social)

## Example

```
/draft "Systems > willpower" --thread
```

Output:
```
Created: 06_Content/2026-01-21/systems-over-willpower/thread.md
Type: Thread (7 tweets)
Source: [[life-systems-over-willpower]]
Next step: Write hook, then teaser post
```

## Quick Templates

**Teaser ideas** (24-48h before):
- "Building something new this weekend..."
- "What if you could [solve problem] in [time]?"
- "48 hours until we ship [NAME]. Sneak peek:"

**Hook formulas**:
- "I just built X in Y time. Here's how:"
- "Most people think X. Actually, Y."
- "The secret to X isn't Y—it's Z."
- "I shipped this while tired. Here's what I learned:"

## Notify (Optional)
If you have a notification hook configured in CLAUDE.md, run it with the summary.
