import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="keahlian" eyebrow="Keahlian" title="Kemampuan teknis yang dipetakan berdasarkan area kerja." description="Tidak menggunakan persentase subjektif; setiap kategori menunjukkan area teknologi yang relevan dengan infrastructure, delivery, security, dan operasi platform.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-white/10 bg-slate-950/60 p-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.16em] text-sky-200">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}