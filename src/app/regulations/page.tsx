import type { Metadata } from "next";
import { LearnIndex } from "@/components/learn/learn-index";

export const metadata: Metadata = {
  alternates: { canonical: "/regulations" },
  title: "Regulations",
  description: "What Australian regulations and international standards require of training, competence, and evidence, with links to the primary sources.",
};

export default function Page() {
  return <LearnIndex kind="regulation" />;
}
