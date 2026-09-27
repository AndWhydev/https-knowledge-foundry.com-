"use client";

import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { Container, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { cn } from "@/lib/cn";

const steps = [
  {
    n: "01",
    title: "Interpret",
    desc: "The system reads your source material — subjects, documents, policies, standards — and extracts the requirements that must be met. Every requirement carries the sentence it came from.",
    color: "#ef6704",
  },
  {
    n: "02",
    title: "Structure",
    desc: "A framework is proposed. Concepts, relationships, progression, and assessment logic are laid down before a single line of content is written. Reviewers approve or revise, not draft.",
    color: "#ef6704",
  },
  {
    n: "03",
    title: "Produce",
    desc: "Instruction, activities, and verification are generated to fit the approved framework. Every element traces back to a requirement — so nothing produced is content without a place.",
    color: "#ef6704",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "The programme ships as a reviewable, standards-aligned, audit-ready system. Full evidence trail, exportable pack for regulators and boards, ongoing governance and drift detection built in.",
    color: "#ef6704",
  },
];

export function StickyProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Which step is "active" [0..3]
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[color:var(--color-ink)] text-white"
      style={{ height: reduce ? "auto" : "400vh" }}
    >
      <div
        className={cn(
          "top-0 flex items-center overflow-hidden",
          reduce ? "" : "sticky h-screen",
        )}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
            {/* LEFT: pinned illustration + step chip */}
            <div className="relative">
              <div className="mb-8">
                <Eyebrow>The system</Eyebrow>
                <SplitText as="h2" className="text-display-2 mt-4 text-white max-w-[14ch]" stagger={0.05}>
                  Four moves, in the only order that works.
                </SplitText>
              </div>
              <StageVisual activeIndex={activeIndex} />
            </div>

            {/* RIGHT: scrolling steps */}
            <div className="space-y-24 lg:space-y-40 pt-10 lg:pt-20 pb-20">
              {steps.map((step, i) => (
                <StepPanel key={step.n} step={step} index={i} activeIndex={activeIndex} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function StepPanel({
  step,
  index,
  activeIndex,
}: {
  step: (typeof steps)[number];
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const reduce = useReducedMotion();
  // Keep every step readable at all times — subtle dimming only.
  const opacity = useTransform(activeIndex, (v) => {
    const distance = Math.abs(v - index);
    if (distance < 0.5) return 1;
    if (distance < 1.2) return 0.7;
    return 0.5;
  });
  const scale = useTransform(activeIndex, (v) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 : 0.985;
  });
  const x = useTransform(activeIndex, (v) => {
    if (reduce) return 0;
    const distance = v - index;
    return distance * -6;
  });
  const stepColor = useTransform(activeIndex, (v) =>
    Math.abs(v - index) < 0.5 ? "#ef6704" : "rgba(239,103,4,0.6)",
  );

  return (
    <motion.div style={reduce ? undefined : { opacity, x, scale }} className="min-h-[34vh]">
      <div className="flex items-baseline gap-4 mb-4">
        <motion.span
          className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em]"
          style={reduce ? undefined : { color: stepColor }}
        >
          STEP {step.n}
        </motion.span>
        <span className="h-px flex-1 bg-white/12" />
      </div>
      <h3 className="text-[42px] md:text-[56px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-white leading-[0.98]">
        {step.title}
      </h3>
      <p className="mt-5 text-[15.5px] md:text-[16.5px] leading-[1.65] text-white/70 max-w-[52ch]">
        {step.desc}
      </p>
    </motion.div>
  );
}

function StageVisual({
  activeIndex,
}: {
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const reduce = useReducedMotion();

  // Layer opacities per step
  const l0 = useTransform(activeIndex, [-0.5, 0, 1, 1.5], [0, 1, 0.4, 0.15]); // sources
  const l1 = useTransform(activeIndex, [0.5, 1, 2, 2.5], [0, 1, 0.6, 0.25]); // extracted concepts
  const l2 = useTransform(activeIndex, [1.5, 2, 3, 3.5], [0, 1, 0.85, 0.5]); // framework
  const l3 = useTransform(activeIndex, [2.5, 3, 3.5], [0, 1, 1]); // verified

  const chipStep = useTransform(activeIndex, (v) => Math.min(steps.length - 1, Math.max(0, Math.round(v))));

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* Concentric rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        {[80, 130, 180].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="2 4"
          />
        ))}

        {/* LAYER 0: source documents floating in */}
        <motion.g style={reduce ? undefined : { opacity: l0 }}>
          {[
            { x: 40, y: 60 },
            { x: 340, y: 80 },
            { x: 30, y: 320 },
            { x: 350, y: 300 },
            { x: 190, y: 30 },
          ].map((p, i) => (
            <motion.g
              key={i}
              transform={`translate(${p.x}, ${p.y})`}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="-14" y="-18" width="28" height="36" rx="2" fill="#2a2f3a" stroke="rgba(255,255,255,0.14)" />
              <line x1="-9" y1="-9" x2="9" y2="-9" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
              <line x1="-9" y1="-4" x2="7" y2="-4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="-9" y1="1" x2="9" y2="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="-9" y1="6" x2="5" y2="6" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            </motion.g>
          ))}
        </motion.g>

        {/* LAYER 1: extracted concept dots */}
        <motion.g style={reduce ? undefined : { opacity: l1 }}>
          {[
            { x: 200, y: 200, r: 8 },
            { x: 140, y: 160, r: 5 },
            { x: 260, y: 160, r: 5 },
            { x: 140, y: 240, r: 5 },
            { x: 260, y: 240, r: 5 },
            { x: 110, y: 200, r: 4 },
            { x: 290, y: 200, r: 4 },
            { x: 200, y: 130, r: 4 },
            { x: 200, y: 270, r: 4 },
          ].map((c, i) => (
            <motion.circle
              key={i}
              cx={c.x}
              cy={c.y}
              r={c.r}
              fill="#8b93a3"
              animate={reduce ? undefined : { r: [c.r, c.r * 1.2, c.r] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
            />
          ))}
        </motion.g>

        {/* LAYER 2: framework edges */}
        <motion.g style={reduce ? undefined : { opacity: l2 }} stroke="#5b6272" strokeWidth="1.5" fill="none">
          <line x1="200" y1="200" x2="140" y2="160" />
          <line x1="200" y1="200" x2="260" y2="160" />
          <line x1="200" y1="200" x2="140" y2="240" />
          <line x1="200" y1="200" x2="260" y2="240" />
          <line x1="140" y1="160" x2="110" y2="200" />
          <line x1="260" y1="160" x2="290" y2="200" />
          <line x1="140" y1="240" x2="110" y2="200" />
          <line x1="260" y1="240" x2="290" y2="200" />
          <line x1="200" y1="200" x2="200" y2="130" />
          <line x1="200" y1="200" x2="200" y2="270" />
        </motion.g>

        {/* LAYER 3: verified nodes glow orange */}
        <motion.g style={reduce ? undefined : { opacity: l3 }}>
          {[
            { x: 200, y: 200 },
            { x: 140, y: 160 },
            { x: 260, y: 240 },
          ].map((c, i) => (
            <motion.g key={i}>
              <circle cx={c.x} cy={c.y} r="14" fill="#ef6704" opacity="0.2" />
              <motion.circle
                cx={c.x}
                cy={c.y}
                r="7"
                fill="#ef6704"
                animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
            </motion.g>
          ))}
        </motion.g>
      </svg>

      {/* Step chip */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-black/60 backdrop-blur border border-white/12 px-4 py-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.16em] text-[color:var(--color-forge)]">
          NOW
        </span>
        <motion.span
          className="text-[12px] font-medium tracking-tight text-white"
          key="chip"
        >
          <StageLabel activeIndex={chipStep} />
        </motion.span>
      </motion.div>

      {/* Corner marks */}
      {[
        "top-0 left-0 border-t-2 border-l-2",
        "top-0 right-0 border-t-2 border-r-2",
        "bottom-0 left-0 border-b-2 border-l-2",
        "bottom-0 right-0 border-b-2 border-r-2",
      ].map((pos, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <span aria-hidden className={cn("absolute w-3 h-3 border-[color:var(--color-forge)]", pos)} />
        </Reveal>
      ))}
    </div>
  );
}

function StageLabel({ activeIndex }: { activeIndex: ReturnType<typeof useTransform<number, number>> }) {
  const [label, setLabel] = useState(steps[0].title);
  useMotionValueEvent(activeIndex, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.round(v)));
    setLabel(steps[idx].title);
  });
  return <span>{label}</span>;
}
