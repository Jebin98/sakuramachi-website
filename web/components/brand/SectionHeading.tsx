import React from "react";

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  script?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow, title, lede, script, align = "left", as: Tag = "h2", style, ...rest
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <header
      style={{
        display: "flex", flexDirection: "column", gap: "var(--space-3)",
        alignItems: center ? "center" : "flex-start",
        textAlign: center ? "center" : "left",
        maxWidth: center ? 640 : undefined,
        marginInline: center ? "auto" : undefined,
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? (
        <span
          style={{
            fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)",
            fontWeight: "var(--weight-medium)", letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase", color: "var(--sakura-700)",
          }}
        >
          {eyebrow}
        </span>
      ) : null}
      <Tag
        style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(var(--text-2xl), 3.4vw, var(--text-4xl))",
          lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)",
          color: "var(--text-heading)", textWrap: "balance",
        }}
      >
        {title}
      </Tag>
      {script ? (
        <span
          style={{
            display: "inline-block", fontFamily: "var(--font-script)",
            fontSize: "var(--text-2xl)", color: "var(--sakura-600)",
            lineHeight: 1.2, transform: "translate(-0.115em,-0.095em)",
          }}
        >
          {script}
        </span>
      ) : null}
      {lede ? (
        <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: "var(--leading-normal)", color: "var(--text-body)", maxWidth: "var(--prose-max)" }}>
          {lede}
        </p>
      ) : null}
    </header>
  );
}
