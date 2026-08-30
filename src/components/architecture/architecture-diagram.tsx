"use client";

import { useState } from "react";

const nodes = [
  { name: "Developer", detail: "Perubahan dimulai dari source code dan review." },
  { name: "Git Repository", detail: "Riwayat perubahan menjadi sumber deployment yang dapat diaudit." },
  { name: "CI/CD", detail: "Azure DevOps atau GitHub Actions menjalankan build, test, dan gate." },
  { name: "Security Scanning", detail: "CodeQL, Gitleaks, Trivy, dan Checkov berjalan sebelum release." },
  { name: "Container Registry", detail: "Azure Container Registry menyimpan image yang sudah melewati gate." },
  { name: "Kubernetes", detail: "AKS menjalankan ingress, application, network policy, Key Vault CSI, dan strategi release seperti canary atau blue-green." },
  { name: "Observability", detail: "Prometheus, Grafana, Loki, OpenTelemetry, dan konsep LGTM memberi sinyal operasional." },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState(nodes[3]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="overflow-x-auto rounded border border-zinc-800 bg-[#111214] p-5">
        <div className="flex min-w-[820px] items-center gap-3">
          {nodes.map((node, index) => (
            <div key={node.name} className="flex items-center gap-3">
              <button type="button" onMouseEnter={() => setActive(node)} onClick={() => setActive(node)} className="h-28 w-32 rounded border border-zinc-800 bg-black/15 p-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">
                {node.name}
              </button>
              {index < nodes.length - 1 ? <span className="h-px w-10 bg-zinc-700" aria-hidden /> : null}
            </div>
          ))}
        </div>
      </div>
      <aside className="rounded border border-zinc-800 bg-[#111214] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-zinc-500">Komponen aktif</p>
        <h3 className="mt-3 text-2xl font-semibold text-zinc-100">{active.name}</h3>
        <p className="mt-4 leading-8 text-zinc-400">{active.detail}</p>
        <div className="mt-6 rounded border border-zinc-800 bg-black/20 p-4 font-mono text-sm leading-7 text-zinc-400">
          Developer<br />Git Repository<br />Azure DevOps / GitHub Actions<br />CI Pipeline: CodeQL, Gitleaks, Trivy, Checkov<br />Azure Container Registry<br />AKS: Ingress, Application, Network Policy, Key Vault CSI, Canary / Blue-Green<br />Prometheus, Grafana, Loki, Tempo, Mimir, OpenTelemetry
        </div>
      </aside>
    </div>
  );
}