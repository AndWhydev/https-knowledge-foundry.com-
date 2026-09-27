"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Cursor-tilted isometric lattice for the dark hero.
 *
 * 4×4 grid of cubes with 6 highlighted in orange (forge cells). Colours are
 * chosen for clear contrast against the near-black #0d0f14 hero background:
 * cube tops read as light slate/steel, not as bg-blending charcoal.
 *
 * Scene tilts up to ±8° with cursor position, plus ember particles rise from
 * the orange cells.
 */
export function HeroLattice3D({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 90, damping: 26 });
  const sy = useSpring(py, { stiffness: 90, damping: 26 });
  const rotY = useTransform(sx, [0, 1], [8, -8]);
  const rotX = useTransform(sy, [0, 1], [-6, 6]);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      px.set(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)));
      py.set(Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce, px, py]);

  const cubeW = 60;
  const isoX = (r: number, c: number) => (c - r) * cubeW * 0.5;
  const isoY = (r: number, c: number) => (c + r) * cubeW * 0.29;

  // 4x4 grid, 6 forge cells arranged as a diagonal accent
  const forgeCells = new Set(["0-3", "1-2", "1-3", "2-1", "2-2", "3-0"]);
  const cubes: { row: number; col: number; forge: boolean; delay: number }[] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
    cubes.push({ row: r, col: c, forge: forgeCells.has(`${r}-${c}`), delay: (r + c) * 0.06 });
  }

  return (
    <div className={className} style={{ perspective: 1400 }}>
      <motion.div
        ref={ref}
        style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY }}
        className="w-full h-full flex items-center justify-center relative"
      >
        <svg
          viewBox="-200 -40 400 340"
          className="w-full h-full drop-shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
        >
          <defs>
            {/* LIGHT slate palette — clearly readable on #0d0f14 bg */}
            <linearGradient id="ct" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a8b1c4" />
              <stop offset="1" stopColor="#7a8296" />
            </linearGradient>
            <linearGradient id="cl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3f4557" />
              <stop offset="1" stopColor="#252a37" />
            </linearGradient>
            <linearGradient id="cr" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5a6274" />
              <stop offset="1" stopColor="#363c4b" />
            </linearGradient>
            <linearGradient id="ft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffb060" />
              <stop offset="1" stopColor="#ef6704" />
            </linearGradient>
            <linearGradient id="fl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c74e00" />
              <stop offset="1" stopColor="#7a3000" />
            </linearGradient>
            <linearGradient id="fr" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e05c00" />
              <stop offset="1" stopColor="#8f3800" />
            </linearGradient>
            <filter id="fglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="base-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="rgba(239,103,4,0.32)" />
              <stop offset="1" stopColor="rgba(239,103,4,0)" />
            </radialGradient>
          </defs>

          {/* Ground glow beneath the lattice */}
          <ellipse cx="0" cy="240" rx="200" ry="26" fill="url(#base-glow)" opacity="0.75" />

          {cubes
            .slice()
            .sort((a, b) => a.row + a.col - (b.row + b.col))
            .map((c) => {
              const x = isoX(c.row, c.col);
              const y = isoY(c.row, c.col);
              const w = cubeW;
              const h = cubeW * 0.58;
              const d = cubeW * 0.5;
              // Motion via SMIL/CSS animation on a wrapper — never use motion
              // for opacity here or headless snapshots render invisible cubes.
              // Two-level group: outer SVG-translate for position, inner CSS
              // animation on transform. Never combine both on one element —
              // CSS `transform` overrides SVG `transform` and collapses cubes
              // to origin.
              return (
                <g key={`${c.row}-${c.col}`} transform={`translate(${x} ${y})`}>
                  <g
                    style={{
                      filter: c.forge ? "url(#fglow)" : undefined,
                      animation: reduce ? undefined : `hlDrop 0.6s ${c.delay}s cubic-bezier(0.25,1,0.5,1) both`,
                    }}
                  >
                  {/* top */}
                  <path
                    d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0 L${w * 0.5} ${d * 0.58} Z`}
                    fill={c.forge ? "url(#ft)" : "url(#ct)"}
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.5"
                  />
                  {/* left */}
                  <path
                    d={`M0 0 L0 ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`}
                    fill={c.forge ? "url(#fl)" : "url(#cl)"}
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="0.4"
                  />
                  {/* right */}
                  <path
                    d={`M${w} 0 L${w} ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`}
                    fill={c.forge ? "url(#fr)" : "url(#cr)"}
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="0.4"
                  />
                  {/* top edge highlight */}
                  <path
                    d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0`}
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="0.75"
                    fill="none"
                  />
                  </g>
                </g>
              );
            })}

          {/* Ember particles from the top-right forge cells */}
          {!reduce &&
            Array.from({ length: 6 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={40 + i * 12}
                cy={20}
                r="1.4"
                fill="#ff9a3a"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [-20 - i * 6, -140 - i * 10],
                  x: [0, (i % 2 ? 10 : -10)],
                }}
                transition={{
                  duration: 3.4 + i * 0.35,
                  repeat: Infinity,
                  delay: 1 + i * 0.55,
                  ease: "easeOut",
                }}
              />
            ))}
        </svg>
      </motion.div>
    </div>
  );
}
