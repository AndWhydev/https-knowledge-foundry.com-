"use client";

import { useEffect, useState } from "react";

/**
 * Sitewide fine-noise grain overlay. Renders once as a fixed background SVG
 * data URI at 6% opacity with mix-blend-multiply on light bg and screen on
 * dark bg. Adds texture depth without impacting perf (single element, no rAF).
 */
export function Grain() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block opacity-[0.055] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence baseFrequency='0.92' numOctaves='3' seed='7'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='1'/></svg>\")",
        backgroundSize: "180px",
      }}
    />
  );
}
