"use client";

import React from "react";
import { Icon } from "./Icon";

export type ButtonTone = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const SIZES: Record<ButtonSize, { height: number; padding: string; font: string; gap: number; icon: number; nudge: number }> = {
  /* The nudge is a padding-bottom correction: Zen Maru Gothic's glyphs sit high in
     the line box, so a geometrically centred pill reads low. Done once, here. */
  sm: { height: 36, padding: "0 16px", font: "var(--text-sm)", gap: 6, icon: 16, nudge: 2 },
  md: { height: 46, padding: "0 24px", font: "var(--text-base)", gap: 8, icon: 20, nudge: 2 },
  lg: { height: 56, padding: "0 32px", font: "var(--text-lg)", gap: 10, icon: 20, nudge: 3 },
};

type ToneStyles = { rest: React.CSSProperties; hover: React.CSSProperties; active: React.CSSProperties };

const TONES: Record<ButtonTone, ToneStyles> = {
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

interface CommonProps {
  children?: React.ReactNode;
  tone?: ButtonTone;
  size?: ButtonSize;
  iconLeft?: string;
  iconRight?: string;
  block?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Renders an <a> when given `href` and a <button> otherwise. Every CTA on this page is a
 * real link, so it can be middle-clicked, copied and crawled — not a JS-only click handler.
 */
export function Button(props: ButtonProps) {
  const {
    children, tone = "primary", size = "md", iconLeft, iconRight,
    block = false, loading = false, style, ...rest
  } = props;

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const isLink = typeof props.href === "string";
  const disabled = !isLink && Boolean((props as ButtonAsButton).disabled);
  const off = disabled || loading;
  const s = SIZES[size];
  const t = TONES[tone];

  const css: React.CSSProperties = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    paddingBottom: s.nudge,
    border: 0,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    letterSpacing: "0.01em",
    textDecoration: "none",
    cursor: off ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : loading ? 0.6 : 1,
    transition:
      "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
    transform: press && !off ? "scale(var(--press-scale))" : "none",
    ...t.rest,
    ...(hover && !off ? t.hover : null),
    ...(press && !off ? t.active : null),
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
  };

  const inner = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </>
  );

  if (isLink) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} style={css} {...handlers} {...anchorRest}>
        {inner}
      </a>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonRest.type ?? "button"} {...buttonRest} disabled={off} style={css} {...handlers}>
      {inner}
    </button>
  );
}
