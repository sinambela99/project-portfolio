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
    <section id="beranda" className="relative overflow-hidden border-b border-zinc-700/70 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#1c1d1f_0%,#18191b_54%,#151617_100%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-zinc-500">DevOps Engineer / Cloud / DevSecOps</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl">Membangun infrastruktur cloud yang aman, skalabel, dan andal.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">Saya bekerja di area cloud infrastructure, Kubernetes, CI/CD, Infrastructure as Code, security, dan observability untuk membangun sistem yang konsisten serta mudah dioperasikan.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#project" className="rounded bg-zinc-100 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">Lihat Project</Link>
            <Link href="/architecture" className="rounded border border-zinc-700 px-5 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">Jelajahi Arsitektur</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-zinc-500">
            <Link href="https://github.com/sinambela99/project-portfolio" target="_blank" rel="noreferrer noopener" className="text-zinc-300 hover:text-white">github.com/sinambela99/project-portfolio</Link>
            <Link href="https://www.linkedin.com/in/ian-paulus-sinambela/" target="_blank" rel="noreferrer noopener" className="text-zinc-300 hover:text-white">linkedin.com/in/ian-paulus-sinambela</Link>
          </div>
        </div>
        <div className="rounded border border-zinc-700/70 bg-[#202124] p-4 shadow-lg shadow-black/10">
          <div className="flex items-center justify-between border-b border-zinc-700/70 pb-4">
            <p className="font-mono text-sm text-zinc-300">platform-review.txt</p>
            <span className="rounded border border-zinc-600 px-2.5 py-1 font-mono text-xs text-zinc-400">portfolio</span>
          </div>
          <div className="mt-4 rounded border border-zinc-700/70 bg-[#18191b] p-4 font-mono text-xs leading-6 text-zinc-400">
            <span className="text-zinc-200">$</span> delivery path --environment production<br />
            source -&gt; scan -&gt; build -&gt; registry -&gt; aks -&gt; telemetry
          </div>
          <div className="mt-4 grid gap-2">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative flex items-center gap-4 rounded border border-zinc-700/70 bg-[#1b1c1f] px-4 py-3">
                  <span className="grid size-9 place-items-center rounded bg-[#26272a] text-zinc-300"><Icon size={18} aria-hidden /></span>
                  <span className="font-mono text-sm text-zinc-200">{step.label}</span>
                  {index < pipeline.length - 1 ? <span className="pipeline-flow absolute -bottom-3 left-9 h-3 w-px bg-zinc-600" aria-hidden /> : null}
                </div>
              );
            })}
          </div>
          <div className="mt-5 rounded border border-zinc-700/70 bg-[#18191b] p-4">
            <p className="font-mono text-sm text-zinc-200">Ringkasan Sistem</p>
            <div className="mt-4 grid gap-3 text-sm">
              {["Infrastruktur: Terstruktur", "CI/CD: Otomatis", "Keamanan: Terintegrasi", "Kubernetes: Containerized", "Observability: Terpantau"].map((item) => (
                <div key={item} className="flex items-center justify-between gap-4 text-zinc-400"><span>{item.split(":")[0]}</span><span className="flex items-center gap-2 text-zinc-200"><span className="size-2 rounded-full bg-zinc-400" aria-hidden />{item.split(": ")[1]}</span></div>
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
            <div key={label} className="rounded border border-zinc-700/70 bg-[#202124] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-zinc-500">{label}</p>
              <p className="mt-3 text-zinc-200">{value}</p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}