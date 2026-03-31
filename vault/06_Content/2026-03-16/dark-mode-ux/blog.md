---
type: content-draft
format: blog
status: draft
created: 2026-03-16
source: "[[03_Garden/concepts/context-engineering]]"
---
# Dark Mode Is a UX Requirement, Not a Feature

Your users aren't asking for dark mode because it looks cool. They're asking because light mode at 11pm is a flashbang.

## Draft notes
- System preference detection should be the default
- localStorage for manual override
- CSS custom properties make the implementation trivial
- The real work is designing for both, contrast ratios, image treatment, shadow values
- Test both modes. If you only test light, your dark mode will look like an afterthought.

## Outline
1. The real reason people want dark mode (it's not aesthetics)
2. Implementation: 3 approaches ranked by effort
3. The gotchas nobody warns you about (images, shadows, borders)
4. Testing checklist
