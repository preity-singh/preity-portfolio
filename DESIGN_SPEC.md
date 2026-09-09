# Preity Personal Website — Master Design Spec v1

## Status
This file is the source of truth for the website. Do not simplify, reinterpret, or add to this direction without explicit approval.

## 1. Core feeling
The site should feel:

**curious · warm · technical · adventurous · slightly whimsical**

Visual formula: **editorial × playful × technical**.

The site should be immediately easy to navigate but rewarding to explore. The core interaction principle is:

> **The page is calm until you interact with it.**

At rest: elegant, spacious, quiet. On hover/cursor/scroll: subtle, delightful reactions.

Avoid generic developer-portfolio styling, SaaS landing-page styling, glassmorphism, giant gradient blobs, excessive cards/pills, skill bars, pop-up windows, unnecessary separate pages, or animation for animation’s sake.

## 2. Architecture
One continuous scrolling page. No separate About, Projects, or Experience routes.

Order:
1. Hero
2. About
3. Work
4. Play
5. Contact / Footer

Sticky/lightweight navigation:

`preity.` on the left.

`about   work   play   contact` on the right.

Each item smooth-scrolls to its section. A current section may receive a tiny dot or understated underline. Do not use active-state pills.

LinkedIn/GitHub do not need to appear in the main nav. Put them clearly in Contact.

The wordmark is **`preity.`**, not `preity ✦`. The period should feel quiet, confident, editorial, and understated. The four-pointed star is a separate recurring visual character.

## 3. Color system
Core UI colors:
- Midnight: `#0C0F60`
- Electric blue: `#265ADF`
- Warm off-white: approximately `#F7F7F3` (may be tuned slightly after visual testing; never stark white)

Do **not** add orange as an official UI accent.

Photography should retain its natural colors, including sunset orange, peach, gold, green, sky blue, and pink. Do not tint photos blue or recolor them to match the UI.

Conceptual split:
- **Build / Work:** cool, blue, structured, technical
- **Life / Play:** warm photography, movement, exploration, looseness

The warm/orange photography should intentionally contrast with the blue interface. Orange should come from photography, not CSS decoration.

## 4. Typography
Use:
- Display / personality: **DM Serif Display**
- Functional / body: **Inter**

Use the serif selectively for large editorial/emotional moments. Use Inter for navigation, labels, metadata, descriptions, project details, and functional UI.

Typography should do more visual work than boxes or decoration. Favor large type and negative space.

## 5. Shape language
Rounded, soft geometry. Never harsh.

Large section containers can use approximately 40–60px corner radii on desktop, scaled appropriately on mobile. Some section transitions should feel like one giant rounded surface sliding over another rather than mechanically alternating rectangular sections.

Buttons, image masks, and interactive containers should share softened geometry, but do not turn everything into a pill.

## 6. Signature visual language: ✦ + light
Do not invent a literal mascot/object. No flowers, butterflies, clouds, etc.

Internal design concept: **light that follows curiosity**. This phrase does not need to appear on the site.

### Four-pointed sparkle ✦
Use the four-pointed sparkle sparingly. Possible appearances:
- Hero: one isolated sparkle
- About: Swiss-lake thought
- Play: section title/detail
- Footer: optional final appearance

Never create a star field, glitter effect, repeating background, or excessive sparkle usage.

Possible behavior: a very slow idle rotation in one location; on hover, one satisfying full spin with perhaps a tiny scale response.

### Cursor-following light
On selected large rounded containers, the nearest point on the border to the cursor should receive a soft electric-blue halo. The light should follow smoothly around the perimeter.

The effect must be diffused and subtle — not neon, RGB/gamer, or a giant spotlight.

Some interactive regions may receive an extremely faint radial aura beneath the cursor. It should be barely perceptible.

## 7. Animation philosophy
Target: roughly **70% experimental / 30% traditional**, while navigation remains highly conventional.

Global rule:
- At rest → quiet
- Hover → movement
- Scroll → subtle reveal
- Click → useful result

Examples:
- Project hover: border illuminates and a project-specific visual activates
- Photo hover: photo gently responds
- Sparkle hover: one rotation
- Nav hover: tiny dot/underline motion
- Scroll entry: subtle upward/fade reveal

Do not use:
- constant flying objects
- excessive parallax
- giant custom cursor
- scroll hijacking
- long loading intro
- animations that interfere with reading
- glow on every object

Respect `prefers-reduced-motion`.

## 8. Hero
Background: Midnight `#0C0F60`.

Approximately one viewport tall with generous negative space.

Navigation at top:
`preity.` on left; `about work play contact` on right.

Primary heading:
**hi, i'm preity.**

Current hero line — keep this unless explicitly changed after seeing it typeset:

> **endlessly curious about what we can build when technology makes previously impossible ideas possible.**

Do not replace this with generic copy such as “passionate about AI,” “building impactful solutions,” “leveraging technology,” or “transforming the future.” The hero is about curiosity, not credentials.

Place one small ✦ somewhere slightly imperfect/off-grid rather than dead-center. It may rotate very slowly.

Optional small bottom cue: `↓ scroll to explore`.

Desired first impression: this person builds things and is deeply curious about what is becoming possible — not “here is a CS student résumé.”

## 9. About
Transition from midnight into warm off-white using large rounded geometry.

Large serif opener:

**a little about me.**

Then a short introduction connecting computer science, building with AI, curiosity, technology, and life outside technology without becoming a biography or résumé summary. Do not invent the final paragraph without approval.

Three compact fragments:

`currently`
**founding AI engineer @ PitCrewLabs**

`studying`
**computer science @ ucsd**

`probably thinking about`
**swimming in lakes in the swiss alps ✦**

Keep the Swiss-lake line. It is intentionally specific and human.

Use an actual Swiss lake photograph taken by Preity near this thought. Do not use stock photography. The lake image should have generous rounded corners. A subtle cursor approach response is allowed: only a few pixels of movement and/or tiny scale increase; no dramatic 3D tilt.

A separate Swiss mountain/cow image can be used later in Play.

## 10. Work
Transition into Electric blue `#265ADF`, potentially with a huge rounded top edge overlapping the previous off-white section.

Heading:
**things i've worked on**

Do not split this into separate Experience / Projects / Skills sections. Work is one continuous story. Show fewer things at greater scale.

### Work 01 — PitCrewLabs
Largest treatment because it is current and substantial.

Display:
**PitCrewLabs**
`founding ai engineer · 2025 → now`

Portfolio story should focus on interesting problems rather than pasted résumé bullets: AI sales coaching, real-world LLM systems, evaluation/model selection, messy production transcripts, AWS orchestration, and turning unreliable inputs into useful outputs.

Relevant source material includes a multi-tenant sales-coaching platform, two-pass LLM pipeline, nightly AWS orchestration, an eight-model evaluation harness, and transcription/vocabulary work. Translate this into readable portfolio language later; do not invent details.

Interaction: large rounded container with cursor-following edge glow. A small AI/evaluation visual may activate on hover, but do not use cliché floating neural-network dots.

### Work 02 — Strava Overtraining Detector
Give this a visual treatment.

Core story: full-stack training-load analyzer using real Strava histories, deterministic workload/risk calculations, and an LLM interpretation layer. Technologies include Python, FastAPI, React/Recharts, Strava OAuth, and Groq/Llama.

Potential visual: a mini training chart that is static at rest and draws itself or animates a single point on hover.

Possible actions:
- `watch demo ↗`
- `github ↗`

A polished recorded demo + screenshots + GitHub are sufficient; the production backend does not need to remain paid/live indefinitely.

### Work 03 — Stripe RAG Support Agent
Core story is not “AI chatbot.” Emphasize grounded retrieval, Stripe documentation, citations, conversational memory, failure handling, and escalation when the system does not know.

Implementation includes Notion escalation and scope handling.

Potential hover visual:
`query → retrieving... → 3 sources found → answer`

Only animate when interacted with.

### Number of major projects
Three major pieces is intentional. Three strong pieces are better than six mediocre cards. Do not fill space by promoting weaker projects. New projects can be added later when genuinely worth showing.

### Previous experience
Near the end of Work, include a very understated `previously` area:

**RIA Advisory**
`financial services technology consulting · 2025`

**Level Nine Group**
`healthcare cybersecurity · 2024`

Do not give these giant cards equal to PitCrewLabs. They provide history/range. The website is not a résumé with CSS.

## 11. Work → Play transition
This should be one of the most satisfying transitions.

After structured electric/midnight blue, the interface opens into warm off-white with more whitespace and photography. The technical rhythm loosens.

Heading:
**outside the terminal ✦**

The site now behaves more like an editorial scrapbook than a standard portfolio.

## 12. Play — photography is the backbone
Do not create six equal hobby cards.

Photography should create the composition, with interests woven through it. Use a mixture of large, small, overlapping, and isolated images with generous whitespace and rounded corners.

All photography remains in natural color. Warm sunsets should visually counterbalance the cool Work section.

## 13. Travel / photography
Carousel caption (small, understated, directly beneath the photo carousel):
**chasing sunsets & the right composition.**

Editorial copy (not currently placed on the page — the carousel was deliberately decoupled from this line; available for reuse elsewhere later):
**15 countries & counting**

This line may be refined later, but preserve the idea.

Use Preity's own photographs. Useful visual families include:
- landscape/outdoors: Swiss mountains + cow, lake/mountain views
- ocean/San Diego: surfers at sunset, soft horizon/sunset
- architecture/geometry: Taj Mahal detail, Louvre pyramid, white building against deep blue sky
- small observations: bird on roof

Do not turn this into a travel log with mandatory city/date captions. The point is her eye, not documentation.

## 14. Photo-stack interaction
Several photos may overlap like physical prints.

At rest: slightly overlapping, perhaps with tiny rotations.

Hover: selected photo moves forward slightly and may straighten by about 1–2 degrees; others recede subtly. Optional subtle cursor-light response.

Click: do not open a modal. Bring/cycle the selected photograph to the front of the stack.

Preserve the continuous-page philosophy.

## 15. Outdoors
Woven beside outdoor photography rather than inside a generic card.

Possible copy:
**happiest somewhere outside.**

`skiing · SUP · running`

Small note:
`recent discovery → swimming in swiss lakes ✦`

This can echo the earlier About detail.

## 16. Books
Small editorial moment:

`on my bookshelf`

**rom-coms + fantasy**

Emily Henry

*Book Lovers* · *Beach Read*

Favorites may include:
- *This Woven Kingdom*
- *Six of Crows*
- *The Folk of the Air*

Do not add plot summaries, ratings, or a fake bookshelf graphic unless later explicitly approved.

## 17. Music
`on repeat`

**Tame Impala · Olivia Rodrigo · Noah Kahan**

`forever`

**Ariana Grande · Arijit Singh · Lana Del Rey**

Tame Impala is the locked replacement for Gracie Abrams.

Potential interaction: tiny waveform/equalizer reacts only on hover. Do not make it constantly bounce while reading.

Preity enjoys making playlists, but do not invent/link a playlist for v1 unless one is explicitly provided.

## 18. F1 + tennis
Small moment:

`race weekends`

**f1 + tennis**

This does not need a huge section. Possible F1 Easter egg: a tiny horizontal line/object zips across once on hover. No cartoon race car, checkered flag motif, or Formula 1 red added to the palette.

## 19. Food / Beli
Food matters but does not need a full module.

Line:
`always looking for Beli recs ↗`

"Beli" is a link (URL not yet provided — placeholder until supplied). Food/travel/culture can also appear naturally through photography.

## 20. Curation rule
Do not dump every interest onto the site.

Primary identity: **curiosity + building + AI**

Recurring personal detail: **Swiss lakes**

Main Play storytelling: **photography + travel**

Secondary Play details: **books + music + F1/tennis + outdoors**

Food/Beli: **tiny detail / Easter egg**

## 21. Contact / Footer
The nav item `contact` smooth-scrolls here. No separate Contact page.

Return to Midnight `#0C0F60` with generous space.

Preferred primary line:
**say hi.**

Then links:
`email   github   linkedin`

This is where LinkedIn gets clear presence. A recognizable LinkedIn icon may be used near the text, but do not copy a friend's exact nav treatment.

Potential closing line:
`made with curiosity ✦`

This line is not fully locked; use only if it does not make the sparkle motif feel overused.

## 22. Desktop rhythm
The page should feel spacious, asymmetrical, and editorial. Do not mechanically reproduce a rigid grid.

High-level rhythm:
- Midnight hero with lots of negative space
- Warm off-white About with lake photo
- Large rounded Electric-blue Work surface
- Warm off-white Play opening into photography and looser compositions
- Midnight Contact/Footer

Work project rows should be large and breathable. Play should deliberately break the stricter Work rhythm.

## 23. Mobile
Do not simply squish desktop.

Navigation should preserve `preity.` and the four section links if possible. Prefer a clean two-line arrangement over a generic hamburger menu unless width truly requires otherwise.

Hero typography and sentence line breaks should be intentional.

Projects stack vertically.

No important behavior may rely only on hover. On touch, hover-revealed information must be visible by default, tap-activated, or activated as it enters the viewport.

Photo stack should become tap/swipe friendly. Avoid horizontal-overflow gimmicks.

Optimize/compress photos and use responsive image delivery. The site should feel fast.

## 24. Accessibility
Build accessibility from the start:
- semantic sections
- keyboard-accessible nav/interactions
- visible focus states that fit the design
- meaningful alt text for photography
- sufficient contrast
- `prefers-reduced-motion`
- no information available only on hover
- touch targets large enough to tap
- animations must not interfere with reading

## 25. Technical direction
Preferred stack:
- Next.js
- TypeScript
- Tailwind CSS
- Motion / Framer Motion
- Vercel

No backend unless a real need appears.

Mostly static. Use Next Image for photography. Keep project/content data separate from components where sensible so content can be updated later.

Suggested structure (not mandatory if framework conventions differ):

```text
app/
  page.tsx
components/
  Navigation.tsx
  Hero.tsx
  About.tsx
  Work.tsx
  Project.tsx
  Play.tsx
  PhotoStack.tsx
  CursorGlow.tsx
  Sparkle.tsx
  Footer.tsx
data/
  projects.ts
public/
  photos/
  projects/
```

Do not over-componentize trivial markup.

## 26. Explicit anti-pattern list
DO NOT:
- add gradients unless explicitly requested later
- add glassmorphism
- add glowing gradient blobs
- add generic Bento-grid cards everywhere
- add a custom mouse cursor
- add excessive pills
- add a tech-stack logo cloud
- add skill progress bars
- add a “Download Resume” CTA to the hero
- add generic AI-generated illustrations
- add stock photography
- add a headshot just because portfolios “need” one
- add extra sections
- invent accomplishments
- invent hobbies
- invent copy
- turn Play into a card grid
- create modal/pop-up project windows
- create unnecessary separate routes
- use giant looping animations
- use scroll hijacking
- make every object glow
- mechanically alternate every section blue/off-white
- recolor photography
- introduce orange UI decoration to match sunset photos
- copy the friend's exact implementation or navigation treatment
- copy Dani's flowers
- solve empty space by adding things

**Empty space is part of the design.**

## 27. Inspiration boundaries
Friend's site:
- Borrow: simplicity, strong typography, cursor-reactive feeling, clean presentation
- Do not borrow: exact layout, navigation naming, popup behavior, visual treatment, copy

Snig:
- Borrow: typography-led design, strong color confidence, editorial hierarchy
- Do not borrow: exact palette/layout/components

Dani:
- Borrow: personality, delightful interaction, professional and personal worlds coexisting
- Do not borrow: flowers or specific visual motifs

Original identity created here:
- `preity.`
- Midnight + electric blue
- Huge rounded surfaces
- Warm photography disrupting the cool interface
- Continuous scroll
- Sparing ✦ motif
- Light following the cursor
- Work waking up on interaction
- Play as photographic scrapbook
- Swiss lakes
- Quiet → interactive

## 28. Narrative arc
The site should tell this story in order:
1. **Curiosity** — what drives her?
2. **Human context** — who is she?
3. **Substance** — she builds real things.
4. **Range** — there is much more to her than computers.
5. **Connection** — how to reach her.

That is why the sequence is Hero → About → Work → Play → Contact.

## 29. Locked v1 decisions
- Nav: `preity.` · `about` · `work` · `play` · `contact`
- Palette: `#0C0F60`, `#265ADF`, warm off-white around `#F7F7F3`
- Fonts: DM Serif Display + Inter
- Shape language: large rounded geometry
- Motif: sparing four-pointed ✦
- Signature interaction: cursor-following soft light
- Interaction principle: calm until interacted with
- Hero: curiosity-first
- About: human context + Swiss lake
- Work: PitCrewLabs + Strava Overtraining Detector + Stripe RAG Support Agent; previous roles understated
- Play: photography + outdoors + books + music + F1/tennis; food/Beli tiny
- Music update: Tame Impala replaces Gracie Abrams
- Photography remains naturally warm/orange; it is not recolored to match blue
- Experimental target: ~70%, while navigation remains extremely simple

## 30. Current build rule
Conceptual brainstorming is complete. Do not add another section, color, interaction, hobby, or inspiration by default. Remaining decisions should be implementation decisions unless Preity explicitly reopens the design direction.
