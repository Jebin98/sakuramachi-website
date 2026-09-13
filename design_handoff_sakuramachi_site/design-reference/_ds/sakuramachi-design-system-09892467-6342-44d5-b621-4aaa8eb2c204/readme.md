# Sakuramachi — Design System

**Sakuramachi** (さくらまち, *sah-koo-rah-mah-chi*) means "the town of cherry blossom." It is a
Japanese- and Korean-inspired home patisserie that sells cakes, cupcakes, cookies, madeleines,
cheesecakes, brownies, tres leches and tempered chocolate — made to order, boxed by hand, and
sold and marketed almost entirely through Instagram.

The brand promise is an *experience*, not a product spec: the calm of hanami, petals falling,
worries washing off. The delivery mechanic is the opposite of calm — it is warm, giggly,
onomatopoeic: **kawaa~** (cute!!) and **oishii~** (delicious!!). Holding those two registers at
once — *serene* and *squealy* — is the whole design problem this system solves.

---

## Sources used to build this system

Everything here is derived from material the founder supplied directly. Nothing was invented
from an outside reference.

| Source | What it gave us |
| --- | --- |
| `uploads/Sakuramachi SL - 11 of 28.jpeg` | **The logo.** Hand-drawn strawberry-shortcake slice + hand-lettered lowercase "sakuramachi" wordmark on a sprayed pink wash. Copied to `assets/logo-sakuramachi.jpeg`. |
| 21 further product photographs (`uploads/Sakuramachi SL - *.jpeg`) | The entire product inventory, the packaging system, and the photographic grammar. Copied and renamed into `assets/photography/`. |
| Founder brand statement (chat) | Positioning, tone of voice, the hanami metaphor, the `kawaa~`/`oishii~` vocabulary. |
| `instagram.com/sakuramachipastries` | Named by the founder as the live brand surface. **Not machine-readable** — Instagram is login-walled, so no captions, highlight covers, story templates or grid ordering could be read. Copy examples in CONTENT FUNDAMENTALS are therefore extrapolated from the founder's own written statement and the one piece of real brand copy we do have (the handwritten gift-box note, below). **Please paste real captions so this section can be replaced with observed voice.** |
| 4 `.mov` files listed in the brief | **Did not arrive** in the project filesystem — only the 22 JPEGs did. Motion guidance below is inferred from the stills, not from the videos. |

### The one piece of real brand copy we have

Written by hand in black marker on a pink gift box (`assets/photography/giftbox-pink-handwritten.jpeg`):

> *Somushwar, welcome to Sakuramachi*
> *Merry Christmas*
> *& Happy Holidays*

Three lines. Recipient named first. "Welcome to Sakuramachi" — the brand is framed as a **place
you are welcomed into**, not a shop you buy from. That single line is the tonal north star for
this whole system.

---

## The product line

Read off the photography. This is the real menu, not a placeholder list.

**Cakes (whole & by the slice)**
- Strawberry shortcake — Japanese sponge, whipped cream, fresh strawberry. *The hero; it is literally the logo.*
- Matcha layer cake — green tea sponge, hojicha/chocolate buttercream
- Chocolate fudge layer cake — three layers, chocolate buttercream
- Apple spice cake — cream rosettes, fanned apple slices
- Cream cheese–frosted nut cake
- Vanilla cream cake (whole, gold-boarded)

**Cupcakes** — chocolate w/ chocolate buttercream · spice w/ cream cheese frosting

**Cookies** — red velvet w/ white chocolate · double chocolate · matcha w/ white chocolate · classic chocolate chip · Biscoff-stuffed

**Bakes & other** — fudgy brownies · madeleines (plain & chocolate-shelled) · banana bread · baked cheesecake w/ dulce de leche · tres leches (individual foil tins) · tempered chocolate bars

**Packaging** — white window boxes (cupcakes, brownies) · white cake boxes with **gold cake boards** · **pink window boxes hand-inscribed in black marker** for gifts.

---

## CONTENT FUNDAMENTALS

### The register

Two voices, deliberately braided:

1. **The hanami voice** — slow, sensory, second person, unhurried. Used for the brand story, the
   About page, the top of a menu, the inside of a box. *"Imagine the most enchanting cherry
   blossom falling; breathtaking, calming, bringing peace to the soul."*
2. **The kitchen-table voice** — warm, exclamatory, first person plural, a bit goofy. Used for
   product names, captions, order confirmations, buttons. *"Let's share the love (or a slice of cake)!!"*

Never mix them inside one sentence. Alternate them across a page: serene headline, giggly
subhead. That contrast *is* the brand.

### Person

**"We" and "you," never "I" and never "the customer."** The founder writes as a household
welcoming a guest. "Come be a part of Sakuramachi." "Let's share the love." If a sentence could
be spoken by a marketing department, rewrite it until it could be spoken across a kitchen counter.

### Casing

- **Wordmark: always lowercase** — `sakuramachi`. Never `SAKURAMACHI`, never `Sakuramachi` as a
  logo. In running prose, sentence-cased *Sakuramachi* is correct.
- **Headlines: sentence case.** "Baked this morning." Not Title Case.
- **Product names: sentence case** with the Japanese/Korean term kept intact and unitalicised —
  "Matcha layer cake," "Hojicha madeleine."
- **ALL CAPS only for tiny tracked eyebrow labels** (`--tracking-caps`), e.g. `THIS WEEK'S BAKE`.
  Never for a headline, never for a button.

### Punctuation & the double bang

The `!!` double exclamation is **brand punctuation, not a typo.** It appears in the founder's own
copy (`kawaa~ (cute!!)`, `a slice of cake)!!`) and should survive editing. Rules:

- `!!` closes an enthusiastic sentence: *"Pre-orders are open!!"*
- One `!!` per paragraph maximum. Two makes it shrill.
- Never `!!!` and never `!?`.

The **trailing tilde** `~` marks a drawn-out, sung-out word: `kawaa~`, `oishii~`, `matcha~`.
Use it only on Japanese loanwords and only in social copy — never in UI labels, never at checkout.

### Loanwords

Japanese and Korean words are used affectionately and always glossed on first use, exactly the way
the founder does it: **`hanami` (flower viewing)**, **`kawaa~` (cute!!)**, **`oishii~` (delicious!!)**.
Gloss in parentheses, lowercase, no italics. Once glossed on a page, drop the gloss.

### Emoji

**No emoji in the product UI** — not in buttons, not in labels, not in confirmation screens. The
brand already has a hand-drawn mark and handwritten script doing the warmth. Emoji in social
captions is the founder's call and outside this system's scope; if used, keep to blossom/food and
never more than two in a caption.

### Lengths

| Slot | Target |
| --- | --- |
| Page headline | 2–6 words |
| Product name | 2–4 words |
| Product blurb | 12–24 words, one sentence, names the texture |
| Button | 1–3 words, verb first — "Add to box", "Reserve a cake" |
| Eyebrow label | 1–3 words, ALL CAPS tracked |
| Empty state | One line of hanami voice + one line of kitchen-table voice |

### Worked examples

| Don't | Do |
| --- | --- |
| "Add to Cart" | "Add to box" |
| "Our premium artisanal matcha creation" | "Matcha layer cake" |
| "Order Now!" | "Let's get you a slice" |
| "Your order has been successfully placed." | "It's in the oven list. We'll message you when it's boxed." |
| "No items found." | "Nothing here yet. Everything's still cooling on the rack!!" |
| "SHOP ALL PRODUCTS" | "See everything we bake" |
| "Customer Reviews" | "What people say after the first bite" |

### Words we use / words we don't

**Use:** box, slice, batch, bake, cooling, fresh, whipped, folded, welcome, share, morning.
**Avoid:** cart, SKU, item, purchase, premium, artisanal, indulge, decadent, elevate, curated, journey.

---

## VISUAL FOUNDATIONS

### The governing idea

A white plate on a warm table, under soft window light, with one pink thing in the frame. The
system is **mostly cream and white**, held together by **one saturated sakura pink** and the
**black ink of a human hand**. Colour never covers a whole screen; it arrives as a wash, a
strawberry, a hand-drawn line.

### Colour

| Role | Token | Value | Where it comes from |
| --- | --- | --- | --- |
| Primary brand | `--sakura-500` | `#E0769A` | The pink wash behind the logo mark |
| Signature wash | `--sakura-200` | `#FAD9E3` | The sprayed halo in the logo, the pink gift box |
| Page ground | `--cream-50` | `#FFFDF8` | Whipped cream / white box card |
| Sponge | `--cream-300` | `#EDD9AE` | The drawn sponge layers in the logo |
| Ink & headings | `--cocoa-900` | `#2E1A0D` | The black marker line of the hand lettering |
| Strawberry accent | `--ichigo-500` | `#DC3A44` | The logo strawberry; the real ones on every shortcake |
| Matcha | `--matcha-500` | `#8E9E46` | The green tea sponge crumb |
| Chocolate | `--cocoa-700` | `#56301B` | Fudge crumb and buttercream. Doubles as the ink ramp — see below |
| Hojicha | `--hojicha-500` | `#A4622C` | The roasted-tea buttercream between the matcha layers |
| Butter | `--butter-500` | `#E3C356` | Browned butter and yolk: madeleine shell, shortcake sponge, banana bread. Also the warning state |
| Gold | `--gold-500` | `#C9A227` | The kinpaku cake board under every whole cake — **accent only, never a surface, never text** |
| Neutral ramp | `--kinako-500` / `700` | `#7B6244` / `#57432C` | Roasted-soy tan. The system has no greys — every neutral carries a cocoa hue |
| Quiet tints | `--tint-sakura/matcha/hojicha` | `#FBF1F4` / `#F3F5EA` / `#FAF2EA` | A panel that must read quiet but still belong to a flavour |

**Rules.** One saturated colour per view. Sakura is the only colour allowed to be a filled
button. Ichigo, matcha, hojicha and butter are *flavour* colours — they tint a tag, a border, a
crumb-swatch, never a background panel. Cocoa is the one ramp doing two jobs: it names the
chocolate flavour **and** it is the system's ink, so it lives with the type colours rather than
on the flavour card. Gold and `--cocoa-900` ink are **not flavours**: gold is the cake-board
accent and the warning state, ink is type. Neither ever appears in a `FlavourTag`. **There are no greys in this system.** The neutral ramp
is `--kinako-*` — roasted-soy tan, every step carrying a cocoa hue — and pure `#000` and any
desaturated grey are banned. `--kinako-500` and darker are the only neutrals allowed to carry
text (`500` = 5.2:1, `700` = 8.3:1 on cream); `--kinako-400` and lighter are for dividers,
separators and disabled glyphs only. Secondary text is always `--text-muted`, which resolves to
`--kinako-700`. Where a quiet panel still needs to belong to a flavour, use `--tint-sakura`,
`--tint-matcha` or `--tint-hojicha` rather than reaching for a neutral.
Semantic states reuse flavour colours: success is matcha,
danger is ichigo, warning is butter, info is sakura. Maximum **two** background colours per page —
in practice `--cream-50` plus one `--wash-sakura` band.

### Type

Nothing supplied was a font file; the wordmark is *lettering*, drawn once. Substitutions
(**flagged — please send real files if any exist**):

| Role | Family | Why | Usage |
| --- | --- | --- | --- |
| Display | **Marcellus** | Roman, quiet, slightly wide — the calm half of the brand. Reads as a small European patisserie sign. | Headlines 28px+, product names at hero size |
| Body / UI | **Zen Maru Gothic** | Rounded-terminal Japanese gothic; soft without being childish, and natively supports kana for `さくらまち`. | All body text, labels, buttons, forms |
| Script | **Caveat** | Monoline casual hand — nearest match to the founder's own marker handwriting on the gift box and to the wordmark's weight. | The wordmark in type-only contexts, gift notes, one accent phrase per page. **Never below 20px. Never for a whole paragraph.** || Mono | **DM Mono** | Light, humane monospace. | Order numbers, pickup codes, weights |

Type rules: headlines `--tracking-display` (-0.015em) because Marcellus sets wide; eyebrow labels
`--tracking-caps` (0.16em); body `--leading-normal` (1.55) and never tighter; prose capped at
`--prose-max` (62ch). Script is decoration — it never carries information a user must read to
complete a task.

**Optical centring of the script.** Caveat carries a wide left side bearing and a visual centre
that sits below the em midpoint, so geometrically centring it inside a pill, disc or band reads
low and to the right. Every script lockup in this system therefore carries one correction —
`transform: translate(-0.115em, -0.095em)` — baked into `Logo`, `HandwrittenNote` and
`SectionHeading`'s script accent. Hand-rolled script type must apply it too. Because the value is
in `em` it scales with the type, so a 300px social wordmark and a 34px favicon shift by the same
optical amount. **Put it on the element that holds the glyphs, never on one that also paints a
background or padding** — on a filled panel it moves the panel instead of the letters.

### Spacing & layout

4px base grid. `--space-5` (20px) is the default padding inside a card; `--space-8` (32px) inside
a panel; `--space-16`/`--space-24` between page sections. Page max `--page-max` 1180px with a
24px gutter. Layout is generous and centre-weighted: a hero is a single centred column with the
photo below, not a split 50/50. **Nothing is fixed-position except the site header** (which becomes
opaque cream with a hairline bottom border after 40px of scroll) **and the mobile order bar.**
No sticky sidebars, no floating chat bubbles.

### Backgrounds

Two, and only two:

1. **Flat cream** (`--bg-page`) — the default for 80% of surface area.
2. **The sakura wash** (`--wash-sakura`) — a radial gradient reproducing the sprayed halo behind
   the logo. One band per page, usually the hero or the footer. This is the *only* gradient in
   the system; aggressive multi-hue gradients are banned.

**Photography is never a page background.** On web and product surfaces a photograph is content:
it lives inside a card, a rounded frame or a fixed-ratio block of its own, and type sits beside it
or beneath it — never on top of it as though the image were a ground. Full-bleed photo heroes with
overlaid headlines are not part of the brand's web vocabulary.

**The one exception is social export frames** (`ui_kits/social/`). Instagram *is* Sakuramachi's
storefront, and a photo-led feed post with the bake's name over it is the brand's single most
authentic artefact — forbidding it would forbid the thing the business actually does. Inside those
frames, and only there, type may sit over a photograph, under two conditions: the type uses
`--scrim-photo-strong` (not the web `--scrim-photo`, which only reaches useful density in its
bottom third), and it sits in the bottom ~30% of the frame where that gradient is dense. Never a
solid capsule behind prose — see "Protection: scrim, not capsule" below.

No repeating patterns, no illustrated blossom confetti, no paper textures, no noise overlays. The
only illustration that exists is the logo itself.

### Photography

The brand's photographs are **honest, warm, domestic, and slightly imperfect** — shot on a phone
on a marble dining table with brown upholstered chairs blurred behind, under warm indoor light.
That is a feature, not a flaw: it reads as *homemade*, which is the proposition.

- **Colour temperature: warm.** Cream whites, amber highlights, never cool or clinical.
- **Depth of field: shallow.** Subject sharp, background dissolved.
- **Angle:** low three-quarter, at table height, dessert filling the lower two-thirds.
- **No black-and-white. No heavy grain. No filters that cool the image.**
- Crops: `4:5` for product cards and social, `1:1` for grid tiles, `16:9` for hero bands only.
- Always `object-fit: cover`; never letterbox a dessert.
- Never overlay text on a photo at all on web surfaces. In social frames, never without `--scrim-photo-strong` beneath it.

### Cards

The default object of the system. White (`--surface-card`), `--radius-lg` (20px), **no border**,
`--shadow-sm` at rest. Photo bleeds to the card's top edge and shares its corner radius; text
block padded `--space-5`. On hover the card lifts `--hover-lift` (-2px) and goes to `--shadow-md`.
Accent-left-border cards are **banned**. A "flavour" is communicated by a small tinted tag inside
the card, never by a coloured stripe or a coloured card background.

### Borders

Hairlines only — `1px solid var(--kinako-200)`, a warm tan rather than a grey. Used for dividers,
input rests, and the
scrolled header. Cards use shadow instead of border. Two-pixel borders appear in exactly one
place: the focus ring.

### Shadows

Warm-tinted (`rgba(46,26,13,…)`, never black), large-blur, low-opacity — soft-box light, not a
hard drop shadow. Five steps, `--shadow-xs` through `--shadow-xl`. Inner shadow exists only as
`--shadow-inset` (a 1px white top highlight on raised buttons, mimicking light catching an icing
edge). No neumorphism, no double shadows.

### Radii

Everything is rounded. `--radius-sm` (8px) for tags and inputs, `--radius-lg` (20px) for cards,
`--radius-xl`/`--radius-2xl` for panels and modals, `--radius-pill` for buttons, chips and the
quantity stepper, `--radius-circle` for avatars and icon buttons. **Nothing in this system has a
0px corner** except the social export frames, which are square or 9:16 bleeds by definition.

### Motion

Petals fall; they don't snap.

- Easing is always `--ease-settle` `cubic-bezier(.22,.61,.36,1)` for entrances and
  `--ease-drift` for state changes. No `linear`, no `ease-in-out` defaults, no bounce/spring
  overshoot — a bounce reads as toy-like and breaks the calm register.
- Durations: `--dur-fast` (160ms) for hover, `--dur-base` (240ms) for state, `--dur-slow` (420ms)
  for entrances, `--dur-drift` (900ms) reserved for a hero photo's slow fade-and-rise on load.
- Entrances are **fade + 8px rise**. Never slide from off-screen, never scale up from 0.
- Exits are fade only, at `--dur-fast`.
- Respect `prefers-reduced-motion: reduce` — drop to opacity-only at `--dur-instant`.

### Interaction states

| State | Treatment |
| --- | --- |
| **Hover (card / tile)** | lift `-2px`, shadow `sm → md`, `--dur-fast`. No colour change. |
| **Hover (filled button)** | background darkens one ramp step (`sakura-500 → sakura-600`). No lift, no shadow growth. |
| **Hover (ghost / text)** | background fills `--sakura-100`. Underline for inline links only. |
| **Press** | `scale(--press-scale)` = 0.975, shadow drops to `--shadow-xs`, `--dur-instant`. **Never** a colour-only press. |
| **Focus** | `--ring-focus`: 3px `--sakura-200` halo + 1.5px `--sakura-500` line, offset outside the shape. Browser default outline is always removed *and replaced*. |
| **Disabled** | 45% opacity, `cursor: not-allowed`, no hover. Never grey the text to an unreadable tint. |
| **Selected** | `--surface-accent` fill + `--border-accent` hairline + `--cocoa-900` text. |
| **Loading** | Text stays, opacity 60%, no spinner on buttons under 120px wide. |

### Transparency & blur

Used **twice** and nowhere else: the scrolled header (`rgba(255,253,248,.88)` +
`backdrop-filter: blur(12px)`) and the modal scrim (`rgba(46,26,13,.42)` + `blur(3px)`). Frosted
glass cards, translucent panels and blurred sidebars are not part of this brand — they read cold.

### Protection: scrim, not capsule

Type sits over photography only in social export frames (see Backgrounds). When it does, use the
**gradient scrim** — `--scrim-photo-strong` for display type, `--scrim-photo` for a small caption
near the very bottom edge. Solid capsules/pills behind text over photos are banned — they chop the
image. The one exception is a small flavour tag pinned to a photo's top-left corner, which *is* a capsule
(`--radius-pill`, `--surface-card` at 92% opacity) because it is a label, not prose.

---

## ICONOGRAPHY

**There is no icon set in the supplied brand material.** The founder's assets contain exactly one
piece of drawn artwork — the logo — and no UI, no app, no website, no icon sheet, no glyph font.
Nothing has been invented to fill that gap, and no icon has been hand-drawn as SVG.

**Substitution — flagged.** Where UI icons are structurally required (close, chevron, search, bag,
plus/minus, check), this system links **[Lucide](https://lucide.dev) 0.544.0 from CDN** and wraps
it in the `Icon` component. Lucide was chosen because its 2px rounded-cap, rounded-join stroke is
the closest available match to the soft, monoline quality of the hand-drawn logo. Heroicons and
Feather were rejected as too thin and too square-jointed respectively.

**Rules:**

- Stroke `2px`, `currentColor`, never filled. Size on a 4px grid: 16 / 20 / 24 px.
- Icons are **functional only** — affordances, never decoration. A section heading does not get an icon.
- Icons never carry meaning alone; every icon button has an `aria-label`, and destructive icons pair with text.
- **No emoji as icons. No Unicode dingbats (✿ ❀ ★ →) as icons.** The arrow in a link is a Lucide
  `chevron-right`, not `→`.
- The strawberry-cake mark from the logo is **not** an icon and must never be used at icon size,
  inline in a sentence, or as a bullet. It is the brand mark: minimum 64px wide, always with clear
  space equal to the height of the cake slice on all sides, and always rendered from
  `assets/logo-sakuramachi.jpeg` exactly as supplied — the file is 2048×1536 and carries its own
  pink ground, so it needs no backdrop, no blend mode and no recolouring.

**The one place drawing is allowed:** handwritten script (`--font-script`) standing in for the
founder's marker, as on the gift box. It is type, not an icon.

---

## Intentional additions

No source design system, component library, Figma file or codebase was supplied — this is a
brand-guidelines-only build. The component inventory is therefore an authored standard set sized
to what the photographed business actually does (take orders for boxed desserts). Five components
go beyond a generic set and exist for brand-specific reasons:

- **`Logo`** — the mark and the type-only lockup need one enforced implementation, including the clear-space rule.
- **`HandwrittenNote`** — the gift-box marker line is real brand furniture; it needed a component so it stays type and stays rare.
- **`ProductCard`** — the single most repeated object across every surface; standardising photo ratio, flavour tag and price prevents drift.
- **`FlavourTag`** — encodes the "flavour = tinted tag, never a coloured card" rule in code.
- **`QuantityStepper`** — every order is *n* boxes of *m*; a plain number input would be wrong for the touch-first, Instagram-DM-driven ordering reality.

---

## Index — what's in this folder

| Path | What it is |
| --- | --- |
| `styles.css` | **Entry point.** `@import`s only. Link this one file. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radii` · `shadows` · `motion` · `semantic` |
| `assets/logo-sakuramachi.jpeg` | The hand-drawn brand mark |
| `assets/photography/` | 21 renamed product photographs, the brand's real image library |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand, Motion) |
| `components/core/` | `Button` `IconButton` `Card` `Badge` `FlavourTag` `Icon` |
| `components/forms/` | `Input` `Textarea` `Select` `Checkbox` `RadioGroup` `Switch` `QuantityStepper` |
| `components/navigation/` | `Tabs` `Breadcrumb` |
| `components/feedback/` | `Dialog` `Toast` `Tooltip` |
| `components/brand/` | `Logo` `SectionHeading` `HandwrittenNote` `ProductCard` `PriceTag` |
| `ui_kits/website/` | The Sakuramachi order site — home, menu, product, box/checkout. Click-through. |
| `ui_kits/social/` | Branded square post + story templates for the Instagram grid |
| `SKILL.md` | Agent Skills front-matter so this folder works inside Claude Code |

---

## Maintaining the specimen cards

Every card's first line declares `viewport="<W>x<H>"`, and the Design System tab renders it at
that size with **overflow hidden** — so a declared height below the card's real height silently
clips the bottom of the card. Estimating that height does not work: a long line of script type or
a `clamp()`ed heading sets a min-width that wraps a flex row and adds 100px without warning.

**After editing any card, measure it.** Load the card in an iframe at its declared width, wait for
its images to decode, and compare `document.body.scrollHeight` against the declared height. All 29
specimen and component cards were measured this way; each declares its measured height plus ~12px.

The two `ui_kits/*/index.html` cards are the deliberate exception — they declare far less than they
measure, because there the declared height is choosing which part of a full-length screen to
preview.

---

## Open gaps

1. **Instagram captions** — login-walled, unreadable. The voice section needs real captions to be verified.
2. **The four `.mov` files** — never arrived in the project. Motion guidance is inferred from stills.
3. **Fonts** — all four families are substitutions. If a real typeface was ever purchased, send it.
4. **Icons** — Lucide is a substitution; the brand owns no icon set.
5. **Prices, sizes, lead times, delivery area** — none appear in any supplied asset. Every price in
   the UI kits is clearly fictional placeholder data and must be replaced before anything ships.
