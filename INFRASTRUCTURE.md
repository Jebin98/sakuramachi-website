# Infrastructure

Everything outside the code: domains, DNS, hosting, search. Last verified 2026-09-12.

## Accounts

| Service | What it holds | URL |
|---|---|---|
| Porkbun | Both domains, renewals, billing | porkbun.com |
| Cloudflare | DNS, hosting (Pages), redirects | dash.cloudflare.com |
| Google Search Console | Indexing, sitemap status | search.google.com/search-console |
| Google Business Profile | Maps / local listing | google.com → search "my business" |

Search Console and Business Profile must stay on the **same Google account**.

## Domains

| Domain | Registrar | Renewal | Role |
|---|---|---|---|
| `sakuramachipastries.com` | Porkbun | ~$11.08/yr flat | The live site. Canonical. |
| `sakuramachi.in` | Porkbun | ~$7.83/yr flat | 301 redirect to the `.com`. Hosts nothing. |

Auto-renew must stay ON for both. A lapsed domain is bought by investors within hours.

Both delegate to Cloudflare nameservers: `kia.ns.cloudflare.com`, `marty.ns.cloudflare.com`.
Porkbun's DNS panel is inert — all record changes happen in Cloudflare.

## Hosting

Cloudflare Pages project **`sakuramachi`**, deployed by **direct upload** (no git integration).

To deploy a change:

```bash
cd web && npm run build
```

Then drag `web/out/` into Cloudflare → Workers & Pages → `sakuramachi` → Create deployment.

Custom domains attached: `sakuramachipastries.com` and `www.sakuramachipastries.com`.
Both serve the site; the canonical tag in `app/layout.tsx` tells Google the bare domain wins.

## DNS — `sakuramachipastries.com`

| Type | Name | Value | Why |
|---|---|---|---|
| A | @ | Cloudflare Pages (auto) | The site |
| A | www | Cloudflare Pages (auto) | The site |
| MX | @ | `fwd1.porkbun.com` (10), `fwd2.porkbun.com` (20) | Porkbun email forwarding |
| TXT | @ | `v=spf1 include:_spf.porkbun.com ~all` | SPF for that forwarding |
| TXT | @ | `google-site-verification=eZWTldKWf1emkj7vvOSynNstSnIGKN99ZmoMLrcnT_E` | Search Console ownership |

**Do not delete the MX or TXT records.** The MX pair plus SPF are the only thing making
`@sakuramachipastries.com` email work; the verification TXT is what keeps Search Console access.

Porkbun's original parking records — three A records on `207.207.210.x`, `www` and the
wildcard `*` CNAME to `uixie.porkbun.com` — were deleted deliberately. The wildcard in
particular made every invented subdomain resolve, which shadows verification records and
lets a lookalike hostname answer to the domain.

## DNS — `sakuramachi.in`

| Type | Name | Value | Proxy |
|---|---|---|---|
| A | @ | `192.0.2.1` | **Proxied** |
| A | www | `192.0.2.1` | **Proxied** |

`192.0.2.1` is the reserved documentation address — nothing is listening there, and nothing
needs to be. The request never leaves Cloudflare: a Redirect Rule answers it first. The
orange cloud is what makes that interception possible, so a grey cloud breaks the redirect.

Redirect Rule **`in to com`**: all incoming requests → `https://sakuramachipastries.com`,
status **301**, preserve query string. 301 rather than 302 so the search credit transfers.

No MX or TXT here. Email lives on one domain only.

## SEO

Built into the code, not configured anywhere external:

| Thing | Where it comes from |
|---|---|
| Canonical, Open Graph, Twitter tags | `web/app/layout.tsx` |
| `Bakery` JSON-LD (17 menu items) | `web/lib/structured-data.ts` |
| `sitemap.xml` | `web/app/sitemap.ts` |
| `robots.txt` | `web/app/robots.ts` |
| The live domain every URL resolves against | `web/.env.production` |

Change the domain in `.env.production` and rebuild; every absolute URL follows.

Cloudflare's AI settings **prepend** their own managed block to the served `robots.txt` —
search bots allowed, training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot and
others) disallowed. Our own rules and the `Sitemap:` line survive underneath, which is the
thing to re-check if those settings are ever changed.

Sitemap submitted to Search Console as the full URL `https://sakuramachipastries.com/sitemap.xml`
— a Domain property has no prefix to fill in, so a bare `sitemap.xml` is rejected.

## Business Profile

Registered as a **service-area business**: no visitable location, delivery area Chennai.
The home address is on file with Google for verification but hidden from the public listing.
Category: Bakery. Website points at the `.com`. No public phone number — ordering is by
Instagram DM (`@sakuramachipastries`).

## Verifying from the command line

A stale local DNS cache will lie to you — both `dig` and `curl` on this Mac served Porkbun's
old answers for hours after the switch. Query a public resolver and pin the IP:

```bash
dig @1.1.1.1 +short A sakuramachipastries.com
curl -sI --resolve "sakuramachipastries.com:443:<ip>" https://sakuramachipastries.com/
```

Browsers cache the old parking **301 permanently** and may never re-ask. Test in a private
window before believing anything is broken.

Registry-level truth, which no cache can affect:

```bash
whois sakuramachipastries.com | grep "Name Server"
```
