"use client";

import { useState } from "react";
import { CheckCircle2, ShieldAlert, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { name: "Source Code", tool: "Git", goal: "Menjadi sumber perubahan yang dapat ditelusuri.", checks: "Commit, branch, dan pull request.", impact: "Perubahan masuk pipeline secara konsisten." },
  { name: "Build", tool: "Azure Pipelines", goal: "Membuat artefak aplikasi.", checks: "Dependency dan proses build.", impact: "Build gagal sebelum release jika kode tidak valid." },
  { name: "Test", tool: "Test Runner", goal: "Memvalidasi perilaku aplikasi.", checks: "Unit test dan quality check.", impact: "Mengurangi regresi sebelum image dibuat." },
  { name: "SAST", tool: "CodeQL", goal: "Mendeteksi potensi vulnerability pada source code.", checks: "Pattern vulnerability dan insecure code path.", impact: "Temuan kritikal dapat memblokir deployment." },
  { name: "Secret Scan", tool: "Gitleaks", goal: "Mendeteksi credential atau secret yang tidak sengaja dimasukkan ke repository.", checks: "Token, key, password, dan pola credential.", impact: "Pipeline berhenti sebelum secret tersebar." },
  { name: "Dependency Scan", tool: "Trivy", goal: "Memindai dependency terhadap vulnerability.", checks: "CVE dan dependency risk.", impact: "Dependency berisiko tinggi perlu diperbaiki." },
  { name: "Container Scan", tool: "Trivy", goal: "Memindai container image terhadap vulnerability dan misconfiguration.", checks: "Base image, package CVE, dan config image.", impact: "Image tidak dipromosikan jika critical risk ditemukan." },
  { name: "IaC Scan", tool: "Checkov", goal: "Memeriksa Terraform dan Infrastructure as Code terhadap security best practices.", checks: "Misconfiguration cloud dan policy guardrail.", impact: "Perubahan infrastruktur berisiko diblokir." },
  { name: "Container Registry", tool: "Azure Container Registry", goal: "Menyimpan image yang sudah melewati gate.", checks: "Image tag dan provenance.", impact: "Runtime mengambil image dari registry terkontrol." },
  { name: "Deployment", tool: "Azure DevOps", goal: "Menerapkan release ke environment target.", checks: "Approval dan manifest deployment.", impact: "Release terjadi setelah gate lulus." },
  { name: "Kubernetes", tool: "AKS", goal: "Menjalankan workload container.", checks: "Pod, service, ingress, dan rollout state.", impact: "Workload berjalan di platform container." },
  { name: "Progressive Delivery", tool: "Canary / Blue-Green", goal: "Mengurangi risiko release dengan perpindahan traffic bertahap atau switch environment.", checks: "Error rate, latency, dan request rate.", impact: "Rollout dilanjutkan atau rollback berdasarkan sinyal." },
];

export function DevSecOpsSection() {
  const [selected, setSelected] = useState(stages[3]);
  const [gatePassed, setGatePassed] = useState(true);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/60 p-5">
        <div className="grid min-w-[720px] grid-cols-4 gap-3">
          {stages.map((stage) => (
            <button key={stage.name} type="button" onClick={() => setSelected(stage)} className={cn("rounded-md border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300", selected.name === stage.name ? "border-sky-300/50 bg-sky-300/10" : "border-white/10 bg-white/[0.03] hover:border-white/20")}> 
              <span className="font-mono text-xs text-slate-400">{stage.tool}</span>
              <span className="mt-2 block text-sm font-semibold text-slate-100">{stage.name}</span>
            </button>
          ))}
        </div>
      </div>
      <aside className="rounded-lg border border-white/10 bg-[#081421] p-6">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-sky-200">{selected.tool}</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-50">{selected.name}</h3>
        <dl className="mt-6 grid gap-4 text-sm leading-7">
          <div><dt className="text-slate-500">Tujuan</dt><dd className="text-slate-200">{selected.goal}</dd></div>
          <div><dt className="text-slate-500">Apa yang diperiksa</dt><dd className="text-slate-200">{selected.checks}</dd></div>
          <div><dt className="text-slate-500">Dampak terhadap pipeline</dt><dd className="text-slate-200">{selected.impact}</dd></div>
        </dl>
        <div className="mt-8 rounded-md border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-sm text-slate-100">SECURITY GATE</p>
            <button type="button" onClick={() => setGatePassed((value) => !value)} className="rounded-md border border-white/10 px-3 py-2 text-xs text-slate-200 hover:bg-white/5">Ubah state</button>
          </div>
          <div className="mt-4 grid gap-3">
            {["SAST", "Secret Detection", "Dependency Scan", "Container Scan", "IaC Scan"].map((gate) => (
              <div key={gate} className="flex items-center justify-between text-sm text-slate-300"><span>{gate}</span><span className="flex items-center gap-2 text-emerald-200"><CheckCircle2 size={16} aria-hidden />LULUS</span></div>
            ))}
            <div className="border-t border-white/10 pt-3 text-sm">
              {gatePassed ? <span className="flex items-center gap-2 text-emerald-200"><CheckCircle2 size={17} aria-hidden />Deployment DIIZINKAN</span> : <span className="flex items-center gap-2 text-rose-200"><XCircle size={17} aria-hidden />Deployment DIBLOKIR</span>}
            </div>
          </div>
          <p className="mt-4 flex gap-2 text-xs leading-6 text-slate-500"><ShieldAlert size={16} aria-hidden />Visualisasi portfolio, bukan hasil pipeline real-time.</p>
        </div>
      </aside>
    </div>
  );
}