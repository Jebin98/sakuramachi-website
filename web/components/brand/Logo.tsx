import React from "react";

/* The mark is real artwork (media/logo-sakuramachi.jpg) and is never redrawn.
   Below 64px use variant="wordmark", which sets the name in --font-script. */

/* Caveat sets with a wide left side bearing and a visual centre below the em midpoint,
   so a geometrically centred wordmark reads low and to the right. Every script lockup in
   the system carries this one correction. */
const OPTICAL = "translate(-0.115em,-0.095em)";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "mark" | "wordmark" | "monogram";
  size?: number;
  src?: string;
  color?: string;
  /** Passed to the mark's <img>. Decorative when the wordmark sits beside it. */
  alt?: string;
  priority?: boolean;
}

export function Logo({
  variant = "wordmark", size = 140, src = "/media/logo-sakuramachi.jpg",
  color = "var(--cocoa-900)", alt = "", priority = false, style, ...rest
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span style={{ display: "inline-block", padding: size * 0.12, ...style }} {...rest}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          /* Cut to a circle, the same treatment the favicon gets. The artwork is 4:3, so a
             square box plus `cover` crops the blank margins off the sides rather than
             squashing the cake. `size` is the diameter — unchanged from the caller. */
          style={{ display: "block", width: size, height: size, objectFit: "cover", borderRadius: "var(--radius-circle)" }}
        />
      </span>
    );
  }

  if (variant === "monogram") {
    return (
      <span
        aria-label="Sakuramachi"
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: size, height: size, borderRadius: "var(--radius-circle)",
          background: "var(--sakura-200)", fontFamily: "var(--font-script)",
          fontWeight: 700, fontSize: size * 0.58, color, lineHeight: 1, ...style,
        }}
        {...rest}
      >
        <span style={{ display: "block", transform: OPTICAL }}>s</span>
      </span>
    );
  }

  return (
    <span
      /* A brand name, not a word. Chrome's auto-translate otherwise renders the wordmark
         into whatever it thinks "sakuramachi" means. */
      translate="no"
      style={{
        display: "inline-block",
        fontFamily: "var(--font-script)",
        fontWeight: 600,
        fontSize: size * 0.34,
        lineHeight: 1,
        color,
        letterSpacing: "-.005em",
        whiteSpace: "nowrap",
        transform: OPTICAL,
        ...style,
      }}
      {...rest}
    >
      sakuramachi
    </span>
  );
}
