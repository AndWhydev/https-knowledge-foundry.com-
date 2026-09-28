"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = "div",
  duration = 0.7,
  once = true,
  amount = 0.1,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "h1" | "h2" | "h3" | "p" | "span";
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;
  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } };
  return (
    <MotionTag
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  gap = 0.06,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      // Trigger as soon as the top of the group enters; a fractional amount on a
      // tall stacked mobile grid leaves hundreds of pixels of blank space.
      viewport={{ once: true, amount: "some", margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : gap } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "span" | "p" | "h3";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      data-reveal=""
      className={className}
      variants={reduce ? defaultVariants : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </MotionTag>
  );
}
