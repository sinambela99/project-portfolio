import Link from "next/link";
import { Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section id="sertifikasi" eyebrow="Sertifikasi" title="Sertifikasi yang tersedia di repository." description="Menampilkan file sertifikasi yang tersedia. Link verifikasi resmi dapat diperbarui di file konfigurasi data ketika credential URL sudah disiapkan.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification) => (
          <article key={certification.exam} className="rounded border border-zinc-800 bg-[#111214] p-6">
            <Award className="text-zinc-400" size={24} aria-hidden />
            <p className="mt-5 font-mono text-sm text-zinc-500">{certification.issuer}</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-100">{certification.name}</h3>
            <p className="mt-2 text-sm text-zinc-500">Exam: {certification.exam}</p>
            <p className="mt-2 text-sm text-zinc-300">Status: {certification.status}</p>
            <Link href={certification.href} className="mt-5 inline-flex rounded text-sm font-semibold text-zinc-200 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">Buka file sertifikasi</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}