"use client";

import React from "react";
import { gsap } from "gsap";
import { Badge } from "../ds/Badge";
import { Button } from "../ds/Button";
import { HeroVideo } from "./HeroVideo";
import { EXTERNAL_LINK_PROPS, LINKS, SECTIONS } from "@/lib/links";
import { useMagnetic } from "@/lib/useMagnetic";
import { useMotion } from "@/lib/motion";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

const HEADLINE = ["A", "slice", "of", "hanami."];

export function Hero() {
  const rootRef = React.useRef<HTMLElement>(null);
  const magnetRef = React.useRef<HTMLSpanElement>(null);
  const { reduced, ready } = useMotion();
  const jump = useSmoothScroll();

  useMagnetic(magnetRef);

  /* Slow arrival: fade + 8px rise, never a slide-in or a scale-from-0. */
  React.useEffect(() => {
    if (!ready) return;
    const root = rootRef.current;
    if (!root) return;

    const selector =
      "[data-hero-eyebrow],[data-hero-word],[data-hero-lead],[data-hero-cta],[data-hero-card]";
    const targets = root.querySelectorAll<HTMLElement>(selector);

    if (reduced) {
      gsap.set(targets, { clearProps: "transform,opacity" });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from("[data-hero-eyebrow]", { y: 8, opacity: 0, duration: 0.42 })
        .from("[data-hero-word]", { y: 8, opacity: 0, duration: 0.5, stagger: 0.06 }, "-=0.2")
        .from("[data-hero-lead]", { y: 8, opacity: 0, duration: 0.42 }, "-=0.3")
        .from("[data-hero-cta]", { y: 8, opacity: 0, duration: 0.42, stagger: 0.08 }, "-=0.28")
        .from("[data-hero-card]", { y: 8, opacity: 0, duration: 0.9, ease: "power1.out" }, 0.2);

      /* A parked .from() would leave the hero at opacity 0 if the ticker never advanced. */
      const safety = window.setTimeout(() => {
        if (tl.totalTime() > 0) return;
        tl.kill();
        gsap.set(targets, { y: 0, opacity: 1, clearProps: "transform,opacity" });
      }, 1400);

      return () => window.clearTimeout(safety);
    }, root);

    return () => ctx.revert();
  }, [reduced, ready]);

  return (
    <section
      ref={rootRef}
      style={{
        position: "relative",
        /* The one gradient in the system. */
        background: "var(--wash-sakura)",
        padding: "var(--space-16) 0 var(--space-20)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative", maxWidth: "var(--page-max)", margin: "0 auto",
          padding: "0 var(--page-gutter)", display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", gap: "var(--space-5)",
        }}
      >
        <div data-hero-eyebrow style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {/* A pronunciation guide, not English — auto-translate turns it into nonsense. */}
          <span
            translate="no"
            style={{
              fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
              letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--kinako-700)",
            }}
          >
            sah-koo-rah-mah-chi
          </span>
          <span lang="ja" translate="no" style={{ fontSize: "var(--text-xs)", color: "var(--kinako-700)" }}>さくらまち</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(40px,6.2vw,72px)", lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)", textWrap: "pretty", maxWidth: "16ch",
          }}
        >
          {HEADLINE.map((word, i) => (
            <React.Fragment key={word}>
              {i > 0 ? " " : null}
              <span data-hero-word style={{ display: "inline-block" }}>{word}</span>
            </React.Fragment>
          ))}
        </h1>

        <p
          data-hero-lead
          style={{ maxWidth: "46ch", fontSize: "var(--text-lg)", lineHeight: "var(--leading-normal)", color: "var(--text-body)" }}
        >
          Japanese- and Korean-inspired pastry, self-taught and baked at home. The town of cherry
          blossom, by way of Chennai.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "var(--space-3)" }}>
          <span data-hero-cta style={{ display: "inline-flex" }}>
            <span ref={magnetRef} style={{ display: "inline-flex", willChange: "transform" }}>
              <Button tone="primary" size="lg" href={LINKS.dm} {...EXTERNAL_LINK_PROPS}>
                Order on Instagram
              </Button>
            </span>
          </span>
          <span data-hero-cta style={{ display: "inline-flex" }}>
            <Button tone="outline" size="lg" href={`#${SECTIONS.bakes}`} onClick={jump(SECTIONS.bakes)}>
              See everything we bake
            </Button>
          </span>
        </div>

        <div
          data-hero-card
          style={{
            width: "100%", maxWidth: 330, marginTop: "var(--space-4)",
            borderRadius: "var(--radius-lg)", overflow: "hidden",
            boxShadow: "var(--shadow-lg)", background: "var(--surface-card)",
          }}
        >
          <HeroVideo />
          <div style={{ padding: "var(--space-4) var(--space-5) var(--space-5)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
            <span
              style={{
                fontFamily: "var(--font-script)", fontSize: "var(--text-xl)",
                color: "var(--sakura-700)", lineHeight: 1.2, transform: "translate(-0.115em,-0.095em)",
              }}
            >
              broken open, still warm
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-2)" }}>
              <Badge tone="sakura" size="sm">made the morning of</Badge>
              <Badge tone="neutral" size="sm">small batch</Badge>
            </div>
          </div>
        </div>

        <span
          style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
            letterSpacing: "var(--tracking-caps)", textTransform: "uppercase",
            color: "var(--kinako-700)", paddingTop: "var(--space-2)",
          }}
        >
          chennai · weekends · delivery
        </span>
      </div>
    </section>
  );
}
