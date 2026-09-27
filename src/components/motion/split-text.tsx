"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Word-by-word reveal for premium H1s.
 * Splits by whitespace, preserves inline highlights via `<Highlight>` children.
 * Reduced motion → single fade in place, no stagger.
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
  const word: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
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
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      aria-label={words.map((w) => w.text).join(" ")}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            variants={word}
            className={cn("inline-block", w.className)}
            aria-hidden
            style={{ willChange: "transform, opacity, filter" }}
          >
            {w.text}
          </motion.span>
          {i < words.length - 1 && <span aria-hidden>{" "}</span>}
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

  // Merge trailing punctuation-only tokens ("." "?" "!" ":" ";" ",")
  // back onto the previous word so we don't get a visible gap before them.
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
