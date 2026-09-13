"use client";

import React from "react";
import { Icon } from "./Icon";

const SIZES = {
  sm: { box: 32, icon: 16 },
  md: { box: 44, icon: 20 },
  lg: { box: 48, icon: 24 },
} as const;

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  icon: string;
  /** Required — it is the accessible name. */
  label: string;
  tone?: "ghost" | "solid" | "surface";
  size?: keyof typeof SIZES;
}

export function IconButton({ icon, label, tone = "ghost", size = "md", disabled = false, style, ...rest }: IconButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size];

  const tones: Record<string, React.CSSProperties> = {
    ghost: { background: hover && !disabled ? "var(--sakura-100)" : "transparent", color: "var(--cocoa-900)" },
    /* Cocoa glyph, not white. White on sakura-500 is 2.9:1 — under the 3:1 floor a non-text
       control needs; cocoa-900 on the same pink is 5.7:1. Hover goes LIGHTER, to sakura-400
       at 7.6:1, so the hover state gains contrast instead of losing it. */
    solid: { background: hover && !disabled ? "var(--sakura-400)" : "var(--sakura-500)", color: "var(--cocoa-900)" },
    surface: {
      background: "var(--surface-card)",
      color: "var(--cocoa-900)",
      boxShadow: hover && !disabled ? "var(--shadow-md)" : "var(--shadow-sm)",
    },
  };

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        width: s.box,
        height: s.box,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: 0,
        borderRadius: "var(--radius-circle)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        padding: 0,
        transition:
          "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
        transform: press && !disabled ? "scale(var(--press-scale))" : "none",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} />
    </button>
  );
}
