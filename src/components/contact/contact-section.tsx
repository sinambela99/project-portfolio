import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { externalLinkProps } from "@/lib/utils";

export function ContactSection() {
  const links = [
    { label: "GitHub", href: siteConfig.github, icon: ExternalLink, external: true },
    { label: "LinkedIn", href: siteConfig.linkedin, icon: ExternalLink, external: true },
    { label: "Email", href: siteConfig.email, icon: Mail, external: false },
    { label: "Download CV", href: siteConfig.cvPath, icon: Download, external: false },
  ];

  return (
    <Section id="kontak" eyebrow="Kontak" title="Mari membangun infrastruktur yang andal." description="Terbuka untuk diskusi mengenai DevOps, Cloud Infrastructure, Kubernetes, CI/CD, dan DevSecOps.">
      <div className="rounded-lg border border-white/10 bg-[#081421] p-6 sm:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => {
            const Icon = item.icon;
            const props = item.external ? externalLinkProps() : {};
            return (
              <Link key={item.label} href={item.href} {...props} className="inline-flex items-center justify-center gap-3 rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/40 hover:bg-sky-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                <Icon size={18} aria-hidden />{item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}