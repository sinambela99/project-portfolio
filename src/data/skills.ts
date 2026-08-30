export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud",
    items: ["Microsoft Azure", "Azure Kubernetes Service", "Azure Container Registry", "Azure Key Vault", "Azure Networking", "Azure Monitor", "Microsoft Entra ID"],
  },
  {
    title: "Container & Kubernetes",
    items: ["Kubernetes", "AKS", "Docker", "Helm", "Network Policy", "CSI Secrets Store", "Ingress", "Deployment Strategy"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Terraform Modules", "Terraform State", "Infrastructure Automation"],
  },
  {
    title: "CI/CD",
    items: ["Azure DevOps", "Azure Pipelines", "GitHub Actions", "YAML Pipeline", "Deployment Automation", "Security Gates"],
  },
  {
    title: "Security",
    items: ["CodeQL", "Trivy", "Gitleaks", "Checkov", "Microsoft Defender for Cloud", "Kubernetes Security", "Secret Management"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "LGTM Stack", "Logging", "Metrics", "Tracing"],
  },
];