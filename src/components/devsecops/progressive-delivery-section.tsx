import { Section } from "@/components/ui/section";

export function ProgressiveDeliverySection() {
  return (
    <Section id="progressive-delivery" eyebrow="Progressive Delivery" title="Canary dan blue-green sebagai pola release." description="Argo Rollouts ditampilkan sebagai contoh tool, bukan klaim penggunaan utama. Fokusnya adalah konsep canary, blue-green, sinyal sehat, dan rollback saat metrik memburuk.">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-white/10 bg-[#081421] p-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-5 text-center"><p className="text-sm text-emerald-200">Stable</p><p className="mt-2 text-3xl font-semibold text-slate-50">90%</p></div>
            <span className="text-slate-500">/</span>
            <div className="rounded-md border border-sky-300/20 bg-sky-300/10 p-5 text-center"><p className="text-sm text-sky-200">Canary</p><p className="mt-2 text-3xl font-semibold text-slate-50">10%</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["10%", "25%", "50%", "100%"].map((step) => <span key={step} className="rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-slate-200">{step}</span>)}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/60 p-6">
          <h3 className="font-mono text-sm text-sky-200">Release Signals</h3>
          <div className="mt-4 grid gap-3">
            {["Error Rate", "Latency", "Request Rate"].map((metric) => <div key={metric} className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-300">{metric}</div>)}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 p-4 text-emerald-200">Rollout dilanjutkan</div>
            <div className="rounded-md border border-rose-300/20 bg-rose-300/10 p-4 text-rose-200">Rollback</div>
          </div>
        </div>
      </div>
    </Section>
  );
}