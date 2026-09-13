"use client";

import React from "react";
import { gsap } from "gsap";
import { useMotion } from "./motion";

/**
 * The primary CTAs lean toward the cursor when it comes near. Rich motion only,
 * and only on hover-capable pointers — on touch there is no cursor to follow.
 */
export function useMagnetic(ref: React.RefObject<HTMLElement | null>) {
  const { rich, ready } = useMotion();

  React.useEffect(() => {
    if (!ready || !rich) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.abs(dx) < r.width / 2 + 70 && Math.abs(dy) < r.height / 2 + 50;
      x(near ? gsap.utils.clamp(-14, 14, dx * 0.26) : 0);
      y(near ? gsap.utils.clamp(-9, 9, dy * 0.26) : 0);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [ref, rich, ready]);
}
