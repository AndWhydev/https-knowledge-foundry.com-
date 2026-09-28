"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Decorative looping video that costs nothing until it matters.
 *
 * An optimised still (next/image) always renders first. The video is only
 * requested once the block is near the viewport, and never on phones, on
 * Save-Data connections, or with reduced motion; they keep the still.
 */
export function LazyLoopVideo({
  src,
  poster,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  liveLabel,
}: {
  src: string;
  poster: string;
  sizes?: string;
  /** Status pill shown only while the video is actually playing, never over the still. */
  liveLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);

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
    <div ref={ref} className="relative aspect-video">
      <Image src={poster} alt="" fill sizes={sizes} className="object-cover" aria-hidden />
      {load && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {liveLabel && playing && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur border border-white/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
          <span className="text-[11px] font-medium tracking-tight text-white/80">{liveLabel}</span>
        </div>
      )}
    </div>
  );
}
