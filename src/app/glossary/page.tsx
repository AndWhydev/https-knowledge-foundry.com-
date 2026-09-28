import type { Metadata } from "next";
import { LearnIndex } from "@/components/learn/learn-index";

export const metadata: Metadata = {
  alternates: { canonical: "/glossary" },
  title: "Glossary",
  description: "Plain definitions of the terms used in structured learning, compliance training, competency, and knowledge governance, with sources.",
};

export default function Page() {
  return <LearnIndex kind="glossary" />;
}
