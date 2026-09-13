"use client";

import { ArrowLeft, ArrowRight, Pause, Play, type LucideIcon, type LucideProps } from "lucide-react";

/* Lucide 0.544.0 is a FLAGGED SUBSTITUTION — Sakuramachi owns no icon set.
   Chosen for its 2px rounded-cap monoline stroke, nearest to the hand-drawn logo.
   Icons are registered by name one at a time: importing lucide's whole `icons` map
   would ship every glyph in the library for the handful this page actually uses.
   Add a glyph here when a new one is needed. */
const REGISTRY = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  pause: Pause,
  play: Play,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof REGISTRY;

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function Icon({ name, size = 20, strokeWidth = 2, label, ...rest }: IconProps) {
  const Glyph = REGISTRY[name as IconName];
  if (!Glyph) return null;
  return (
    <Glyph
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: "block", flex: "none" }}
      {...rest}
    />
  );
}
