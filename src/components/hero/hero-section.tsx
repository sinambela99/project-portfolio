import Link from "next/link";
import { Boxes, Cloud, Code2, GitBranch, Radar, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";

const pipeline = [
  { label: "Git", icon: GitBranch },
  { label: "CI/CD", icon: Code2 },
  { label: "Security", icon: ShieldCheck },
  { label: "Container Registry", icon: Boxes },
  { label: "Kubernetes", icon: Cloud },
  { label: "Observability", icon: Radar },
];

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(110deg,rgba(8,20,33,0.96),rgba(7,17,31,0.82),rgba(13,34,49,0.72))]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-sky-300">DEVOPS ENGINEER • CLOUD • DEVSECOPS</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">Membangun infrastruktur cloud yang aman, skalabel, dan andal.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">Saya membangun dan mengotomasi infrastruktur cloud, platform Kubernetes, pipeline CI/CD, serta proses DevSecOps dengan fokus pada keamanan, reliability, dan automation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#project" className="rounded-md bg-sky-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Lihat Project</Link>
            <Link href="/architecture" className="rounded-md border border-white/15 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200">Jelajahi Arsitektur</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-400">
            <Link href="https://github.com/sinambela99/project-portfolio" target="_blank" rel="noreferrer noopener" className="text-sky-200 hover:text-sky-100">github.com/sinambela99/project-portfolio</Link>
            <Link href="https://www.linkedin.com/in/ian-paulus-sinambela/" target="_blank" rel="noreferrer noopener" className="text-sky-200 hover:text-sky-100">linkedin.com/in/ian-paulus-sinambela</Link>
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-[#070d17] p-4 shadow-xl shadow-black/25">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="font-mono text-sm text-slate-300">platform-review.txt</p>
            <span className="rounded border border-slate-700 px-2.5 py-1 font-mono text-xs text-slate-400">portfolio</span>
          </div>
          <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4 font-mono text-xs leading-6 text-slate-300">
            <span className="text-sky-300">$</span> delivery path --environment production<br />
            source -&gt; scan -&gt; build -&gt; registry -&gt; aks -&gt; telemetry
          </div>
          <div className="mt-4 grid gap-2">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative flex items-center gap-4 rounded border border-white/10 bg-white/[0.025] px-4 py-3">
                  <span className="grid size-9 place-items-center rounded bg-[#10233a] text-sky-200"><Icon size={18} aria-hidden /></span>
                  <span className="font-mono text-sm text-slate-100">{step.label}</span>
                  {index < pipeline.length - 1 ? <span className="pipeline-flow absolute -bottom-3 left-9 h-3 w-px bg-sky-300/50" aria-hidden /> : null}
                </div>
              );
            })}
          </div>
          <div className="mt-5 rounded border border-white/10 bg-[#081421] p-4">
            <p className="font-mono text-sm text-slate-100">Ringkasan Sistem</p>
            <div className="mt-4 grid gap-3 text-sm">
              {["Infrastruktur: Terstruktur", "CI/CD: Otomatis", "Keamanan: Terintegrasi", "Kubernetes: Containerized", "Observability: Terpantau"].map((item) => (
                <div key={item} className="flex items-center justify-between gap-4 text-slate-300"><span>{item.split(":")[0]}</span><span className="flex items-center gap-2 text-emerald-200"><span className="size-2 rounded-full bg-emerald-300" aria-hidden />{item.split(": ")[1]}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Section id="tentang-saya" eyebrow="Tentang Saya" title="Berfokus pada infrastructure, automation, dan reliability." description="Saya bekerja pada area DevOps dan Cloud Infrastructure dengan fokus pada otomasi, containerization, Kubernetes, CI/CD, Infrastructure as Code, security, dan observability.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Jabatan", "DevOps Engineer"],
            ["Fokus", "Cloud & Platform Engineering"],
            ["Cloud", "Microsoft Azure"],
            ["Container", "Docker & Kubernetes"],
            ["Automation", "Terraform & CI/CD"],
            ["Security", "DevSecOps"],
            ["Observability", "Prometheus, Grafana, Loki, OpenTelemetry, LGTM"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-3 text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}