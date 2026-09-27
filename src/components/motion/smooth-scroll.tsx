"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Silky-smooth scroll site-wide.
 *
 * Disabled entirely when:
 *   - the user prefers reduced motion, or
 *   - the tab is hidden / backgrounded (browsers throttle rAF to zero, which
 *     would freeze Lenis and — critically — freeze scroll for the user until
 *     they returned to the tab). We destroy Lenis on hide and rebuild on show,
 *     so native browser scroll always works as a fallback.
 */
export function SmoothScroll() {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      lenis?.destroy();
      lenis = null;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, []);

  return null;
}
