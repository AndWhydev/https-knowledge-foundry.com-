"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  items,
  duration = 40,
  className,
}: {
  items: ReactNode[];
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];
  if (reduce) {
    return (
      <div className={cn("flex flex-wrap gap-x-12 gap-y-4 justify-center items-center", className)}>
        {items.map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <motion.div
        className="flex gap-14 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
