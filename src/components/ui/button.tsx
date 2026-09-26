import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

const button = cva(
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--color-ink)] text-white hover:bg-[color:var(--color-forge)] shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_-8px_rgba(239,103,4,0.5)]",
        secondary:
          "bg-white text-[color:var(--color-ink)] border border-[color:var(--color-hairline-strong)] hover:border-[color:var(--color-ink)] hover:-translate-y-px",
        ghost:
          "text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]",
        forge:
          "bg-[color:var(--color-forge)] text-white hover:bg-[color:var(--color-forge-hot)] shadow-[0_8px_24px_-8px_rgba(239,103,4,0.5)]",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-[var(--radius-sm)]",
        md: "h-11 px-5 text-[14px] rounded-[var(--radius-md)]",
        lg: "h-[52px] px-7 text-[15px] rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof button> & {
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<ComponentProps<typeof Link>, "className" | "children" | "href">;
type ButtonAsButton = ButtonBaseProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant, size, arrow, className, children } = props;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, arrow: _a, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={cn(button({ variant, size }), className)} {...rest}>
        {inner}
      </Link>
    );
  }
  const { arrow: _a, variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props as ButtonAsButton;
  return (
    <button className={cn(button({ variant, size }), className)} {...rest}>
      {inner}
    </button>
  );
}
