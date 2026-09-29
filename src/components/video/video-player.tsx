"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Play, RotateCcw, ArrowRight } from "lucide-react";

/**
 * Explainer video player. Nothing is downloaded until the viewer presses
 * play (preload="none" plus a poster), so a page with ten videos costs one
 * image each. Native controls, so keyboard, captions, and fullscreen work.
 */
export function VideoPlayer({
  src,
  poster,
  title,
  next,
  autoPlay = false,
}: {
  src: string;
  poster: string;
  title: string;
  next?: { title: string; href: string };
  autoPlay?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(autoPlay);
  const [ended, setEnded] = useState(false);

  const play = () => {
    setStarted(true);
    setEnded(false);
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline-strong)] bg-[#0d0f14] shadow-[var(--shadow-lifted)]">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full"
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        autoPlay={autoPlay}
        onPlay={() => {
          setStarted(true);
          setEnded(false);
        }}
        onEnded={() => setEnded(true)}
        aria-label={title}
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/0 transition-colors"
          aria-label={`Play video: ${title}`}
        >
          <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[color:var(--color-forge)] text-white shadow-lg transition-transform group-hover:scale-105">
            <Play className="h-7 w-7 md:h-8 md:w-8 translate-x-0.5" fill="currentColor" aria-hidden />
          </span>
        </button>
      )}

      {ended && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0d0f14]/85 px-6 text-center text-white">
          {next ? (
            <>
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-white/60">
                Up next
              </div>
              <div className="text-[20px] md:text-[24px] font-semibold tracking-tight font-[family-name:var(--font-display)]">
                {next.title}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={next.href}
                  className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-forge)] px-5 text-[14px] font-medium"
                >
                  Watch next
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <button type="button" onClick={play} className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] border border-white/20 px-5 text-[14px] font-medium text-white/85">
                  <RotateCcw className="h-4 w-4" aria-hidden />
                  Replay
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-[20px] md:text-[24px] font-semibold tracking-tight font-[family-name:var(--font-display)]">
                See it on your own material.
              </div>
              <Link
                href="/demonstration"
                className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] bg-[color:var(--color-forge)] px-5 text-[14px] font-medium"
              >
                Request a demonstration
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
