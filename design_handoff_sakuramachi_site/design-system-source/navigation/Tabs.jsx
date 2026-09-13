import React from "react";

export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "underline", style, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const current = value !== undefined ? value : inner;
  const pick = (v) => { if (value === undefined) setInner(v); onChange && onChange(v); };

  const isPill = variant === "pill";
  return (
    <div role="tablist" style={{
      display: "flex", gap: isPill ? 6 : 4, alignItems: "center",
      background: isPill ? "var(--surface-sunken)" : "transparent",
      borderRadius: isPill ? "var(--radius-pill)" : 0,
      padding: isPill ? 5 : 0,
      boxShadow: isPill ? "none" : "inset 0 -1px 0 var(--border-subtle)",
      overflowX: "auto", ...style,
    }} {...rest}>
      {tabs.map((t) => {
        const v = t.value ?? t; const l = t.label ?? t; const on = current === v;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => pick(v)}
            style={{
              border: 0, cursor: "pointer", whiteSpace: "nowrap",
              fontFamily: "var(--font-body)", fontSize: "var(--text-sm)",
              fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
              padding: isPill ? "9px 18px" : "11px 14px",
              borderRadius: isPill ? "var(--radius-pill)" : 0,
              background: isPill ? (on ? "var(--surface-card)" : "transparent") : "transparent",
              color: on ? "var(--text-heading)" : "var(--text-muted)",
              boxShadow: isPill ? (on ? "var(--shadow-xs)" : "none") : (on ? "inset 0 -2px 0 var(--sakura-500)" : "none"),
              transition: "color var(--dur-fast) var(--ease-drift), background var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
            }}>
            {l}{t.count !== undefined ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-muted)", marginLeft: 6 }}>{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
