"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo";

/**
 * Brief cyberpunk-flavoured boot sequence — shows once per session, on first
 * paint of the site. Formal + monospace + orange accent. Fades out after ~1.4s
 * and never returns until a new browser session starts.
 *
 * Persistence key: sessionStorage.kf_booted = "1"
 * Skipped entirely for: prefers-reduced-motion, non-first-visit in session,
 * SSR (mounted gate).
 */
export function BootSequence() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"init" | "line1" | "line2" | "line3" | "ready" | "gone">("init");
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    // Skip if already booted this session or reduced-motion
    if (reduce || sessionStorage.getItem("kf_booted") === "1") {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("kf_booted", "1");

    // Scripted timeline
    const timers = [
      setTimeout(() => setPhase("line1"), 150),
      setTimeout(() => setPhase("line2"), 500),
      setTimeout(() => setPhase("line3"), 800),
      setTimeout(() => setPhase("ready"), 1150),
      setTimeout(() => setPhase("gone"), 1500),
      setTimeout(() => setVisible(false), 1900), // after fade
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  if (!mounted || !visible) return null;

  const lines = [
    { key: "line1", text: "INITIALISING · frameworks.knowledgefoundry.io" },
    { key: "line2", text: "LOADING · concepts › relationships › verification" },
    { key: "line3", text: "READY · deliberate instruction online" },
  ];

  const activeStep = ["init", "line1", "line2", "line3", "ready", "gone"].indexOf(phase);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0d0f14]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          aria-hidden
        >
          {/* Ambient grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)",
            }}
          />
          {/* Ambient orange glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(239,103,4,0.15), transparent 60%)",
              filter: "blur(30px)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6">
            {/* Logo — scales in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="relative"
            >
              <LogoMark className="h-16 w-16 md:h-20 md:w-20 text-white" />
              {/* Corner brackets */}
              {[
                "-top-2 -left-2 border-t-2 border-l-2",
                "-top-2 -right-2 border-t-2 border-r-2",
                "-bottom-2 -left-2 border-b-2 border-l-2",
                "-bottom-2 -right-2 border-b-2 border-r-2",
              ].map((pos, i) => (
                <motion.span
                  key={i}
                  className={`absolute h-3 w-3 border-[color:var(--color-forge)] ${pos}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                />
              ))}
            </motion.div>

            {/* Wordmark */}
            <motion.div
              className="font-[family-name:var(--font-display)] text-[22px] md:text-[26px] tracking-tight text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="text-white font-semibold">Knowledge</span>
              <span className="text-[color:var(--color-forge)] font-semibold ml-1.5">Foundry</span>
            </motion.div>

            {/* Terminal readout */}
            <div className="min-h-[92px] flex flex-col items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[11px] md:text-[12px] tracking-[0.08em] uppercase">
              {lines.map((l, i) => (
                <motion.div
                  key={l.key}
                  className={`flex items-center gap-3 ${
                    activeStep > i + 1
                      ? "text-white/45"
                      : activeStep === i + 1
                      ? "text-[color:var(--color-forge)]"
                      : "text-white/0"
                  } transition-colors duration-300`}
                >
                  <span className="text-white/40">›</span>
                  <span>{l.text}</span>
                  {activeStep === i + 1 && (
                    <motion.span
                      className="inline-block w-1.5 h-3 bg-[color:var(--color-forge)]"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar — segments fill in with each line */}
            <div className="flex items-center gap-1.5 mt-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="h-[3px] rounded-full bg-white/10 overflow-hidden"
                  style={{ width: 48 }}
                  aria-hidden
                >
                  <motion.span
                    className="block h-full bg-[color:var(--color-forge)] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep > i ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  />
                </motion.span>
              ))}
            </div>

            {/* Ready pill */}
            <AnimatePresence>
              {phase === "ready" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="mt-1 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-forge)]/10 border border-[color:var(--color-forge)]/40 px-3 py-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
                  <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.16em] uppercase text-[color:var(--color-forge)]">
                    System ready
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
