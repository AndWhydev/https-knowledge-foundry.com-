"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const captions: Record<string, { alt: string; width: number; height: number }> = {
  "editorial-hero.png": { alt: "Isometric pyramid of dark charcoal cubes with a molten orange cube at the apex. Knowledge Foundry framework visualization.", width: 1600, height: 905 },
  "editorial-blueprint.png": { alt: "Grid of dark charcoal cubes on cream architectural blueprint, with three cubes glowing molten orange: a knowledge framework schematic.", width: 1600, height: 905 },
  "editorial-transformation.png": { alt: "Stack of dark charcoal document blocks transforming into an interconnected network of floating cubes, illustrating knowledge transformation.", width: 1600, height: 905 },
  "editorial-governance.png": { alt: "Isometric dashboard tiles rendered as physical charcoal objects with data visualizations, one glowing orange, illustrating knowledge governance.", width: 1600, height: 905 },
  "editorial-evidence.png": { alt: "Archival grid of dark charcoal document blocks with orange seals and a magnifying glass, illustrating audit and evidence.", width: 1600, height: 905 },
  "editorial-magazine.png": { alt: "Open book transforming into a rising lattice of charcoal cubes with molten orange nodes, an editorial cover for knowledge architecture.", width: 1600, height: 905 },
  "editorial-infrastructure.png": { alt: "Industrial gantry and pipeline framework in dark charcoal with molten orange safety indicators, illustrating critical infrastructure.", width: 1600, height: 905 },
  "editorial-education.png": { alt: "Stacked academic tablets rising like a graduation ziggurat with orange level edges, illustrating higher education.", width: 1600, height: 905 },
  "editorial-gap.png": { alt: "Dark charcoal precision grid with visible gaps cut into it, molten orange light beaming up from below. Gap analysis illustration.", width: 1600, height: 905 },
  "editorial-remediation.png": { alt: "Dark charcoal cubes being lifted and refitted by mechanical arms, orange welding sparks at the seams. Remediation illustration.", width: 1600, height: 905 },
  "editorial-standards.png": { alt: "Stacked certification medallions and stamped seal blocks with orange accreditation ribbons. Standards and accreditation illustration.", width: 1600, height: 905 },
  "editorial-integrations.png": { alt: "Hub-and-spoke architecture with a central foundry cube connected via pipe channels to peripheral systems, orange glow at each joint. Integrations illustration.", width: 1600, height: 905 },
  "editorial-modernisation.png": { alt: "Legacy filing cabinets on the left transforming into a modular lattice of cubes on the right with orange accent edges. Enterprise learning modernization illustration.", width: 1600, height: 905 },
  "editorial-architecture.png": { alt: "Exploded-view of a modular platform showing separated engineering layers with orange accent lines connecting them. Technical architecture illustration.", width: 1600, height: 905 },
  "original/foundry-system.png": { alt: "The Knowledge Foundry system diagram: inputs (subjects, documents, requirements, standards, regulations) flow through five foundry stages (Define, Structure, Instruct, Validate, Deliver) into outputs (structured learning systems, reviewable content, standards-aligned instruction, audit trail, exportable evidence).", width: 2400, height: 1368 },
  "original/structure-first.png": { alt: "Structure First methodology: five-step framework showing Define Structure, Identify Relationships, Establish Framework, Generate Content, Validate and Deliver.", width: 836, height: 471 },
  "original/reviewable.png": { alt: "Reviewability workflow: submit, review, refine, approve, deliver, with a signed and stamped approved program as the final output.", width: 892, height: 441 },
  "original/define-first.png": { alt: "Define first, write second: source materials being structured into a framework before instructional content is authored.", width: 866, height: 455 },
};

/**
 * Editorial image with three layered motion behaviors:
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
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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

  // Static (matching SSR) until mounted. Only after hydration do we mount the
  // animated variant that owns useScroll — this avoids the motion "ref defined
  // but not hydrated" error.
  if (reduce || !mounted) {
    return (
      <div className={cn("relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-canvas-warm)]", className)}>
        {imageEl}
      </div>
    );
  }

  return <AnimatedEditorialInner imageEl={imageEl} parallax={parallax} float={float} frame={frame} className={className} />;
}

function AnimatedEditorialInner({
  imageEl,
  parallax,
  float,
  frame,
  className,
}: {
  imageEl: React.ReactNode;
  parallax: number;
  float: boolean;
  frame: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);
  const yS = useSpring(y, { stiffness: 90, damping: 30, mass: 0.6 });
  const _unused = frame; // frame handled below

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
        data-reveal=""
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
