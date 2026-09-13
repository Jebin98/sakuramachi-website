"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "a" | "section";
  padded?: boolean;
  interactive?: boolean;
  tone?: "surface" | "sunken" | "accent";
  /** Rendering as an <a> also accepts the anchor attributes below. */
  href?: string;
  target?: string;
  rel?: string;
}

export function Card({
  children, as: Tag = "div", padded = true, interactive = false,
  tone = "surface", style, href, ...rest
}: CardProps) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    surface: { background: "var(--surface-card)" },
    sunken: { background: "var(--surface-sunken)" },
    accent: { background: "var(--surface-accent)" },
  } as const;

  const Component = Tag as React.ElementType;

  return (
    <Component
      href={href}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        display: "block",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(var(--hover-lift))" : "none",
        transition: "transform var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
        padding: padded ? "var(--space-5)" : 0,
        cursor: interactive ? "pointer" : undefined,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
