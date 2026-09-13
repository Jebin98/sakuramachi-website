import React from "react";

/* Lucide 0.544.0 is a FLAGGED SUBSTITUTION — Sakuramachi owns no icon set.
   Chosen for its 2px rounded-cap monoline stroke, nearest to the hand-drawn logo.
   Host page must load: https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js */

const pascal = (n) => String(n).replace(/(^\w|-\w)/g, (s) => s.replace("-", "").toUpperCase());

export function Icon({ name, size = 20, strokeWidth = 2, color = "currentColor", label, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const lib = typeof window !== "undefined" ? window.lucide : null;
    const node = lib && lib.icons ? lib.icons[pascal(name)] : null;
    host.innerHTML = "";
    if (!node || !lib.createElement) return;
    const svg = lib.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("stroke", color);
    svg.style.display = "block";
    host.appendChild(svg);
  }, [name, size, strokeWidth, color]);

  return (
    <span
      ref={ref}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: "inline-flex", width: size, height: size, flex: "none", color, ...style }}
      {...rest}
    />
  );
}
