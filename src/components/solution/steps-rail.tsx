"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { RevealStagger, RevealItem } from "@/components/motion/reveal";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { cn } from "@/lib/cn";
import type { Step } from "./process-steps";

/**
 * Process steps with a scroll-drawn rail. An orange line fills across the top
 * of the grid as the section scrolls through the viewport, and each step
 * lights up as the line reaches it. Reduced motion shows every step lit.
 */
export function StepsRail({ steps, tone }: { steps: Step[]; tone: "ink" | "canvas" }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const [lit, setLit] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setLit(Math.min(steps.length, Math.floor(p * steps.length + 0.15)));
  });

  const isLit = (i: number) => reduce || i < lit;

  return (
    <div ref={ref} className="relative">
      {/* Rail */}
      <div className={cn("absolute left-0 right-0 -top-4 h-[2px] rounded-full overflow-hidden", tone === "ink" ? "bg-white/10" : "bg-[color:var(--color-hairline)]")} aria-hidden>
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[color:var(--color-forge)] to-[color:var(--color-forge-hot)]"
          style={{ scaleX: reduce ? 1 : scrollYProgress }}
        />
      </div>

      <RevealStagger
        className={cn(
          "grid gap-px rounded-[var(--radius-lg)] overflow-hidden",
          steps.length === 3 && "md:grid-cols-3",
          steps.length === 4 && "md:grid-cols-2 lg:grid-cols-4",
          steps.length === 5 && "md:grid-cols-3 lg:grid-cols-5",
          tone === "ink" ? "bg-white/10" : "bg-[color:var(--color-hairline)]",
        )}
      >
        {steps.map((step, i) => (
          <RevealItem
            key={step.n}
            className={cn(
              "group p-8 relative overflow-hidden transition-colors duration-500",
              tone === "ink" ? "bg-[color:var(--color-ink)] hover:bg-[color:var(--color-ink-soft)]/40" : "bg-white hover:bg-[color:var(--color-canvas-warm)]",
            )}
          >
            {/* Lit wash, arrives with the rail */}
            <div
              className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-700",
                isLit(i) ? "opacity-100" : "opacity-0",
                tone === "ink"
                  ? "bg-[radial-gradient(circle_at_top_left,rgba(239,103,4,0.12),transparent_60%)]"
                  : "bg-[radial-gradient(circle_at_top_left,rgba(239,103,4,0.07),transparent_60%)]",
              )}
              aria-hidden
            />
            <span
              className={cn(
                "absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-700 ease-out",
                "bg-gradient-to-b from-[color:var(--color-forge)] via-[color:var(--color-forge)]/50 to-transparent",
                isLit(i) ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
              )}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] transition-colors duration-500",
                    isLit(i) ? "text-[color:var(--color-forge)]" : tone === "ink" ? "text-white/35" : "text-[color:var(--color-ink-faint)]",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-500",
                      isLit(i) ? "bg-[color:var(--color-forge)] shadow-[0_0_10px_rgba(239,103,4,0.8)]" : tone === "ink" ? "bg-white/20" : "bg-[color:var(--color-hairline-strong)]",
                    )}
                    aria-hidden
                  />
                  STEP {step.n}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className={cn(
                      "h-3.5 w-3.5 hidden lg:block transition-transform duration-300 group-hover:translate-x-1",
                      tone === "ink" ? "text-white/25 group-hover:text-[color:var(--color-forge)]" : "text-[color:var(--color-ink-faint)] group-hover:text-[color:var(--color-forge)]",
                    )}
                    aria-hidden
                  />
                )}
              </div>
              <h3
                className={cn(
                  "text-[20px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3",
                  tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
                )}
              >
                {step.title}
              </h3>
              <p className={cn("text-[13.5px] leading-[1.6]", tone === "ink" ? "text-white/60" : "text-[color:var(--color-ink-muted)]")}>
                {step.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
