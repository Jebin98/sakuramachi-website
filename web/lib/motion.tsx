"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

/** `full` is the ship default. `subtle` drops parallax, Ken Burns and magnetic CTAs.
 *  `off` behaves exactly as prefers-reduced-motion. */
export type MotionLevel = "full" | "subtle" | "off";

interface MotionState {
  level: MotionLevel;
  /** True when the OS asks for reduced motion, or when level is "off". */
  reduced: boolean;
  /** True only at level "full" with motion allowed — gates the decorative extras. */
  rich: boolean;
  /** True once GSAP plugins are registered on the client. */
  ready: boolean;
}

const MotionContext = React.createContext<MotionState>({
  level: "full",
  reduced: false,
  rich: false,
  ready: false,
});

export const useMotion = () => React.useContext(MotionContext);

let registered = false;

export function MotionProvider({ children, level = "full" }: { children: React.ReactNode; level?: MotionLevel }) {
  const [reducedPref, setReducedPref] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger, Flip);
      registered = true;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedPref(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    setReady(true);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const reduced = reducedPref || level === "off";
  const value = React.useMemo<MotionState>(
    () => ({ level, reduced, rich: !reduced && level === "full", ready }),
    [level, reduced, ready],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}
