import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Ian Sinambela | DevOps Engineer",
  description: "Portfolio Ian Sinambela, DevOps Engineer dengan fokus pada Azure, Kubernetes, Terraform, CI/CD, dan DevSecOps.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Ian Sinambela | DevOps Engineer",
    description: "Portfolio DevOps Engineer dengan fokus pada Azure, Kubernetes, Terraform, CI/CD, dan DevSecOps.",
    url: siteConfig.url,
    siteName: "Ian Sinambela Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Sinambela | DevOps Engineer",
    description: "Portfolio Ian Sinambela, DevOps Engineer dengan fokus pada Azure, Kubernetes, Terraform, CI/CD, dan DevSecOps.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  knowsAbout: ["Microsoft Azure", "Kubernetes", "Terraform", "CI/CD", "DevSecOps", "Observability"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}