"use client";

import React from "react";

export interface TabItem<T extends string = string> {
  value: T;
  label: string;
  count?: number;
}

export interface TabsProps<T extends string = string> {
  tabs: TabItem<T>[];
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  variant?: "underline" | "pill";
  "aria-label"?: string;
  style?: React.CSSProperties;
}

/**
 * A row of filter buttons, not an ARIA tab set.
 *
 * These do not swap panels — they narrow one list that stays on the page. The tab role
 * carries a keyboard contract with it (arrow keys move between tabs, Tab leaves the set,
 * every tab owns a `tabpanel`), and claiming the role without honouring it is worse for a
 * screen-reader visitor than not claiming it. So each control is a plain toggle button
 * reporting its own state with `aria-pressed`, inside a labelled group. Tab and Enter
 * behave the way they do on every other button on the page, for free.
 */
export function Tabs<T extends string = string>({
  tabs, value, defaultValue, onChange, variant = "underline", style, ...rest
}: TabsProps<T>) {
  const [inner, setInner] = React.useState<T | undefined>(defaultValue ?? tabs[0]?.value);
  const [hovered, setHovered] = React.useState<T | null>(null);
  const current = value !== undefined ? value : inner;
  const pick = (v: T) => {
    if (value === undefined) setInner(v);
    onChange?.(v);
  };

  const isPill = variant === "pill";

  return (
    <div
      role="group"
      style={{
        display: "flex",
        gap: isPill ? 6 : 4,
        alignItems: "center",
        background: isPill ? "var(--surface-sunken)" : "transparent",
        borderRadius: isPill ? "var(--radius-pill)" : 0,
        padding: isPill ? 5 : 0,
        boxShadow: isPill ? "none" : "inset 0 -1px 0 var(--border-subtle)",
        overflowX: "auto",
        maxWidth: "100%",
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const on = current === t.value;
        /* Hover only reads on the unselected ones — the selected tab is already lifted. */
        const hot = !on && hovered === t.value;
        return (
          <button
            key={t.value}
            type="button"
            aria-pressed={on}
            onClick={() => pick(t.value)}
            onMouseEnter={() => setHovered(t.value)}
            onMouseLeave={() => setHovered((h) => (h === t.value ? null : h))}
            style={{
              border: 0,
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
              padding: isPill ? "9px 18px 11px" : "11px 14px",
              borderRadius: isPill ? "var(--radius-pill)" : 0,
              background: on
                ? (isPill ? "var(--surface-card)" : "transparent")
                : hot ? "var(--action-ghost-bg-hover)" : "transparent",
              /* Hover darkens the label as well as the ground, so the state gains contrast. */
              color: on || hot ? "var(--text-heading)" : "var(--text-muted)",
              boxShadow: isPill
                ? on ? "var(--shadow-xs)" : "none"
                : on ? "inset 0 -2px 0 var(--sakura-500)" : "none",
              transition:
                "color var(--dur-fast) var(--ease-drift), background var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
            }}
          >
            {t.label}
            {t.count !== undefined ? (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-muted)", marginLeft: 6 }}>
                {t.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
