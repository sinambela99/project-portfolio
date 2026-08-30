import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="project" eyebrow="Project" title="Project yang menunjukkan delivery, security, infrastructure, dan observability." description="Setiap project disusun dari data terpisah agar konten mudah dipelihara dan dapat diperluas tanpa mengubah struktur komponen.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="group rounded-lg border border-white/10 bg-[#081421] p-6 transition hover:border-sky-300/40 hover:bg-[#0a1828]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
              <ArrowUpRight className="text-slate-500 transition group-hover:text-sky-200" size={20} aria-hidden />
            </div>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-xs text-slate-300">{tech}</span>
              ))}
            </div>
            <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex rounded-md text-sm font-semibold text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">Lihat detail project</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}