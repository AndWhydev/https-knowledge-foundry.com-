"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Isometric knowledge lattice — 3D cube grid rendered in SVG.
 * Cubes light up in sequence to convey "structure before content".
 */
export function HeroLattice({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // 4 x 4 grid of isometric cubes
  const cubes: { row: number; col: number; forge: boolean; delay: number }[] = [];
  const forgeCells = new Set([
    "0-3", "1-2", "1-3", "2-1", "2-2", "3-0",
  ]);
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      cubes.push({
        row,
        col,
        forge: forgeCells.has(`${row}-${col}`),
        delay: (row + col) * 0.08,
      });
    }
  }

  const cubeW = 60;
  const cubeH = 60;
  const isoX = (row: number, col: number) => (col - row) * cubeW * 0.5;
  const isoY = (row: number, col: number) => (col + row) * cubeH * 0.29;

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="-220 -40 440 380"
        className="w-full h-full drop-shadow-[0_40px_80px_rgba(18,20,26,0.15)]"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3a4152" />
            <stop offset="1" stopColor="#2a2f3a" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a1d24" />
            <stop offset="1" stopColor="#0f1116" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#252932" />
            <stop offset="1" stopColor="#171a20" />
          </linearGradient>
          <linearGradient id="forgeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8a35" />
            <stop offset="1" stopColor="#ef6704" />
          </linearGradient>
          <linearGradient id="forgeLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c74e00" />
            <stop offset="1" stopColor="#8f3800" />
          </linearGradient>
          <linearGradient id="forgeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e05c00" />
            <stop offset="1" stopColor="#a03f00" />
          </linearGradient>
          <filter id="forgeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {cubes.map((c) => {
          const x = isoX(c.row, c.col);
          const y = isoY(c.row, c.col);
          const w = cubeW;
          const h = cubeH * 0.58;
          const d = cubeW * 0.5;
          return (
            <motion.g
              key={`${c.row}-${c.col}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: c.delay, ease: [0.25, 1, 0.5, 1] }}
              transform={`translate(${x} ${y})`}
              style={c.forge ? { filter: "url(#forgeGlow)" } : undefined}
            >
              {/* top face */}
              <path
                d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0 L${w * 0.5} ${d * 0.58} Z`}
                fill={c.forge ? "url(#forgeTop)" : "url(#cubeTop)"}
              />
              {/* left face */}
              <path
                d={`M0 0 L0 ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`}
                fill={c.forge ? "url(#forgeLeft)" : "url(#cubeLeft)"}
              />
              {/* right face */}
              <path
                d={`M${w} 0 L${w} ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`}
                fill={c.forge ? "url(#forgeRight)" : "url(#cubeRight)"}
              />
              {/* edge highlight */}
              <path
                d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0`}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
                fill="none"
              />
            </motion.g>
          );
        })}

        {/* forge ember particles */}
        {!reduce &&
          Array.from({ length: 5 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={-40 + i * 20}
              cy={40}
              r="1.2"
              fill="var(--color-forge)"
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.9, 0],
                y: [-40 - i * 8, -160 - i * 12],
                x: [0, (i % 2 ? 8 : -8)],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            />
          ))}
      </svg>
    </div>
  );
}
