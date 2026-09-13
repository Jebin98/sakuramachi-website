"use client";

import React from "react";
import { Logo } from "../brand/Logo";
import { Button } from "../ds/Button";
import { EXTERNAL_LINK_PROPS, LINKS, SECTIONS } from "@/lib/links";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export function Header() {
  const ref = React.useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const jump = useSmoothScroll();

  React.useEffect(() => {
    const apply = () => setScrolled(window.scrollY > 40);
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    return () => window.removeEventListener("scroll", apply);
  }, []);

  /* Publish the real header height. The nav wraps to a second row on narrow viewports,
     so every scroll-margin-top on the page follows this rather than a guessed constant. */
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty("--header-h", `${Math.round(el.getBoundingClientRect().height)}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        /* One of only two places in the brand where blur is allowed. */
        background: scrolled ? "rgba(255,253,248,.88)" : "rgba(255,253,248,0)",
        borderBottom: `1px solid ${scrolled ? "var(--kinako-200)" : "rgba(0,0,0,0)"}`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color var(--dur-base) var(--ease-drift), border-color var(--dur-base) var(--ease-drift)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--page-max)", margin: "0 auto", padding: "12px var(--page-gutter)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
          columnGap: "var(--space-5)", rowGap: "var(--space-2)",
        }}
      >
        <a
          href={`#${SECTIONS.top}`}
          aria-label="sakuramachi, home"
          onClick={jump(SECTIONS.top)}
          style={{ display: "flex", alignItems: "center", gap: 6, flex: "0 0 auto", paddingTop: 6 }}
        >
          <Logo variant="mark" size={72} priority />
          <Logo variant="wordmark" size={100} />
        </a>

        <nav
          aria-label="Primary"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: "var(--space-1)", rowGap: "var(--space-1)", minWidth: 0 }}
        >
          <Button tone="ghost" size="sm" href={`#${SECTIONS.bakes}`} onClick={jump(SECTIONS.bakes)} style={{ padding: "0 12px", paddingBottom: 2 }}>
            The bake list
          </Button>
          <Button tone="ghost" size="sm" href={`#${SECTIONS.about}`} onClick={jump(SECTIONS.about)} style={{ padding: "0 12px", paddingBottom: 2 }}>
            The baker
          </Button>
          <Button tone="primary" size="sm" href={LINKS.dm} {...EXTERNAL_LINK_PROPS} style={{ marginLeft: 8, paddingBottom: 2 }}>
            Order
          </Button>
        </nav>
      </div>
    </header>
  );
}
