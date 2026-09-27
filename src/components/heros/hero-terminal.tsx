"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Terminal-style hero visual.
 *
 * Renders a dark macOS-style terminal window with animated line-by-line
 * output. Deliberately technical/developer-flavoured. used on pages where
 * the audience is technical (technical-overview, integrations, framework-
 * intelligence's alt variant).
 */
export function HeroTerminal({
  className,
  title = "framework://ingest",
  lines,
}: {
  className?: string;
  title?: string;
  lines: { text: string; color?: "muted" | "ink" | "forge" | "ok"; delay?: number }[];
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? lines.length : 0);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= lines.length) clearInterval(iv);
    }, 420);
    return () => clearInterval(iv);
  }, [reduce, lines.length]);

  const colorClass = (c?: string) => {
    switch (c) {
      case "forge": return "text-[color:var(--color-forge)]";
      case "ok":    return "text-emerald-300";
      case "muted": return "text-white/45";
      default:      return "text-white/80";
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="rounded-[var(--radius-md)] bg-[#0a0c11] border border-white/8 shadow-[0_40px_80px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 h-9 bg-white/[0.03] border-b border-white/8">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 font-[family-name:var(--font-jetbrains)] text-[11px] tracking-tight text-white/50">
            {title}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 font-[family-name:var(--font-jetbrains)] text-[12.5px] leading-[1.75] min-h-[280px]">
          {lines.slice(0, shown).map((l, i) => (
            <motion.div
              key={i}
              initial={reduce ? undefined : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={cn("flex gap-3", colorClass(l.color))}
            >
              <span className="text-white/25 select-none w-6 shrink-0 text-right">{String(i + 1).padStart(2, "0")}</span>
              <span className="whitespace-pre-wrap">{l.text}</span>
            </motion.div>
          ))}
          {!reduce && shown < lines.length && (
            <div className="flex gap-3 mt-1">
              <span className="text-white/25 select-none w-6 shrink-0 text-right">{String(shown + 1).padStart(2, "0")}</span>
              <motion.span
                className="inline-block w-2 h-4 bg-[color:var(--color-forge)]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
