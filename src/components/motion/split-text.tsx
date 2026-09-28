"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Word-by-word reveal for premium H1s.
 * Splits by whitespace, preserves inline highlights via `<Highlight>` children.
 * Reduced motion → single fade in place, no stagger.
 *
 * Two-phase render to avoid SSR/hydration mismatch: on first paint we render
 * the raw children as-is (matches what SSR produced for the same JSX). After
 * mount, we swap in the word-split animated version.
 */
export function SplitText({
  children,
  className,
  as: Tag = "h1",
  delay = 0,
  stagger = 0.06,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Failsafe: if the animation hasn't triggered by 1.5s, revert to the
    // static (visible) render so H1s are never stuck invisible.
    const t = setTimeout(() => setForceVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // First paint OR failsafe: render the exact original children so SSR + first-
  // client render are byte-identical. React sees no mismatch. Motion swaps in
  // after mount; falls back here again if animation never fired within 1.5s.
  if (!mounted || forceVisible) {
    const Tag2 = Tag as React.ElementType;
    return <Tag2 className={className}>{children}</Tag2>;
  }

  const MotionTag = motion[Tag] as typeof motion.h1;
  const words = flattenToWords(children);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: reduce ? 0 : stagger,
      },
    },
  };
  // Critical: `visible` (not `hidden`) is the safe/default state — we start
  // visible then optionally animate from a hidden state INTO visible. If the
  // whileInView IntersectionObserver never fires (throttled tab, some
  // headless contexts), words stay visible instead of stuck at opacity 0.
  const word: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <MotionTag
      className={className}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      onViewportEnter={undefined}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
      variants={container}
      aria-label={words.map((w) => w.text).join(" ")}
      onAnimationComplete={undefined}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            data-reveal=""
            variants={word}
            className={cn("inline-block", w.className)}
            aria-hidden
            style={{ willChange: "transform, opacity, filter" }}
            // Failsafe: after 1.5s force to visible even if IO never fired.
            animate={undefined}
          >
            {w.text}
          </motion.span>
          {i < words.length - 1 && <span aria-hidden>{" "}</span>}
        </Fragment>
      ))}
    </MotionTag>
  );
}

/** Wrap children in <Highlight> inside <SplitText> to keep an inline color span. */
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span data-highlight className={className}>
      {children}
    </span>
  );
}

type Word = { text: string; className?: string };

function flattenToWords(node: ReactNode): Word[] {
  const acc: Word[] = [];
  const walk = (n: ReactNode, cls?: string) => {
    if (n == null || n === false) return;
    if (typeof n === "string" || typeof n === "number") {
      String(n)
        .split(/\s+/)
        .filter(Boolean)
        .forEach((w) => acc.push({ text: w, className: cls }));
      return;
    }
    if (Array.isArray(n)) {
      n.forEach((c) => walk(c, cls));
      return;
    }
    if (typeof n === "object" && "props" in (n as { props?: unknown })) {
      const el = n as { props: { children?: ReactNode; className?: string } };
      const nextCls = el.props.className || cls;
      walk(el.props.children, nextCls);
    }
  };
  walk(node);

  // Merge trailing punctuation-only tokens onto the previous word so we don't
  // get a visible gap before them.
  const trailingPunct = /^[.,!?;:]+$/;
  const merged: Word[] = [];
  for (const w of acc) {
    const prev = merged[merged.length - 1];
    if (prev && trailingPunct.test(w.text)) {
      merged[merged.length - 1] = { text: prev.text + w.text, className: prev.className };
    } else {
      merged.push(w);
    }
  }
  return merged;
}
