"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Subtle cursor-tracked radial glow, scoped to a section.
 * Use as an absolutely-positioned overlay inside `relative` parent.
 */
export function CursorSpotlight({
  className,
  color = "rgba(239, 103, 4, 0.10)",
  size = 480,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 90, damping: 24, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    const onLeave = () => {
      x.set(-9999);
      y.set(-9999);
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 rounded-full", className)}
      style={{
        left: sx,
        top: sy,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        background: `radial-gradient(circle, ${color}, transparent 60%)`,
        filter: "blur(20px)",
      }}
    />
  );
}
