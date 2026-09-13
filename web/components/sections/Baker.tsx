"use client";

import React from "react";
import { gsap } from "gsap";
import { HandwrittenNote } from "../brand/HandwrittenNote";
import { SECTIONS } from "@/lib/links";
import { useMotion } from "@/lib/motion";

const PARAGRAPH: React.CSSProperties = {
  maxWidth: "52ch",
  color: "var(--text-inverse-muted)",
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-normal)",
};

export function Baker() {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const photoRef = React.useRef<HTMLDivElement>(null);
  const { rich, ready } = useMotion();

  React.useEffect(() => {
    if (!ready || !rich) return;
    const photo = photoRef.current;
    const panel = panelRef.current;
    if (!photo || !panel) return;

    const tween = gsap.fromTo(
      photo,
      { scale: 1.06 },
      { scale: 1, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true } },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [rich, ready]);

  return (
    <section
      id={SECTIONS.about}
      style={{ maxWidth: "var(--page-max)", margin: "var(--space-24) auto 0", padding: "0 var(--page-gutter)", scrollMarginTop: "calc(var(--header-h, 72px) + 6px)" }}
    >
      <div
        ref={panelRef}
        style={{
          position: "relative", overflow: "hidden", background: "var(--surface-inverse)",
          borderRadius: "var(--radius-2xl)", padding: "clamp(32px,5vw,72px)", color: "var(--text-inverse)",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,4vw,56px)", alignItems: "center" }}>
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <span
              data-reveal
              style={{
                fontSize: "var(--text-2xs)", fontWeight: "var(--weight-medium)",
                letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--sakura-300)",
              }}
            >
              The baker
            </span>
            <h2
              data-reveal
              style={{
                color: "var(--cream-50)", fontSize: "clamp(28px,3.4vw,44px)",
                lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)",
                textWrap: "balance",
              }}
            >
              Self-taught, and particular about it.
            </h2>
            <p data-reveal style={PARAGRAPH}>
              Japanese and Korean pâtisserie teach restraint: few ingredients, exact ratios, nothing
              hidden under decoration. Everything here is made at home, by hand, and learned the slow
              way - by baking it again until it was right.
            </p>
            <p data-reveal style={PARAGRAPH}>
              Sakuramachi means the town of cherry blossom. A slice should feel the way hanami (flower
              viewing) does - calm, a little fleeting, worth stopping for.
            </p>
            <div style={{ paddingTop: "var(--space-2)" }}>
              <HandwrittenNote
                tone="plain"
                size={30}
                lines={["share the love, or a slice of cake"]}
                style={{ color: "var(--sakura-200)" }}
              />
            </div>
          </div>

          <div data-reveal style={{ minWidth: 0, display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 340, borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <div ref={photoRef} style={{ willChange: "transform" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/tiles/baker.jpg"
                  alt="A hand steadying a cut chocolate layer cake on its stand"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
