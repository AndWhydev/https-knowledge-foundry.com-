"use client";

import { useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Number counter that animates once when the element scrolls into view.
 * Accepts a `value` and formats via optional `format` fn.
 * Non-numeric prefix/suffix supported ("$", "%", "×", "K+").
 */
export function CountUp({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const sv = useSpring(mv, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    duration: duration * 1000,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    mv.set(value);
    const unsub = sv.on("change", (v) => setDisplay(v.toFixed(decimals)));
    return () => unsub();
  }, [inView, value, reduce, mv, sv, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
