import React from "react";

const TONES = {
  neutral: { background: "var(--kinako-100)", color: "var(--kinako-700)" },
  sakura: { background: "var(--sakura-100)", color: "var(--sakura-700)" },
  success: { background: "var(--state-success-bg)", color: "var(--state-success)" },
  warning: { background: "var(--state-warning-bg)", color: "var(--state-warning)" },
  danger: { background: "var(--state-danger-bg)", color: "var(--state-danger)" },
  ink: { background: "var(--cocoa-900)", color: "var(--cream-50)" },
  hojicha: { background: "var(--hojicha-700)", color: "var(--text-inverse)" },
};

export function Badge({ children, tone = "neutral", size = "md", style, ...rest }) {
  const s = size === "sm"
    ? { fontSize: "var(--text-2xs)", padding: "3px 8px" }
    : { fontSize: "var(--text-xs)", padding: "5px 11px" };
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        borderRadius: "var(--radius-pill)", fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)", lineHeight: 1.2, whiteSpace: "nowrap",
        ...s, ...TONES[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
