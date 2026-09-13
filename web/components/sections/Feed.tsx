"use client";

import React from "react";
import { gsap } from "gsap";
import { Button } from "../ds/Button";
import { Card } from "../ds/Card";
import { IconButton } from "../ds/IconButton";
import { SectionHeading } from "../brand/SectionHeading";
import { FEED_IMAGES } from "@/lib/feed";
import { EXTERNAL_LINK_PROPS, LINKS, SECTIONS } from "@/lib/links";
import { useMotion } from "@/lib/motion";

const SNAP = "x mandatory";

export function Feed() {
  const railRef = React.useRef<HTMLDivElement>(null);
  const restoreRef = React.useRef<number | null>(null);
  const { reduced, ready } = useMotion();

  const nudge = React.useCallback(
    (dir: 1 | -1) => {
      const rail = railRef.current;
      if (!rail) return;
      const max = rail.scrollWidth - rail.clientWidth;
      const target = Math.max(0, Math.min(max, rail.scrollLeft + dir * rail.clientWidth * 0.7));

      if (!ready || reduced) {
        rail.scrollLeft = target;
        return;
      }

      gsap.killTweensOf(rail);
      /* scroll-snap fights a tween, so it is off for the length of the nudge. */
      rail.style.scrollSnapType = "none";
      const settle = () => {
        if (Math.abs(rail.scrollLeft - target) > 2) rail.scrollLeft = target;
        rail.style.scrollSnapType = SNAP;
      };
      if (restoreRef.current) window.clearTimeout(restoreRef.current);
      restoreRef.current = window.setTimeout(settle, 620);
      gsap.to(rail, { scrollLeft: target, duration: 0.45, ease: "power2.out", onComplete: settle });
    },
    [ready, reduced],
  );

  /* Drag to scroll, mouse and pen only — touch already has native momentum. */
  React.useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let down = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      down = true;
      startX = e.clientX;
      startLeft = rail.scrollLeft;
      rail.style.cursor = "grabbing";
      rail.style.scrollSnapType = "none";
      /* Without this a drag across the rail sweeps a text selection along with it. */
      rail.style.userSelect = "none";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      rail.scrollLeft = startLeft - dx;
      if (Math.abs(dx) > 4) e.preventDefault();
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      rail.style.cursor = "grab";
      rail.style.scrollSnapType = SNAP;
      rail.style.userSelect = "";
    };
    const onDragStart = (e: Event) => e.preventDefault();

    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    rail.addEventListener("dragstart", onDragStart);

    return () => {
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      rail.removeEventListener("dragstart", onDragStart);
      if (restoreRef.current) window.clearTimeout(restoreRef.current);
    };
  }, []);

  return (
    <section id={SECTIONS.feed} style={{ margin: "var(--space-24) 0 0", scrollMarginTop: "calc(var(--header-h, 72px) + 6px)" }}>
      <div
        style={{
          maxWidth: "var(--page-max)", margin: "0 auto var(--space-6)", padding: "0 var(--page-gutter)",
          display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-5)",
        }}
      >
        <div data-reveal style={{ minWidth: 0 }}>
          <SectionHeading
            eyebrow="The feed"
            title={<span translate="no">@sakuramachipastries</span>}
            lede="What came out of the oven this week."
          />
        </div>
        <div data-reveal style={{ display: "flex", gap: "var(--space-2)" }}>
          <IconButton tone="surface" size="md" icon="arrow-left" label="Scroll the feed left" onClick={() => nudge(-1)} />
          <IconButton tone="surface" size="md" icon="arrow-right" label="Scroll the feed right" onClick={() => nudge(1)} />
        </div>
      </div>

      <div
        data-rail
        ref={railRef}
        style={{
          display: "flex", gap: "var(--space-5)", overflowX: "auto", scrollSnapType: SNAP,
          scrollPaddingLeft: 24, padding: "8px var(--page-gutter) var(--space-6)", cursor: "grab",
          /* Keeps a swipe past the end of the rail inside the rail, rather than handing it
             to the browser as a back gesture. */
          overscrollBehaviorX: "contain",
        }}
      >
        {FEED_IMAGES.map((item) => (
          <div key={item.id} style={{ flex: "0 0 auto", width: "min(280px,72vw)", scrollSnapAlign: "start" }}>
            <Card as="a" href={LINKS.feed} {...EXTERNAL_LINK_PROPS} padded={false} interactive>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
              />
            </Card>
          </div>
        ))}

        <div style={{ flex: "0 0 auto", width: "min(280px,72vw)", scrollSnapAlign: "start" }}>
          <Card tone="accent" padded={false} style={{ aspectRatio: "1 / 1" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "var(--space-4)", height: "100%", padding: "var(--space-5)" }}>
              <span
                style={{
                  fontFamily: "var(--font-script)", fontSize: "var(--text-2xl)",
                  color: "var(--sakura-700)", lineHeight: 1.2, transform: "translate(-0.115em,-0.095em)",
                }}
              >
                more on the feed
              </span>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
                Everything gets posted the day it is baked.
              </p>
              <div style={{ display: "flex" }}>
                <Button tone="secondary" size="md" href={LINKS.feed} {...EXTERNAL_LINK_PROPS}>
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
