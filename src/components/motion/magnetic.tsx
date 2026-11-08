"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Magnetic hover — the child element drifts toward the cursor within its bounding box.
 * Enterprise-restrained: small radius, high damping.
 */
export function Magnetic({
  children,
  className,
  strength = 0.18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 240, damping: 22, mass: 0.6 });

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        // Same element either way so SSR and hydration match; reduced motion just never drifts.
        if (reduce) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * strength);
        y.set(relY * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
