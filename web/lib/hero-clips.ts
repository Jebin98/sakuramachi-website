export interface HeroClip {
  id: string;
  /** H.264 in MP4 — decoded by every browser we care about, hardware accelerated. */
  src: string;
  /** Frame 0 of the same clip, so the still and the first video frame are identical. */
  poster: string;
  label: string;
}

/* Only two of the founder's clips are small enough to ship; the hero cycles them.
   Both are pre-trimmed to 6.05s — the shorter clip's length, which is all the
   carousel ever plays — so nothing is downloaded that never gets shown. */
export const HERO_CLIPS: HeroClip[] = [
  {
    id: "brownie",
    src: "/media/video/hero-brownie.mp4",
    poster: "/media/video/hero-brownie.jpg",
    label: "A fudgy brownie broken open by hand",
  },
  {
    id: "cookie",
    src: "/media/video/hero-cookie.mp4",
    poster: "/media/video/hero-cookie.jpg",
    label: "A Nutella cookie pulled apart, centre still molten",
  },
];
