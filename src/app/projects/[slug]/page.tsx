import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title} | Ian Sinambela` : "Project | Ian Sinambela",
    description: project?.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    ["Ringkasan", project.summary],
    ["Masalah", project.problem],
    ["Solusi", project.solution],
    ["Deployment", project.deployment],
    ["Observability", project.observability],
    ["Hasil", project.result],
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
      <Link href="/#project" className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><ArrowLeft size={16} aria-hidden />Kembali ke Project</Link>
      <p className="mt-10 font-mono text-sm uppercase tracking-[0.18em] text-sky-300">Project Detail</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-50 sm:text-5xl">{project.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
      <div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-md border border-white/10 px-3 py-2 font-mono text-xs text-slate-300">{tech}</span>)}</div>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-5">
          {sections.map(([title, body]) => <section key={title} className="rounded-lg border border-white/10 bg-[#081421] p-6"><h2 className="text-xl font-semibold text-slate-50">{title}</h2><p className="mt-3 leading-8 text-slate-300">{body}</p></section>)}
          <section className="rounded-lg border border-white/10 bg-[#081421] p-6"><h2 className="text-xl font-semibold text-slate-50">Keamanan</h2><ul className="mt-4 grid gap-3 text-slate-300">{project.security.map((item) => <li key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3">{item}</li>)}</ul></section>
          <section className="rounded-lg border border-white/10 bg-[#081421] p-6"><h2 className="text-xl font-semibold text-slate-50">Pelajaran</h2><ul className="mt-4 grid gap-3 text-slate-300">{project.lessons.map((item) => <li key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3">{item}</li>)}</ul></section>
        </div>
        <aside className="grid gap-5 self-start lg:sticky lg:top-24">
          <section className="rounded-lg border border-white/10 bg-slate-950/60 p-6"><h2 className="font-mono text-sm text-sky-200">Arsitektur</h2><div className="mt-5 grid gap-3">{project.architecture.map((node, index) => <div key={node} className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-200"><span className="font-mono text-xs text-slate-500">0{index + 1}</span><p className="mt-1">{node}</p></div>)}</div></section>
          <section className="rounded-lg border border-white/10 bg-slate-950/60 p-6"><h2 className="font-mono text-sm text-sky-200">Code Snippet</h2><pre className="mt-5 overflow-x-auto rounded-md border border-white/10 bg-black/30 p-4 text-sm leading-7 text-slate-300"><code>{project.snippet}</code></pre></section>
        </aside>
      </div>
    </article>
  );
}