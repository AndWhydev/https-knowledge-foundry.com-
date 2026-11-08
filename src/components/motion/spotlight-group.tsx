"use client";

import type { ReactNode } from "react";

/**
 * Cursor-following glow for card grids. Sets --mx/--my on whichever
 * [data-spot] cell is under the pointer; cells paint their own glow from
 * those variables, so one listener serves the whole grid.
 */
export function SpotlightGroup({ children }: { children: ReactNode }) {
  return (
    <div
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const cell = (e.target as HTMLElement).closest<HTMLElement>("[data-spot]");
        if (!cell) return;
        const r = cell.getBoundingClientRect();
        cell.style.setProperty("--mx", `${e.clientX - r.left}px`);
        cell.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}
