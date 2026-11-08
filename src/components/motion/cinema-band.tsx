"use client";

import Image from "next/image";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Full-bleed ambient video band with scroll parallax.
 * The clip drifts slower than the page and the statement scales into place.
 * Video loads near the viewport on tablet and up only; phones, Save-Data and
 * reduced motion keep the poster.
 */
export function CinemaBand({ src, poster, children }: { src: string; poster: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], reduce ? [1, 1] : [0.92, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.45], reduce ? [1, 1] : [0, 1]);

  useEffect(() => {
    if (reduce) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[90vh] overflow-hidden bg-[#0d0f14] text-white">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <Image src={poster} alt="" fill sizes="100vw" className="object-cover" aria-hidden />
        {load && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            onPlaying={() => setPlaying(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,15,20,0.35),rgba(13,15,20,0.85))]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d0f14] to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0f14] to-transparent" aria-hidden />
      <motion.div style={{ scale, opacity: textOpacity }} className="relative h-full flex items-center justify-center px-5 text-center">
        {children}
      </motion.div>
    </section>
  );
}
