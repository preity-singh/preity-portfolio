# Instructions for Claude Code — Preity Personal Website

Before making **any** design or UI decision, read `DESIGN_SPEC.md` in full.

`DESIGN_SPEC.md` is the source of truth for this website. Do not summarize it away or substitute generic portfolio conventions.

## Core principles
- One continuous scrolling page.
- Calm at rest, playful on interaction.
- Editorial × playful × technical.
- Simple navigation is more important than experimentation.
- Empty space is intentional.
- Do not add content simply to fill space.
- Do not invent copy, accomplishments, projects, interests, links, or sections.
- Preserve photography in its natural colors.
- Do not introduce UI colors based on the photography.
- Respect the explicit anti-pattern list in `DESIGN_SPEC.md`.
- Do not copy referenced inspiration sites.

## When something is unspecified
1. Prefer the simplest solution.
2. Preserve the principles in `DESIGN_SPEC.md`.
3. Prefer restraint over adding another visual element.
4. Ask before making a major visual/design decision.

## Build incrementally
Do **not** build the entire website in one pass unless explicitly asked.

Implement one phase at a time, run it, and stop for visual review. Once a phase is approved, treat its design as locked unless a later change requires adjustment.

## Tech direction
- Next.js
- TypeScript
- Tailwind CSS
- Motion / Framer Motion where motion is actually useful
- Vercel deployment
- Responsive and accessible
- Mostly static; no backend without a real requirement
- Optimize images with Next Image

## Engineering expectations
- Keep components readable and appropriately scoped; do not over-componentize.
- Keep repeated project/content data separate from presentation where useful.
- Use semantic HTML.
- Support keyboard navigation and visible focus states.
- Respect `prefers-reduced-motion`.
- Do not make essential content hover-only.
- Keep animation performant; prefer transforms/opacity.
- Keep the page fast despite photography.

## Design guardrails
Do not introduce gradients, glassmorphism, giant blobs, generic bento grids, excessive pills, a custom cursor, skill bars, tech-logo clouds, stock photography, generic AI art, modal project windows, scroll hijacking, or extra routes/sections unless Preity explicitly requests them.

Do not solve whitespace by adding content.

## Content guardrail
If exact content, a URL, photo selection, project screenshot, demo link, GitHub link, contact detail, or other asset has not been provided, use a clearly marked placeholder or ask for it. Never fabricate it.
