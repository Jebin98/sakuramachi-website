"use client";

import React from "react";
import { scrollOffset } from "./links";
import { useMotion } from "./motion";

/**
 * Smooth-scrolls to an in-page section, clearing the sticky header.
 *
 * The handler always sits on a real `<a href="#id">`, so the link still works with
 * JavaScript off, on middle-click, and when copied. This only makes it prettier.
 */
export function useSmoothScroll() {
  const { reduced } = useMotion();

  return React.useCallback(
    (id: string) => (event: React.MouseEvent) => {
      /* Let the browser handle modified clicks: new tab, new window, download. */
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }
      const el = document.getElementById(id);
      if (!el) return; /* No target: fall through to the native anchor jump. */
      event.preventDefault();

      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
      const top = id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - scrollOffset();
      window.scrollTo({ top: Math.max(0, top), behavior });

      /* Keep the URL and the browser's back button in step with the jump. */
      if (window.history.replaceState) {
        window.history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`);
      }
    },
    [reduced],
  );
}
