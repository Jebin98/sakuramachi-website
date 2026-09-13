"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TICKER_STRING } from "@/lib/products";
import { useMotion } from "@/lib/motion";

const LINE_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-xl)",
  letterSpacing: "var(--tracking-display)",
  color: "var(--text-heading)",
  whiteSpace: "nowrap",
};

/**
 * The marquee carries no stop button, by decision. Hover slows it to a quarter speed, and
 * `prefers-reduced-motion` keeps it from starting at all — the early return below. The
 * strip is decoration: it repeats the bake list sitting directly beneath it, so nothing
 * here is information a visitor can only get by reading the moving text.
 *
 * The trade-off, written down so it is a choice and not an oversight: hover is a
 * pointer-only escape, so a touch or keyboard visitor who has not set the OS motion
 * preference has no way to slow the strip down.
 */
export function Ticker() {
  const stripRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const { rich, reduced, ready } = useMotion();

  React.useEffect(() => {
    if (!ready || reduced) return;
    const strip = stripRef.current;
    const track = trackRef.current;
    if (!strip || !track) return;

    const ctx = gsap.context(() => {
      const loop = gsap.to(track, { xPercent: -50, duration: 48, ease: "none", repeat: -1 });

      const over = () => gsap.to(loop, { timeScale: 0.25, duration: 0.3, overwrite: true });
      const out = () => gsap.to(loop, { timeScale: 1, duration: 0.4, overwrite: true });
      strip.addEventListener("mouseenter", over);
      strip.addEventListener("mouseleave", out);

      let st: ScrollTrigger | undefined;
      if (rich) {
        /* Scroll velocity nudges the ticker along; it settles back to 1 on its own. */
        st = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const boost = gsap.utils.clamp(0, 2.2, Math.abs(self.getVelocity()) / 900);
            gsap.to(loop, { timeScale: 1 + boost, duration: 0.5, overwrite: true });
          },
        });
      }

      return () => {
        strip.removeEventListener("mouseenter", over);
        strip.removeEventListener("mouseleave", out);
        st?.kill();
      };
    }, strip);

    return () => ctx.revert();
  }, [rich, reduced, ready]);

  return (
    <div
      ref={stripRef}
      style={{
        borderTop: "var(--border-hairline)",
        borderBottom: "var(--border-hairline)",
        background: "var(--surface-sunken)",
        overflow: "hidden",
        padding: "var(--space-4) 0",
      }}
    >
      <div ref={trackRef} style={{ display: "flex", columnGap: 11, width: "max-content", willChange: "transform" }}>
        <span style={LINE_STYLE}>{TICKER_STRING}</span>
        <span aria-hidden="true" style={LINE_STYLE}>{TICKER_STRING}</span>
      </div>
    </div>
  );
}
