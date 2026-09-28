"use client";

import { useEffect } from "react";

/** Marks <html> once React has hydrated, which switches off the CSS reveal fallback in globals.css. */
export function HydrationFlag() {
  useEffect(() => {
    document.documentElement.classList.add("kf-hydrated");
  }, []);
  return null;
}
