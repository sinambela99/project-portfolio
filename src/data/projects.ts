export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  security: string[];
  deployment: string;
  observability: string;
  result: string;
  lessons: string[];
  snippet: string;
};

export const projects: Project[] = [
  {
    slug: "devsecops-platform",
    title: "DevSecOps Platform",
    description: "Platform DevSecOps yang mengintegrasikan CI/CD, automated security scanning, container security, Infrastructure as Code, dan deployment ke Kubernetes.",
    technologies: ["Azure", "Azure DevOps", "Terraform", "AKS", "ACR", "CodeQL", "Trivy", "Gitleaks", "Checkov", "Progressive Delivery"],
    summary: "Representasi platform delivery yang menyatukan build, quality gate, security gate, container registry, dan rollout terkontrol ke Kubernetes.",
    problem: "Pipeline aplikasi perlu menjaga konsistensi delivery tanpa menempatkan security sebagai proses manual di akhir deployment.",
    solution: "Security scanning ditempatkan sebagai tahap pipeline sebelum image dipromosikan dan sebelum manifest Kubernetes diterapkan.",
    architecture: ["Git Repository", "CI Pipeline", "Security Scanning", "Azure Container Registry", "AKS", "Canary / Blue-Green", "Observability"],
    security: ["CodeQL untuk SAST", "Gitleaks untuk secret detection", "Trivy untuk container scanning", "Checkov untuk Terraform/IaC scanning"],
    deployment: "Deployment menggunakan pipeline YAML dengan security gate sebelum tahap rollout ke AKS.",
    observability: "Metrics, logs, dan traces dikumpulkan sebagai sinyal operasional untuk mengevaluasi kondisi workload setelah release.",
    result: "Portfolio ini menunjukkan alur delivery yang terstruktur, repeatable, dan security-aware.",
    lessons: ["Security efektif ketika menjadi bagian dari delivery flow.", "Pipeline harus bisa memblokir risiko sebelum masuk ke runtime.", "Observability membantu keputusan rollout lebih rasional."],
    snippet: "security_gate:\n  sast: codeql\n  secrets: gitleaks\n  container: trivy\n  iac: checkov\n  on_failure: block_deployment",
  },
  {
    slug: "kubernetes-platform",
    title: "Kubernetes Platform",
    description: "Platform Kubernetes yang mendemonstrasikan workload management, networking, security controls, secret management, ingress, dan progressive delivery.",
    technologies: ["AKS", "Kubernetes", "Helm", "NetworkPolicy", "Key Vault CSI", "Canary / Blue-Green", "Ingress"],
    summary: "Contoh platform Kubernetes untuk menjalankan workload aplikasi dengan kontrol jaringan, secret management, ingress, dan rollout bertahap.",
    problem: "Workload container membutuhkan standar runtime yang konsisten agar deployment, konfigurasi, dan exposure service dapat dikelola dengan jelas.",
    solution: "Platform disusun dengan namespace, ingress, network policy, Key Vault CSI, dan progressive delivery sebagai pola operasional.",
    architecture: ["Ingress", "Service", "Deployment", "Network Policy", "Key Vault CSI", "Canary / Blue-Green"],
    security: ["Namespace separation", "NetworkPolicy", "Secret projection via CSI", "Controlled ingress"],
    deployment: "Manifest dan Helm chart dapat dikelola dari pipeline, lalu dirilis dengan strategi canary atau blue-green sesuai kebutuhan release.",
    observability: "Workload dipantau melalui metrics dan logs untuk memahami health aplikasi dan sinyal regresi.",
    result: "Platform menggambarkan pemahaman operational Kubernetes di luar sekadar menjalankan container.",
    lessons: ["Cluster perlu guardrail sejak awal.", "Secret sebaiknya tidak dipaketkan di image atau repository.", "Progressive delivery mengurangi risiko release."],
    snippet: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-ingress-to-app\nspec:\n  policyTypes: [Ingress]",
  },
  {
    slug: "azure-infrastructure-as-code",
    title: "Azure Infrastructure as Code",
    description: "Infrastruktur Azure yang dibangun menggunakan Terraform dengan pendekatan modular dan repeatable deployment.",
    technologies: ["Terraform", "Azure", "VNet", "AKS", "ACR", "Key Vault", "Terraform State"],
    summary: "Blueprint IaC untuk provisioning resource Azure secara modular dan konsisten.",
    problem: "Provisioning manual rentan drift, sulit direview, dan tidak konsisten antar environment.",
    solution: "Terraform digunakan untuk mendefinisikan network, registry, key vault, AKS, dan state management sebagai kode.",
    architecture: ["Terraform Modules", "Remote State", "Azure VNet", "Azure Key Vault", "ACR", "AKS"],
    security: ["State management", "Least privilege", "Key Vault integration", "IaC scanning"],
    deployment: "Plan dan apply dipisahkan agar perubahan infrastruktur dapat direview sebelum diterapkan.",
    observability: "Resource Azure dikaitkan dengan monitoring dan diagnostic setting sebagai bagian dari baseline platform.",
    result: "Infrastruktur dapat diulang, dilacak, dan direview melalui workflow Git.",
    lessons: ["Module kecil lebih mudah dirawat.", "State adalah aset sensitif.", "Review plan membantu mencegah perubahan yang tidak disengaja."],
    snippet: "module \"aks\" {\n  source = \"./modules/aks\"\n  environment = var.environment\n  acr_id = module.acr.id\n}",
  },
  {
    slug: "observability-platform",
    title: "Observability Platform",
    description: "Platform monitoring dan observability untuk memantau metrics, logs, dan telemetry dari workload Kubernetes.",
    technologies: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "LGTM Stack"],
    summary: "Contoh observability stack untuk membaca kondisi workload melalui metrics, logs, dan traces.",
    problem: "Tanpa telemetry, tim sulit membedakan bug aplikasi, masalah infrastruktur, dan regresi deployment.",
    solution: "Prometheus, Grafana, Loki, dan OpenTelemetry digunakan sebagai fondasi telemetry aplikasi dan platform. LGTM merujuk pada stack Loki, Grafana, Tempo, dan Mimir.",
    architecture: ["Application", "OpenTelemetry", "Prometheus / Mimir", "Loki", "Tempo", "Grafana"],
    security: ["Controlled dashboard access", "Log hygiene", "No secret in telemetry", "Namespace-aware metrics"],
    deployment: "Observability stack dipasang sebagai platform capability yang mendampingi workload aplikasi.",
    observability: "Metrics, logs, dan traces dikorelasikan untuk memahami latency, error rate, request rate, dan konsumsi resource.",
    result: "Telemetry menjadi dasar pengambilan keputusan operasional, termasuk rollout dan rollback.",
    lessons: ["Metric tanpa konteks sering kurang cukup.", "Log harus berguna tanpa membocorkan data sensitif.", "Trace membantu membaca alur request lintas service."],
    snippet: "signals:\n  metrics: prometheus_or_mimir\n  logs: loki\n  traces: tempo_or_opentelemetry\n  dashboard: grafana",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}