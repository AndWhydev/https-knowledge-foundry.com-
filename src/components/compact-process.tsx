"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { cn } from "@/lib/cn";

type Step = {
  n: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  { n: "01", title: "Interpret", desc: "The system reads your source material. subjects, documents, policies, standards. and extracts the requirements that must be met. Every requirement carries the sentence it came from." },
  { n: "02", title: "Structure", desc: "A framework is proposed. Concepts, relationships, progression, and assessment logic are laid down before a single line of content is written. Reviewers approve or revise, not draft." },
  { n: "03", title: "Produce", desc: "Instruction, activities, and verification are generated to fit the approved framework. Every element traces back to a requirement. so nothing produced is content without a place." },
  { n: "04", title: "Deliver", desc: "The programme ships as a reviewable, standards-aligned, audit-ready system. Full evidence trail, exportable pack for regulators and boards, ongoing governance and drift detection built in." },
];

export function CompactProcess() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // Auto-cycle when idle
  useEffect(() => {
    if (reduce) return;
    const iv = setInterval(() => setActive((n) => (n + 1) % steps.length), 5000);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <Section className="relative overflow-hidden bg-[color:var(--color-ink)] text-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Ambient orange glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(239,103,4,0.14), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <Container>
        <div className="max-w-[720px] mb-14">
          <Eyebrow>The system</Eyebrow>
          <SplitText as="h2" className="text-display-2 mt-5 text-white" stagger={0.05}>
            Four moves, in the only order that works.
          </SplitText>
          <Reveal delay={0.35}>
            <p className="text-lede mt-6 text-white/70">
              The Foundry maps the subject, defines the framework, and only then
              produces the instruction. Every element traces back to a requirement.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-center">
          {/* LEFT — animated stage */}
          <div className="relative aspect-square w-full max-w-[540px] mx-auto lg:mx-0 rounded-[var(--radius-lg)] border border-white/8 bg-black/40 overflow-hidden">
            <StageCanvas active={active} />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 border border-white/10 backdrop-blur px-3 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]"
                style={{ animation: "forge-glow 2s ease-in-out infinite" }}
              />
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.16em] text-[color:var(--color-forge)]">
                LIVE
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="text-[11px] font-medium tracking-tight text-white/90"
                >
                  {steps[active].title}
                </motion.span>
              </AnimatePresence>
            </div>
            {/* Corner marks */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((pos, i) => (
              <span key={i} aria-hidden className={cn("absolute w-4 h-4 border-[color:var(--color-forge)]/60", pos)} />
            ))}
          </div>

          {/* RIGHT — step tabs */}
          <div className="space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.n}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "group relative w-full text-left rounded-[var(--radius-md)] border transition-all p-6 md:p-7 overflow-hidden",
                    isActive
                      ? "border-[color:var(--color-forge)]/40 bg-white/[0.03]"
                      : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.02]",
                  )}
                  aria-pressed={isActive}
                >
                  {/* Progress bar for active */}
                  {isActive && !reduce && (
                    <motion.span
                      key={`prog-${active}`}
                      className="absolute left-0 top-0 h-px bg-[color:var(--color-forge)] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      style={{ width: "100%" }}
                    />
                  )}
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className={cn(
                      "font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] transition-colors",
                      isActive ? "text-[color:var(--color-forge)]" : "text-white/40",
                    )}>
                      STEP {step.n}
                    </span>
                    <span className="h-px flex-1 bg-white/8" />
                  </div>
                  <h3 className={cn(
                    "font-[family-name:var(--font-display)] font-semibold tracking-tight transition-all",
                    isActive ? "text-white text-[26px] md:text-[30px]" : "text-white/70 text-[22px] md:text-[24px]",
                  )}>
                    {step.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="text-[14.5px] leading-[1.6] text-white/70 overflow-hidden"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StageCanvas({ active }: { active: number }) {
  const reduce = useReducedMotion();

  // Layer visibility per step
  const layerOpacity = (i: number, activeStep: number) => {
    if (i === activeStep) return 1;
    if (i < activeStep) return 0.45;
    return 0.08;
  };

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <pattern id="cp-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <radialGradient id="cp-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgba(239,103,4,0.5)" />
          <stop offset="1" stopColor="rgba(239,103,4,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#cp-grid)" />
      {/* Concentric rings — outermost rotates slowly */}
      <g fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4">
        <circle cx="200" cy="200" r="70" />
        <circle cx="200" cy="200" r="130" />
        {reduce ? (
          <circle cx="200" cy="200" r="180" />
        ) : (
          <motion.circle
            cx="200"
            cy="200"
            r="180"
            style={{ transformOrigin: "200px 200px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        )}
        {/* Tick marks at cardinal points on outer ring */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const r1 = 180;
          const r2 = 188;
          const x1 = 200 + Math.cos(rad) * r1;
          const y1 = 200 + Math.sin(rad) * r1;
          const x2 = 200 + Math.cos(rad) * r2;
          const y2 = 200 + Math.sin(rad) * r2;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(239,103,4,0.5)" strokeWidth="1.5" />;
        })}
      </g>

      {/* Pulse rings on active — expanding out from centre */}
      {!reduce && (
        <g fill="none" stroke="rgba(239,103,4,0.25)">
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="200"
              cy="200"
              r="60"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.5, 2.5, 3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
              style={{ transformOrigin: "200px 200px" }}
            />
          ))}
        </g>
      )}

      {/* Layer 0 — source documents drifting in */}
      <motion.g animate={{ opacity: layerOpacity(0, active) }} transition={{ duration: 0.5 }}>
        {[
          { x: 60, y: 90 },
          { x: 330, y: 100 },
          { x: 50, y: 300 },
          { x: 340, y: 300 },
          { x: 200, y: 50 },
        ].map((p, i) => (
          <motion.g
            key={i}
            transform={`translate(${p.x}, ${p.y})`}
            animate={reduce ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-12" y="-16" width="24" height="32" rx="2" fill="#1a1d24" stroke="rgba(255,255,255,0.18)" />
            <line x1="-7" y1="-8" x2="7" y2="-8" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
            <line x1="-7" y1="-4" x2="5" y2="-4" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            <line x1="-7" y1="4" x2="4" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          </motion.g>
        ))}
      </motion.g>

      {/* Layer 1 — extracted concept nodes */}
      <motion.g animate={{ opacity: layerOpacity(1, active) }} transition={{ duration: 0.5 }}>
        {[
          { x: 200, y: 200, r: 10 },
          { x: 130, y: 145, r: 6 },
          { x: 270, y: 145, r: 6 },
          { x: 130, y: 255, r: 6 },
          { x: 270, y: 255, r: 6 },
          { x: 90, y: 200, r: 5 },
          { x: 310, y: 200, r: 5 },
          { x: 200, y: 110, r: 5 },
          { x: 200, y: 290, r: 5 },
        ].map((c, i) => (
          <motion.circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={c.r}
            fill="#8b93a3"
            animate={reduce ? undefined : { r: [c.r, c.r * 1.15, c.r] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
          />
        ))}
      </motion.g>

      {/* Layer 2 — framework edges */}
      <motion.g
        animate={{ opacity: layerOpacity(2, active) }}
        transition={{ duration: 0.5 }}
        stroke="#5b6272"
        strokeWidth="1.5"
        fill="none"
      >
        <line x1="200" y1="200" x2="130" y2="145" />
        <line x1="200" y1="200" x2="270" y2="145" />
        <line x1="200" y1="200" x2="130" y2="255" />
        <line x1="200" y1="200" x2="270" y2="255" />
        <line x1="130" y1="145" x2="90" y2="200" />
        <line x1="270" y1="145" x2="310" y2="200" />
        <line x1="130" y1="255" x2="90" y2="200" />
        <line x1="270" y1="255" x2="310" y2="200" />
        <line x1="200" y1="200" x2="200" y2="110" />
        <line x1="200" y1="200" x2="200" y2="290" />
      </motion.g>

      {/* Layer 3 — verified nodes glow orange */}
      <motion.g animate={{ opacity: layerOpacity(3, active) }} transition={{ duration: 0.5 }}>
        {[
          { x: 200, y: 200 },
          { x: 130, y: 145 },
          { x: 270, y: 255 },
          { x: 200, y: 110 },
        ].map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r="18" fill="url(#cp-glow)" />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="8"
              fill="#ef6704"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  );
}
