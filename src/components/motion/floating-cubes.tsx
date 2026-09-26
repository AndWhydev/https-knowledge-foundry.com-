"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Ambient decorative isometric cubes floating behind hero content.
 * Deliberately subtle — deep-parked opacity, slow drift.
 */
export function FloatingCubes({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const cubes = [
    { x: 8, y: 10, size: 40, delay: 0, drift: 12, forge: false },
    { x: 82, y: 18, size: 56, delay: 1.4, drift: -14, forge: true },
    { x: 12, y: 68, size: 46, delay: 0.7, drift: 10, forge: false },
    { x: 78, y: 74, size: 36, delay: 2.1, drift: -10, forge: false },
    { x: 46, y: 88, size: 30, delay: 1.1, drift: 8, forge: false },
    { x: 92, y: 46, size: 24, delay: 0.4, drift: -8, forge: true },
    { x: 4, y: 42, size: 32, delay: 1.9, drift: 12, forge: false },
  ];

  return (
    <div className={className} aria-hidden>
      {cubes.map((c, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 60 60"
          className="absolute"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.size,
            height: c.size,
            opacity: c.forge ? 0.28 : 0.18,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: c.forge ? 0.28 : 0.18, y: 0 }}
          transition={{ duration: 1.4, delay: c.delay, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.g
            animate={{
              y: [0, c.drift, 0],
              rotate: [0, c.forge ? 4 : -3, 0],
            }}
            transition={{ duration: 9 + i * 1.3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "30px 30px" }}
          >
            {/* Isometric cube */}
            <path d="M8 24 L30 12 L52 24 L30 36 Z" fill={c.forge ? "#ef6704" : "#2a2f3a"} />
            <path d="M8 24 L8 44 L30 56 L30 36 Z" fill={c.forge ? "#b64c00" : "#12141a"} opacity="0.85" />
            <path d="M30 36 L30 56 L52 44 L52 24 Z" fill={c.forge ? "#c74e00" : "#1a1d24"} opacity="0.7" />
          </motion.g>
        </motion.svg>
      ))}
    </div>
  );
}
