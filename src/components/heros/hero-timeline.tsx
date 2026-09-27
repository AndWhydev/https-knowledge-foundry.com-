"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Horizontal timeline hero visual.
 *
 * Renders a vertical timeline of milestones with animated dashed connector
 * lines and orange verified checkpoints. Used on pages that describe an
 * ordered process. verification-trust, standards-accreditation, remediation.
 */
export function HeroTimeline({
  className,
  milestones,
}: {
  className?: string;
  milestones: { label: string; sublabel?: string; verified?: boolean }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      <div className="rounded-[var(--radius-md)] bg-[#0a0c11] border border-white/8 p-8 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
        <ol className="relative">
          {/* Vertical spine */}
          <span
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--color-forge)]/60 via-white/12 to-transparent"
          />
          {milestones.map((m, i) => (
            <motion.li
              key={i}
              initial={reduce ? undefined : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="relative pl-12 pb-7 last:pb-0"
            >
              {/* Dot */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1 flex h-[30px] w-[30px] items-center justify-center rounded-full border",
                  m.verified
                    ? "bg-[color:var(--color-forge)] border-[color:var(--color-forge)] shadow-[0_0_24px_rgba(239,103,4,0.5)]"
                    : "bg-[#0a0c11] border-white/25",
                )}
              >
                {m.verified ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/60">{String(i + 1).padStart(2, "0")}</span>
                )}
              </span>
              <div className="text-[15px] font-medium text-white leading-snug">{m.label}</div>
              {m.sublabel && (
                <div className="mt-1 text-[11.5px] tracking-[0.05em] font-[family-name:var(--font-jetbrains)] text-white/45">
                  {m.sublabel}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
