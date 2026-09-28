import type { Metadata } from "next";
import { LearnIndex } from "@/components/learn/learn-index";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Guides",
  description: "Step by step methods for building, evidencing, and maintaining training in regulated organizations, with checklists and sources.",
};

export default function Page() {
  return <LearnIndex kind="guide" />;
}
