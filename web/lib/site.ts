/* The page's identity, in one place: the layout's metadata, the sitemap, robots.txt and the
   JSON-LD all describe the same business, and three of them need fully-qualified URLs. */

/** The brand wordmark is always lowercase "sakuramachi" in page copy, but the founder
    wants the full trading name in the browser tab, on share cards and in search results. */
export const SITE_NAME = "Sakuramachi Pâtisserie";

export const SITE_DESCRIPTION =
  "Japanese- and Korean-inspired pastry, self-taught and baked at home. The town of cherry blossom, by way of Chennai. Order by Instagram DM.";

/** Set NEXT_PUBLIC_SITE_URL at build time so Open Graph image URLs resolve absolutely. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakuramachi.example";

/**
 * Fully-qualified URL for a site-relative path. `metadataBase` already resolves the relative
 * paths in the layout's metadata, but structured data and the sitemap are plain strings that
 * nothing else expands — so they go through here rather than concatenating SITE_URL by hand.
 * The trailing slash on the base matters: `trailingSlash: true` means the home page is served
 * at "/", not at the bare origin.
 */
export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
