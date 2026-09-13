# Handoff: Sakuramachi — one-page order site

## Overview

Sakuramachi (さくらまち, "the town of cherry blossom") is a home patisserie in Chennai selling
Japanese- and Korean-inspired cakes, cupcakes, cookies and small bakes. Orders are taken by
Instagram DM — there is **no cart, no checkout, no payment, no account**.

This is a **single scrolling marketing page** whose one job is to move a visitor from "what is this"
to "sent a DM". Five bands, in order:

1. Sticky header (logo, two jump links, one Order button)
2. Hero — headline, lede, two CTAs, and an auto-playing two-clip video card with segmented progress
3. Marquee ticker of everything they bake
4. The bake list — 17 product cards, filterable by category
5. The baker — dark ink panel, two paragraphs, handwritten note, portrait photo
6. The feed — horizontally draggable Instagram rail
7. Order — closing CTA band
8. Footer — dark ink

Every call to action leaves the site: `https://ig.me/m/sakuramachipastries` (DM) or
`https://www.instagram.com/sakuramachipastries` (feed).

---

## About the design files

The files in `design-reference/` are a **design reference built in HTML** — a working prototype that
shows the intended look, copy and behaviour. They are **not production code to copy across**.

The task is to **recreate this design in a real codebase**. No application code was supplied with
this handoff: the attached workspace folder (`sakuramachi-website/`) contains only the founder's raw
source media (28 JPEGs and MOVs), not a project. **So pick the framework.** For a page like this —
static content, heavy imagery, one page, SEO matters, no auth or data layer — the sensible default is
**Next.js (App Router) + React + TypeScript**, statically exported, with the design tokens as CSS
custom properties and the design-system components as real React components. Astro is an equally
good call if you want zero client JS outside the interactive bits. Avoid anything that forces the
GSAP work into a framework-fighting shape.

### Screenshots

`screenshots/` holds seven stills of the reference at ~924px wide, in scroll order — useful for a
quick read, but they are **not** the spec. Measurements come from the README and the live reference;
the stills cannot show hover states, the video carousel, the filter transition or the rail drag.

| File | Band |
| --- | --- |
| `01-hero.png` | header + hero |
| `02-bake-list-top.png` | section heading + filter pills |
| `03-bake-list-grid.png` | product grid |
| `04-the-baker.png` | dark ink panel |
| `05-feed-rail.png` | Instagram rail |
| `06-order-band.png` | closing CTA |
| `07-footer.png` | footer |

### How to open the reference

`design-reference/Sakuramachi.dc.html` is self-contained apart from needing to be served over HTTP
(the video and image fetches will not work from `file://`):

```bash
cd design-reference && python3 -m http.server 8080   # then open http://localhost:8080/Sakuramachi.dc.html
```

It renders through a small runtime (`support.js`) that turns the markup into React. **Read it for
layout, exact values and copy; do not port `support.js`.**

## Fidelity

**High-fidelity.** Final colours, typography, spacing, copy, imagery, motion and interaction states.
Recreate it pixel-accurately. Every value in the prototype comes from the bound Sakuramachi design
system; the token files are included at
`design-reference/_ds/sakuramachi-design-system-*/tokens/` and should be ported verbatim as the
foundation of the new codebase's styling layer.

The full brand guide is at `design-system-source/DESIGN_SYSTEM_GUIDE.md`. Read the CONTENT
FUNDAMENTALS and VISUAL FOUNDATIONS sections before writing any new copy or adding any screen.

---

## Screens / Views

One route: `/`. Max content width `1180px` (`--page-max`), horizontal gutter `24px`
(`--page-gutter`), sections separated by `96px` (`--space-24`). Page ground `--bg-page` (`#FFFDF8`).
Body type `Zen Maru Gothic` 16px/1.55, `--text-body` (`#56301B`). Headings `Marcellus`, weight 400,
`--tracking-display` (-0.015em), `--leading-tight` (1.12), colour `--text-heading` (`#2E1A0D`).

### 1. Header

* **Purpose:** brand, two jumps, one always-available order action.
* **Layout:** `position: sticky; top: 0; z-index: 50`. Inner row: max-width 1180, padding
  `12px 24px`, `display:flex`, `flex-wrap:wrap`, `justify-content:space-between`, column gap 20px,
  row gap 8px. Wraps to two rows on narrow viewports — do not switch to a hamburger; the nav is
  three items and should stay visible.
* **Left:** `Logo variant="mark" size={72}` (the drawn shortcake JPEG, `media/logo-sakuramachi.jpg`)
  + `Logo variant="wordmark" size={100}` (Caveat script), flex row, gap 6px, `padding-top: 6px`.
  Wrapped in `<a href="#top" aria-label="sakuramachi, home">` that smooth-scrolls to 0.
* **Right nav:** `Button tone="ghost" size="sm"` × 2 ("The bake list" → `#bakes`, "The baker" →
  `#about`) with `padding: 0 12px`, then `Button tone="primary" size="sm"` ("Order" → DM) with
  `margin-left: 8px`. All three carry `padding-bottom: 2px` to optically centre Zen Maru Gothic.
* **Scroll behaviour:** transparent at rest. Past **40px** of scroll it transitions (240ms,
  `--ease-drift`) to `background: rgba(255,253,248,.88)`, `backdrop-filter: blur(12px)`,
  `border-bottom: 1px solid var(--kinako-200)`. This is one of only two places in the brand where
  blur is allowed.

### 2. Hero

* **Purpose:** state what this is in one line and get a DM.
* **Layout:** full-bleed band, `background: var(--wash-sakura)` (the one gradient in the system —
  `radial-gradient(120% 90% at 50% 40%, #FAD9E3 0%, #FDEDF2 42%, #FFFDF8 78%)`), padding
  `64px 0 80px`, `overflow: hidden`. Inner column is **centred, single-column** — not a 50/50 split
  (a brand rule; see the guide's Spacing & layout).
* **Eyebrow row:** flex, centred, gap 10px. `sah-koo-rah-mah-chi` in DM Mono 11px, uppercase,
  `letter-spacing: 0.16em`, `--kinako-700`; then `さくらまち` at 12px, same colour.
* **H1:** "A slice of hanami." — `clamp(40px, 6.2vw, 72px)`, `max-width: 16ch`,
  `text-wrap: pretty`. Each word is its own `inline-block` span (needed for the staggered entrance).
* **Lede:** "Japanese- and Korean-inspired pastry, self-taught and baked at home. The town of cherry
  blossom, by way of Chennai." — 18px, `max-width: 46ch`.
* **CTAs:** flex row, wrap, centred, gap 12px. Primary `Button tone="primary" size="lg"` — "Order on
  Instagram" → DM. Secondary `Button tone="outline" size="lg"` — "See everything we bake" →
  `#bakes`. The primary is wrapped in a magnetic-hover span (see Interactions).
* **Video card:** `max-width: 330px`, `--radius-lg` (20px), `overflow: hidden`, `--shadow-lg`,
  `background: var(--surface-card)`. Media frame `aspect-ratio: 9 / 13.6` on a `--cocoa-900` ground.
  Two absolutely-positioned slides, each holding a muted autoplay `<video>` sized
  `top: -6%; height: 112%; object-fit: cover; object-position: 50% 0%` (the overscan gives the Ken
  Burns room to move without revealing an edge).
* **Progress:** two 56×5px pills below the frame, `--radius-pill`, track `--sakura-200`, fill
  `--sakura-500`, width driven per frame from `video.currentTime`.
* **Card footer:** script line "broken open, still warm" — `--font-script` 22px, `--sakura-700`, with
  the mandatory optical correction `transform: translate(-0.115em, -0.095em)`; then two badges,
  `Badge tone="sakura"` "made the morning of" and `Badge tone="neutral"` "small batch".
* **Footnote:** `chennai · weekends · delivery` — DM Mono 11px, tracked caps, `--kinako-700`.

### 3. Ticker

* **Purpose:** show the range in one glance without a list.
* **Layout:** full-bleed strip, `background: var(--surface-sunken)` (`#FBF5EA`), hairline top and
  bottom (`1px solid var(--kinako-200)`), padding `16px 0`, `overflow: hidden`.
* **Content:** the product string in Marcellus 22px `--text-heading`, `white-space: nowrap`,
  duplicated twice inside a `width: max-content` flex track with `column-gap: 11px`. The duplicate is
  `aria-hidden`.
* **Copy:** `Strawberry shortcake · Matcha layer cake · Fudgy brownies · Nutella cookies · Madeleines
  · Tres leches · Carrot cake · Biscoff cookies · NY-style cheesecake · Banana bread · Dubai
  chocolate bar · Matilda chocolate cake ·`

### 4. The bake list (`#bakes`)

* **Purpose:** the menu. Every card is a DM link, not an add-to-cart.
* **Heading:** `SectionHeading` — eyebrow "The bake list", title "Everything we bake.", lede "Whole
  cakes, cupcakes, cookies and small bakes. Ask for anything that is not on the list."
* **Filter:** `Tabs variant="pill"`, default `all`. Tabs: `all` "Everything" · `cakes` "Cakes" ·
  `cupcakes` "Cupcakes" · `cookies` "Cookies & bars" · `small` "Small bakes".
* **Grid:** `display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px`.
* **Card:** `ProductCard` — white `Card`, `--radius-lg`, no border, `--shadow-sm`, photo bleeding to
  the top edge at `aspect-ratio: 4/5` on a `--cream-200` placeholder ground, `object-fit: cover`,
  `loading="lazy"`. Text block padded 20px, gap 8px: `<h3>` in Marcellus 22px/1.2, then the Japanese
  name in 14px/1.55 `--text-muted` (`#57432C`). A `flavour` prop pins a `FlavourTag` at
  `top: 12px; left: 12px`. **No prices anywhere** — none were supplied, and inventing them is
  explicitly out of bounds.
* **Scroll margin:** `scroll-margin-top: 80px` on the section (the sticky header is ~72px).

**The 17 items** (`data-cat` → name / Japanese / flavour / image):

| Cat | Name | Japanese | Flavour | Image |
| --- | --- | --- | --- | --- |
| cookies | Fudgy brownies | ファッジブラウニー | cocoa | `media/tiles/brownies.jpg` |
| cookies | Nutella cookies | ヌテラクッキー | cocoa | `media/still-cookie-pull.jpg` |
| cakes | Strawberry shortcake | ストロベリーショートケーキ | ichigo | `media/tiles/shortcake.jpg` |
| cakes | Matcha layer cake | マッチャレイヤーケーキ | matcha | `media/tiles/matcha-cake.jpg` |
| cakes | Carrot cake | キャロットケーキ | — | `media/tiles/carrot-cake.jpg` |
| cakes | Matilda chocolate cake | マチルダチョコレートケーキ | cocoa | `media/tiles/matilda.jpg` |
| cakes | NY-style cheesecake | ニューヨークチーズケーキ | — | `media/tiles/cheesecake.jpg` |
| cakes | Tres leches | トレスレチェス | — | `media/tiles/tres-leches.jpg` |
| cupcakes | Chocolate buttercream cupcakes | チョコレートバタークリームカップケーキ | cocoa | `media/tiles/cupcakes-choc.jpg` |
| cupcakes | Carrot cake cupcakes | キャロットケーキカップケーキ | — | `media/tiles/cupcakes-carrot.jpg` |
| cupcakes | Whipped ganache cupcakes | チョコレートガナッシュカップケーキ | cocoa | `media/tiles/cupcakes-ganache.jpg` |
| cookies | Biscoff cookies | ビスコフクッキー | — | `media/tiles/biscoff.jpg` |
| cookies | Cookies | クッキー | — | `media/tiles/cookies.jpg` |
| cookies | Dubai chocolate bar | ドバイチョコレートバー | cocoa | `media/tiles/dubai-bar.jpg` |
| small | Madeleines | マドレーヌ | butter | `media/tiles/madeleines.jpg` |
| small | Chocolate-covered madeleines | チョコレートマドレーヌ | cocoa | `media/tiles/madeleines-choc.jpg` |
| small | Banana bread | バナナブレッド | — | `media/tiles/banana-bread.jpg` |

Alt text for each is in the prototype markup — carry it across verbatim.

### 5. The baker (`#about`)

* **Purpose:** the credibility and the brand story.
* **Layout:** inside the 1180 container. Panel: `background: var(--surface-inverse)` (`#2E1A0D`),
  `border-radius: var(--radius-2xl)` (36px), `padding: clamp(32px, 5vw, 72px)`, text
  `--text-inverse` (`#FFFDF8`). Two columns via
  `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, gap `clamp(32px, 4vw, 56px)`,
  `align-items: center`.
* **Left column** (gap 20px): eyebrow "The baker" — 11px, weight 500, tracked caps,
  `--sakura-300`. H2 "Self-taught, and particular about it." — `clamp(28px, 3.4vw, 44px)`,
  `--cream-50`. Two paragraphs, `max-width: 52ch`, 16px/1.55, `--text-inverse-muted` (`#F4DE99` —
  butter-300, which is the only muted ink that clears 4.5:1 on this ground; do not substitute a
  neutral). Then `HandwrittenNote tone="plain" size={30}` with the single line
  "share the love, or a slice of cake", colour overridden to `--sakura-200`.
* **Right column:** photo in a 340px-max frame, `--radius-lg`, `--shadow-lg`,
  `media/tiles/baker.jpg`, `aspect-ratio: 4/5`, `object-fit: cover`.
* **Copy, verbatim:**
  > Japanese and Korean pâtisserie teach restraint: few ingredients, exact ratios, nothing hidden
  > under decoration. Everything here is made at home, by hand, and learned the slow way - by baking
  > it again until it was right.
  >
  > Sakuramachi means the town of cherry blossom. A slice should feel the way hanami (flower viewing)
  > does - calm, a little fleeting, worth stopping for.

### 6. The feed (`#feed`)

* **Purpose:** proof of life — the Instagram grid is the real storefront.
* **Header row:** `SectionHeading` (eyebrow "The feed", title "@sakuramachipastries", lede "What came
  out of the oven this week.") on the left; two `IconButton tone="surface" size="md"` on the right
  (`arrow-left` / `arrow-right`, labels "Scroll the feed left/right", 44×44). Row is
  `justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px`.
* **Rail:** `display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory;
  scroll-padding-left: 24px; padding: 8px 24px 24px; cursor: grab`. Scrollbar hidden
  (`scrollbar-width: none` + `::-webkit-scrollbar { display: none }`).
* **Cards:** `flex: 0 0 auto; width: min(280px, 72vw); scroll-snap-align: start`. Each is
  `Card padded={false} interactive` holding a `1/1` `object-fit: cover` image, click → the feed.
  Images in order: `media/tiles/feed-cream-cake.jpg`, `media/still-cookie-halves.jpg`,
  `media/tiles/feed-box.jpg`, `media/tiles/feed-cake.jpg`, `media/tiles/feed-matcha.jpg`.
* **Last card** is a `Card tone="accent"` forced to `aspect-ratio: 1/1`: script line "more on the
  feed" (`--font-script` 28px, `--sakura-700`, with the optical translate), a 14px line "Everything
  gets posted the day it is baked.", and `Button tone="secondary" size="md"` "Follow on Instagram".

### 7. Order (`#order`)

* **Layout:** full-bleed band, `background: var(--surface-sunken)`, hairline top and bottom, padding
  `96px 0`, centred column, gap 20px.
* **Content:** tracked-caps mono line `chennai · weekends · delivery`; H2 "Let's get you a slice." at
  `clamp(34px, 5vw, 56px)`, `max-width: 16ch`; lede "Send us a message with what you want and when
  you want it. Delivered anywhere in Chennai, on weekends." at 18px, `max-width: 48ch`; then
  `Button tone="primary" size="lg"` "Message us on Instagram" (magnetic) and
  `Button tone="outline" size="lg"` "See the feed first"; closing script line "thank you, come again"
  in `--sakura-600`.

### 8. Footer

* `background: var(--surface-inverse)`, padding `64px 0 40px`, three flex columns with
  `justify-content: space-between; flex-wrap: wrap; gap: 32px`.
* **Col 1:** `Logo variant="wordmark" size={110} color="var(--cream-50)"`, then
  `さくらまち · the town of cherry blossom` in tracked-caps mono, `--text-inverse-muted`.
* **Col 2:** four 14px links — "The bake list" (`#bakes`), "The baker" (`#about`), "Instagram", "Order
  by DM". The first three are `--cream-50`; "Order by DM" is `--sakura-300`.
* **Col 3:** `max-width: 34ch` — script line "baked at home, delivered by hand" in `--sakura-200`
  28px, then "Chennai, India · weekend delivery" at 12px `--text-inverse-muted`.

---

## Interactions & behaviour

Motion is **GSAP 3.13** (core + ScrollTrigger + Flip) in the prototype. Keep GSAP — the Flip-based
filter and the velocity-coupled ticker are awkward to do well otherwise. In React, drive it through
`useGSAP` from `@gsap/react` so contexts clean up on unmount.

**Brand motion law:** entrances are always *fade + 8px rise*, never a slide-in or a scale-from-0.
Easing is `--ease-settle` / `--ease-drift`; **no bounce, no spring overshoot** — a bounce reads
toy-like and breaks the calm register. Durations: 160ms hover, 240ms state, 420ms entrance, 900ms
reserved for the hero's slow arrival.

### Hero entrance (on load, GSAP timeline, `ease: power2.out`)

| Step | Target | From | Duration | Position |
| --- | --- | --- | --- | --- |
| 1 | eyebrow | `y: 8, autoAlpha: 0` | 0.42s | 0 |
| 2 | each H1 word | `y: 8, autoAlpha: 0` | 0.5s, stagger 0.06 | −0.2 |
| 3 | lede | `y: 8, autoAlpha: 0` | 0.42s | −0.3 |
| 4 | each CTA | `y: 8, autoAlpha: 0` | 0.42s, stagger 0.08 | −0.28 |
| 5 | video card | `y: 8, autoAlpha: 0`, `power1.out` | 0.9s | at 0.2 |

### Section reveals

Every `[data-reveal]` element starts at `y: 8, autoAlpha: 0` and animates in on an
**IntersectionObserver** (`rootMargin: 0px 0px -8% 0px`), 0.42s, `power2.out`, with a
`min(i, 4) * 0.06s` stagger within a batch, then unobserves. Deliberately *not* ScrollTrigger:
content must never stay invisible if a scroll plugin fails to initialise. Both the reveals and the
hero timeline carry a safety timeout (1600ms / 1400ms) that force-shows everything if the observer
or ticker never fires — **keep that failsafe.**

### Hero video carousel

* Two clips, both `muted`, `playsInline`, `preload="auto"`, `loop = false`. Slide 0 autoplays.
* Both clips run to the **shorter** clip's duration (`heroLimit()` = min of the two durations); the
  longer one is cut off. Progress fill = `currentTime / limit`.
* On `ended`, or on reaching the limit, advance to the next index: crossfade by toggling slide
  opacity (620ms `--ease-drift`), reset the outgoing video to `currentTime = 0` and pause it.
* **Ken Burns:** the active `<video>` scales `1 → 1.09` linearly across the clip duration. Runs only
  when `motionLevel === "full"` and reduced-motion is off.
* Autoplay promise rejections are swallowed silently — never surface a play error.

### Filter (GSAP Flip)

1. `Flip.getState(tiles)`.
2. Toggle each tile's `display` between `grid` and `none` based on `data-cat`.
3. `Flip.from(state, { duration: 0.45, ease: "power2.out", stagger: 0.02 })`, with entering tiles
   fading up from `{ opacity: 0, y: 8 }` over 0.42s and leaving tiles fading out over 0.16s.
4. `ScrollTrigger.refresh()` on complete.
5. Reduced motion / no GSAP: toggle `display` with no animation.

### Feed rail

* Arrow buttons scroll by `clientWidth * 0.7`, clamped, tweened 0.45s `power2.out`. Snap is disabled
  for the duration of the tween and restored on complete (plus a 620ms belt-and-braces timeout) —
  otherwise `scroll-snap` fights the tween.
* **Drag to scroll** on non-touch pointers only (`pointerType === "touch"` returns early; touch gets
  native momentum). `pointerdown` records `clientX`/`scrollLeft`, `pointermove` sets
  `scrollLeft = startL - dx` and calls `preventDefault()` past 4px of movement, `pointerup` restores
  `cursor: grab` and snap. `dragstart` is prevented so images don't ghost-drag.

### Ticker

* `xPercent: 0 → -50`, 48s, `ease: "none"`, `repeat: -1`.
* Hover over the strip eases `timeScale` to **0.25** (0.3s); leaving returns it to 1 (0.4s).
* At `motionLevel === "full"` a ScrollTrigger over the whole page adds scroll-velocity boost:
  `timeScale = 1 + clamp(0, 2.2, abs(velocity) / 900)`, eased over 0.5s.

### Parallax (only at `motionLevel === "full"`)

* Hero media: `yPercent -4 → 4`, scrubbed (0.6) across the card's travel through the viewport.
* Baker photo: `scale 1.06 → 1`, scrubbed across the panel's travel.

### Magnetic CTAs (only at `motionLevel === "full"`, and only on hover-capable pointers)

The two primary buttons (hero + order band) follow the cursor when it comes near: on `mousemove`,
if the pointer is within `width/2 + 70` horizontally and `height/2 + 50` vertically of the wrapper's
centre, tween `x = clamp(-14, 14, dx * 0.26)` and `y = clamp(-9, 9, dy * 0.26)` with
`gsap.quickTo(..., { duration: 0.4, ease: "power3" })`; otherwise back to 0.

### Japanese-name reflow

The Japanese line under each product name is hidden when the English name **wraps to more than one
line** (measured against computed `line-height × 1.6`), because a wrapped title plus a katakana line
makes that card taller than its row. Cards that lose their Japanese line also get `order: 1` so they
sink to the end of the grid and the rows stay even. One card (Matilda chocolate cake) is exempt via
`data-keep-ja`. Re-measured on resize, on `document.fonts.ready`, and 400ms after mount.

In a real build this is better solved with `min-height` on the text block plus
`text-wrap: balance` — but if you keep the measure-and-hide approach, keep the resize and font-ready
re-measurement, or the layout is wrong on first paint.

### Navigation

* In-page links smooth-scroll to `element.top + pageYOffset - 78` (header clearance). Logo scrolls to
  0. Reduced motion switches to `behavior: "auto"`.
* Both Instagram links open in a new tab with `noopener`.

### Responsive

Fully fluid, no breakpoints — everything is `clamp()`, `auto-fit`/`auto-fill` grids and
`flex-wrap`. Header nav wraps to a second row; the about panel collapses to one column below ~600px
of panel width; feed cards go to `72vw`. Hit targets are ≥36px (sm buttons) and 44px (icon buttons).

### Accessibility

* `prefers-reduced-motion: reduce` kills **all** GSAP work (`gsap.matchMedia` branch returns
  immediately), disables Ken Burns, and switches scrolling to instant. Content is shown, static.
* Videos are decorative-but-labelled: each carries an `aria-label` describing the shot.
* The progress pill row is `aria-hidden`.
* Icon buttons have mandatory `label` → `aria-label`.
* Focus is never the browser default: `:focus-visible` gets `--ring-focus`
  (`0 0 0 3px #FAD9E3, 0 0 0 4.5px #E0769A`).
* All decorative duplicates (the second ticker copy) are `aria-hidden`.

### Loading, empty and error states

Not designed — the page is static content with no fetches. If the build adds any, follow the guide:
loading keeps the text and drops to 60% opacity (no spinner on buttons under 120px); empty states get
one hanami-voice line plus one kitchen-table line.

---

## State management

Trivial — no store, no server state, no data fetching. Local component state only:

| State | Type | Where | Purpose |
| --- | --- | --- | --- |
| `filter` | `"all" \| "cakes" \| "cupcakes" \| "cookies" \| "small"` | bake list | which tiles are shown; drives the Flip transition |
| `heroIndex` | `0 \| 1` | hero | active video slide |
| `heroPaused` | `boolean` | hero | carousel pause flag |
| `headerScrolled` | `boolean` | header | past 40px; toggles blur + hairline |
| `railDragging` | `boolean` | feed rail | pointer-drag in progress |
| `reducedMotion` | `boolean` | page | from `gsap.matchMedia`, gates all motion |

Per-element hover/press/focus state lives inside the design-system components.

The product list should become a **typed data module** (`products.ts`) — one array of
`{ id, name, nameJa, category, flavour?, image, imageAlt, keepJapanese? }` — rather than 17 hand-written
tiles. Same for the feed images and the ticker string.

### Prototype-only variants

The prototype exposes four authoring toggles. **Only one is worth shipping**; the rest were for
reviewing options.

| Toggle | Values | Ship? |
| --- | --- | --- |
| `motionLevel` | `full` · `subtle` · `off` | **Yes** — `full` is the default; `subtle` drops parallax, Ken Burns and magnetic CTAs; `off` behaves as reduced-motion. Useful as a user preference. |
| `heroVideo` | `brownie` · `cookie` | No — just picks which clip plays first. Default `brownie`. |
| `showJapaneseNames` | boolean | No — ship as `true`. |
| `buttonTone` | `sakura` · `hojicha` | No — ship `sakura`. The `hojicha` branch overrode `--action-primary-*` to the brown ramp and was an exploration only. |

---

## Design tokens

Port these as CSS custom properties. Source of truth:
`design-reference/_ds/sakuramachi-design-system-09892467-6342-44d5-b621-4aaa8eb2c204/tokens/`.

### Colour ramps

```
sakura   50 #FFF8FA · 100 #FDEDF2 · 200 #FAD9E3 · 300 #F4BCCE · 400 #EC97B3 · 500 #E0769A · 600 #C55A7E · 700 #9E4362
ichigo  100 #FBDDDE · 300 #F09296 · 500 #DC3A44 · 600 #BC2B34 · 700 #8E1F26
cream    50 #FFFDF8 · 100 #FBF5EA · 200 #F5E9D4 · 300 #EDD9AE · 400 #E0C58C
matcha  100 #EDF1DC · 300 #C3CE8E · 500 #8E9E46 · 700 #5D6A2C
cocoa   100 #F1DFD4 · 300 #B98A6A · 500 #834B2E · 700 #56301B · 900 #2E1A0D
butter  100 #FDF4D9 · 300 #F4DE99 · 500 #E3C356 · 700 #85640E
hojicha 100 #F6E7DA · 300 #D9A97E · 500 #A4622C · 700 #6E3D15
gold    300 #E3C87A · 500 #C9A227          (cake-board accent + warning only; never a surface, never text)
kinako   50 #FBF7F1 · 100 #F4EBDE · 200 #E8D9C3 · 300 #D4BD9D · 400 #A98D67 · 500 #7B6244 · 700 #57432C
tint     sakura #FBF1F4 · matcha #F3F5EA · hojicha #FAF2EA
white    #FFFFFF
```

**There are no greys.** `--kinako-*` is the neutral ramp and every step carries a cocoa hue. Pure
`#000` and any desaturated grey are banned. Only `kinako-500` (5.2:1 on cream) and `kinako-700`
(8.3:1) may carry text; `400` and lighter are dividers and disabled glyphs only.

### Semantic aliases (consume these, not the ramps)

```
--bg-page            cream-50        --text-heading         cocoa-900
--bg-page-alt        sakura-50       --text-body            cocoa-700
--surface-card       white           --text-muted           kinako-700
--surface-sunken     cream-100       --text-inverse         cream-50
--surface-raised     white           --text-inverse-muted   butter-300
--surface-accent     sakura-100      --text-accent          sakura-700
--surface-inverse    cocoa-900       --text-price           cocoa-900

--border-subtle      kinako-200      --link                 sakura-700
--border-strong      cocoa-300       --link-hover           sakura-500
--border-accent      sakura-300

--action-primary-bg / -hover / -active   sakura-500 / 600 / 700, fg white
--action-secondary-bg / -hover           hojicha-700 / 500, fg cream-50
--action-ghost-fg / -bg-hover            cocoa-900 / sakura-100

--state-success matcha-700 on matcha-100   --state-warning butter-700 on butter-100
--state-danger  ichigo-600 on ichigo-100   --state-info    sakura-600 on sakura-100

--wash-sakura  radial-gradient(120% 90% at 50% 40%, #FAD9E3 0%, #FDEDF2 42%, #FFFDF8 78%)
--wash-cream   linear-gradient(180deg, #FFFDF8 0%, #FBF5EA 100%)
```

`--wash-sakura` is the **only** gradient in the system. Maximum two background colours per page.
One saturated colour per view; sakura is the only colour allowed to be a filled button.

### Typography

```
Families   display "Marcellus", 'Hiragino Mincho ProN', serif
           body    "Zen Maru Gothic", 'Hiragino Maru Gothic ProN', system-ui, sans-serif
           script  "Caveat", 'Segoe Script', cursive
           mono    "DM Mono", ui-monospace, monospace

Scale      2xs 11 · xs 12 · sm 14 · base 16 · lg 18 · xl 22 · 2xl 28 · 3xl 35 · 4xl 44 · 5xl 56 · 6xl 72
Leading    tight 1.12 · snug 1.3 · normal 1.55 · relaxed 1.75
Weights    light 300 · regular 400 · medium 500 · bold 700 · black 900
Tracking   display -0.015em · normal 0 · wide 0.06em · caps 0.16em
Measures   --prose-max 62ch
```

All four families are **Google Fonts substitutions** — no font binaries were ever supplied, and the
wordmark is hand-lettering, not a typeface. Load via the `@import` in `tokens/fonts.css`, or better,
self-host with `next/font` and keep the same stacks. If the shop ever buys the real lettering,
`--font-script` is the one to replace.

**Caveat optical correction.** Caveat's visual centre sits below the em midpoint and it carries a
wide left side bearing, so geometric centring reads low and right. Every script lockup applies
`transform: translate(-0.115em, -0.095em)` **on the element holding the glyphs** — never on one that
also paints a background or padding, or you move the panel instead of the letters. Script is
decoration: never below 20px, never a paragraph, never a label or a button.

### Spacing

```
0 · 1:4 · 2:8 · 3:12 · 4:16 · 5:20 · 6:24 · 8:32 · 10:40 · 12:48 · 16:64 · 20:80 · 24:96 · 32:128
--page-gutter 24px   --page-max 1180px   --prose-max 62ch
```

`--space-5` (20px) is the default padding inside a card; `--space-8` (32px) inside a panel;
`--space-16`/`--space-24` between page sections.

### Radii

```
xs 4 · sm 8 · md 14 · lg 20 · xl 28 · 2xl 36 · pill 999 · circle 50%
```

Nothing in this system has a 0px corner. Tags and inputs 8px, cards 20px, panels and modals 28/36px,
buttons and chips pill.

### Shadows and borders

```
xs     0 1px 2px  rgba(46,26,13,.06)
sm     0 2px 6px  rgba(46,26,13,.07)
md     0 6px 18px rgba(46,26,13,.09)
lg     0 14px 38px rgba(46,26,13,.11)
xl     0 26px 64px rgba(46,26,13,.14)
inset  inset 0 1px 0 rgba(255,255,255,.7)
ring   0 0 0 3px #FAD9E3, 0 0 0 4.5px #E0769A
hairline  1px solid #E8D9C3
sakura    1px solid #FAD9E3
```

Warm-tinted, never black. Cards use shadow instead of border. The only 2px-ish border in the system
is the focus ring. Accent-left-border cards are banned.

### Motion

```
--ease-settle cubic-bezier(.22,.61,.36,1)    --dur-instant 90ms
--ease-drift  cubic-bezier(.4,0,.2,1)        --dur-fast    160ms
--ease-rise   cubic-bezier(.16,1,.3,1)       --dur-base    240ms
                                             --dur-slow    420ms
--press-scale .975                           --dur-drift   900ms
--hover-lift  -2px
```

### Interaction states (from the guide — apply to everything new)

| State | Treatment |
| --- | --- |
| Hover, card/tile | lift −2px, shadow sm → md, 160ms. No colour change. |
| Hover, filled button | background darkens one ramp step. No lift, no shadow growth. |
| Hover, ghost/text | fills `--sakura-100`. Underline for inline links only. |
| Press | `scale(.975)`, shadow to xs, 90ms. Never colour-only. |
| Focus | `--ring-focus`, offset outside the shape; default outline removed *and replaced*. |
| Disabled | 45% opacity, `cursor: not-allowed`, no hover. |
| Selected | `--surface-accent` fill + `--border-accent` hairline + `--cocoa-900` text. |

### Transparency and blur — used exactly twice

The scrolled header (`rgba(255,253,248,.88)` + `blur(12px)`) and the modal scrim
(`rgba(46,26,13,.42)` + `blur(3px)`). Frosted cards and glass panels are not part of this brand.

---

## Components used

Source is in `design-system-source/` — React + inline styles, no build dependencies beyond React and
Lucide. **These are usable close to as-is**; port the styling approach to whatever the new codebase
uses (CSS modules, Tailwind with the tokens mapped in, styled-components) but keep the props, the
tone/size matrices and the state behaviour identical.

| Component | Used for | Key props |
| --- | --- | --- |
| `Button` | every CTA and nav item | `tone: primary\|secondary\|outline\|ghost`, `size: sm\|md\|lg`, `iconLeft/iconRight` (Lucide name), `block`, `loading` |
| `IconButton` | feed rail arrows | `icon`, `label` (**required**, it is the accessible name), `tone: ghost\|solid\|surface`, `size` |
| `Card` | feed tiles, base of ProductCard | `padded`, `interactive`, `tone: surface\|sunken\|accent`, `as` |
| `ProductCard` | the 17 bake tiles | `name`, `blurb`, `image`, `imageAlt`, `flavour`, `price`, `status`, `ratio`, `footer` |
| `FlavourTag` | flavour capsule on a photo | `flavour`, `onPhoto` |
| `Badge` | hero card status pills | `tone: neutral\|sakura\|success\|warning\|danger\|hojicha\|ink`, `size` |
| `Tabs` | bake-list filter | `tabs`, `value`/`defaultValue`, `onChange`, `variant: underline\|pill` |
| `SectionHeading` | section rhythm unit | `eyebrow`, `title`, `script`, `lede`, `align`, `as` |
| `Logo` | header + footer | `variant: mark\|wordmark\|monogram`, `size`, `src`, `color` |
| `HandwrittenNote` | the baker's script line | `to`, `lines` (3 max), `tone`, `size` (never below 20) |
| `Icon` | inside Button/IconButton | `name` (Lucide), `size`, `strokeWidth` |
| `PriceTag` | **not used** — no prices exist | — |

**Button sizes:** `sm` 36px tall / `0 16px` / 14px text / 6px gap / 16px icon · `md` 46px / `0 24px`
/ 16px / 8px / 20px · `lg` 56px / `0 32px` / 18px / 10px / 20px. All `--radius-pill`, weight 500,
`line-height: 1`, `letter-spacing: .01em`. Primary and secondary carry `--shadow-inset` (the 1px
white top highlight, mimicking light on an icing edge).

Every Button and Badge in the prototype carries a 2–3px `padding-bottom` nudge to optically centre
Zen Maru Gothic inside a pill. Do this once in the component, not per usage.

**Icons are Lucide 0.544.0**, 2px stroke, `currentColor`, never filled, sized 16/20/24. A flagged
substitution — the brand owns no icon set. Icons are functional only, never decorative; no icon on a
section heading. **No emoji, no Unicode dingbats as icons** — an arrow is a Lucide `chevron-right`,
not `→`. The strawberry-cake mark is **not** an icon: minimum 64px wide, clear space equal to the
height of the cake slice on all sides, rendered from the supplied file with no recolouring, no blend
mode, no backdrop.

---

## Assets

All in `design-reference/media/`. These are cropped and web-compressed derivatives of the founder's
originals, which are in the attached `sakuramachi-website/` folder (28 files, `Sakuramachi SL - N of
28.jpeg` / `.mov` / `.mp4`) — go back to those if you need higher resolution or different crops.

| File | Use |
| --- | --- |
| `logo-sakuramachi.jpg` | the hand-drawn brand mark; carries its own pink ground |
| `brownie-break.webm` + `poster-brownie.jpg` | hero clip 1 |
| `cookie-break.webm` + `poster-cookie.jpg` | hero clip 2 |
| `still-cookie-pull.jpg` | Nutella cookies product tile |
| `still-cookie-halves.jpg` | feed rail tile 2 |
| `tiles/*.jpg` (22 files) | 17 product tiles, 4 feed tiles, 1 baker portrait |

Only two of the founder's four clips were small enough to ship; that is why the hero carousel has
exactly two slides. Serve `.webm` with an `.mp4` fallback for Safari — the source `.mp4` files are in
the attached folder.

**Photography rules** (they matter if new photos get added): warm colour temperature, shallow depth
of field, low three-quarter angle at table height, dessert filling the lower two-thirds, visible
imperfection welcome. No black-and-white, no heavy grain, no cooling filters. Crops `4:5` for product
cards, `1:1` for grid tiles, `16:9` for hero bands. Always `object-fit: cover` — never letterbox a
dessert.

**Photography is never a page background on web.** A photograph is content: it lives inside a card or
a fixed-ratio frame, with type beside or beneath it. Full-bleed photo heroes with overlaid headlines
are not part of this brand's web vocabulary. (The single exception is Instagram export frames, which
this page does not contain.)

---

## Copy rules for anything new

Two braided voices, never mixed inside one sentence: the **hanami voice** (slow, sensory, second
person) for story and section tops, and the **kitchen-table voice** (warm, first person plural,
slightly goofy) for products, buttons and confirmations. Alternate them across a page — serene
headline, warm subhead.

* "We" and "you". Never "I", never "the customer", never "our team".
* Wordmark always lowercase `sakuramachi`. Headlines sentence case. ALL CAPS only for tiny tracked
  eyebrow labels.
* `!!` is brand punctuation, one per paragraph maximum; never `!!!`. The trailing `~` (`kawaa~`,
  `oishii~`) is social-copy only, never a UI label.
* Japanese and Korean loanwords are glossed in parentheses on first use — `hanami (flower viewing)` —
  then plain.
* **No emoji in the product UI.** Not in buttons, labels or confirmations.
* Lengths: headline 2–6 words · product name 2–4 · blurb 12–24 words naming the texture · button 1–3
  words verb first ("Add to box", not "Add to Cart").
* Use: box, slice, batch, bake, cooling, fresh, whipped, folded, welcome, share, morning.
  Avoid: cart, SKU, item, purchase, premium, artisanal, indulge, decadent, elevate, curated, journey.

---

## Files in this bundle

```
design_handoff_sakuramachi_site/
├── README.md                                  ← this document
├── design-reference/
│   ├── Sakuramachi.dc.html                    ← the design reference (serve over HTTP)
│   ├── support.js                              ← prototype runtime. Do NOT port.
│   ├── _ds/sakuramachi-design-system-.../
│   │   ├── tokens/*.css                        ← PORT THESE VERBATIM
│   │   ├── styles.css                          ← entry point, @imports only
│   │   ├── _ds_bundle.js                        ← prebuilt components (prototype use)
│   │   └── readme.md                            ← design system guide
│   └── media/                                   ← all images and video used by the page
├── screenshots/                                ← 7 stills, scroll order (reference, not spec)
└── design-system-source/
    ├── DESIGN_SYSTEM_GUIDE.md                 ← read this before adding anything
    ├── core/        Button · IconButton · Card · Badge · FlavourTag · Icon
    ├── navigation/  Tabs
    └── brand/       Logo · SectionHeading · HandwrittenNote · ProductCard · PriceTag
```

## Known gaps — do not paper over these

1. **No prices, sizes, lead times or delivery radius** exist in any supplied material. The page
   deliberately shows none. Do not invent them; get them from the founder.
2. **No real Instagram content was readable** (login-walled). The feed rail uses the founder's own
   product photos, not actual posts. If a real embed or Graph API feed is wanted, that is a new
   decision.
3. **All four typefaces are substitutions.** So is the icon set.
4. **Two of four founder clips are missing** from the web media set (size).
5. **No analytics, no form, no server.** Every action is an outbound Instagram link. If order capture
   moves on-site, that is a new design, not an extension of this one.
