import { Section } from "@/components/ui/section";

export function ProgressiveDeliverySection() {
  return (
    <Section id="progressive-delivery" eyebrow="Progressive Delivery" title="Canary dan blue-green sebagai pola release." description="Argo Rollouts ditampilkan sebagai contoh tool, bukan klaim penggunaan utama. Fokusnya adalah konsep canary, blue-green, sinyal sehat, dan rollback saat metrik memburuk.">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded border border-zinc-800 bg-[#111214] p-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded border border-zinc-800 bg-black/15 p-5 text-center"><p className="text-sm text-zinc-500">Stable</p><p className="mt-2 text-3xl font-semibold text-zinc-100">90%</p></div>
            <span className="text-zinc-600">/</span>
            <div className="rounded border border-zinc-700 bg-white/[0.04] p-5 text-center"><p className="text-sm text-zinc-400">Canary</p><p className="mt-2 text-3xl font-semibold text-zinc-100">10%</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["10%", "25%", "50%", "100%"].map((step) => <span key={step} className="rounded border border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-300">{step}</span>)}
          </div>
        </div>
        <div className="rounded border border-zinc-800 bg-[#111214] p-6">
          <h3 className="font-mono text-sm text-zinc-500">Release Signals</h3>
          <div className="mt-4 grid gap-3">
            {["Error Rate", "Latency", "Request Rate"].map((metric) => <div key={metric} className="rounded border border-zinc-800 bg-black/15 p-4 text-zinc-400">{metric}</div>)}
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