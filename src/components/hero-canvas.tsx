"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Award-tier interactive hero background.
 *
 * A canvas 2D layer that renders:
 *   - Perspective isometric grid, subtly warped toward the cursor
 *   - Two ambient orange plasma blobs that drift and follow the cursor slowly
 *   - Fine noise/dither overlay
 *
 * Zero heavy deps — pure canvas + rAF. Respects prefers-reduced-motion by
 * rendering a single static frame.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Phones: 1x backing store and ~24fps. The cursor effects do nothing on
    // touch, and a full-screen 2x canvas at 60fps starves the main thread.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const dpr = coarse ? 1 : Math.min(2, window.devicePixelRatio || 1);
    const minFrameMs = coarse ? 1000 / 24 : 0;
    let width = 0;
    let height = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Cursor state (normalized 0..1)
    let mx = 0.65;
    let my = 0.45;
    let tmx = 0.65;
    let tmy = 0.45;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tmx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      tmy = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    };
    const parent = canvas.parentElement || document.body;
    parent.addEventListener("mousemove", onMove, { passive: true });

    // Pre-rendered noise pattern (small, tileable)
    const noiseSize = 128;
    const noiseCanvas = document.createElement("canvas");
    noiseCanvas.width = noiseSize;
    noiseCanvas.height = noiseSize;
    const nctx = noiseCanvas.getContext("2d")!;
    const imgData = nctx.createImageData(noiseSize, noiseSize);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = 200 + Math.random() * 55;
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
      imgData.data[i + 3] = 16; // very subtle alpha
    }
    nctx.putImageData(imgData, 0, 0);
    const noisePattern = ctx.createPattern(noiseCanvas, "repeat")!;

    // Isometric grid vertices
    const gridStep = 44;
    const drawGrid = () => {
      const cx = mx * width;
      const cy = my * height;
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      // Horizontal lines with slight bulge toward cursor
      for (let y = -gridStep; y <= height + gridStep; y += gridStep) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += gridStep / 2) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = Math.max(0, 1 - dist / 380);
          const warp = -14 * falloff * falloff;
          const yy = y + warp;
          if (x === 0) ctx.moveTo(x, yy);
          else ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
      // Vertical lines
      for (let x = -gridStep; x <= width + gridStep; x += gridStep) {
        ctx.beginPath();
        for (let y = 0; y <= height; y += gridStep / 2) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = Math.max(0, 1 - dist / 380);
          const warp = -14 * falloff * falloff;
          const xx = x + warp;
          if (y === 0) ctx.moveTo(xx, y);
          else ctx.lineTo(xx, y);
        }
        ctx.stroke();
      }
      ctx.restore();
    };

    // Plasma glow (radial gradient) that follows cursor
    const drawPlasma = (t: number) => {
      const cx = mx * width;
      const cy = my * height;
      const r = 380 + Math.sin(t * 0.0009) * 40;

      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g1.addColorStop(0, "rgba(239,103,4,0.35)");
      g1.addColorStop(0.35, "rgba(239,103,4,0.10)");
      g1.addColorStop(1, "rgba(239,103,4,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Second slower blob for depth
      const bx = width * 0.2 + Math.sin(t * 0.0004) * 80;
      const by = height * 0.7 + Math.cos(t * 0.0005) * 60;
      const g2 = ctx.createRadialGradient(bx, by, 0, bx, by, 500);
      g2.addColorStop(0, "rgba(255,125,26,0.18)");
      g2.addColorStop(1, "rgba(255,125,26,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    };

    // Reveal spotlight — a slightly lighter, cursor-tracked circle
    const drawSpotlight = () => {
      const cx = mx * width;
      const cy = my * height;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
      g.addColorStop(0, "rgba(255,255,255,0.05)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    let raf = 0;
    let last = 0;
    const frame = (t: number) => {
      if (t - last < minFrameMs) {
        raf = requestAnimationFrame(frame);
        return;
      }
      // ease cursor
      mx += (tmx - mx) * 0.08;
      my += (tmy - my) * 0.08;

      // Background base
      ctx.fillStyle = "#0d0f14";
      ctx.fillRect(0, 0, width, height);

      drawPlasma(t);
      drawGrid();
      drawSpotlight();

      // Fine grain
      ctx.fillStyle = noisePattern;
      ctx.fillRect(0, 0, width, height);

      last = t;
      raf = requestAnimationFrame(frame);
    };

    if (reduce) {
      // single static frame
      mx = 0.65;
      my = 0.45;
      ctx.fillStyle = "#0d0f14";
      ctx.fillRect(0, 0, width, height);
      drawPlasma(0);
      drawGrid();
      drawSpotlight();
      ctx.fillStyle = noisePattern;
      ctx.fillRect(0, 0, width, height);
    }

    // Only animate while the hero is on screen and the tab is visible.
    let onScreen = true;
    const sync = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      if (!reduce && onScreen && !document.hidden) raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    const onVis = () => sync();
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none block"
      aria-hidden
    />
  );
}
