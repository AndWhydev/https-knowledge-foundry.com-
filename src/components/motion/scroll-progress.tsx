"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Ultra-thin scroll-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-[color:var(--color-forge)] via-[color:var(--color-forge-hot)] to-[color:var(--color-forge)] pointer-events-none"
      style={{ scaleX: width }}
    />
  );
}
