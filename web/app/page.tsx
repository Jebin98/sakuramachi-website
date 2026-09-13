"use client";

import React from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { BakeList } from "@/components/sections/BakeList";
import { Baker } from "@/components/sections/Baker";
import { Feed } from "@/components/sections/Feed";
import { Order } from "@/components/sections/Order";
import { Footer } from "@/components/sections/Footer";
import { MotionProvider } from "@/lib/motion";
import { useReveal } from "@/lib/useReveal";
import { useLazyImages } from "@/lib/useLazyImages";
import { SECTIONS } from "@/lib/links";

function Page() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  useLazyImages(rootRef);

  return (
    <div id={SECTIONS.top} ref={rootRef} style={{ position: "relative" }}>
      {/* First element in the tab order, so a keyboard visitor can step over the nav. */}
      <a className="sm-skip-link" href={`#${SECTIONS.main}`}>
        Skip to main content
      </a>
      <Header />
      <main id={SECTIONS.main} tabIndex={-1} style={{ outline: "none" }}>
        <Hero />
        <Ticker />
        <BakeList />
        <Baker />
        <Feed />
        <Order />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <MotionProvider level="full">
      <Page />
    </MotionProvider>
  );
}
