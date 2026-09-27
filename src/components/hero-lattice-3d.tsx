"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Interactive isometric cube pyramid that tilts with the cursor.
 * Each cube face has a subtle inner glow; the apex cube is orange and
 * pulses. Rotation is limited to ±10° so it always reads clearly.
 */
export function HeroLattice3D({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 90, damping: 26 });
  const sy = useSpring(py, { stiffness: 90, damping: 26 });
  const rotY = useTransform(sx, [0, 1], [10, -10]);
  const rotX = useTransform(sy, [0, 1], [-10, 10]);

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

  // Isometric layout: 4 layers, each smaller, apex has a single cube.
  const layers: { row: number; col: number; z: number; forge?: boolean }[] = [];
  for (let z = 0; z < 4; z++) {
    const size = 4 - z;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        layers.push({ row: r, col: c, z, forge: z === 3 });
      }
    }
  }

  const cubeW = 42;
  const cubeH = 42;
  const isoX = (r: number, c: number) => (c - r) * cubeW * 0.5;
  const isoY = (r: number, c: number) => (c + r) * cubeH * 0.28;

  return (
    <div
      className={className}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      <motion.div
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          rotateX: reduce ? 12 : rotX,
          rotateY: reduce ? -8 : rotY,
        }}
        className="w-full h-full flex items-center justify-center relative"
      >
        <svg
          viewBox="-220 -100 440 440"
          className="w-full h-full drop-shadow-[0_60px_120px_rgba(0,0,0,0.55)]"
        >
          <defs>
            <linearGradient id="c-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3a4152" />
              <stop offset="1" stopColor="#252932" />
            </linearGradient>
            <linearGradient id="c-left" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1a1d24" />
              <stop offset="1" stopColor="#0a0c10" />
            </linearGradient>
            <linearGradient id="c-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#252932" />
              <stop offset="1" stopColor="#12141a" />
            </linearGradient>
            <linearGradient id="f-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffa040" />
              <stop offset="1" stopColor="#ef6704" />
            </linearGradient>
            <linearGradient id="f-left" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c74e00" />
              <stop offset="1" stopColor="#8a3600" />
            </linearGradient>
            <linearGradient id="f-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e05c00" />
              <stop offset="1" stopColor="#a03f00" />
            </linearGradient>
            <filter id="apex-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Draw far to near for correct occlusion */}
          {layers
            .slice()
            .sort((a, b) => a.z - b.z || a.row + a.col - (b.row + b.col))
            .map((c) => {
              const x = isoX(c.row, c.col) - (c.z * 0);
              const y = isoY(c.row, c.col) - c.z * 44;
              const w = cubeW;
              const h = cubeH * 0.58;
              const d = cubeW * 0.5;
              return (
                <motion.g
                  key={`${c.z}-${c.row}-${c.col}`}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: -18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * (c.z * 3 + c.row + c.col), ease: [0.25, 1, 0.5, 1] }}
                  transform={`translate(${x} ${y})`}
                  style={c.forge ? { filter: "url(#apex-glow)" } : undefined}
                >
                  {/* top */}
                  <path d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0 L${w * 0.5} ${d * 0.58} Z`} fill={c.forge ? "url(#f-top)" : "url(#c-top)"} />
                  {/* left */}
                  <path d={`M0 0 L0 ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`} fill={c.forge ? "url(#f-left)" : "url(#c-left)"} />
                  {/* right */}
                  <path d={`M${w} 0 L${w} ${h} L${w * 0.5} ${h + d * 0.58} L${w * 0.5} ${d * 0.58} Z`} fill={c.forge ? "url(#f-right)" : "url(#c-right)"} />
                  {/* edge highlight */}
                  <path d={`M0 0 L${w * 0.5} ${-d * 0.58} L${w} 0`} stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" fill="none" />
                </motion.g>
              );
            })}

          {/* Ember particles */}
          {!reduce &&
            Array.from({ length: 6 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={-24 + i * 16}
                cy={-40}
                r="1.4"
                fill="#ff9a3a"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [-40 - i * 6, -220 - i * 12],
                  x: [0, (i % 2 ? 12 : -12)],
                }}
                transition={{
                  duration: 3.4 + i * 0.35,
                  repeat: Infinity,
                  delay: i * 0.55,
                  ease: "easeOut",
                }}
              />
            ))}
        </svg>
      </motion.div>
    </div>
  );
}
