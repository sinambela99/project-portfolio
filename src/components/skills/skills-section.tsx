import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="keahlian" eyebrow="Keahlian" title="Kemampuan teknis yang dipetakan berdasarkan area kerja." description="Tidak menggunakan persentase subjektif; setiap kategori menunjukkan area teknologi yang relevan dengan infrastructure, delivery, security, dan operasi platform.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded border border-zinc-800 bg-[#111214] p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-zinc-500">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded border border-zinc-800 bg-black/15 px-3 py-2 text-sm text-zinc-300">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}