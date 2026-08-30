import Link from "next/link";
import { Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section id="sertifikasi" eyebrow="Sertifikasi" title="Sertifikasi yang tersedia di repository." description="Menampilkan file sertifikasi yang tersedia. Link verifikasi resmi dapat diperbarui di file konfigurasi data ketika credential URL sudah disiapkan.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification) => (
          <article key={certification.exam} className="rounded-lg border border-white/10 bg-slate-950/60 p-6">
            <Award className="text-sky-200" size={24} aria-hidden />
            <p className="mt-5 font-mono text-sm text-slate-400">{certification.issuer}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-50">{certification.name}</h3>
            <p className="mt-2 text-sm text-slate-400">Exam: {certification.exam}</p>
            <p className="mt-2 text-sm text-emerald-200">Status: {certification.status}</p>
            <Link href={certification.href} className="mt-5 inline-flex rounded-md text-sm font-semibold text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">Buka file sertifikasi</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}