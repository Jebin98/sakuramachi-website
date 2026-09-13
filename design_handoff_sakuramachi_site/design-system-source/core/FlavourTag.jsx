import React from "react";

const FLAVOURS = {
  ichigo:    { label: "Strawberry", fg: "var(--ichigo-700)", bg: "var(--ichigo-100)", dot: "var(--ichigo-500)" },
  matcha:    { label: "Matcha",     fg: "var(--matcha-700)", bg: "var(--matcha-100)", dot: "var(--matcha-500)" },
  cocoa:     { label: "Chocolate",  fg: "var(--cocoa-700)",  bg: "var(--cocoa-100)",  dot: "var(--cocoa-700)" },
  vanilla:   { label: "Vanilla",    fg: "var(--butter-700)", bg: "var(--butter-100)", dot: "var(--butter-500)" },
  butter:    { label: "Butter",     fg: "var(--butter-700)", bg: "var(--butter-100)", dot: "var(--butter-500)" },
  hojicha:   { label: "Hojicha",    fg: "var(--hojicha-700)", bg: "var(--hojicha-100)", dot: "var(--hojicha-500)" },
  sakura:    { label: "Sakura",     fg: "var(--sakura-700)", bg: "var(--sakura-100)", dot: "var(--sakura-500)" },
};

export function FlavourTag({ flavour = "sakura", children, onPhoto = false, style, ...rest }) {
  const f = FLAVOURS[flavour] || FLAVOURS.sakura;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 11px", borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)",
        lineHeight: 1.3, whiteSpace: "nowrap",
        background: onPhoto ? "rgba(255,255,255,.92)" : f.bg,
        color: f.fg,
        backdropFilter: onPhoto ? "blur(4px)" : undefined,
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 7, height: 7, borderRadius: "var(--radius-circle)", background: f.dot, flex: "none" }} />
      {children || f.label}
    </span>
  );
}
