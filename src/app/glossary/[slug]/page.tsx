import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearnArticle } from "@/components/learn/learn-article";
import { getLearnPage, learnHref, learnPagesOf } from "@/lib/learn";

export const dynamicParams = false;

export function generateStaticParams() {
  return learnPagesOf("glossary").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getLearnPage("glossary", (await params).slug);
  if (!page) return {};
  return {
    alternates: { canonical: learnHref(page) },
    title: page.seoTitle,
    description: page.description,
    openGraph: { type: "article", title: page.title, description: page.description, publishedTime: page.published, modifiedTime: page.updated },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const page = getLearnPage("glossary", (await params).slug);
  if (!page) notFound();
  return <LearnArticle page={page} />;
}
