import React from "react";

export function PriceTag({ amount, currency = "$", unit, was, size = "md", style, ...rest }) {
  const sizes = { sm: "var(--text-sm)", md: "var(--text-lg)", lg: "var(--text-2xl)" };
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 7, ...style }} {...rest}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: sizes[size], fontWeight: 400, color: "var(--text-price)", letterSpacing: ".01em" }}>
        {currency}{amount}
      </span>
      {was ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", textDecoration: "line-through" }}>{currency}{was}</span> : null}
      {unit ? <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{unit}</span> : null}
    </span>
  );
}
