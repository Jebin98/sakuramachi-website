import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = { sm: { box: 32, icon: 16 }, md: { box: 40, icon: 20 }, lg: { box: 48, icon: 24 } };

export function IconButton({ icon, label, tone = "ghost", size = "md", disabled = false, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;

  const tones = {
    ghost: { background: hover && !disabled ? "var(--sakura-100)" : "transparent", color: "var(--cocoa-900)" },
    solid: { background: hover && !disabled ? "var(--sakura-600)" : "var(--sakura-500)", color: "#fff" },
    surface: { background: "var(--surface-card)", color: "var(--cocoa-900)", boxShadow: hover && !disabled ? "var(--shadow-md)" : "var(--shadow-sm)" },
  };

  return (
    <button
      type="button" aria-label={label} disabled={disabled} onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onFocus={(e) => setFocus(e.target.matches(":focus-visible"))} onBlur={() => setFocus(false)}
      style={{
        width: s.box, height: s.box, display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: 0, borderRadius: "var(--radius-circle)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, outline: "none", padding: 0,
        transition: "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
        transform: press && !disabled ? "scale(var(--press-scale))" : "none",
        ...tones[tone],
        ...(focus ? { boxShadow: "var(--ring-focus)" } : null),
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} />
    </button>
  );
}
