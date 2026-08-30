import { Section } from "@/components/ui/section";

export function ObservabilitySection() {
  return (
    <Section id="observability" eyebrow="Observability" title="Metrics, logs, dan traces untuk membaca kondisi sistem." description="Application monitoring adalah praktik pemantauan aplikasi. LGTM adalah salah satu stack observability: Loki, Grafana, Tempo, dan Mimir. Di portfolio ini telemetry ditampilkan sebagai contoh statis.">
      <div className="grid gap-5 lg:grid-cols-3">
        {["Metrics: Prometheus / Mimir", "Logs: Loki", "Traces: Tempo / OpenTelemetry"].map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-[#081421] p-6"><h3 className="text-lg font-semibold text-slate-50">{item.split(": ")[0]}</h3><p className="mt-3 text-slate-300">{item.split(": ")[1]}</p></div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/60 p-6">
        <div className="flex items-center justify-between"><h3 className="font-mono text-sm text-slate-100">Contoh telemetry</h3><span className="text-xs text-slate-500">demo statis</span></div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[["CPU Usage", "38%"], ["Memory Usage", "61%"], ["Request Rate", "1.2k/min"], ["Latency", "128ms"], ["Error Rate", "0.4%"]].map(([label, value]) => (
            <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-4"><p className="text-2xl font-semibold text-slate-50">{value}</p><p className="mt-2 text-xs text-slate-500">{label}</p></div>
          ))}
        </div>
      </div>
    </Section>
  );
}