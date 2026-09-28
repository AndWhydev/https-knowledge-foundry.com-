import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { CommandPalette } from "@/components/command-palette";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { Grain } from "@/components/motion/grain";
import { BootSequence } from "@/components/boot-sequence";
import { HydrationFlag } from "@/components/hydration-flag";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#12141a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      slogan: site.tagline,
      description: site.description,
      logo: `${site.url}/icon`,
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: site.contact.email,
          contactType: "Sales enquiries",
          areaServed: ["AU", "PT", "US", "JP", "AE"],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#software`,
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "AUD", availability: "https://schema.org/InStock", url: `${site.url}/demonstration` },
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-canvas)] text-[color:var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette />
        <CustomCursor />
        <Grain />
        <BootSequence />
        <HydrationFlag />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
