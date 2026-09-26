import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({ children, className, size = "default" }: { children: ReactNode; className?: string; size?: "default" | "narrow" | "wide" }) {
  return (
    <div
      className={cn(
        "mx-auto px-5 md:px-8 xl:px-12 w-full",
        size === "default" && "max-w-[1280px]",
        size === "narrow" && "max-w-[880px]",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  as: Tag = "section",
  spacing = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  spacing?: "default" | "compact" | "loose" | "flush";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        spacing === "default" && "py-20 md:py-28",
        spacing === "compact" && "py-14 md:py-20",
        spacing === "loose" && "py-28 md:py-40",
        spacing === "flush" && "py-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.14em] font-medium text-[color:var(--color-forge)]",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-[color:var(--color-forge)]/60" />
      {children}
    </span>
  );
}
