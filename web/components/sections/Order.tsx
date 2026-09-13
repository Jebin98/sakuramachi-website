"use client";

import React from "react";
import { Button } from "../ds/Button";
import { EXTERNAL_LINK_PROPS, LINKS, SECTIONS } from "@/lib/links";
import { useMagnetic } from "@/lib/useMagnetic";

export function Order() {
  const magnetRef = React.useRef<HTMLSpanElement>(null);
  useMagnetic(magnetRef);

  return (
    <section
      id={SECTIONS.order}
      style={{
        position: "relative", marginTop: "var(--space-24)", padding: "var(--space-24) 0",
        background: "var(--surface-sunken)", borderTop: "var(--border-hairline)",
        borderBottom: "var(--border-hairline)", scrollMarginTop: "calc(var(--header-h, 72px) + 6px)",
      }}
    >
      <div
        style={{
          position: "relative", maxWidth: "var(--page-max)", margin: "0 auto",
          padding: "0 var(--page-gutter)", display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", gap: "var(--space-5)",
        }}
      >
        <span
          data-reveal
          style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
            letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--kinako-700)",
          }}
        >
          chennai · weekends · delivery
        </span>
        <h2
          data-reveal
          style={{
            fontSize: "clamp(34px,5vw,56px)", lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)", maxWidth: "16ch", textWrap: "balance",
          }}
        >
          Let&rsquo;s get you a slice.
        </h2>
        <p data-reveal style={{ maxWidth: "48ch", fontSize: "var(--text-lg)", color: "var(--text-body)" }}>
          Send us a message with what you want and when you want it. Delivered anywhere in Chennai,
          on weekends.
        </p>
        <div
          data-reveal
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "var(--space-3)", paddingTop: "var(--space-2)" }}
        >
          <span ref={magnetRef} style={{ display: "inline-flex", willChange: "transform" }}>
            <Button tone="primary" size="lg" href={LINKS.dm} {...EXTERNAL_LINK_PROPS}>
              Message us on Instagram
            </Button>
          </span>
          <Button tone="outline" size="lg" href={LINKS.feed} {...EXTERNAL_LINK_PROPS}>
            See the feed first
          </Button>
        </div>
        <span
          data-reveal
          style={{
            fontFamily: "var(--font-script)", fontSize: "var(--text-2xl)",
            color: "var(--sakura-600)", lineHeight: 1.2,
            transform: "translate(-0.115em,-0.095em)", paddingTop: "var(--space-1)",
          }}
        >
          thank you, come again
        </span>
      </div>
    </section>
  );
}
