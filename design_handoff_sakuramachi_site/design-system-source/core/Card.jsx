import React from "react";

export function Card({ children, as: Tag = "div", padded = true, interactive = false, tone = "surface", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    surface: { background: "var(--surface-card)" },
    sunken: { background: "var(--surface-sunken)" },
    accent: { background: "var(--surface-accent)" },
  };
  return (
    <Tag
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
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
    </Tag>
  );
}
