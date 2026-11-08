import Link from "next/link";
import type { ReactNode } from "react";
import { findLearnPage, learnHref } from "@/lib/learn";

/**
 * Links to a learn-library page only once it is published (staged release,
 * LIVE_RELEASE). Before then it renders the text unlinked, so production never
 * links to a 404 and links appear on their own as each batch goes live.
 */
export function RegLink({ slug, children }: { slug: string; children: ReactNode }) {
  const page = findLearnPage(slug);
  if (!page) return <>{children}</>;
  return <Link href={learnHref(page)}>{children}</Link>;
}
