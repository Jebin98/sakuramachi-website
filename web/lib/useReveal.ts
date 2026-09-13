"use client";

import React from "react";
import { gsap } from "gsap";
import { useMotion } from "./motion";

/** Force-show everything if the observer never delivers a single callback. */
const NO_CALLBACK_TIMEOUT = 1600;

/**
 * Entrance for every `[data-reveal]` element under `root`: fade + 8px rise.
 *
 * Deliberately an IntersectionObserver rather than ScrollTrigger — page content must never
 * stay invisible because a scroll plugin failed to initialise. Nothing is hidden in the
 * server-rendered HTML either: the hide happens here, after mount, so a page with broken or
 * disabled JavaScript simply shows all its content.
 *
 * Hidden here means `opacity: 0` and nothing else. GSAP's `autoAlpha` looks like the right
 * tool, but it also sets `visibility: hidden`, and Chrome permanently abandons a
 * `loading="lazy"` image that was laid out inside a hidden subtree — the image then never
 * loads, even once the element is revealed and scrolled into view. That broke every product
 * photo below the first row. Opacity alone animates identically. Do not put autoAlpha back.
 *
 * Three failsafes, because invisible content is the worst outcome this page can have:
 *   1. No IntersectionObserver at all -> show everything immediately.
 *   2. No observer callback within 1600ms -> show everything.
 *   3. A rect check on scroll, resize and visibilitychange shows anything that is on screen
 *      but still hidden. This covers the case the timeout misses: a browser that delivers
 *      the initial callback and then stops computing intersections, which is what happens
 *      to a page loaded in a background tab.
 */
export function useReveal(root: React.RefObject<HTMLElement | null>) {
  const { reduced, ready } = useMotion();

  React.useEffect(() => {
    if (!ready) return;
    const host = root.current;
    if (!host) return;

    const els = Array.from(host.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    if (reduced) {
      gsap.set(els, { clearProps: "transform,opacity" });
      return;
    }

    gsap.set(els, { y: 8, opacity: 0 });

    const pending = new Set(els);

    const show = (el: Element, i: number) => {
      pending.delete(el as HTMLElement);
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.42,
        delay: Math.min(i, 4) * 0.06,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const showAll = () => {
      pending.forEach((el) => pending.delete(el));
      gsap.set(els, { y: 0, opacity: 1 });
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }

    let sawCallback = false;
    const io = new IntersectionObserver(
      (entries) => {
        sawCallback = true;
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            show(e.target, i);
            io.unobserve(e.target);
          });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const safety = window.setTimeout(() => {
      if (sawCallback) return;
      io.disconnect();
      showAll();
    }, NO_CALLBACK_TIMEOUT);

    /* Backstop: reveal anything on screen the observer has not reported. */
    let queued = false;
    const sweep = () => {
      queued = false;
      if (!pending.size) {
        detach();
        return;
      }
      const limit = window.innerHeight * 0.92;
      [...pending].forEach((el, i) => {
        const r = el.getBoundingClientRect();
        if (r.top < limit && r.bottom > 0) {
          io.unobserve(el);
          show(el, i);
        }
      });
    };
    const schedule = () => {
      if (queued) return;
      queued = true;
      window.setTimeout(sweep, 120);
    };
    const onVisible = () => { if (document.visibilityState === "visible") schedule(); };

    function detach() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", onVisible);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.clearTimeout(safety);
      detach();
      io.disconnect();
    };
  }, [root, reduced, ready]);
}
