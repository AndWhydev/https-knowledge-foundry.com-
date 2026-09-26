"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  href,
  eyebrow,
  title,
  description,
  icon,
  className,
  tone = "canvas",
}: {
  href?: string;
  eyebrow?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  tone?: "canvas" | "ink" | "warm";
}) {
  const reduce = useReducedMotion();
  const inner = (
    <motion.div
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        "group relative flex h-full flex-col p-7 rounded-[var(--radius-lg)] border transition-all",
        tone === "canvas" && "bg-white border-[color:var(--color-hairline)] hover:border-[color:var(--color-ink-soft)]",
        tone === "warm" && "bg-[color:var(--color-canvas-warm)] border-[color:var(--color-hairline)] hover:border-[color:var(--color-ink-soft)]",
        tone === "ink" && "bg-[color:var(--color-ink)] border-[color:var(--color-ink-soft)] text-white hover:border-[color:var(--color-forge)]",
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] mb-6",
            tone === "ink"
              ? "bg-white/6 text-[color:var(--color-forge)]"
              : "bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)]",
          )}
        >
          {icon}
        </div>
      )}
      {eyebrow && (
        <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
          {eyebrow}
        </div>
      )}
      <h3
        className={cn(
          "text-[19px] leading-[1.25] font-semibold tracking-tight font-[family-name:var(--font-display)] mb-3",
          tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-[14px] leading-[1.6] flex-1",
          tone === "ink" ? "text-white/70" : "text-[color:var(--color-ink-muted)]",
        )}
      >
        {description}
      </p>
      {href && (
        <div
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors",
            tone === "ink" ? "text-white group-hover:text-[color:var(--color-forge)]" : "text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)]",
          )}
        >
          Read more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
