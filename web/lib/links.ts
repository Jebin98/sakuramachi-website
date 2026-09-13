/** Every action on this page leaves the site. Two destinations, defined once. */
export const LINKS = {
  /** Instagram's DM deep link. Opens the chat in the app on mobile, on the web elsewhere. */
  dm: "https://ig.me/m/sakuramachipastries",
  /** The public profile grid. */
  feed: "https://www.instagram.com/sakuramachipastries",
} as const;

/** In-page section ids, used by the nav, the footer and the smooth-scroll helper. */
export const SECTIONS = {
  top: "top",
  /** Target of the skip link. */
  main: "main",
  bakes: "bakes",
  about: "about",
  feed: "feed",
  order: "order",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

/** Breathing room between the bottom of the sticky header and the heading it scrolls to. */
export const SCROLL_GAP = 6;

/** Used before the header has been measured, and if it is ever missing. */
export const FALLBACK_HEADER_HEIGHT = 72;

/**
 * How far above a section to stop. The header wraps to a second row on narrow viewports,
 * so its height is measured rather than assumed — a fixed offset tucks the heading
 * underneath the header at exactly the widths where the nav wraps.
 */
export function scrollOffset(): number {
  const header = typeof document === "undefined" ? null : document.querySelector("header");
  return (header?.getBoundingClientRect().height ?? FALLBACK_HEADER_HEIGHT) + SCROLL_GAP;
}

/** Props every outbound link carries. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
