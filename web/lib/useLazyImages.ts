"use client";

import React from "react";

/** Start the fetch a little before the image scrolls in, so it is rarely visibly blank. */
const ROOT_MARGIN = "300px 0px";

/** Backstop sweep distance, in viewport heights either side of the fold. */
const SWEEP_RANGE = 1.5;

/**
 * Guarantees that every `loading="lazy"` image actually loads.
 *
 * Native lazy loading is a rendering-driven optimisation: the browser only re-checks which
 * deferred images are near the fold as part of the frame lifecycle. When that lifecycle is
 * throttled or skipped — a background tab, a hidden or offscreen window, some embedded
 * webviews — the checks stop running and a deferred image can sit unfetched forever, even
 * once it is scrolled fully into view. Chrome also gives up permanently on an image that was
 * first laid out inside a `visibility: hidden` subtree. Either way the visitor is left
 * looking at alt text and a broken-image glyph, which is what happened on the bake list.
 *
 * So the page does not rely on the browser getting this right. Images stay `loading="lazy"`,
 * which keeps the bandwidth saving when it works, and this hook promotes one to `eager` the
 * moment it is near the fold and still unloaded. Setting `loading = "eager"` is what revives
 * a stalled image — re-assigning `src` does not.
 *
 * Three triggers, mirroring lib/useReveal.ts: an observer, a scroll/resize/visibility sweep,
 * and a timeout that rescues anything already on screen.
 */
export function useLazyImages(root: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const host = root.current;
    if (!host) return;

    const rescue = (img: HTMLImageElement) => {
      if (img.complete && img.naturalWidth > 0) return;
      /* Flipping `loading` is what actually starts a stalled fetch. Re-assigning `src`
         does not revive one, and risks aborting and restarting a load already in flight. */
      img.loading = "eager";
    };

    const lazyImages = () =>
      Array.from(host.querySelectorAll<HTMLImageElement>('img[loading="lazy"]'));

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            rescue(entry.target as HTMLImageElement);
            io!.unobserve(entry.target);
          }
        },
        { rootMargin: ROOT_MARGIN },
      );
      lazyImages().forEach((img) => io!.observe(img));
    } else {
      lazyImages().forEach(rescue);
    }

    /* Backstop: anything within reach of the fold that the observer has not handled. */
    let lastSweep = 0;
    let trailing = 0;
    const sweep = () => {
      lastSweep = Date.now();
      const near = window.innerHeight * SWEEP_RANGE;
      for (const img of lazyImages()) {
        const r = img.getBoundingClientRect();
        if (r.top < window.innerHeight + near && r.bottom > -near) {
          io?.unobserve(img);
          rescue(img);
        }
      }
    };
    /* Leading-edge throttle: sweep at once, then at most every 150ms. Waiting for a trailing
       timer loses images in exactly the environments this hook exists for, because that is
       where timers are throttled too. */
    const schedule = () => {
      const since = Date.now() - lastSweep;
      if (since >= 150) {
        sweep();
        return;
      }
      if (trailing) return;
      trailing = window.setTimeout(() => { trailing = 0; sweep(); }, 150 - since);
    };
    const onVisible = () => { if (document.visibilityState === "visible") schedule(); };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", onVisible);
    const initial = window.setTimeout(sweep, 1200);

    return () => {
      window.clearTimeout(initial);
      if (trailing) window.clearTimeout(trailing);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", onVisible);
      io?.disconnect();
    };
  }, [root]);
}
