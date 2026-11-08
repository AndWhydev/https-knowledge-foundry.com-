"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

/**
 * Page header content drifts up and softens as you scroll past it,
 * so the page feels like it moves in layers. Reduced motion: static.
 */
export function HeaderDrift({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], reduce ? [1, 1] : [1, 0.25]);
  return (
    <div ref={ref}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}
