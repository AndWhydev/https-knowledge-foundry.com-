"use client";

import { motion, useReducedMotion } from "motion/react";
import { FileJson, ShieldCheck, ClipboardCheck, GitBranch, Fingerprint, LineChart } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";

export function BentoOutputs() {
  return (
    <Section className="bg-[color:var(--color-canvas-warm)] relative overflow-hidden">
      <Container>
        <div className="mb-14 max-w-[720px]">
          <Eyebrow>What comes out</Eyebrow>
          <SplitText as="h2" className="text-display-2 mt-5 max-w-[16ch]" stagger={0.05}>
            Not a folder of documents. A knowledge system.
          </SplitText>
          <Reveal delay={0.35}>
            <p className="text-lede mt-6 max-w-[52ch]">
              Every Foundry engagement leaves you with a set of artefacts, each one
              exportable, versioned, and traceable to source.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Framework JSON — large */}
          <RevealItem className="col-span-2 md:col-span-2 md:row-span-2 md:h-[452px]">
            <BentoCard
              icon={<FileJson className="h-5 w-5" />}
              eyebrow="Framework"
              title="Structured JSON. Every node cited."
              desc="The framework as an authored object: concepts, relationships, assessment points, provenance."
              visual={<FrameworkVisual />}
            />
          </RevealItem>

          {/* Evidence Pack */}
          <RevealItem>
            <BentoCard
              compact
              icon={<ClipboardCheck className="h-5 w-5" />}
              eyebrow="Evidence"
              title="Audit-ready pack"
              desc="Regulator-shaped, exportable in one click."
              visual={<StackedFilesVisual />}
            />
          </RevealItem>

          {/* Verification report */}
          <RevealItem>
            <BentoCard
              compact
              icon={<Fingerprint className="h-5 w-5" />}
              eyebrow="Verification"
              title="Capability confirmed"
              desc="Assessment tied to framework, not click-count."
              visual={<VerificationVisual />}
            />
          </RevealItem>

          {/* Standards mapping */}
          <RevealItem>
            <BentoCard
              compact
              icon={<ShieldCheck className="h-5 w-5" />}
              eyebrow="Standards"
              title="Alignment map"
              desc="Clause → node → assessment, end to end."
              visual={<AlignmentVisual />}
            />
          </RevealItem>

          {/* Version history */}
          <RevealItem>
            <BentoCard
              compact
              icon={<GitBranch className="h-5 w-5" />}
              eyebrow="Provenance"
              title="Forensic revision chain"
              desc="Every change signed, dated, hashed."
              visual={<GitTreeVisual />}
            />
          </RevealItem>

          {/* Drift analytics — wide */}
          <RevealItem className="col-span-2 md:col-span-2">
            <BentoCard
              compact
              wide
              icon={<LineChart className="h-5 w-5" />}
              eyebrow="Drift signal"
              title="Where the framework and reality diverge."
              desc="Continuous drift detection between authored knowledge and observed behaviour or updated policy."
              visual={<DriftChartVisual />}
            />
          </RevealItem>
        </RevealStagger>
      </Container>
    </Section>
  );
}

function BentoCard({
  icon,
  eyebrow,
  title,
  desc,
  visual,
  compact = false,
  wide = false,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
  compact?: boolean;
  wide?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="group relative h-full overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white hover:border-[color:var(--color-ink-soft)] transition-colors flex flex-col"
    >
      <div className={`relative p-6 ${compact ? "pb-3" : "pb-4"}`}>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)]">
            {icon}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)]">
            {eyebrow}
          </span>
        </div>
        <h3 className={`mt-4 font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] ${compact ? "text-[16px] leading-[1.25]" : "text-[22px] leading-[1.15]"} max-w-[24ch]`}>
          {title}
        </h3>
        {!compact && (
          <p className="mt-3 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-muted)] max-w-[36ch]">
            {desc}
          </p>
        )}
        {compact && !wide && (
          <p className="mt-2 text-[12.5px] leading-[1.5] text-[color:var(--color-ink-muted)]">
            {desc}
          </p>
        )}
        {compact && wide && (
          <p className="mt-2 text-[13px] leading-[1.55] text-[color:var(--color-ink-muted)] max-w-[46ch]">
            {desc}
          </p>
        )}
      </div>
      <div className="relative flex-1 overflow-hidden">{visual}</div>
    </motion.div>
  );
}

/* --- Miniature UI visuals --- */

function FrameworkVisual() {
  return (
    <div className="absolute inset-0 pt-4 px-6 pb-6 bg-[color:var(--color-canvas-warm)]/40">
      <div className="rounded-md border border-[color:var(--color-hairline)] bg-white shadow-[var(--shadow-quiet)] p-4 font-[family-name:var(--font-jetbrains)] text-[11px] leading-[1.55] text-[color:var(--color-ink-soft)] overflow-hidden h-full">
        <span className="text-[color:var(--color-ink-faint)]">{`{`}</span>
        <div className="pl-3">
          <span className="text-[color:var(--color-forge)]">&quot;framework&quot;</span>: <span className="text-[color:var(--color-ink)]">&quot;anti-money-laundering-v3&quot;</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;version&quot;</span>: <span className="text-[color:var(--color-ink)]">&quot;3.2.0&quot;</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;concepts&quot;</span>: <span className="text-[color:var(--color-ink)]">142</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;relationships&quot;</span>: <span className="text-[color:var(--color-ink)]">318</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;assessments&quot;</span>: <span className="text-[color:var(--color-ink)]">64</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;standards&quot;</span>: <span className="text-[color:var(--color-ink)]">[&quot;AUSTRAC-AML/CTF&quot;, ...]</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;hash&quot;</span>: <span className="text-[color:var(--color-ink)]">&quot;fh:a7b1&hellip;c02e&quot;</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;approved_by&quot;</span>: <span className="text-[color:var(--color-ink)]">&quot;J. Chen&quot;</span>,
          <br />
          <span className="text-[color:var(--color-forge)]">&quot;approved_at&quot;</span>: <span className="text-[color:var(--color-ink)]">&quot;2026-09-18T04:12Z&quot;</span>
          <br />
        </div>
        <span className="text-[color:var(--color-ink-faint)]">{`}`}</span>
      </div>
    </div>
  );
}

function StackedFilesVisual() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-6 pt-4">
      <div className="relative w-24 h-24">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-sm border border-[color:var(--color-hairline)] bg-white shadow-[var(--shadow-quiet)]"
            style={{
              width: 72,
              height: 88,
              left: 12 + i * 8,
              top: -i * 6,
              rotate: (i - 1) * 3,
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="p-2 space-y-1">
              <div className="h-1 w-6 bg-[color:var(--color-forge)] rounded" />
              <div className="h-1 w-14 bg-[color:var(--color-hairline)] rounded" />
              <div className="h-1 w-12 bg-[color:var(--color-hairline)] rounded" />
              <div className="h-1 w-10 bg-[color:var(--color-hairline)] rounded" />
              <div className="h-1 w-13 bg-[color:var(--color-hairline)] rounded" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VerificationVisual() {
  return (
    <div className="absolute inset-0 pt-4 px-6 pb-6">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <defs>
          <linearGradient id="checkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ef6704" />
            <stop offset="1" stopColor="#b64c00" />
          </linearGradient>
        </defs>
        {[
          { y: 20, w: 90, check: true },
          { y: 40, w: 110, check: true },
          { y: 60, w: 80, check: true },
          { y: 80, w: 100, check: false },
        ].map((r, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
          >
            <rect x="30" y={r.y} width={r.w} height="8" rx="2" fill="#e6e8ee" />
            <rect x="30" y={r.y} width={r.check ? r.w : r.w * 0.4} height="8" rx="2" fill={r.check ? "url(#checkGrad)" : "#8b93a3"} />
            <circle cx="18" cy={r.y + 4} r="6" fill={r.check ? "#ef6704" : "#e6e8ee"} />
            {r.check && (
              <path d={`M14 ${r.y + 4} L17 ${r.y + 7} L22 ${r.y + 2}`} stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function AlignmentVisual() {
  return (
    <div className="absolute inset-0 pt-4 px-6 pb-6">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {[
          { fromY: 20, toY: 40 },
          { fromY: 40, toY: 60 },
          { fromY: 60, toY: 30 },
          { fromY: 80, toY: 70 },
        ].map((l, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
          >
            <rect x="6" y={l.fromY - 4} width="42" height="8" rx="1.5" fill="#e6e8ee" />
            <rect x="152" y={l.toY - 4} width="42" height="8" rx="1.5" fill="#2a2f3a" />
            <motion.path
              d={`M50 ${l.fromY} L148 ${l.toY}`}
              stroke="#ef6704"
              strokeWidth="1.4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function GitTreeVisual() {
  return (
    <div className="absolute inset-0 pt-4 px-6 pb-6">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {[
          { x: 20, y: 50, label: "v3.0" },
          { x: 60, y: 30, label: "v3.1" },
          { x: 60, y: 70, label: "hotfix" },
          { x: 100, y: 30, label: "v3.2" },
          { x: 140, y: 50, label: "v3.3" },
          { x: 180, y: 50, label: "HEAD" },
        ].map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
          >
            {i === 5 && <circle cx={n.x} cy={n.y} r="9" fill="#ef6704" opacity="0.2" />}
            <circle cx={n.x} cy={n.y} r="5" fill={i === 5 ? "#ef6704" : "#2a2f3a"} />
            <text x={n.x} y={n.y + 18} fontSize="7" fill="#5b6272" fontFamily="var(--font-jetbrains)" textAnchor="middle">
              {n.label}
            </text>
          </motion.g>
        ))}
        <motion.g stroke="#5b6272" strokeWidth="1" fill="none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}>
          <path d="M20 50 Q 40 30, 60 30" />
          <path d="M20 50 Q 40 70, 60 70" />
          <path d="M60 30 L 100 30" />
          <path d="M100 30 Q 120 40, 140 50" />
          <path d="M60 70 Q 100 60, 140 50" />
          <path d="M140 50 L 180 50" />
        </motion.g>
      </svg>
    </div>
  );
}

function DriftChartVisual() {
  return (
    <div className="absolute inset-0 pt-2 px-6 pb-6">
      <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="driftFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ef6704" stopOpacity="0.24" />
            <stop offset="1" stopColor="#ef6704" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#e6e8ee" strokeDasharray="2 3" />
        ))}
        {/* baseline (framework) */}
        <motion.path
          d="M0 60 L400 60"
          stroke="#8b93a3"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        {/* observed (with drift) */}
        <motion.path
          d="M0 62 C40 55, 80 68, 120 58 C160 48, 200 70, 240 58 C280 44, 320 32, 360 40 C380 44, 395 30, 400 24"
          stroke="#ef6704"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* filled area */}
        <motion.path
          d="M0 62 C40 55, 80 68, 120 58 C160 48, 200 70, 240 58 C280 44, 320 32, 360 40 C380 44, 395 30, 400 24 L400 100 L0 100 Z"
          fill="url(#driftFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        />
        {/* alert dot */}
        <motion.circle
          cx="360"
          cy="40"
          r="5"
          fill="#ef6704"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
        />
      </svg>
    </div>
  );
}
