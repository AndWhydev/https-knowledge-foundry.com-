"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow } from "@/components/ui/container";

type Step = { n: string; title: string; desc: string };

/**
 * Pinned, scroll-scrubbed process section (tablet and up).
 *
 * The section is tall; its inner stage sticks to the viewport while the
 * Higgsfield clip scrubs frame by frame with scroll position and the four
 * steps hand over in turn. The clip is encoded with a short keyframe
 * interval so seeking stays smooth in both directions.
 *
 * The video is only fetched once the section is near the viewport, and never
 * with reduced motion or Save-Data; those keep the poster still while the
 * steps still advance with scroll.
 */
export function ForgeScroll({
  src,
  poster,
  steps,
}: {
  src: string;
  poster: string;
  steps: Step[];
}) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const target = useRef(0);
  const reduce = useReducedMotion();
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    target.current = p;
    setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
  });

  // Fetch the clip once the section is close.
  useEffect(() => {
    if (reduce) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  // Ease currentTime toward the scroll target so the scrub glides rather than steps.
  useEffect(() => {
    if (!ready) return;
    const v = videoRef.current;
    if (!v) return;
    let raf = 0;
    let current = v.currentTime;
    const tick = () => {
      const goal = target.current * Math.max(0, v.duration - 0.05);
      current += (goal - current) * 0.12;
      if (Math.abs(goal - current) > 0.01 && !v.seeking) v.currentTime = current;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready]);

  return (
    <section ref={ref} className="relative bg-[#0d0f14] text-white" style={{ height: `${steps.length * 85 + 60}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Film sits right of the copy on desktop so the lattice builds beside the steps */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[72%]">
        <Image src={poster} alt="" fill sizes="(min-width: 1024px) 72vw, 100vw" className="object-cover" aria-hidden />
        {load && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
            muted
            playsInline
            preload="auto"
            aria-hidden
            onLoadedData={() => setReady(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
        </div>
        {/* Legibility wash: dark on the copy side, open on the image side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] from-30% via-[#0d0f14]/60 via-50% to-transparent to-75%" aria-hidden />
        {/* Portrait tablets: the film sits behind the copy, so dim it evenly */}
        <div className="absolute inset-0 bg-[#0d0f14]/55 lg:hidden" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0f14] to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0f14] to-transparent" aria-hidden />

        <Container className="relative h-full flex flex-col justify-center">
          <Eyebrow>The system</Eyebrow>
          <h2 className="text-display-2 mt-5 text-white max-w-[16ch]">
            Four moves, in the only order that works.
          </h2>

          <div className="mt-12 grid grid-cols-[auto_minmax(0,1fr)] gap-8 max-w-[640px]">
            {/* Step rail */}
            <ol className="flex flex-col gap-3 pt-1" aria-label="Process steps">
              {steps.map((s, i) => (
                <RailTick key={s.n} index={i} count={steps.length} progress={scrollYProgress} label={s.n} active={i === active} />
              ))}
            </ol>

            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="font-[family-name:var(--font-jetbrains)] text-[12px] tracking-[0.16em] text-[color:var(--color-forge)]">
                    STEP {steps[active].n} / {String(steps.length).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-white text-[44px] lg:text-[56px] leading-[1.02] font-semibold tracking-tight font-[family-name:var(--font-display)]">
                    {steps[active].title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-[1.6] text-white/70 max-w-[46ch]">{steps[active].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>

        {/* Scroll cue, fades once the scrub starts */}
        <ScrollCue progress={scrollYProgress} />
      </div>
    </section>
  );
}

function RailTick({
  index,
  count,
  progress,
  label,
  active,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  label: string;
  active: boolean;
}) {
  const fill = useTransform(progress, [index / count, (index + 1) / count], [0, 1], { clamp: true });
  return (
    <li className="flex items-center gap-3">
      <span className={`font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.12em] transition-colors ${active ? "text-white" : "text-white/35"}`}>
        {label}
      </span>
      <span className="relative h-10 w-[2px] bg-white/12 overflow-hidden rounded-full">
        <motion.span className="absolute inset-x-0 top-0 h-full origin-top bg-[color:var(--color-forge)]" style={{ scaleY: fill }} />
      </span>
    </li>
  );
}

function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.06], [1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] text-white/50">SCROLL</span>
      <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
    </motion.div>
  );
}
