import type { Metadata } from "next";
import { LearnIndex } from "@/components/learn/learn-index";

export const metadata: Metadata = {
  alternates: { canonical: "/compare" },
  title: "Comparisons",
  description: "Side by side explanations of commonly confused learning formats, tools, and methods, written for L&D, compliance, and risk teams.",
};

export default function Page() {
  return <LearnIndex kind="comparison" />;
}
