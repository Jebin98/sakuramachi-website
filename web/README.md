# sakuramachi — order site

One scrolling page. Its only job is to move a visitor from "what is this" to "sent a DM".
There is no cart, no checkout, no payment, no account. Every action leaves the site for
Instagram.

Built from `../design_handoff_sakuramachi_site/`. Read that README before changing copy,
colour, spacing or motion — it is the spec, and the brand guide it points at
(`design-system-source/DESIGN_SYSTEM_GUIDE.md`) governs anything new.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · GSAP 3.13 · statically exported.

No server, no data layer, no fetches. `next build` writes a plain folder of files to `out/`
that any static host will serve.

## Run it

```bash
npm install
npm run dev
```

Then <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Static export into `out/` |
| `npm start` | Serve the built `out/` on :3000 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:links` | Verify every link in `out/` — run after `build` |

## Deploy

`npm run build`, then upload `out/`.

The live domain lives in `.env.production`, which `next build` reads on its own — the
canonical tag, `sitemap.xml`, `robots.txt` and the JSON-LD all resolve against it. To build
a preview under a different host, override it for the one command:

```bash
NEXT_PUBLIC_SITE_URL=https://staging.example npm run build
```

## Layout of the code

```
app/
  layout.tsx        fonts, metadata, the hero poster preload
  page.tsx          the eight bands, wrapped in MotionProvider
  globals.css       token imports + the handful of global rules
styles/tokens/      ported verbatim from the handoff. Do not hand-edit values here.
lib/
  products.ts       the 17 bakes + the ticker string
  feed.ts           the Instagram rail images
  hero-clips.ts     the two hero video clips
  links.ts          the two outbound URLs, the section ids, the scroll offset
  motion.tsx        MotionProvider: motion level + reduced-motion gate
  useReveal.ts      the [data-reveal] entrance and its failsafes
  useSmoothScroll.ts, useMagnetic.ts
components/
  ds/               Button IconButton Card Badge FlavourTag Tabs Icon
  brand/            Logo SectionHeading HandwrittenNote ProductCard
  sections/         Header Hero HeroVideo Ticker BakeList Baker Feed Order Footer
public/media/       images, and video/ for the two hero clips + their posters
public/favicon*     the circular tab icon (see below)
scripts/            make-favicon.py, encode-hero.sh, check-links.mjs
```

### The tab icon

Circular, cut from the hand-drawn mark. The full lockup is a 4:3 image whose lower third is
the hand-lettered wordmark, which is unreadable mush at 16px, so the icon crops to the cake
slice alone and masks it to a circle with transparent corners. The pink inside the circle is
the artwork's own ground — nothing is recoloured and no backdrop is added.

`apple-touch-icon.png` is the one exception: it keeps an opaque `--cream-50` ground, because
iOS fills a transparent home-screen icon with black.

Regenerate after any change to the source artwork:

```bash
python3 scripts/make-favicon.py   # needs: pip install pillow
```

### Adding a bake

Add one entry to `PRODUCTS` in `lib/products.ts`. Nothing else. Do not add a price —
see Known gaps.

## Why the hero video never stalls

1. **Poster first.** Each clip's `poster` is frame 0 of that very clip, so the first painted
   pixel already matches the video. Clip one's poster is `rel="preload"`ed in the head.
2. **The preload scanner starts the fetch.** Both `<video>` elements are server-rendered with
   `preload="auto"`, so the browser begins downloading while it is still parsing the HTML —
   measured at ~28 ms, long before React hydrates. (There is deliberately no
   `<link rel="preload" as="video">`: `video` is not a supported preload destination and
   Chrome only logs a warning for it.)
3. **The files are small.** Both clips are cut to 6.05 s — the length the carousel actually
   plays — and scaled to 660 px wide, which covers the 330 px card at 2x. 710 KB and 495 KB.
4. **H.264 in MP4, one file each.** No codec negotiation and no fallback chain to get wrong.
   A VP9 WebM of the same quality came out *larger*, so it was dropped.
5. **Same origin.** Everything is served from `/media/video/`. No third-party CDN, no DNS
   lookup, no TLS handshake in the way.
6. **Failure is invisible.** A rejected autoplay promise is swallowed and retried on the
   first tap or keypress; playback resumes when a backgrounded tab comes forward; and if a
   clip errors outright its poster simply stays on screen.

Re-encode with `scripts/encode-hero.sh` if the source clips are ever replaced.

## Why the product photos are not left to native lazy loading

Native `loading="lazy"` is a rendering-driven optimisation: the browser only re-checks which
deferred images are near the fold as part of the frame lifecycle. When that lifecycle is
throttled or skipped — a background tab, a hidden or offscreen window, some embedded
webviews — the checks stop and a deferred image can sit unfetched forever, even once it is
scrolled fully into view. Chrome also abandons an image permanently if it was first laid out
inside a `visibility: hidden` subtree, which the reveal animation used to create.

That left the bake list showing alt text and broken-image glyphs below the first row.

Two changes, both worth keeping:

* The reveal animates `opacity` only, never GSAP's `autoAlpha` (which also sets
  `visibility: hidden`). See the note at the top of `lib/useReveal.ts`.
* `lib/useLazyImages.ts` watches every lazy image and flips it to `loading="eager"` the
  moment it comes near the fold and has not loaded. Images stay lazy, so the bandwidth
  saving is intact — a fresh load fetches 9 of 24 images and only pulls the rest in as you
  scroll — but none can get stuck.

Verified in a real rendered Chrome against the static export: 9 images on load, 24 of 24
after scrolling through, none failed, 4 still marked lazy.

## Links

Every CTA is a real `<a href>`, not a click handler, so it can be middle-clicked, copied and
crawled. Outbound links carry `target="_blank" rel="noopener noreferrer"`. In-page links
smooth-scroll but keep a working `href`, so they still jump with JavaScript off.

`npm run check:links` walks the built HTML and checks all three kinds: in-page anchors
resolve to a real element id, local assets exist on disk, and the outbound URLs answer. It
sends a mobile user agent, because `ig.me` returns 400 to desktop ones.

## Motion

`MotionProvider level="full"` in `app/page.tsx`. `subtle` drops parallax, Ken Burns and the
magnetic CTAs; `off` behaves exactly as `prefers-reduced-motion: reduce`, which kills all
GSAP work and switches scrolling to instant.

Entrances are always **fade + 8 px rise**. No bounce, no spring, no slide-in, no scale-from-0.

Nothing is hidden in the server-rendered HTML — the reveal hides elements only after mount,
and three separate failsafes bring them back if the IntersectionObserver goes quiet. Content
must never stay invisible.

## Known gaps — do not paper over these

1. **No prices, sizes, lead times or delivery radius** exist in any supplied material. The
   page deliberately shows none. Get them from the founder; do not invent them.
2. **The feed rail is not a real Instagram feed.** It is the founder's own product
   photography. A real embed or Graph API feed is a new decision.
3. **All four typefaces are substitutions**, and so is the icon set (Lucide).
4. **Two of the founder's four clips are missing** from the web media set, on size.
5. **No analytics, no form, no server.** If order capture ever moves on-site, that is a new
   design, not an extension of this one.
