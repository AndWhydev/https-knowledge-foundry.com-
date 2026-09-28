"use client";

import { motion, AnimatePresence, useReducedMotion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Layers3, Fingerprint, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { cn } from "@/lib/cn";

type Scenario = {
  domain: string;
  standard: string;
  source: string;
  concepts: { label: string; kind: "concept" | "control" | "check" }[];
  edges: [number, number][];
  verifiedIndex: number[];
};

const scenarios: Scenario[] = [
  {
    domain: "Financial services",
    standard: "FATF Recommendations 1 and 10 · AML/CFT",
    source:
      "A regulated institution must identify money laundering and terrorist financing risks arising from its products and services, and put in place a risk-based program of controls proportionate to those risks. Customer due diligence must be completed before a business relationship is established, with enhanced due diligence for higher-risk customers.",
    concepts: [
      { label: "Regulated institution", kind: "concept" },
      { label: "Products and services", kind: "concept" },
      { label: "ML/TF risk", kind: "concept" },
      { label: "Risk-based program", kind: "control" },
      { label: "Customer due diligence", kind: "control" },
      { label: "Enhanced due diligence", kind: "control" },
      { label: "Higher-risk customer", kind: "concept" },
      { label: "Timing of due diligence", kind: "check" },
      { label: "Proportionality test", kind: "check" },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 7],
      [2, 6],
      [6, 5],
      [3, 8],
    ],
    verifiedIndex: [4, 5, 7],
  },
  {
    domain: "Critical infrastructure",
    standard: "ISO 45001 · Safety case",
    source:
      "Before commencing any confined space entry, a competent person must complete an atmospheric test, verify isolation of energy sources, confirm rescue provisions, and issue a written entry permit. Continuous monitoring is required for the duration of the entry. All personnel entering the space must hold current confined space training.",
    concepts: [
      { label: "Confined space entry", kind: "concept" },
      { label: "Competent person", kind: "concept" },
      { label: "Atmospheric test", kind: "control" },
      { label: "Energy isolation", kind: "control" },
      { label: "Rescue provisions", kind: "control" },
      { label: "Written entry permit", kind: "control" },
      { label: "Continuous monitoring", kind: "check" },
      { label: "Confined space training", kind: "concept" },
      { label: "Permit currency", kind: "check" },
    ],
    edges: [
      [0, 1],
      [0, 5],
      [1, 2],
      [1, 3],
      [1, 4],
      [5, 8],
      [0, 6],
      [1, 7],
    ],
    verifiedIndex: [2, 3, 4, 5],
  },
  {
    domain: "Healthcare",
    standard: "Hospital protocol · Medication safety",
    source:
      "The clinician verifies the patient's identity using at least three approved identifiers, checks the medication order against the medication chart, confirms allergies and adverse reactions on the medication record, and administers the medication using the seven rights. All administration is documented immediately on completion.",
    concepts: [
      { label: "Patient identity", kind: "concept" },
      { label: "Three identifiers", kind: "check" },
      { label: "Medication order", kind: "concept" },
      { label: "Medication chart check", kind: "control" },
      { label: "Allergy verification", kind: "control" },
      { label: "Adverse reaction record", kind: "concept" },
      { label: "Seven rights", kind: "control" },
      { label: "Immediate documentation", kind: "check" },
    ],
    edges: [
      [0, 1],
      [0, 2],
      [2, 3],
      [0, 4],
      [4, 5],
      [3, 6],
      [6, 7],
    ],
    verifiedIndex: [1, 3, 4, 6],
  },
];

type Phase = "typing" | "extracting" | "structuring" | "verifying" | "complete";

export function FrameworkDemo() {
  const reduce = useReducedMotion();
  // Only run the scripted loop while the demo is on screen; it re-renders every
  // few milliseconds while typing, which is wasted work (and hydration-time jank
  // on phones) when nobody can see it.
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "100px 0px" });
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = scenarios[scenarioIndex];

  const [phase, setPhase] = useState<Phase>("typing");
  const [charCount, setCharCount] = useState(0);
  const [conceptsShown, setConceptsShown] = useState(0);
  const [edgesShown, setEdgesShown] = useState(0);
  const [verifiedShown, setVerifiedShown] = useState(0);

  // Auto-advance the scripted timeline
  useEffect(() => {
    if (!reduce && !inView) return;
    if (reduce) {
      // Skip animation for reduced motion — show completed state
      setCharCount(scenario.source.length);
      setConceptsShown(scenario.concepts.length);
      setEdgesShown(scenario.edges.length);
      setVerifiedShown(scenario.verifiedIndex.length);
      setPhase("complete");
      return;
    }

    let mounted = true;
    let raf = 0;
    const timers: number[] = [];

    // Reset
    setPhase("typing");
    setCharCount(0);
    setConceptsShown(0);
    setEdgesShown(0);
    setVerifiedShown(0);

    // 1. Typing (fast type-in of ~500 char source)
    const perChar = 8; // ms
    let i = 0;
    const step = () => {
      if (!mounted) return;
      i += 4;
      setCharCount(Math.min(i, scenario.source.length));
      if (i >= scenario.source.length) {
        timers.push(window.setTimeout(() => mounted && setPhase("extracting"), 350));
      } else {
        timers.push(window.setTimeout(step, perChar));
      }
    };
    step();

    // 2. Extract concepts (~140ms each)
    timers.push(
      window.setTimeout(() => {
        if (!mounted) return;
        for (let c = 0; c <= scenario.concepts.length; c++) {
          timers.push(window.setTimeout(() => mounted && setConceptsShown(c), c * 140));
        }
        // 3. Structure — draw edges
        const edgesStart = scenario.concepts.length * 140 + 400;
        timers.push(
          window.setTimeout(() => {
            if (!mounted) return;
            setPhase("structuring");
            for (let e = 0; e <= scenario.edges.length; e++) {
              timers.push(window.setTimeout(() => mounted && setEdgesShown(e), e * 180));
            }
            // 4. Verify
            const verifyStart = scenario.edges.length * 180 + 500;
            timers.push(
              window.setTimeout(() => {
                if (!mounted) return;
                setPhase("verifying");
                for (let v = 0; v <= scenario.verifiedIndex.length; v++) {
                  timers.push(window.setTimeout(() => mounted && setVerifiedShown(v), v * 260));
                }
                const completeAt = scenario.verifiedIndex.length * 260 + 700;
                timers.push(window.setTimeout(() => mounted && setPhase("complete"), completeAt));
                // 5. Cycle to next scenario after 3s of "complete"
                timers.push(
                  window.setTimeout(() => {
                    if (!mounted) return;
                    setScenarioIndex((n) => (n + 1) % scenarios.length);
                  }, completeAt + 3600),
                );
              }, verifyStart),
            );
          }, edgesStart),
        );
      }, scenario.source.length * (perChar / 4) + 400),
    );

    return () => {
      mounted = false;
      timers.forEach((t) => clearTimeout(t));
      cancelAnimationFrame(raf);
    };
  }, [inView, scenarioIndex, reduce, scenario.source.length, scenario.concepts.length, scenario.edges.length, scenario.verifiedIndex.length, scenario.source]);

  const typedText = useMemo(() => scenario.source.slice(0, charCount), [scenario.source, charCount]);

  return (
    <div ref={rootRef}>
      <Section className="relative overflow-hidden bg-[color:var(--color-canvas-warm)]" spacing="loose">
        <div className="absolute inset-0 -z-10 grid-lattice opacity-40" aria-hidden />
        <Container>
          <div className="mb-14 max-w-[720px]">
            <Eyebrow>Live · The Foundry, on your material</Eyebrow>
            <SplitText as="h2" className="text-display-2 mt-5 max-w-[16ch]" stagger={0.05}>
              Watch the framework build itself.
            </SplitText>
            <Reveal delay={0.35}>
              <p className="text-lede mt-6 max-w-[52ch]">
                A live illustration of what happens when the Foundry meets your source
                material, cycling through three real-world subjects. In a real
                engagement, you bring the policy. It builds the framework.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-6 items-start">
            {/* LEFT: source input pane */}
            <div className="relative rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-tint)]">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
                  Source
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scenario.domain}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-[11px] font-medium text-[color:var(--color-ink-soft)] font-[family-name:var(--font-jetbrains)] tracking-[0.05em]"
                  >
                    {scenario.domain}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="p-5 min-h-[280px] md:min-h-[340px] font-[family-name:var(--font-jetbrains)] text-[13px] leading-[1.7] text-[color:var(--color-ink-soft)] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scenarioIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {typedText}
                    {phase === "typing" && (
                      <span className="inline-block w-[8px] h-[16px] align-middle -mt-1 bg-[color:var(--color-forge)] animate-pulse" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-[color:var(--color-hairline)] text-[11px] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] tracking-[0.05em]">
                <span>{scenario.standard}</span>
                <span>{scenario.source.length} chars</span>
              </div>
            </div>

            {/* RIGHT: framework canvas */}
            <div className="relative rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-[color:var(--color-ink)] text-white overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-white/50">
                  <PhaseIndicator phase={phase} />
                  Framework
                </div>
                <div className="flex items-center gap-1.5">
                  {scenarios.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Scenario ${i + 1}`}
                      onClick={() => setScenarioIndex(i)}
                      className={cn(
                        "h-1 rounded-full transition-all",
                        i === scenarioIndex
                          ? "w-6 bg-[color:var(--color-forge)]"
                          : "w-3 bg-white/15 hover:bg-white/30",
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="relative aspect-[4/3] md:aspect-[5/4] w-full">
                <FrameworkCanvas
                  scenario={scenario}
                  conceptsShown={conceptsShown}
                  edgesShown={edgesShown}
                  verifiedShown={verifiedShown}
                />
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-3 border-t border-white/8 divide-x divide-white/8 text-white/60">
                <MetricPill label="Concepts" value={conceptsShown} active={phase === "extracting"} />
                <MetricPill label="Relationships" value={edgesShown} active={phase === "structuring"} />
                <MetricPill label="Verified" value={verifiedShown} active={phase === "verifying" || phase === "complete"} />
              </div>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[13px] text-[color:var(--color-ink-muted)] max-w-[46ch] leading-relaxed">
                An illustrative loop. In a real engagement, the Foundry runs on your material,
                and the framework it produces is yours to keep.
              </p>
              <Magnetic strength={0.22}>
                <Link
                  href="/demonstration"
                  className="group inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-ink)] text-white px-6 h-12 text-[14px] font-medium hover:bg-[color:var(--color-forge)] transition-colors"
                >
                  Run it on your policy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}

function PhaseIndicator({ phase }: { phase: Phase }) {
  const label: Record<Phase, string> = {
    typing: "Reading",
    extracting: "Extracting",
    structuring: "Structuring",
    verifying: "Verifying",
    complete: "Complete",
  };
  const icon: Record<Phase, React.ReactNode> = {
    typing: <Sparkles className="h-3 w-3 text-[color:var(--color-forge)]" />,
    extracting: <Layers3 className="h-3 w-3 text-[color:var(--color-forge)]" />,
    structuring: <Layers3 className="h-3 w-3 text-[color:var(--color-forge)]" />,
    verifying: <Fingerprint className="h-3 w-3 text-[color:var(--color-forge)]" />,
    complete: <Check className="h-3 w-3 text-[color:var(--color-forge)]" />,
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-white/60">
      {icon[phase]}
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-[10.5px] tracking-[0.14em]"
        >
          {label[phase]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function MetricPill({ label, value, active }: { label: string; value: number; active: boolean }) {
  return (
    <div className="px-4 py-3">
      <div className="text-[10px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]">
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        className={cn(
          "mt-1 text-[20px] font-[family-name:var(--font-display)] font-semibold tracking-tight leading-none transition-colors",
          active ? "text-[color:var(--color-forge)]" : "text-white",
        )}
      >
        {value}
      </motion.div>
    </div>
  );
}

function FrameworkCanvas({
  scenario,
  conceptsShown,
  edgesShown,
  verifiedShown,
}: {
  scenario: Scenario;
  conceptsShown: number;
  edgesShown: number;
  verifiedShown: number;
}) {
  // Deterministic radial layout with per-node metadata for smart label placement.
  const nodes = useMemo(() => {
    const n = scenario.concepts.length;
    const cx = 300;
    const cy = 220;
    return scenario.concepts.map((_, i) => {
      if (i === 0) return { x: cx, y: cy, angle: -Math.PI / 2, ring: 0 };
      const ring = i <= n / 2 ? 1 : 2;
      const ringCount = ring === 1 ? Math.floor(n / 2) : Math.ceil(n / 2) - 1;
      const idxInRing = ring === 1 ? i - 1 : i - Math.floor(n / 2) - 1;
      const angle = (idxInRing / ringCount) * Math.PI * 2 - Math.PI / 2;
      const r = ring === 1 ? 92 : 172;
      return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r, angle, ring };
    });
  }, [scenario.concepts]);

  const verifiedSet = useMemo(
    () => new Set(scenario.verifiedIndex.slice(0, verifiedShown)),
    [scenario.verifiedIndex, verifiedShown],
  );

  // Decide which nodes to label — center + all verified — then push their labels
  // outward along the node's own radial angle so nothing collides with edges or
  // neighbouring nodes.
  const labels = useMemo(() => {
    const eligible = new Set<number>();
    eligible.add(0); // always label the center
    scenario.verifiedIndex.slice(0, verifiedShown).forEach((idx) => eligible.add(idx));
    return Array.from(eligible)
      .filter((i) => i < conceptsShown)
      .map((i) => {
        const n = nodes[i];
        const c = scenario.concepts[i];
        // Center label goes directly above the node
        if (n.ring === 0) {
          return { i, label: c.label, x: n.x, y: n.y - 20, anchor: "middle" as const };
        }
        // Outer nodes: label is pushed further out along the radial angle
        const cos = Math.cos(n.angle);
        const sin = Math.sin(n.angle);
        const gap = 14;
        const x = n.x + cos * gap;
        const y = n.y + sin * gap + 3;
        const anchor: "start" | "end" | "middle" =
          cos > 0.35 ? "start" : cos < -0.35 ? "end" : "middle";
        return { i, label: c.label, x, y, anchor };
      });
  }, [conceptsShown, verifiedShown, nodes, scenario.concepts, scenario.verifiedIndex]);

  return (
    <svg viewBox="0 0 600 440" className="w-full h-full">
      <defs>
        <pattern id="fw-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
        <radialGradient id="verified-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgba(239,103,4,0.5)" />
          <stop offset="1" stopColor="rgba(239,103,4,0)" />
        </radialGradient>
        {/* Radial mask so long labels near the edge fade rather than clip abruptly */}
        <linearGradient id="edge-fade-l" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="0.08" stopColor="#000" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="600" height="440" fill="url(#fw-grid)" />

      {/* Concentric rings for depth */}
      <g fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4">
        <circle cx="300" cy="220" r="92" />
        <circle cx="300" cy="220" r="172" />
      </g>

      {/* Edges */}
      {scenario.edges.slice(0, edgesShown).map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        if (!from || !to) return null;
        const bothVerified = verifiedSet.has(a) && verifiedSet.has(b);
        return (
          <motion.line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={bothVerified ? "rgba(239,103,4,0.55)" : "rgba(255,255,255,0.24)"}
            strokeWidth={bothVerified ? 1.4 : 1.1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          />
        );
      })}

      {/* Concept nodes */}
      {nodes.slice(0, conceptsShown).map((p, i) => {
        const c = scenario.concepts[i];
        const isVerified = verifiedSet.has(i);
        const size = i === 0 ? 12 : c.kind === "check" ? 6 : 8;
        return (
          <motion.g
            key={`${scenario.domain}-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            {isVerified && <circle cx={p.x} cy={p.y} r={size + 12} fill="url(#verified-glow)" />}
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={size}
              fill={isVerified ? "#ef6704" : c.kind === "control" ? "#8b93a3" : c.kind === "check" ? "#5b6272" : "#e6e8ee"}
              stroke={isVerified ? "#ff7d1a" : "rgba(255,255,255,0.12)"}
              strokeWidth={isVerified ? 1.5 : 1}
              animate={isVerified ? { opacity: [0.9, 1, 0.9] } : undefined}
              transition={isVerified ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
            />
          </motion.g>
        );
      })}

      {/* Labels — only center + verified nodes, positioned by angle */}
      {labels.map(({ i, label, x, y, anchor }) => {
        const isVerified = verifiedSet.has(i);
        const isCentre = nodes[i].ring === 0;
        return (
          <motion.g
            key={`label-${scenario.domain}-${i}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Subtle backing so labels stay legible over edges */}
            <text
              x={x}
              y={y}
              fontSize={isCentre ? "11" : "10"}
              fontFamily="var(--font-jetbrains)"
              textAnchor={anchor}
              fill="#12141a"
              stroke="#12141a"
              strokeWidth="4"
              opacity="0.75"
              paintOrder="stroke"
            >
              {label}
            </text>
            <text
              x={x}
              y={y}
              fontSize={isCentre ? "11" : "10"}
              fontFamily="var(--font-jetbrains)"
              textAnchor={anchor}
              fill={isVerified ? "#ff7d1a" : isCentre ? "#ffffff" : "rgba(255,255,255,0.82)"}
              fontWeight={isCentre ? 600 : 400}
            >
              {label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
