---
description: Scan notes and suggest missing backlinks between related topics
---

Find connections between notes in `03_Garden/`.

## Flow

1. **Scan all notes**
   List all files in `03_Garden/concepts/`, `03_Garden/tools/`, `03_Garden/people/`

2. **Build knowledge graph**
   - Extract: title, key ideas, existing backlinks, tags
   - Map what links to what

3. **Find missing connections**
   - Semantic similarity between notes
   - Shared concepts not yet linked
   - Orphan notes (no incoming/outgoing links)

4. **Suggest links**
   For each suggestion:
   ```
   [[rust-ownership]] ↔ [[react-hooks]]
   Reason: Both discuss memory/reference management patterns

   [[clerk-auth]] → [[saas-patterns]]
   Reason: SaaS patterns note references auth, could link back
   ```

5. **Apply links** (with confirmation)
   - Add `[[suggested-note]]` to Connections section
   - Update both notes (bidirectional)

6. **Report**
   ```
   Scanned: 12 notes
   Found: 5 missing connections
   Applied: 3 (2 skipped)
   Orphans: [[old-note]] (consider archiving)
   ```

## Options
- `/relink` - Full scan, suggest all
- `/relink rust` - Focus on notes mentioning "rust"
- `/relink --apply` - Auto-apply without confirmation
- `/relink --orphans` - Only show disconnected notes
