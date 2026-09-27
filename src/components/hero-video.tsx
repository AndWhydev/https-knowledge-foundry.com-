"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Lazy-loaded looping hero video. Never the LCP element — the fallback still is
 * always loaded first via next/image (or CSS gradient), and the video swaps in
 * once idle and visible.
 */
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(cb)
        : setTimeout(cb, 400);
    idle(() => setReady(true));
  }, [reduce]);

  if (reduce) return null;

  return (
    <video
      ref={ref}
      className={cn("w-full h-full object-cover pointer-events-none block", className)}
      autoPlay={ready}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden
      tabIndex={-1}
    >
      {ready && <source src={src} type="video/mp4" />}
    </video>
  );
}
