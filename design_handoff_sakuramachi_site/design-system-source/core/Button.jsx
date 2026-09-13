import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { height: 36, padding: "0 16px", font: "var(--text-sm)", gap: 6, icon: 16 },
  md: { height: 46, padding: "0 24px", font: "var(--text-base)", gap: 8, icon: 20 },
  lg: { height: 56, padding: "0 32px", font: "var(--text-lg)", gap: 10, icon: 20 },
};

const TONES = {
  primary: {
    rest: { background: "var(--action-primary-bg)", color: "var(--action-primary-fg)", boxShadow: "var(--shadow-inset)" },
    hover: { background: "var(--action-primary-bg-hover)" },
    active: { background: "var(--action-primary-bg-active)" },
  },
  secondary: {
    rest: { background: "var(--action-secondary-bg)", color: "var(--action-secondary-fg)", boxShadow: "var(--shadow-inset)" },
    hover: { background: "var(--action-secondary-bg-hover)" },
    active: { background: "var(--hojicha-700)" },
  },
  outline: {
    rest: { background: "transparent", color: "var(--cocoa-900)", boxShadow: "inset 0 0 0 1px var(--border-strong)" },
    hover: { background: "var(--sakura-100)", boxShadow: "inset 0 0 0 1px var(--sakura-300)" },
    active: { background: "var(--sakura-200)" },
  },
  ghost: {
    rest: { background: "transparent", color: "var(--action-ghost-fg)" },
    hover: { background: "var(--action-ghost-bg-hover)" },
    active: { background: "var(--sakura-200)" },
  },
};

export function Button({
  children, tone = "primary", size = "md", iconLeft, iconRight, block = false,
  disabled = false, loading = false, type = "button", style, onClick, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.primary;
  const off = disabled || loading;

  const css = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    border: 0,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    letterSpacing: "0.01em",
    cursor: off ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : loading ? 0.6 : 1,
    transition: "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
    transform: press && !off ? "scale(var(--press-scale))" : "none",
    outline: "none",
    ...t.rest,
    ...(hover && !off ? t.hover : null),
    ...(press && !off ? t.active : null),
    ...(focus ? { boxShadow: "var(--ring-focus)" } : null),
    ...style,
  };

  return (
    <button
      type={type} disabled={off} style={css} onClick={off ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onFocus={(e) => setFocus(e.target.matches(":focus-visible"))}
      onBlur={() => setFocus(false)}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
