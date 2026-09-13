import React from "react";

export interface HandwrittenNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: string[];
  to?: string;
  tone?: "sakura" | "cream" | "plain";
  /** Script is decoration: never below 20px. */
  size?: number;
}

export function HandwrittenNote({
  lines = [], to, tone = "sakura", size = 26, style, ...rest
}: HandwrittenNoteProps) {
  const all = to ? [`${to}, welcome to Sakuramachi`, ...lines] : lines;
  const tones = {
    sakura: { background: "var(--sakura-200)", color: "var(--cocoa-900)" },
    cream: { background: "var(--cream-200)", color: "var(--cocoa-900)" },
    plain: { background: "transparent", color: "var(--cocoa-900)" },
  } as const;

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding: tone === "plain" ? 0 : "var(--space-6)",
        fontFamily: "var(--font-script)",
        fontSize: Math.max(20, size),
        lineHeight: 1.4,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {/* The optical offset belongs to the GLYPHS, not to the panel. Keeping it on an inner
          wrapper stops it dragging the background and padding out of the parent's column. */}
      <div style={{ transform: "translate(-0.115em,-0.095em)" }}>
        {all.slice(0, 3).map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}
