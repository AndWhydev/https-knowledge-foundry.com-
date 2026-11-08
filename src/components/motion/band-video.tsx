"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

/**
 * Ambient background clip for dark bands, with slow parallax. Loads near the
 * viewport on tablet and up only; phones, Save-Data and reduced motion keep
 * the poster.
 */
export function BandVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-10%", "10%"]);

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
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Image src={poster} alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
        {load && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onPlaying={() => setPlaying(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </motion.div>
    </div>
  );
}
