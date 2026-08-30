import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="project" eyebrow="Project" title="Project yang menunjukkan delivery, security, infrastructure, dan observability." description="Setiap project disusun dari data terpisah agar konten mudah dipelihara dan dapat diperluas tanpa mengubah struktur komponen.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="group rounded border border-zinc-800 bg-[#111214] p-6 transition hover:border-zinc-600 hover:bg-[#15161a]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
              <ArrowUpRight className="text-zinc-500 transition group-hover:text-zinc-200" size={20} aria-hidden />
            </div>
            <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded border border-zinc-800 px-2.5 py-1.5 font-mono text-xs text-zinc-400">{tech}</span>
              ))}
            </div>
            <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex rounded text-sm font-semibold text-zinc-200 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">Lihat detail project</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}