import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { allLearnPages, learnHref } from "@/lib/learn";

const LEARN_PATH = /^\/(glossary|guides|regulations|compare)\/[a-z0-9-]+$/;
let released: Set<string> | null = null;

/** Links to learn pages that are not released yet render as plain text, never as a 404. */
function isLive(href: string): boolean {
  if (!LEARN_PATH.test(href)) return true;
  released ??= new Set(allLearnPages().map(learnHref));
  return released.has(href);
}

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Renders the learn library's inline syntax: **bold** and [label](href). */
export function Inline({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[color:var(--color-ink)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const cls =
        "text-[color:var(--color-ink)] underline decoration-[color:var(--color-forge)]/50 underline-offset-[3px] hover:decoration-[color:var(--color-forge)]";
      if (href.startsWith("/") && !isLive(href)) return <Fragment key={i}>{label}</Fragment>;
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={cls} rel="noopener" target="_blank">
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Strips inline syntax for JSON-LD and meta text. */
export function plain(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}
