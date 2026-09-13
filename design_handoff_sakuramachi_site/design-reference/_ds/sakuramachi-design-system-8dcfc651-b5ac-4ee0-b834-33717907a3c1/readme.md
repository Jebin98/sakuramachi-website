# Sakuramachi — Design System

**sakuramachi** (さくらまち, "cherry-blossom town") is a small-batch Japanese pastry shop. The one
brand artefact supplied is its logo: a hand-drawn slice of strawberry shortcake — sponge layers,
whipped cream, halved strawberries, a fan of cream on the corner — floating in an airbrushed pink
grain halo, with the name written underneath in a thin monoline signature script.

Everything in this system is derived from that single drawing: its colours are sampled from its
pixels, its grain is extracted from its paper texture, its type is chosen to match the roundness of
its ink line, and its voice is written to match a shop that sells out by six.

---

## Sources given, and what was reachable

| Source | Status |
| --- | --- |
| `uploads/sakuramachi_logo.jpeg` (1 file, 2048×1536) | ✅ Read. Colours, texture and marks are all derived from it. |
| Instagram — `https://www.instagram.com/sakuramachipastries` | ❌ **Not reachable from this environment.** Instagram blocks automated fetching, and no cached copy was available through search. **No photo, video, caption or real menu item from the feed informed this system.** |
| Codebase / Figma / website | None provided. |

**What that means for you.** Colour, type, texture, marks, component behaviour and layout rules are
grounded in the logo and are safe to build on. Everything that requires seeing the *feed* — real
product names and prices, the actual photography style, caption habits, post layouts — is written as
an explicit, brand-voiced **placeholder** and marked as such wherever it appears. The fastest way to
make this system accurate is to drop 10–20 real photos and 5–10 real captions into `uploads/`.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | **The single entry point.** Imports only. Link this one file. |
| `fonts/fonts.css` | Webfont loading (Google Fonts CDN) + the substitution notice |
| `tokens/` | `colors` · `typography` · `spacing` · `radii` · `elevation` · `motion` · `texture` · `semantic` · `base` |
| `assets/` | `logo-lockup.png`, `logo-wordmark-ink.png` (alpha-keyed), `logo-mark.png`, `grain.png`, plus the original upload |
| `guidelines/` | 21 specimen cards — Brand, Colors, Type, Spacing |
| `components/` | 18 components in 6 groups (below) |
| `ui_kits/website/` | Storefront click-through: home, menu, product, order |
| `ui_kits/social/` | Instagram feed / story / menu-card templates (proposal — see its README) |
| `thumbnail.html` | Project tile |
| `SKILL.md` | Agent-Skills wrapper so this folder works as a Claude Code skill |

### Components

Grouped by concern. Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one
`@dsCard` specimen page.

| Group | Components |
| --- | --- |
| `components/actions/` | **Button**, **IconButton** |
| `components/forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `components/surfaces/` | **Card**, **PhotoSlot**, **ProductCard** |
| `components/data/` | **Badge**, **Tag** |
| `components/navigation/` | **Tabs** |
| `components/feedback/` | **Dialog**, **Toast**, **Tooltip** |
| `components/brand/` | **Logo**, **Icon** |

No source defined a component inventory, so this is the standard primitive set, sized to a pastry
shop's needs.

**Intentional additions** (beyond the standard set, each with a reason):
* **Icon** — the brand supplied no icon set; this wraps Lucide so every glyph in the system comes
  from one place and one stroke weight.
* **Logo** — the three approved marks, so nobody re-crops or recolours them by hand.
* **PhotoSlot** — the brand's imagery is photography we do not have. This renders an honest labelled
  placeholder instead of a fake photo, which keeps mocks truthful.
* **ProductCard** — a pastry tile is the most repeated object in this brand; fixing it here stops
  every screen re-inventing it.

---

## CONTENT FUNDAMENTALS

The logo sets the voice before any copy exists: it is *hand-drawn*, unpolished, small, and about one
specific slice of cake. The writing matches — plain, physical, slightly understated, never salesy.

**Person.** "We" for the shop, "you" for the customer. Never "our team", never the shop's own name as
a subject ("Sakuramachi is proud to…" — no).

**Casing.** Sentence case everywhere. Headlines get a full stop when they are a sentence
("Cake, cut thick."). ALL CAPS only as tracked micro-labels (`--ls-caps`): `WED–SUN · 11:00–18:00`.
Badges and stickers are **lowercase**: `seasonal`, `sold out`, `made today`.

**Length.** Headlines 2–5 words. Body sentences under 15 words. Product notes are one lowercase
fragment listing what is in it — not adjectives:
* ✅ "three layers, whipped cream, strawberries while they last"
* ✅ "twenty crêpes, matcha cream, nothing else"
* ❌ "Our decadent, artisanal shortcake is crafted with love."

**Scarcity is stated flatly, never hyped.** "Sakura mochi sold out at 14:20." · "Everything went
before four. We bake again Wednesday at eleven." No "Hurry!", no countdown language, no exclamation
marks (the one place a warm exclamation is allowed is a handwritten sticker, and even then prefer
none).

**Numbers and time.** 24-hour clock (`11:00–18:00`). Prices in mono type with the yen sign, no
decimals (`¥680`). Quantities spelled out under ten in prose ("nine things"), numerals in UI.

**Japanese.** Product names carry a Japanese line under the English one (`苺のショートケーキ`), always
smaller and in `--text-muted`. Never romaji-in-parentheses. Never use Japanese decoratively in copy
the audience cannot read.

**Emoji: no.** None anywhere — not in UI, not in copy. The hand-drawn mark and the script font carry
all the warmth the brand needs. (If the real Instagram captions turn out to use emoji, that is a
caption-only exception; it does not enter the product UI.)

**Script type is a garnish.** `--font-script` carries short asides only — "baked this morning, gone
by six", "thank you, come again", "eat today". Never a paragraph, never a label, never a button.

**Error and empty states are apologetic but brief.** "nothing in the box yet" · "That address is
missing the rest." Sold-out is never an error: grey, factual, with a way to be told next time.

---

## VISUAL FOUNDATIONS

### Colour
Five families, all sampled from the logo. `tokens/colors.css` holds the base scale;
`tokens/semantic.css` holds the aliases application code should actually use.

* **Sakura** `#fdeef2 → #a95d78` — the halo. Backgrounds, blush surfaces, focus rings, selected tags.
* **Cream & sponge** `#fbf9ed → #7c6234` — whipped cream and the shortcake layers. Paper, cards,
  quiet fills, warning tone.
* **Berry** `#cd3041` (hover `#ac2333`, press `#7f1a26`) — the strawberry. **The only call-to-action
  colour**, one primary action per view.
* **Matcha** `#eae8b7 → #454d24` — the pale green cream on the cake's top face. Success, seasonal.
* **Ink** `#151011 → #e6ded9` — the drawn outline. All text, hairlines, outlined borders.

Rules: never more than two background tints on one screen (paper + one of blush/cream). Sold-out and
unavailable states are **ink grey, never red** — red belongs to the fruit. No gradients other than
the sakura halo and the cream wash. No purple, no blue, no neutral grey — greys are warm ink greys.

### Type
* **Display — Zen Maru Gothic** (700/900, `--ls-display` −0.022em, `--lh-tight` 1.04). A rounded
  gothic; its soft terminals are the closest type equivalent of the logo's brush outline.
* **Body — Zen Kaku Gothic New** (400/500, 15px base, 1.7 line-height, 62ch measure).
* **Script — Nothing You Could Do**, standing in for the hand-written logotype. Garnish only.
* **Mono — DM Mono** for prices, order numbers, times, addresses in micro-labels.

Both Zen families carry kana, so Japanese product names set correctly alongside English.

### Spacing & layout
4-based with 6 and 20 kept in: `2 4 6 8 12 16 20 24 32 40 56 72 96 128`. **20px is the house
gutter** — card padding, grid gap, and the space between a title and its price all use it.
Container 1180px, text measure 62ch, section rhythm 96px (56px on dense pages). Product grids are
`repeat(auto-fill, minmax(268px, 1fr))`. The site header is the only fixed element: 72px, sticky,
paper at 92% with an 8px backdrop blur and a hairline bottom border.

### Backgrounds & texture
Three grounds, never more:
1. **Paper** `--paper` — the default.
2. **Sakura halo** `--halo-sakura` — a radial pink glow, always with `--grain-url` (the logo's own
   extracted paper grain, 128px tile, `multiply`, 60% opacity) on top. This is the brand's signature
   surface: heroes, feed posts, photo placeholders.
3. **Ink** `--surface-ink` — footers and one feature panel per page, with cream text.

No photographic backgrounds behind text without `--protect-scrim` (ink 0 → 55%, top to bottom).
No repeating pattern other than the grain. No decorative SVG shapes, blobs, or drawn illustration
beyond the supplied logo artwork.

### Borders, corners, cards
The logo's defining move is a **visible ink outline**, so this system uses outlines where other
systems use shadows. Two border languages:
* **Hairline** `1px var(--ink-100)` — the resting card, list dividers, field borders.
* **Ink outline** `1.5px var(--ink-900)` — primary buttons, badges with `outlined`, stickers,
  dialogs, switches, checkboxes. This is what makes something feel *drawn*.

Radii: `4 · 8 · 14 · 22 · 32 · pill`. Cards are 14px; inputs 8px; buttons, badges, tags and toasts
are pills. `--radius-sketch` (an uneven `22px 26px 20px 28px / 26px 20px 28px 22px`) is decorative
only — photo frames, pull-quotes, the menu-post frame — **never** on inputs or buttons.

A default card is: white, 1px ink-100 hairline, 14px radius, `--shadow-sm`, 20px padding.

### Shadows
Warm and pink-tinted (`rgba(107,60,74,…)`) — never neutral black. `xs` resting chips, `sm` cards,
`md` menus and toasts, `lg` dialogs, `lift` for hover. Inner shadow only on press
(`--shadow-press`). Focus is a 3px sakura halo (`--ring`), berry-tinted on invalid fields.

### Motion
Short, soft, and few. Hover 140ms, state change 220ms, entrance 340ms; nothing over 520ms.
`--ease-soft` for controls, `--ease-out` for entrances, `--ease-settle` (one small overshoot, like a
plate set down) for toggles and things that arrive. No bounce loops, no parallax, no auto-playing
carousels, no scroll-jacking. Fades are always paired with a small translate (≤8px), never alone.

### Interaction states
* **Hover** — lift 1–2px + a shadow step up; tinted backgrounds go one step deeper
  (blush → blush-strong, berry-500 → berry-600). Never change hue on hover.
* **Press** — sink 1px, `--shadow-press`, colour one step darker again (berry-700).
* **Selected** — sakura fill plus the ink outline (tags, radio, active tab). Weight, not colour, is
  what marks selection: the active tab is a 2.5px **ink** underline, never berry.
* **Disabled** — `--surface-disabled` fill, `--text-faint` label, outline removed, no shadow.
* **Focus-visible** — the sakura halo ring, always in addition to (never instead of) a border change.

### Transparency & blur
Used in exactly three places: the sticky header (paper 92% + 8px blur), the dialog overlay (ink 44%
+ 3px blur), and the sold-out veil over a product photo (paper 62%). Nowhere else — no frosted cards,
no glassmorphism.

### Imagery
Warm, soft-daylight, close-up, shallow depth of field, cream and pink grounds, a little visible
grain — the same air as the logo's airbrush. Food fills the frame; hands and paper are welcome; hard
flash, cool tones, black-and-white and heavy saturation are not. Standard ratios: `1/1` feed,
`4/3` menu tiles, `4/5` hero, `16/10` shopfront. **No photography was supplied**, so every image in
this system is a labelled `PhotoSlot` naming the shot it wants. Do not fill them with stock or
generated pictures.

---

## ICONOGRAPHY

**No icon set, icon font, or SVG sprite was supplied** — the only artwork in the sources is the logo
illustration itself.

* **Substitution (flagged): [Lucide](https://lucide.dev) via CDN**, at `strokeWidth 1.75`. Lucide's
  rounded caps and joins are the closest match to the logo's brush line; anything with square caps or
  a filled style reads wrong against it. Load it once per page:
  `<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js"></script>`, then use the
  `Icon` component — never inline an SVG by hand.
* **Sizes**: 16px in dense UI, 18–20px default, 22–24px for feature moments. One weight per screen.
* **Colour**: icons inherit `currentColor`. Ink for controls, `--sakura-700` for informational
  glyphs beside text, cream on ink surfaces.
* **The house set** (what actually gets used): `shopping-bag`, `search`, `heart`, `clock`, `map-pin`,
  `phone`, `instagram`, `cake`, `coffee`, `gift`, `snowflake`, `calendar`, `plus`, `minus`, `x`,
  `check`, `info`, `alert-circle`, `trash-2`, `arrow-left`, `arrow-right`.
* **Emoji are never used as icons.** Neither are unicode dingbats — with two deliberate exceptions
  kept for typographic reasons: the `▾` in `Select` and the `✕` on removable `Tag`/`Toast`.
* **The logo mark is not an icon.** It is only ever the brand's own signature (avatar, favicon,
  packaging seal) and is never recoloured or used to mean "cake".
* **Hand-drawn illustration** is part of the brand, but only the supplied artwork. Do not draw new
  SVG pastries, blossoms, or ornaments — commission them from whoever drew the logo.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js"></script>
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ProductCard, Icon } = window.SakuramachiDesignSystem_8dcfc6;
</script>
```

Reach for `--text-*`, `--surface-*`, `--accent*` semantic tokens first; drop to the base scale
(`--sakura-300`, `--sponge-400`) only for brand-specific surfaces.

## Known gaps
1. **No real photography, product list, prices or hours** — all placeholders (see the caveats in each
   UI kit README).
2. **No font binaries** — Google Fonts substitutes for all four families, including the logotype
   script. If the shop owns the real hand-lettering or a licensed face, replace `fonts/fonts.css`.
3. **The Instagram feed was never read** — the social kit is a proposal, not a recreation.
