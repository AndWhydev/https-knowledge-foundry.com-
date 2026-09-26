"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Cursor-tracked animated gradient blob, Stripe/Vercel-style.
 * Not a real WebGL shader — CSS conic + radial + noise + slow drift.
 */
export function ShaderGradient({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const xPct = useMotionValue(50);
  const yPct = useMotionValue(40);
  const sx = useSpring(xPct, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(yPct, { stiffness: 60, damping: 22, mass: 0.6 });

  const leftStr = useTransform(sx, (v) => `${v}%`);
  const topStr = useTransform(sy, (v) => `${v}%`);

  useEffect(() => {
    if (reduce) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      xPct.set(((e.clientX - rect.left) / rect.width) * 100);
      yPct.set(((e.clientY - rect.top) / rect.height) * 100);
    };
    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, [reduce, xPct, yPct]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden
    >
      {/* Cursor-tracked warm radial */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: leftStr,
          top: topStr,
          width: 900,
          height: 900,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle at center, rgba(239,103,4,0.20), rgba(239,103,4,0.06) 30%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />
      {/* Conic slow-rotating background */}
      <motion.div
        className="absolute inset-[-30%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(239,103,4,0.10), rgba(239,103,4,0) 20%, rgba(18,20,26,0.05) 40%, rgba(239,103,4,0.08) 60%, rgba(239,103,4,0) 80%, rgba(239,103,4,0.10))",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      />
      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' seed='2'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.7'/></svg>\")",
          backgroundSize: "140px",
        }}
      />
    </div>
  );
}
