"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { X, Check } from "lucide-react";

/**
 * Before / after comparison hero.
 *
 * Two panels side-by-side (or stacked on mobile). Left = the old world with
 * red X marks; right = the KF way with orange checkmarks. Used on pages that
 * position against the status quo. enterprise-learning-modernisation, SCORM
 * insight, some governance pages.
 */
export function HeroComparison({
  className,
  before,
  after,
}: {
  className?: string;
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      <div className="grid sm:grid-cols-2 gap-3">
        {/* Before */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="rounded-[var(--radius-md)] border border-white/8 bg-white/[0.02] p-6"
        >
          <div className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] text-white/40 mb-4">
            Before
          </div>
          <div className="text-[15px] font-medium text-white/70 mb-4">{before.title}</div>
          <ul className="space-y-2.5">
            {before.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 items-start text-[13px] leading-[1.5] text-white/50 line-through decoration-white/20">
                <X className="h-3.5 w-3.5 mt-0.5 shrink-0 text-white/30" aria-hidden />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="rounded-[var(--radius-md)] border border-[color:var(--color-forge)]/40 bg-[color:var(--color-forge)]/[0.06] p-6 shadow-[0_30px_60px_-20px_rgba(239,103,4,0.35)]"
        >
          <div className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-forge)] mb-4">
            Foundry
          </div>
          <div className="text-[15px] font-medium text-white mb-4">{after.title}</div>
          <ul className="space-y-2.5">
            {after.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 items-start text-[13px] leading-[1.5] text-white">
                <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[color:var(--color-forge)]" aria-hidden />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
