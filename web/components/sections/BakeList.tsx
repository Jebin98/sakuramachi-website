"use client";

import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductCard } from "../brand/ProductCard";
import { SectionHeading } from "../brand/SectionHeading";
import { Tabs } from "../ds/Tabs";
import { FILTER_TABS, PRODUCTS, type Category, type Product } from "@/lib/products";
import { LINKS, SECTIONS } from "@/lib/links";
import { useMotion } from "@/lib/motion";

/** Cards in the first visible row load eagerly; everything below is lazy. */
const ABOVE_FOLD = 4;

/** The filter lives in the URL under this key, so a filtered list can be linked and reloaded. */
const PARAM = "category";

function isCategory(value: string | null): value is Category {
  return Boolean(value) && FILTER_TABS.some((t) => t.value === value);
}

export function BakeList() {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const headingRefs = React.useRef<Record<string, HTMLHeadingElement | null>>({});
  const [filter, setFilter] = React.useState<Category>("all");
  /* Ids whose English name wrapped to more than one line: their katakana is hidden and
     the card sinks to the end of the grid, so the rows stay even. */
  const [wrapped, setWrapped] = React.useState<Set<string>>(() => new Set());
  const { reduced, ready } = useMotion();

  /* Every filter has stock today. This is a guard for the day one of them does not. */
  const matches = PRODUCTS.filter((p) => filter === "all" || p.category === filter).length;

  /* Cards whose English name wrapped sink to the end, so the rows stay even.

     This reorders the ARRAY rather than setting CSS `order` on the tiles. `order` moves a
     card visually but leaves it where it was in the DOM, so the tab order stopped matching
     what was on screen — a keyboard visitor jumped backwards up the grid. Sorting the data
     keeps paint order and focus order identical. Array.sort is stable, so cards that do not
     sink keep their original sequence. */
  const ordered = React.useMemo<Product[]>(() => {
    const sinks = (p: Product) => (p.keepJapanese || !wrapped.has(p.id) ? 0 : 1);
    return [...PRODUCTS].sort((a, b) => sinks(a) - sinks(b));
  }, [wrapped]);

  /* Measure-and-hide, re-run on resize and once the webfonts have actually swapped in. */
  const measure = React.useCallback(() => {
    setWrapped((prev) => {
      const next = new Set<string>();
      for (const product of PRODUCTS) {
        if (product.keepJapanese) continue;
        const h = headingRefs.current[product.id];
        if (!h) continue;
        const cs = getComputedStyle(h);
        const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
        if (h.getBoundingClientRect().height > lineHeight * 1.6) next.add(product.id);
      }
      if (next.size === prev.size && [...next].every((id) => prev.has(id))) return prev;
      return next;
    });
  }, []);

  /* Restore the filter from the query string. This has to be an effect rather than lazy
     initial state: the page is a static export, so the server render knows no query and a
     lazy initialiser reading `window` would not match it at hydration. */
  React.useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get(PARAM);
    if (isCategory(raw)) setFilter(raw);
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    const late = window.setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(late);
    };
  }, [measure]);

  const onFilter = React.useCallback(
    (next: Category) => {
      /* `replaceState`, not `pushState`: flicking through five filters should not bury the
         page the visitor arrived from under five back-button presses. Matches the smooth
         scroll helper, which does the same for section anchors. */
      const url = new URL(window.location.href);
      if (next === "all") url.searchParams.delete(PARAM);
      else url.searchParams.set(PARAM, next);
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);

      const grid = gridRef.current;
      if (!grid || !ready || reduced) {
        setFilter(next);
        return;
      }
      const tiles = Array.from(grid.querySelectorAll<HTMLElement>("[data-cat]"));
      const state = Flip.getState(tiles);
      setFilter(next);
      /* Let React commit the new `display` values, then animate from the captured state. */
      requestAnimationFrame(() => {
        Flip.from(state, {
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.02,
          onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }),
          onLeave: (els) => gsap.to(els, { opacity: 0, duration: 0.16, ease: "power1.out" }),
          onComplete: () => ScrollTrigger.refresh(),
        });
      });
    },
    [ready, reduced],
  );

  return (
    <section
      id={SECTIONS.bakes}
      style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "var(--space-24) var(--page-gutter) 0", scrollMarginTop: "calc(var(--header-h, 72px) + 6px)" }}
    >
      <div data-reveal style={{ marginBottom: "var(--space-8)" }}>
        <SectionHeading
          eyebrow="The bake list"
          title="Everything we bake."
          lede="Whole cakes, cupcakes, cookies and small bakes. Ask for anything that is not on the list."
        />
      </div>

      <div data-reveal style={{ marginBottom: "var(--space-6)", display: "flex" }}>
        <Tabs<Category>
          variant="pill"
          tabs={FILTER_TABS}
          value={filter}
          onChange={onFilter}
          aria-label="Filter the bake list"
        />
      </div>

      <div
        id="sm-grid"
        ref={gridRef}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "var(--space-5)" }}
      >
        {ordered.map((product, i) => {
          const visible = filter === "all" || product.category === filter;
          const showJa = product.keepJapanese || !wrapped.has(product.id);
          return (
            <div
              key={product.id}
              data-cat={product.category}
              data-reveal
              style={{ display: visible ? "grid" : "none" }}
            >
              <ProductCard
                name={product.name}
                blurb={product.nameJa}
                showBlurb={showJa}
                flavour={product.flavour}
                image={product.image}
                imageAlt={product.imageAlt}
                href={LINKS.dm}
                priority={i < ABOVE_FOLD}
                nameRef={(el) => { headingRefs.current[product.id] = el; }}
              />
            </div>
          );
        })}
      </div>

      {/* Deliberately outside [data-reveal]: useReveal only hides what was on the page at
          mount, so an element that appears on a later filter change would never be shown. */}
      {matches === 0 ? (
        <p style={{ maxWidth: "46ch", fontSize: "var(--text-lg)", color: "var(--text-muted)" }}>
          Nothing in this group yet. Ask us for it anyway.
        </p>
      ) : null}
    </section>
  );
}
