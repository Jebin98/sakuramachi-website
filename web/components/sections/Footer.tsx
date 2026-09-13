"use client";

import { Logo } from "../brand/Logo";
import { EXTERNAL_LINK_PROPS, LINKS, SECTIONS } from "@/lib/links";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export function Footer() {
  const jump = useSmoothScroll();

  return (
    <footer
      style={{
        background: "var(--surface-inverse)",
        color: "var(--text-inverse)",
        /* The last thing on the page, so it owns the home-indicator gap. */
        padding: "var(--space-16) 0 calc(var(--space-10) + env(safe-area-inset-bottom,0px))",
      }}
    >
      <div
        style={{
          maxWidth: "var(--page-max)", margin: "0 auto", padding: "0 var(--page-gutter)",
          display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-8)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Logo variant="wordmark" size={110} color="var(--cream-50)" />
          <span
            style={{
              fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
              letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-inverse-muted)",
            }}
          >
            {/* Only the kana is Japanese; the gloss beside it stays translatable. */}
            <span lang="ja" translate="no">さくらまち</span> · the town of cherry blossom
          </span>
        </div>

        <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <a className="sm-footer-link" href={`#${SECTIONS.bakes}`} onClick={jump(SECTIONS.bakes)}>The bake list</a>
          <a className="sm-footer-link" href={`#${SECTIONS.about}`} onClick={jump(SECTIONS.about)}>The baker</a>
          <a className="sm-footer-link" href={LINKS.feed} {...EXTERNAL_LINK_PROPS}>Instagram</a>
          <a className="sm-footer-link" data-accent href={LINKS.dm} {...EXTERNAL_LINK_PROPS}>Order by DM</a>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", maxWidth: "34ch" }}>
          <span
            style={{
              fontFamily: "var(--font-script)", fontSize: "var(--text-2xl)",
              color: "var(--sakura-200)", lineHeight: 1.2, transform: "translate(-0.115em,-0.095em)",
            }}
          >
            baked at home, delivered by hand
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-inverse-muted)" }}>
            Chennai, India · weekend delivery
          </span>
        </div>
      </div>
    </footer>
  );
}
