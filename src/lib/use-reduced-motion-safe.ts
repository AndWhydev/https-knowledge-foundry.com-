"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Reduced-motion preference that is hydration safe.
 *
 * motion's useReducedMotion is null on the server but true/false on the
 * client's first render, so any markup that branches on it mismatches for
 * reduced-motion users. This returns false until mounted, then the real value.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? !!reduce : false;
}
