import { Section } from "@/components/ui/section";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="pengalaman" eyebrow="Pengalaman" title="Pengalaman profesional." description="Timeline dibuat berdasarkan data yang diberikan, tanpa klaim angka atau achievement tambahan.">
      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article key={experience.company} className="relative rounded border border-zinc-800 bg-[#111214] p-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-zinc-700">
            <div className="relative pl-8">
              <span className="absolute left-[-6px] top-2 size-3 rounded-full bg-zinc-400" aria-hidden />
              <p className="font-mono text-sm text-zinc-500">{experience.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{experience.role}</h3>
              <p className="mt-1 text-zinc-400">{experience.company}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.focus.map((item) => <span key={item} className="rounded border border-zinc-800 px-3 py-2 text-sm text-zinc-400">{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}