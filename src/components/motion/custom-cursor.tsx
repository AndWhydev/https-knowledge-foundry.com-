"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Award-tier custom cursor.
 *
 * Two layers:
 *   1. A hard 6px orange dot pinned exactly to the cursor position.
 *   2. A soft 34px halo that trails behind with a springy delay and expands
 *      to 60px when hovering an interactive element (button, link, [role=button]).
 *
 * Hidden entirely on touch-only devices and for prefers-reduced-motion. The
 * native cursor is dimmed but not hidden (so the OS pointer still shows over
 * form fields, video controls etc). If we ever want to fully hide the OS
 * pointer, wrap this in `body { cursor: none }` and remove the fallback.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState<"default" | "interactive" | "text">("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const hx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.4 });
  const hy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    // Only enable on precise pointer (mouse), not coarse (touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [role=button], input, textarea, select, label, [data-cursor='interactive']")) {
        setHovering("interactive");
      } else if (t.closest("h1, h2, h3, p")) {
        setHovering("text");
      } else {
        setHovering("default");
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Hard dot — no lag */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering === "interactive" ? 4 : 5,
          height: hovering === "interactive" ? 4 : 5,
          backgroundColor: "#ffffff",
        }}
        transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
      />
      {/* Soft halo — springy trail */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99] rounded-full border"
        style={{
          x: hx,
          y: hy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering === "interactive" ? 56 : hovering === "text" ? 24 : 34,
          height: hovering === "interactive" ? 56 : hovering === "text" ? 24 : 34,
          borderColor: hovering === "interactive" ? "rgba(239,103,4,0.9)" : "rgba(239,103,4,0.4)",
          backgroundColor: hovering === "interactive" ? "rgba(239,103,4,0.10)" : "rgba(239,103,4,0)",
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      />
    </>
  );
}
