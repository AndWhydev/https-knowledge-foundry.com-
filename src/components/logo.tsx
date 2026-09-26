import { cn } from "@/lib/cn";

export function Logo({ className, monochrome = false }: { className?: string; monochrome?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark className="h-7 w-7" monochrome={monochrome} />
      <span className="font-[family-name:var(--font-display)] text-[15px] tracking-tight leading-none">
        <span className="font-semibold text-[color:var(--color-ink)]">Knowledge</span>
        <span className="ml-1 font-semibold text-[color:var(--color-forge)]">Foundry</span>
      </span>
    </span>
  );
}

export function LogoMark({ className, monochrome = false }: { className?: string; monochrome?: boolean }) {
  const forge = monochrome ? "currentColor" : "var(--color-forge)";
  const ink = monochrome ? "currentColor" : "var(--color-ink)";
  const inkSoft = monochrome ? "currentColor" : "var(--color-ink-soft)";
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* Isometric block pyramid — 6 cubes, one glowing */}
      <g>
        {/* base row */}
        <path d="M4 20 L10 17 L16 20 L10 23 Z" fill={inkSoft} />
        <path d="M10 23 L10 27 L4 24 L4 20 Z" fill={ink} opacity="0.9" />
        <path d="M10 23 L16 20 L16 24 L10 27 Z" fill={inkSoft} opacity="0.75" />

        <path d="M16 20 L22 17 L28 20 L22 23 Z" fill={inkSoft} />
        <path d="M22 23 L22 27 L16 24 L16 20 Z" fill={ink} opacity="0.9" />
        <path d="M22 23 L28 20 L28 24 L22 27 Z" fill={inkSoft} opacity="0.75" />

        {/* second row */}
        <path d="M10 14 L16 11 L22 14 L16 17 Z" fill={inkSoft} />
        <path d="M16 17 L16 21 L10 18 L10 14 Z" fill={ink} opacity="0.9" />
        <path d="M16 17 L22 14 L22 18 L16 21 Z" fill={inkSoft} opacity="0.75" />

        {/* apex — glowing */}
        <path d="M13 8 L19 5 L25 8 L19 11 Z" fill={forge} />
        <path d="M19 11 L19 15 L13 12 L13 8 Z" fill={forge} opacity="0.85" />
        <path d="M19 11 L25 8 L25 12 L19 15 Z" fill={forge} opacity="0.7" />
      </g>
    </svg>
  );
}
