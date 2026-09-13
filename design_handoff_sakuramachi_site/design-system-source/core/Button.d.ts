import * as React from "react";

/**
 * The system's primary action. Sakura fill is reserved for the single most
 * important action on a view; everything else is outline or ghost.
 *
 * @startingPoint section="Core" subtitle="Buttons, tags, badges and cards" viewport="700x300"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  /** primary = sakura fill · secondary = ink fill · outline · ghost */
  tone?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Lucide icon name rendered before the label */
  iconLeft?: string;
  /** Lucide icon name rendered after the label */
  iconRight?: string;
  /** Fill the container width — use for mobile order bars only */
  block?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
