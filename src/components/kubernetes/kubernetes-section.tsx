import { Section } from "@/components/ui/section";

export function KubernetesSection() {
  return (
    <Section id="kubernetes" eyebrow="Kubernetes" title="Cluster dashboard sebagai representasi platform." description="Data berikut adalah contoh statis untuk menunjukkan struktur cluster, bukan monitoring real-time.">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded border border-zinc-800 bg-[#111214] p-6">
          <p className="font-mono text-sm text-zinc-500">Cluster</p>
          <h3 className="mt-2 text-2xl font-semibold text-zinc-100">aks-devsecops</h3>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[["Nodes", "3"], ["Workloads", "12"], ["Healthy", "12"]].map(([label, value]) => (
              <div key={label} className="rounded border border-zinc-800 bg-black/15 p-4"><p className="text-2xl font-semibold text-zinc-100">{value}</p><p className="mt-1 text-xs text-zinc-500">{label}</p></div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Namespace", "application, monitoring, security, ingress, delivery"],
            ["Workload", "frontend, backend, monitoring, logging"],
            ["Security Controls", "NetworkPolicy, Key Vault CSI, controlled ingress"],
            ["Delivery", "Helm, canary, dan blue-green strategy"],
          ].map(([title, body]) => (
            <div key={title} className="rounded border border-zinc-800 bg-[#111214] p-5"><h3 className="font-mono text-sm text-zinc-500">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{body}</p></div>
          ))}
        </div>
      </div>
    </Section>
  );
}