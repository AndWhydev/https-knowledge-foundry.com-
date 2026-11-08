"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Pins a section and turns vertical scroll into horizontal travel along a
 * card track (desktop only). Below lg, or with reduced motion, the children
 * render in the fallback grid instead.
 */
export function HorizontalRail({
  header,
  children,
  fallbackClassName = "grid md:grid-cols-2 gap-4",
}: {
  header: ReactNode;
  children: ReactNode;
  fallbackClassName?: string;
}) {
  const reduce = useReducedMotionSafe();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  if (!desktop || reduce) {
    return (
      <section className="py-16 md:py-28">
        {header}
        <div className="mx-auto px-5 md:px-8 xl:px-12 max-w-[1280px]">
          <div className={fallbackClassName}>{children}</div>
        </div>
      </section>
    );
  }

  // Separate component so the scroll hook binds to the pinned section on its own mount.
  return <PinnedRail header={header}>{children}</PinnedRail>;
}

function PinnedRail({ header, children }: { header: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => -p * distance);

  return (
    <section ref={ref} className="relative" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {header}
        <motion.div ref={trackRef} style={{ x }} className="flex gap-5 pl-[max(3rem,calc((100vw-1280px)/2+3rem))] pr-12 w-max">
          {children}
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-[1280px] px-12">
          <div className="h-px w-full bg-[color:var(--color-hairline-strong)] overflow-hidden">
            <motion.div className="h-full origin-left bg-[color:var(--color-forge)]" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </section>
  );
}
