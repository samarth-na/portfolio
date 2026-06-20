---
name: Samarth Nagar — Portfolio
description: Backend/systems developer portfolio with a warm, mechanical, opinionated voice
colors:
  primary: "#ff4b00"
  paper: "#ede8e0"
  cream: "#f6f2eb"
  ink: "#0f1110"
  steel: "#7d8fa3"
  slate: "#9fb3c8"
  text-primary: "#0f1110"
  text-secondary: "#3e4440"
  text-muted: "#6d736e"
  line: "rgba(15, 17, 16, 0.14)"
  line-strong: "rgba(15, 17, 16, 0.45)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(4rem, 16vw, 14rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.9
  title:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Geist Sans, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
    textTransform: "uppercase"
components:
  card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.text-primary}"
    rounded: "0"
    padding: "1.5rem"
    border: "1px solid {colors.line}"
  card-hover:
    backgroundColor: "#ff4b000d"
    textColor: "{colors.text-primary}"
    rounded: "0"
    border: "1px solid {colors.primary}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "0"
    padding: "0.5rem 1rem"
    border: "1px solid {colors.line}"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "0"
    padding: "0.5rem 1rem"
    border: "1px solid {colors.ink}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    rounded: "0"
    padding: "0.25rem 0.5rem"
    border: "1px solid {colors.line}"
---

# Design System: Samarth Nagar — Portfolio

## 1. Overview

**Creative North Star: "The Field Console"**

A warm paper document meets a cold terminal interface. Every page reads like a systems operations log — labeled, documented, stamped with IDs and classifications — rendered in the tactile warmth of paper, cream, and orange signal light. The system treats the portfolio as a deployable artifact: something with a DOC ID, a version, a classification, and an operator.

The mood is grounded, technical, and deliberate. The warm neutral background (paper) and the orange accent (the status light, the exception, the alert state) create tension — the visitor is in a human space reading machine documentation. The three-font stack (Playfair Display for editorial warmth, Geist Sans for clean body, Geist Mono for terminal labels) reinforces the dual identity.

This system explicitly rejects: SaaS-cream generic dev portfolios, over-engineered motion that hides content, editorial-magazine layout clichés, and any pattern that reads as "AI made this" — repeated uppercase eyebrows, identical card grids, gradient text, ghost-card shadows, oversized radii.

**Key Characteristics:**
- Flat surfaces with tonal layering, never shadows
- Squared corners throughout (0px radius); shape comes from layout, not rounding
- Terminal-influenced label taxonomy (DOC ID, CLASSIFICATION, STATUS, FIELD REPORT)
- One orange accent used sparingly as signal, not decoration
- Motion that reveals content already present — never gated behind a transition firing
- A single columnar grid on mobile, expanding to asymmetric grids on desktop

## 2. Colors

The palette is warm-with-bite: paper and cream neutrals with a near-black ink and a single orange signal. Steel and slate are cool complements for metadata and muted accents.

### Primary
- **Orange Signal** (#ff4b00): The single accent. Used for status indicators (pulsing dots), hover borders, selection highlights. Never as background fill outside the Stack section. Proportional to the signal it represents: rare, therefore meaningful.

### Neutral
- **Ink** (#0f1110): Primary text color and the dark background for the Experience and Footer sections. Near-black with a slight cool cast. Also used as body text.
- **Paper** (#ede8e0): The default page background. A warm, very low-chroma off-white. Not cream, not beige — the color of uncoated stock.
- **Cream** (#f6f2eb): Lighter surface used for cards, alternative section backgrounds (Profile, Projects inset), and the hero ticker bar. Slightly brighter than paper.
- **Text Secondary** (#3e4440): Body copy on paper/cream backgrounds. Dark olive-gray — not a pure gray, which would feel washed out against warm paper.
- **Text Muted** (#6d736e): Labels, metadata, secondary info. Olive-gray at ~4.5:1 against paper.

### Accent
- **Steel** (#7d8fa3): Muted blue-gray used for technical label text on ink backgrounds (Experience section). A cool note in an otherwise warm system.
- **Slate** (#9fb3c8): Lighter blue-gray used as a secondary accent, tag backgrounds, and decorative dots.

### Named Rules
**The Signal Rule.** Orange is applied on ≤10% of any given screen. Its rarity is the point — it signals something active, available, or worth attending to. The Stack section is the exception: it earns a full orange background because it's the inventory of the operator's toolchain.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Geist Sans (with Arial, Helvetica, sans-serif fallback)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace fallback)

**Character:** The pairing splits identity — Playfair Display brings editorial warmth and a sense of crafted document, while Geist Sans/Mono anchor the system in technical precision. The tension is deliberate: warm handwriting on top of machine documentation.

### Hierarchy
- **Display** (700, `clamp(4rem, 16vw, 14rem)` heading, 0.9): The hero "SYSTEM OPERATOR" wordmark only. Single words, never phrases. Uses `text-wrap: balance`.
- **Headline** (600, `clamp(2.5rem, 6vw, 4.5rem)`, 0.9): Section titles (Experience, Projects, Stack, Research, Let's build systems). Tight letterspacing at `-0.02em` minimum.
- **Title** (500, `clamp(1.25rem, 3vw, 1.875rem)`, 1.3): Project titles, role titles, card headings (e.g. "WASM Video Editor", "Backend Engineering Intern").
- **Body** (400, 1rem, 1.6): Section descriptions, project descriptions, experience details. Capped at 65–75ch line length. `text-wrap: pretty` on long prose.
- **Label** (400, 0.7rem, 0.12em letter-spacing, uppercase): The `.label` utility. Used for metadata, section kickers, document IDs, status indicators, tag text. All caps always, mono always.

### Named Rules
**The One-Family Limit.** Only one font family per element — Playfair never mixes with Geist inline. Display is Playfair; everything else is Geist. The distinction is the hierarchy.

## 4. Elevation

Flat by default. The system conveys depth through layered colored backgrounds (paper → cream → ink), border tonalities (`line` at 14% vs `line-strong` at 45%), and hover state inversions (a border flips to filled). No box-shadows, no drop-shadows, no float. A surface closer to the viewer is simply a darker or more opaque version of the same material.

## 5. Components

### Buttons (Outline Actions)
- **Shape:** Squared (0px border-radius). What looks like a button is actually a bordered anchor or div.
- **Default:** 1px solid `line`, transparent background, `text-primary` color, `font-mono` label typography.
- **Hover:** Background fills to `ink`, text inverts to `cream`. Transition at 300ms ease-out.
- **Usage:** Research "Read Full Report" links, Footer channel links.

### Cards / Containers
- **Corner Style:** Squared (0px radius).
- **Background:** `cream` for interactive cards, `paper` for the profile framed card.
- **Shadow Strategy:** None. Flat surfaces only.
- **Border:** 1px solid `line` (10–20% ink), shifting to `primary` on hover for interactive cards.
- **Internal Padding:** `p-6` (1.5rem mobile), `p-8` or `p-10` (2–2.5rem desktop).
- **Usage:** Project cards (2-col grid on desktop, single on mobile), Profile information card, Research deep-dive card.

### Tags / Chips
- **Shape:** Squared (0px radius).
- **Style:** 1px solid `line`, transparent background, `text-secondary` / `text-muted` color, `.label` typography (Geist Mono, 0.7rem, uppercase).
- **State:** On project cards, tag border shifts toward `primary` on card hover.
- **Usage:** Tech tags on project cards, skill tags on experience items.

### Experience Items
- **Style:** Top-bordered (`border-t 1px cream/20` on ink bg) article. Hover adds a `cream/5` background tint.
- **Typography:** Role in `title` weight, org name in `text-cream/60`. Tags as chip elements atop.
- **Layout:** Flex column on mobile (tags wrap below), flex row on desktop (tags right-aligned).

### Navigation (Hero Bottom Bar)
- **Style:** Inline label links (`font-mono`, `label` class) with an underline-on-hover (`link-strike`).
- **Targets:** PROFILE, EXPERIENCE, PROJECTS, STACK — section-anchors on the same page.
- **Mobile:** Hidden. The nav exists only on `md:` breakpoint and above.

### Signature: The Ticker Bar
- **Style:** Fixed-width marquee banner at the very top of the hero. Repeats portfolio metadata (DOC ID, role, specialization) as a horizontal scroll with `animate-marquee-slow`.
- **Visual:** `bg-cream/50` with `border-b line`, dot separators in orange/steel/slate.
- **Purpose:** Establishes the "document / terminal" identity on first paint.

## 6. Do's and Don'ts

### Do:
- **Do** use the orange signal sparingly — one accent element per section at most, outside the Stack section.
- **Do** keep corners squared. Rounding undermines the mechanical precision.
- **Do** use `font-mono` `.label` text for all metadata, section numbers, tags, and document IDs.
- **Do** lay backgrounds by tonal step: paper → cream → ink for increasing visual weight.
- **Do** reveal content that's already in the DOM. Never gate content behind a scroll-triggered class that might not fire.
- **Do** cap body text at 65–75ch and use `text-wrap: pretty` for prose.

### Don't:
- **Don't** use border-left greater than 1px as a colored accent stripe on cards, list items, or callouts.
- **Don't** apply gradient text via `background-clip: text`. Use solid colors only.
- **Don't** use glassmorphism (backdrop-filter blur) decoratively.
- **Don't** use the big-number-small-label hero-metric template.
- **Don't** write tiny uppercase tracked eyebrows above every section as default scaffolding. The document-numbering (01 ::, 02 ::) is a deliberate voice; one per section is the voice. Don't expand it into a pattern that appears above every subsection.
- **Don't** pair a 1px border with a soft wide box-shadow on the same element. Pick one.
- **Don't** use border-radius above 16px on cards, sections, or inputs. Tags and buttons at 0px only.
- **Don't** use repeating-linear-gradient diagonal stripe backgrounds as section decoration.
- **Don't** gate content visibility on a scroll-triggered class that starts as `opacity: 0` and transitions to `opacity: 1`. The content must be readable immediately; the motion enhances, not enables.
