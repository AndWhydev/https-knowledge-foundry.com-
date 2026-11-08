"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Cards that pin and stack as you scroll (lg and up). Each earlier card
 * eases back and dims slightly as the next one lands on top of it.
 * Below lg, or with reduced motion, it is a plain vertical list.
 */
export function StackCards({ children, top = 112, step = 18 }: { children: ReactNode; top?: number; step?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  // Stacking only happens at lg; below that the cards are a flat list and must stay full size.
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className="flex flex-col gap-4 lg:gap-[14vh] lg:pb-[10vh]">
      {items.map((child, i) => (
        <StackItem key={i} index={i} count={items.length} progress={scrollYProgress} top={top + i * step} still={!!reduce || !desktop}>
          {child}
        </StackItem>
      ))}
    </div>
  );
}

function StackItem({
  children,
  index,
  count,
  progress,
  top,
  still,
}: {
  children: ReactNode;
  index: number;
  count: number;
  progress: MotionValue<number>;
  top: number;
  still: boolean;
}) {
  const start = index / count;
  const target = 1 - (count - 1 - index) * 0.035;
  const scale = useTransform(progress, [start, 1], still ? [1, 1] : [1, target]);
  const filter = useTransform(progress, [start, 1], still ? ["brightness(1)", "brightness(1)"] : ["brightness(1)", `brightness(${1 - (count - 1 - index) * 0.03})`]);
  return (
    <div className="lg:sticky" style={{ top }}>
      <motion.div style={{ scale, filter }} className="origin-top">
        {children}
      </motion.div>
    </div>
  );
}
