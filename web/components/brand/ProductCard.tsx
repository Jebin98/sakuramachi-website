"use client";

import React from "react";
import { Card } from "../ds/Card";
import { FlavourTag, type FlavourKey } from "../ds/FlavourTag";
import { Badge, type BadgeTone } from "../ds/Badge";

export interface ProductCardProps {
  name: string;
  /** The Japanese name. Hidden by the grid when the English name wraps. */
  blurb?: string;
  showBlurb?: boolean;
  image?: string;
  imageAlt?: string;
  flavour?: FlavourKey;
  status?: { label: string; tone?: BadgeTone };
  ratio?: string;
  href?: string;
  /** Priority images skip lazy loading — used for the first row, which is above the fold. */
  priority?: boolean;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  nameRef?: React.Ref<HTMLHeadingElement>;
}

/* No prices anywhere — none were supplied by the founder, and inventing them is out of bounds. */
export function ProductCard({
  name, blurb, showBlurb = true, image, imageAlt = "", flavour, status,
  ratio = "4 / 5", href, priority = false, footer, style, nameRef,
}: ProductCardProps) {
  return (
    <Card
      as={href ? "a" : "article"}
      href={href}
      data-product-card
      padded={false}
      interactive={Boolean(href)}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      style={{ display: "flex", flexDirection: "column", height: "100%", color: "inherit", ...style }}
    >
      <div style={{ position: "relative", aspectRatio: ratio, background: "var(--cream-200)" }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={imageAlt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : null}
        {flavour ? (
          <span style={{ position: "absolute", top: 12, left: 12 }}>
            <FlavourTag flavour={flavour} onPhoto />
          </span>
        ) : null}
        {status ? (
          <span style={{ position: "absolute", top: 12, right: 12 }}>
            <Badge tone={status.tone ?? "ink"} size="sm">{status.label}</Badge>
          </span>
        ) : null}
      </div>
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)", flex: 1 }}>
        <h3
          ref={nameRef}
          style={{
            margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)",
            lineHeight: 1.2, letterSpacing: "var(--tracking-display)", color: "var(--text-heading)",
            textWrap: "balance",
          }}
        >
          {name}
        </h3>
        {/* `blurb` is always the katakana name (products.ts -> nameJa), so a screen
            reader needs the Japanese voice for it. */}
        {blurb ? (
          <p
            lang="ja"
            style={{
              margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)",
              color: "var(--text-muted)", display: showBlurb ? "block" : "none",
            }}
          >
            {blurb}
          </p>
        ) : null}
        {footer ? <div style={{ marginTop: "auto", paddingTop: "var(--space-3)" }}>{footer}</div> : null}
      </div>
    </Card>
  );
}
