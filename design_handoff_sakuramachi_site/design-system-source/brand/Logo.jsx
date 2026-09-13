import React from "react";

/**
 * The mark is real artwork (assets/logo-sakuramachi.jpeg) and is never redrawn.
 * Below 64px use variant="wordmark", which sets the name in --font-script.
 */
/* Caveat sets with a wide left side bearing and a visual centre below the em midpoint,
   so a geometrically centred wordmark reads low and to the right. Every script lockup in
   the system carries this one correction. */
const optical = "translate(-0.115em,-0.095em)";

export function Logo({ variant = "wordmark", size = 140, src = "../../assets/logo-sakuramachi.jpeg", color = "var(--cocoa-900)", style, ...rest }) {
  if (variant === "mark") {
    return (
      <span style={{ display: "inline-block", padding: size * 0.12, ...style }} {...rest}>
        <img src={src} alt="Sakuramachi" style={{ display: "block", width: size, height: "auto" }} />
      </span>
    );
  }
  if (variant === "monogram") {
    return (
      <span aria-label="Sakuramachi" style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: "var(--radius-circle)",
        background: "var(--sakura-200)", fontFamily: "var(--font-script)",
        fontWeight: 700, fontSize: size * 0.58, color, lineHeight: 1, ...style,
      }} {...rest}>
        <span style={{ display: "block", transform: optical }}>s</span>
      </span>
    );
  }
  return (
    <span style={{
      display: "inline-block",
      fontFamily: "var(--font-script)", fontWeight: 600, fontSize: size * 0.34,
      lineHeight: 1, color, letterSpacing: "-.005em", whiteSpace: "nowrap",
      transform: optical, ...style,
    }} {...rest}>sakuramachi</span>
  );
}
