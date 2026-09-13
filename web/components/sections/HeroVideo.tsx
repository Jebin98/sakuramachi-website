"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconButton } from "../ds/IconButton";
import { HERO_CLIPS } from "@/lib/hero-clips";
import { useMotion } from "@/lib/motion";

/* Both clips are pre-trimmed to the same length, so the carousel never has to wait for
   metadata to work out where to cut. This is the fallback if a file is ever swapped. */
const NOMINAL_DURATION = 6.05;

/**
 * Two-clip hero carousel with segmented progress and a slow Ken Burns push-in.
 *
 * Loading, in priority order — the point is that a visitor never sees an empty frame:
 *  1. `<link rel="preload">` in the document head starts both fetches during HTML parse,
 *     before React has hydrated (see app/layout.tsx).
 *  2. Each <video> carries its own `poster`, cut from frame 0 of that very clip, so the
 *     first painted pixel is already the right image.
 *  3. Both videos are server-rendered with `preload="auto"`, so the browser keeps buffering
 *     whether or not the JS bundle has arrived.
 *  4. The first clip has `autoPlay`; a rejected play() promise is retried on the first user
 *     gesture and otherwise swallowed — an autoplay block must never surface as an error.
 *  5. If a clip errors outright, its poster stays on screen and the carousel skips it.
 *
 * Motion is under the visitor's control, not the page's:
 *  - A pause/play button sits on the frame at all times (WCAG 2.2.2 — the loop runs well
 *    past five seconds alongside other content).
 *  - `prefers-reduced-motion` starts the carousel paused on the poster. Nothing moves until
 *    the visitor presses play.
 *  - Playback, the progress loop and Ken Burns all stop when the card scrolls out of view.
 */
export function HeroVideo() {
  const { rich, reduced, ready } = useMotion();
  const frameRef = React.useRef<HTMLDivElement>(null);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const fillRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const indexRef = React.useRef(0);
  const kenBurnsRef = React.useRef<gsap.core.Tween | null>(null);

  const [index, setIndex] = React.useState(0);
  const [broken, setBroken] = React.useState<boolean[]>(() => HERO_CLIPS.map(() => false));
  const [paused, setPaused] = React.useState(false);
  const [inView, setInView] = React.useState(true);

  /* One switch for everything that moves. Both halves matter: `paused` is the visitor's
     choice, `inView` stops a hero nobody is looking at from burning a frame budget. */
  const playing = !paused && inView;
  const playingRef = React.useRef(playing);
  playingRef.current = playing;

  /* Both clips run to the shorter one's duration; the longer is cut off at the end. */
  const limit = React.useCallback(() => {
    const durations = videoRefs.current
      .map((v) => (v && Number.isFinite(v.duration) ? v.duration : 0))
      .filter(Boolean);
    if (durations.length !== HERO_CLIPS.length) return NOMINAL_DURATION;
    return Math.min(...durations);
  }, []);

  const play = React.useCallback((i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => { /* autoplay blocked; poster stands in */ });
  }, []);

  const goTo = React.useCallback(
    (next: number) => {
      const from = indexRef.current;
      const prev = videoRefs.current[from];
      if (prev && from !== next) {
        prev.pause();
        prev.currentTime = 0;
      }
      indexRef.current = next;
      setIndex(next);

      fillRefs.current.forEach((f, k) => {
        if (!f || k === next) return;
        f.style.width = k < next ? "100%" : "0%";
      });

      const v = videoRefs.current[next];
      if (v) {
        v.currentTime = 0;
        if (playingRef.current) play(next);
      }
    },
    [play],
  );

  /* Reduced motion: park on the poster. The visitor opts in with the play button. */
  React.useEffect(() => {
    if (!ready || !reduced) return;
    setPaused(true);
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      v.currentTime = 0;
    });
  }, [ready, reduced]);

  /* Stop everything once the card leaves the viewport, and pick it up on the way back. */
  React.useEffect(() => {
    const el = frameRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "120px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* The single place `playing` is applied to the DOM and to the Ken Burns tween. */
  React.useEffect(() => {
    const v = videoRefs.current[indexRef.current];
    if (playing) {
      play(indexRef.current);
      kenBurnsRef.current?.resume();
    } else {
      v?.pause();
      kenBurnsRef.current?.pause();
    }
  }, [playing, index, play]);

  /* Progress fills + the hand-off to the next clip, one rAF loop for both. It is not
     started at all while paused or offscreen. */
  React.useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const end = limit();
      const i = indexRef.current;
      fillRefs.current.forEach((f, n) => {
        if (!f) return;
        const v = videoRefs.current[n];
        const p = n < i ? 1 : n > i ? 0 : end ? Math.min(1, (v?.currentTime ?? 0) / end) : 0;
        f.style.width = `${(p * 100).toFixed(1)}%`;
      });
      const cur = videoRefs.current[i];
      if (end && cur && cur.currentTime >= end - 0.05) {
        goTo((i + 1) % HERO_CLIPS.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, goTo, limit]);

  /* Autoplay is blocked in some contexts until the visitor interacts. Retry once, quietly. */
  React.useEffect(() => {
    const retry = () => { if (playingRef.current) play(indexRef.current); };
    const opts = { once: true, passive: true } as const;
    window.addEventListener("pointerdown", retry, opts);
    window.addEventListener("keydown", retry, opts);
    /* A backgrounded tab pauses playback; pick it up again when the visitor returns. */
    const onVisible = () => {
      if (document.visibilityState === "visible" && playingRef.current) play(indexRef.current);
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("pointerdown", retry);
      window.removeEventListener("keydown", retry);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [play]);

  /* Ken Burns: the active clip scales 1 -> 1.09 across its length. Rich motion only. */
  React.useEffect(() => {
    if (!ready) return;
    const v = videoRefs.current[index];
    const others = videoRefs.current.filter((x): x is HTMLVideoElement => Boolean(x) && x !== v);
    kenBurnsRef.current?.kill();
    kenBurnsRef.current = null;

    if (!v || !rich) {
      gsap.set(videoRefs.current.filter(Boolean) as HTMLVideoElement[], { scale: 1 });
      return;
    }
    gsap.set(others, { scale: 1 });
    const tween = gsap.fromTo(
      v,
      { scale: 1 },
      { scale: 1.09, duration: limit() || NOMINAL_DURATION, ease: "none" },
    );
    kenBurnsRef.current = tween;
    if (!playingRef.current) tween.pause();
    return () => { tween.kill(); };
  }, [index, rich, ready, limit]);

  /* Parallax on the media stack as the card travels through the viewport. */
  React.useEffect(() => {
    if (!ready || !rich) return;
    const media = frameRef.current?.querySelector("[data-hero-media]");
    if (!media) return;
    const tween = gsap.fromTo(
      media,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: frameRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [rich, ready]);

  /* Once a clip is decodable the card's real height is settled — re-measure scroll positions. */
  const onLoadedData = React.useCallback(() => {
    if (ScrollTrigger.getAll().length) ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div
        ref={frameRef}
        data-hero-frame
        style={{ position: "relative", overflow: "hidden", aspectRatio: "9 / 13.6", background: "var(--cocoa-900)" }}
      >
        <div data-hero-media style={{ position: "absolute", inset: 0, willChange: "transform" }}>
          {HERO_CLIPS.map((clip, i) => (
            <div
              key={clip.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === index ? 1 : 0,
                transition: reduced ? "none" : "opacity 620ms var(--ease-drift)",
              }}
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                poster={clip.poster}
                /* Only the first clip autoplays; the second is started by the carousel. */
                autoPlay={i === 0}
                muted
                playsInline
                preload="auto"
                aria-label={clip.label}
                onLoadedData={i === 0 ? onLoadedData : undefined}
                onEnded={() => { if (indexRef.current === i) goTo((i + 1) % HERO_CLIPS.length); }}
                onError={() => setBroken((b) => b.map((v, n) => (n === i ? true : v)))}
                style={{
                  position: "absolute",
                  top: "-6%",
                  left: 0,
                  width: "100%",
                  /* The overscan gives Ken Burns room to move without revealing an edge. */
                  height: "112%",
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                  willChange: "transform",
                }}
              >
                {broken[i] ? null : <source src={clip.src} type="video/mp4" />}
              </video>
            </div>
          ))}
        </div>

        {/* Always on the frame, never hover-revealed: a control the visitor cannot find is
            not a control. Sits above the media stack and below nothing. */}
        <div style={{ position: "absolute", right: 12, bottom: 12, zIndex: 1 }}>
          <IconButton
            tone="solid"
            size="sm"
            icon={paused ? "play" : "pause"}
            label={paused ? "Play the hero video" : "Pause the hero video"}
            onClick={() => setPaused((p) => !p)}
          />
        </div>
      </div>

      <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", gap: 10, padding: "14px 0 0" }}>
        {HERO_CLIPS.map((clip) => (
          <span
            key={clip.id}
            style={{
              display: "block", width: 56, height: 5, borderRadius: "var(--radius-pill)",
              background: "var(--sakura-200)", overflow: "hidden",
            }}
          >
            <span
              ref={(el) => { fillRefs.current[HERO_CLIPS.indexOf(clip)] = el; }}
              style={{ display: "block", height: "100%", width: "0%", background: "var(--sakura-500)", borderRadius: "var(--radius-pill)" }}
            />
          </span>
        ))}
      </div>
    </>
  );
}
