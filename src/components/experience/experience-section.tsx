import { Section } from "@/components/ui/section";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="pengalaman" eyebrow="Pengalaman" title="Pengalaman profesional." description="Timeline dibuat berdasarkan data yang diberikan, tanpa klaim angka atau achievement tambahan.">
      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article key={experience.company} className="relative rounded-lg border border-white/10 bg-[#081421] p-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-sky-300/20">
            <div className="relative pl-8">
              <span className="absolute left-[-6px] top-2 size-3 rounded-full bg-sky-300" aria-hidden />
              <p className="font-mono text-sm text-slate-400">{experience.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-50">{experience.role}</h3>
              <p className="mt-1 text-slate-300">{experience.company}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.focus.map((item) => <span key={item} className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300">{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}