import type { Metadata } from "next";
import { LearnIndex } from "@/components/learn/learn-index";

export const metadata: Metadata = {
  alternates: { canonical: "/regulations" },
  title: "Regulations",
  description: "Training and competence requirements by jurisdiction: Portugal and the EU, the United States, Japan, Australia and the UAE, plus international standards.",
};

export default function Page() {
  return <LearnIndex kind="regulation" />;
}
