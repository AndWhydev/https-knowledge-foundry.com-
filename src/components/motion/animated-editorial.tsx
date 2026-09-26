"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

const captions: Record<string, { alt: string; width: number; height: number }> = {
  "editorial-hero.png": { alt: "Isometric pyramid of dark charcoal cubes with a molten orange cube at the apex — Knowledge Foundry framework visualisation.", width: 1792, height: 1024 },
  "editorial-blueprint.png": { alt: "Grid of dark charcoal cubes on cream architectural blueprint, with three cubes glowing molten orange — knowledge framework schematic.", width: 1792, height: 1024 },
  "editorial-transformation.png": { alt: "Stack of dark charcoal document blocks transforming into an interconnected network of floating cubes — knowledge transformation illustration.", width: 1792, height: 1024 },
  "editorial-governance.png": { alt: "Isometric dashboard tiles rendered as physical charcoal objects with data visualisations, one glowing orange — knowledge governance illustration.", width: 1792, height: 1024 },
  "editorial-evidence.png": { alt: "Archival grid of dark charcoal document blocks with orange seals and a magnifying glass — audit and evidence illustration.", width: 1792, height: 1024 },
};

/**
 * Editorial image with three layered motion behaviours:
 * 1. Parallax on scroll — image drifts against page motion
 * 2. Idle floating — subtle up-down cycle when in view
 * 3. Reveal on first sight — scale + fade + slight rotation
 *
 * All of it collapses to a static <Image> when prefers-reduced-motion.
 */
export function AnimatedEditorial({
  src,
  className,
  priority = false,
  parallax = 40,
  float = true,
  frame = true,
  sizes = "(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw",
}: {
  src: keyof typeof captions;
  className?: string;
  priority?: boolean;
  parallax?: number;
  float?: boolean;
  frame?: boolean;
  sizes?: string;
}) {
  const meta = captions[src];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);
  const yS = useSpring(y, { stiffness: 90, damping: 30, mass: 0.6 });

  const imageEl = (
    <Image
      src={`/media/${src}`}
      alt={meta.alt}
      width={meta.width}
      height={meta.height}
      priority={priority}
      sizes={sizes}
      className="w-full h-auto"
    />
  );

  if (reduce) {
    return (
      <div className={cn("relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-canvas-warm)]", className)}>
        {imageEl}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Frame */}
      {frame && (
        <>
          <motion.div
            aria-hidden
            className="absolute -inset-3 rounded-[calc(var(--radius-lg)+8px)] bg-gradient-to-br from-[color:var(--color-forge)]/12 via-transparent to-[color:var(--color-ink)]/6 blur-2xl -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          />
          {/* Corner marks */}
          {[
            "top-[-6px] left-[-6px] border-t-2 border-l-2",
            "top-[-6px] right-[-6px] border-t-2 border-r-2",
            "bottom-[-6px] left-[-6px] border-b-2 border-l-2",
            "bottom-[-6px] right-[-6px] border-b-2 border-r-2",
          ].map((pos, i) => (
            <motion.span
              key={i}
              aria-hidden
              className={cn("absolute w-4 h-4 border-[color:var(--color-forge)]", pos)}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
            />
          ))}
        </>
      )}

      <motion.div
        className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-canvas-warm)] shadow-[var(--shadow-lifted)]"
        style={{ y: yS }}
        initial={{ opacity: 0, scale: 0.94, rotate: -1.2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {float ? (
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            {imageEl}
          </motion.div>
        ) : (
          imageEl
        )}

        {/* Reveal shimmer once */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0], x: ["-40%", "140%"] }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </div>
  );
}
