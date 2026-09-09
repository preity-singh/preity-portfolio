# Preity Personal Website — Build Plan

This build should be iterative. `DESIGN_SPEC.md` is the source of truth and `CLAUDE.md` defines how the coding agent should work.

## Phase 0 — Setup
- Initialize Next.js + TypeScript + Tailwind if needed.
- Add Motion / Framer Motion only if needed for the approved interactions.
- Establish global font loading for DM Serif Display + Inter.
- Establish CSS variables/tokens for midnight `#0C0F60`, electric blue `#265ADF`, and warm off-white around `#F7F7F3`.
- Establish base typography, spacing, focus states, reduced-motion handling, and responsive container rules.
- Create logical asset folders under `public/`.
- Do not build full page content yet.

## Phase 1 — Navigation + Hero
Build only:
- lightweight/sticky navigation
- `preity.` wordmark
- `about work play contact` smooth-scroll links
- midnight hero
- `hi, i'm preity.`
- current hero curiosity line from the design spec
- one sparing four-pointed ✦ interaction
- optional subtle scroll cue
- desktop + mobile behavior

Review visually before proceeding. Check type scale, line breaks, spacing, midnight color, star placement, motion restraint, and nav behavior.

## Phase 2 — About
Build:
- rounded transition from Hero into warm off-white
- `i'm curious about pretty much everything.`
- space for approved short intro copy
- currently / studying / probably thinking about fragments
- Swiss-lake line
- actual Swiss lake photo supplied by Preity
- subtle photo interaction
- responsive composition

Review before proceeding.

## Phase 3 — Work shell + PitCrewLabs
Build:
- rounded transition into electric-blue Work surface
- `things i've worked on`
- overall Work typography/rhythm
- PitCrewLabs as the largest project/role treatment
- cursor-following soft border illumination prototype
- restrained project-specific visual if it genuinely supports the design

Do not build all projects until the Work visual language is approved.

Review the cursor glow carefully. It should be soft/diffused, not neon or gamer-like.

## Phase 4 — Strava + Stripe + Previous Roles
Add:
- Strava Overtraining Detector
- static-at-rest / interactive mini chart behavior
- placeholders for demo/GitHub until real links/assets are supplied
- Stripe RAG Support Agent
- subtle retrieval-flow interaction
- understated `previously` area for RIA Advisory and Level Nine Group

Review desktop and mobile.

## Phase 5 — Play foundation
Build the transition from structured blue Work into warm off-white Play.

Add:
- `outside the terminal ✦`
- editorial/asymmetrical layout system
- photography as the visual backbone
- no hobby-card grid

Start with only a few supplied photographs to establish the composition before filling the section.

Review before adding all personal details.

## Phase 6 — Photography interactions + personal fragments
Add selectively:
- travel/photography editorial moment (`15 countries, countless camera roll photos.` or approved refinement)
- photo-stack interaction: hover lifts/straightens; click brings image forward; no modal
- outdoors / `happiest somewhere outside.`
- skiing · SUP · running
- Swiss-lake callback
- books
- music: Tame Impala · Olivia Rodrigo · Noah Kahan / Ariana Grande · Arijit Singh · Lana Del Rey
- F1 + tennis Easter egg
- optional tiny food/Beli detail only if it fits naturally

Do not let these become equal cards. They should feel woven through an editorial scrapbook.

Review Play extensively; it is expected to require the most visual iteration.

## Phase 7 — Contact / Footer
Build:
- midnight footer
- `say hi.`
- email / GitHub / LinkedIn using real URLs/details supplied by Preity
- optional final ✦ / `made with curiosity ✦` only if motif does not feel overused
- nav `contact` smooth-scroll target

## Phase 8 — Mobile + accessibility pass
Audit every section for:
- touch behavior replacing hover-only interactions
- intentional mobile typography/line breaks
- nav usability
- photo stack usability
- semantic HTML
- keyboard navigation
- focus states
- contrast
- alt text
- reduced motion
- touch-target size

Avoid defaulting to a hamburger menu if the four simple nav links can remain cleanly visible.

## Phase 9 — Performance pass
- Compress/resize source photography appropriately.
- Use responsive Next Image sizing.
- Check layout shifts.
- Keep animation to transforms/opacity where possible.
- Remove unused dependencies/code.
- Verify mobile load behavior.

## Phase 10 — Independent code review (good Codex task)
Ask a second coding agent to read `DESIGN_SPEC.md` and `CLAUDE.md`, then review rather than redesign.

Suggested review request:

> Read DESIGN_SPEC.md and CLAUDE.md first. Review the current implementation against the design spec. Do not redesign it. Identify deviations from the design spec, responsive problems, accessibility problems, unnecessary complexity, animation/performance problems, and specified visual behaviors that are missing. Separate findings into Must fix, Worth improving, and Leave alone. Do not modify files yet.

## Phase 11 — Final polish + deployment
Only after the whole page is approved:
- replace all placeholders with real links/assets
- verify no invented content remains
- final responsive checks
- test major browsers
- run lint/type/build checks
- deploy to Vercel
- verify production links and image loading

## First Claude Code prompt
Use this after the three project instruction files are in the repo:

> Read CLAUDE.md and DESIGN_SPEC.md completely before doing anything. We are going to implement this website incrementally. Do NOT build the entire website yet. First: (1) initialize the Next.js + TypeScript + Tailwind project if needed; (2) establish the global design system — fonts, color variables, typography, spacing, base responsive behavior; (3) build ONLY the navigation and hero section; (4) implement the hero's subtle four-pointed-star interaction; (5) make the hero responsive; (6) do not implement About, Work, Play, or Contact yet; (7) do not add anything not specified in DESIGN_SPEC.md. Once complete, run the site and stop so I can review the result before we continue.
