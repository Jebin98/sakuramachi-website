# Sakuramachi Pastries

Source for **[sakuramachipastries.com](https://sakuramachipastries.com)** — the order site for
Sakuramachi (さくらまち, "the town of cherry blossom"), a home patisserie in Chennai making
Japanese- and Korean-inspired cakes, cupcakes, cookies and small bakes.

One scrolling page. Its only job is to move a visitor from "what is this" to "sent a DM".
There is no cart, no checkout, no payment and no account — every call to action leaves the
site for Instagram ([@sakuramachipastries](https://www.instagram.com/sakuramachipastries)).

## What is in here

| Folder | What it holds |
| --- | --- |
| [`web/`](web/) | The site itself. Next.js 15, React 19, TypeScript, GSAP, statically exported. |
| [`design_handoff_sakuramachi_site/`](design_handoff_sakuramachi_site/) | The design spec: HTML reference prototype, design-system source, screenshots. |
| [`INFRASTRUCTURE.md`](INFRASTRUCTURE.md) | Everything outside the code — domains, DNS, hosting, Search Console, Business Profile. |

Each folder has its own README with the detail. Read
[`design_handoff_sakuramachi_site/README.md`](design_handoff_sakuramachi_site/README.md)
before changing copy, colour, spacing or motion — it is the spec, not a suggestion.

## Run it

```bash
cd web
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

Cloudflare Pages project **`sakuramachi`**, by direct upload — there is no git integration,
so pushing to this repo does **not** deploy anything.

```bash
cd web && npm run build
```

Then drag `web/out/` into Cloudflare → Workers & Pages → `sakuramachi` → Create deployment.
[`INFRASTRUCTURE.md`](INFRASTRUCTURE.md) has the DNS records, the redirect rule for
`sakuramachi.in`, and the things that must not be deleted.

## Not in this repo

The founder's raw source media — 28 photos and videos in `instagram posts/` — stays on the
local machine. It is 432 MB, git handles large video badly, and the site only needs the
processed copies already committed under [`web/public/`](web/public/).

Everything else the site needs is here.
