---
name: Ibukun Aluko, hiring portfolio
description: The Bill of Lading. A shipping document where every project is a numbered container with its paperwork.
colors:
  dock-grey: "#cfd2cf"
  ink: "#14181b"
  ink-soft: "#4a5258"
  form-paper: "#ededE6"
  container-teal: "#1f5560"
  container-oxide: "#8a4a2b"
  container-slate: "#39434b"
  container-khaki: "#8c8564"
  hi-vis: "#ffd200"
  hi-vis-hover: "#ffe04d"
typography:
  display:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(3.6rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
  title:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  stencil-id:
    fontFamily: "Big Shoulders Stencil, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  mono:
    fontFamily: "Martian Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3rem"
  section: "5rem"
components:
  button-cta:
    backgroundColor: "{colors.hi-vis}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 2.2rem"
    height: "3.5rem"
  button-cta-hover:
    backgroundColor: "{colors.hi-vis-hover}"
  chip:
    backgroundColor: "{colors.form-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.8rem"
  chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.form-paper}"
  slip:
    backgroundColor: "{colors.form-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.4rem 1.6rem"
  container-teal:
    backgroundColor: "{colors.container-teal}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
  container-khaki:
    backgroundColor: "{colors.container-khaki}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Ibukun Aluko, hiring portfolio

## Overview

**Creative North Star: "The Bill of Lading"**

The page is a shipping document. Ibukun is the shipper; each project is a numbered container (IBKA 410027 4 and so on) with its paperwork: a form-paper slip stating Brief, Build, Test, Ship. The ground is dock concrete, the cargo is corrugated steel in muted teal, oxide, slate and khaki, and the only loud colour on the page is hi-vis yellow, reserved for the things you click to hire him.

Density is moderate and editorial: large condensed uppercase headlines, flat 2px ink rules, square corners, and paper slips that sit slightly lifted off the dock. The hero's yard of four containers deliberately breaks the section boundary below it. It refuses the dev-portfolio default of name, tagline and a card grid.

**Key Characteristics:**
- Dock-grey ground, ink rules, carbon-copy form paper for every readable surface.
- Four corrugated container tones, each with vertical ribs (an authored SVG tile) and a stencilled ID on the door end.
- Hazard-stripe edge under the sticky bar and above the contact section.
- One highlighter, hi-vis yellow, on clickable calls to action only.
- Interactive by metaphor: load a container onto the bill, tap a skill chip, switch motion off.

## Colors

A cool concrete ground, near-black ink, warm off-white paper, four oxidised container paints, and one safety yellow.

### Primary
- **Hi-Vis Yellow** (#ffd200): the single highlighter. Fill of the Email me and Send message buttons only; hover lifts to #ffe04d.

### Secondary (container paints)
- **Deep Teal** (#1f5560): container tone, first project and ribbed headers; white stencil text.
- **Oxide Brown** (#8a4a2b): container tone, second project; white text.
- **Slate** (#39434b): container tone, third project; white text.
- **Khaki** (#8c8564): section-header and "Experience" containers; ink text (the only tone with dark text).

### Neutral
- **Dock Grey** (#cfd2cf): page ground, sticky bar, scrollbar track, hazard-stripe gap.
- **Ink** (#14181b): text, all 2px borders, focus outline, pressed chip, hazard stripe.
- **Soft Ink** (#4a5258): secondary text, dates, stage keys, dashed rules.
- **Form Paper** (#ededE6): slips, the bill, ledger rows, chips, plates, form panel.

### Named Rules
**The One Highlighter Rule.** Yellow marks a clickable call to action and nothing else. Containers use oxide and khaki, never orange or mustard, so yellow stays unique.
**The Paper-for-Reading Rule.** Long text sits on form paper or dock grey in ink; container paints carry only short stencilled labels and titles.

## Typography

**Display Font:** Big Shoulders Display (sans-serif fallback)
**Stencil Font:** Big Shoulders Stencil, container IDs only
**Body Font:** Barlow (system-ui fallback), weights 400 to 700
**Mono Font:** Martian Mono, only for dates, stack lines, route steps and paper kickers

**Character:** Condensed, uppercase, industrial headlines over a plain humanist body; the stencil cut and mono are rationed to the paperwork itself.

### Hierarchy
- **Display** (900, clamp(3.6rem, 9vw, 6rem), 0.92): the hero H1 "Shipped end to end.", uppercase, balanced wrap.
- **Headline** (900, clamp(2.2rem, 4.5vw, 3.2rem), 1): section titles inside container headers; plain section h2 runs clamp(2.4rem, 5vw, 3.6rem).
- **Title** (800, clamp(1.7rem, 3vw, 2.4rem), 1): project slip titles; ledger role titles 1.7rem; bill name 1.7rem.
- **Body** (400, 1.0625rem, 1.55): prose, lede at 1.25rem in soft ink, prose measure 36 to 46rem.
- **Label** (700, 0.75 to 0.9375rem, 0.06 to 0.1em, uppercase): CTA, form labels, plates, stage keys, manifest terms.
- **Stencil ID** (700, 0.9 to 1.15rem, 0.1em): container door-end IDs, set vertical (vertical-rl, rotated 180) on door ends and horizontal on slip bands.
- **Mono** (0.8125rem): dates, stack lines, route steps.

### Named Rules
**The Rationed Mono Rule.** Mono and stencil faces appear only on container IDs, dates, stack lines and route steps, never on body copy.

## Layout

Content max-width is 84rem with side padding clamp(1rem, 4vw, 3.5rem); sections breathe at 5rem top padding. The hero is a two-column grid (1.45fr / 1fr, gap up to 5rem): headline, lede and CTA left, the lifted bill of lading right. Below it the yard of four containers spans both columns and overhangs the next section by 3rem (margin-bottom -3rem), so the work section opens with 12rem top padding. Containers come in two lengths, 40 ft (full or flex 2) and 20 ft (64% or flex 1.4). Skills are a two-column manifest (14rem term, fluid definition); experience is a ledger row (12rem dates, fluid body); papers use an auto-fit 15rem grid.

Responsive at 860px: bar and nav wrap, hero goes single column with yard first and bill second (no rotation), yard wraps into two-up blocks, ledger and manifest stack, papers and minis go two-up, door ends narrow to 3.25rem.

## Elevation & Depth

Flat by default with ink borders; depth comes from soft, long, downward drop shadows that lift paper and containers off the dock. Nothing is blurred glass and no hard offset shadows are used.

### Shadow Vocabulary
- **Slip** (`0 22px 34px -22px rgba(20,24,27,0.55)`): slips and ledger rows (ledger 0 18px 30px -22px at .5).
- **Bill / form** (`0 24px 40px -22px rgba(20,24,27,0.55)`): hero bill and contact form; the bill also tilts rotate(0.6deg).
- **Yard container** (`0 28px 36px -22px rgba(20,24,27,0.6)`): the four hero containers.
- **Loaded container** (`0 40px 40px -22px rgba(20,24,27,0.7), 0 0 0 4px #cfd2cf, 0 0 0 7px #14181b`): the selected yard container, lifted 16px with a double dock-and-ink frame.

### Named Rules
**The Lift-Means-Loaded Rule.** A container rises (6px on hover, 16px with the frame when loaded) only to signal it is the one on the bill.

## Shapes

Square corners everywhere (border-radius 0, even inputs). Every object is outlined with a 2px ink rule. Hazard stripes are 135deg repeating gradients, 10px ink and 10px dock, 10px tall: under the sticky bar and above the contact section. Containers have a darker door end (30% black, 16% on khaki) with a double-line lock bar; paper cards carry an 8px ink top edge. Stage markers are 0.65rem ink squares; bullets are 0.6rem by 2px ink dashes.

## Components

### Buttons
- **Shape:** square, 2px ink border, min-height 3.5rem, padding 0 2.2rem.
- **Primary (CTA):** hi-vis fill, ink text, Barlow 700 1.0625rem uppercase, tracking 0.06em. Used for Email me and Send message only.
- **Hover:** fill #ffe04d and translateY(-2px). Disabled: 60% opacity, no lift.
- **Text links:** bold, inherited colour, 2px underline offset 0.2em (e.g. Read the case study). Never yellow.

### Chips
- **Style:** form paper, ink text, 2px ink border, Barlow 600 0.9375rem.
- **State:** hover fills dock grey; aria-pressed true inverts to ink fill with paper text. A skill chip reveals "where I have used it" in a paper panel (aria-live) below the manifest.

### Containers
- **Corner Style:** square, 2px ink border.
- **Background:** one of four tones plus the container-side.svg ribs tile (240px wide, repeat-x).
- **Internal structure:** door end (4.25rem) holding the vertical stencil ID and lock bar, then body padding 1.4rem 1.6rem. Section headers use width max-content with the tile removed.

### Slips and ledger
- **Slip:** form paper, 2px ink border, slip shadow, a tone-coloured ribbed header band carrying the ID and a plate (form-paper tag with the project note), then title, copy, mono stack line and links.
- **Ledger row:** paper, 12rem mono dates column, uppercase title, tagline, dash-bulleted proof.

### Inputs / Fields
- **Style:** white fill, 2px ink border, square, Barlow 1.0625rem; labels uppercase 0.875rem. Focus uses the global 3px ink outline offset 3px.

### Navigation
- **Style:** sticky dock-grey bar, 2px ink bottom rule plus hazard stripe; brand in Big Shoulders 800 uppercase 1.6rem; links Barlow 600 with a 2px ink underline on hover. Mobile: links drop to a full-width scrolling row.

### Yard (signature)
Four container buttons (three projects, plus a khaki Experience jump link). Choosing one loads its Brief, Build, Test and Ship stages onto the bill of lading with staggered entry (60ms steps); the label flips from "Load" to "On the bill". Containers drop in on page load (0.9s, 90ms stagger).

### Motion switch
Outlined ink button with a square indicator (filled when on, hollow when off). Sets html[data-motion] and persists to localStorage key ia-motion; defaults to off when prefers-reduced-motion is set. When off, all animation, transition and smooth scroll are disabled.

## Do's and Don'ts

### Do:
- **Do** reserve #ffd200 for clickable calls to action (Email me, Send message).
- **Do** outline every object in 2px ink and keep corners square.
- **Do** put reading text on form paper (#ededE6) or dock grey.
- **Do** give every container a stencilled IBKA ID and keep container text high-contrast: white on teal, oxide, slate; ink on khaki.
- **Do** respect data-motion="off" for any new animation or transition.
- **Do** style by class; CSS modules scope class names.

### Don't:
- **Don't** use yellow for decoration, headings, badges or non-clickable emphasis.
- **Don't** introduce orange, mustard or additional container colours that compete with yellow.
- **Don't** fall back to the name, tagline and card-grid portfolio layout.
- **Don't** round corners or add blur, gradients as fills, or hard offset shadows.
- **Don't** use mono or stencil faces for body copy.
- **Don't** target ids from the CSS module (see caveats); use classes.

### Known caveats (carried by the build, not rules)
- The ribs SVG tile (240px, repeat-x) shows a faint visible seam repeat in the slip header bands, which are wide and short.
- CSS-module id selectors do not apply; the stylesheet already uses classes, and ids in page.tsx (#top, #work, #voyages, #manifest, #contact, #h1) serve anchors only.
- ::selection uses hi-vis, a non-click use of the highlighter that bends the One Highlighter Rule; recorded as drift, not canon.
- Dead classes remain in page.module.css (.routeUnused) and duplicate .head and .yardBox declarations; harmless.
