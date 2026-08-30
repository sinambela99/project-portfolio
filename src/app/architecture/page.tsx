import { ArchitectureDiagram } from "@/components/architecture/architecture-diagram";
import { KubernetesSection } from "@/components/kubernetes/kubernetes-section";
import { ObservabilitySection } from "@/components/observability/observability-section";
import { Section } from "@/components/ui/section";

export default function ArchitecturePage() {
  return (
    <div className="pt-24">
      <Section title="Arsitektur DevSecOps" description="Alur dari developer sampai observability, dengan security scanning sebagai bagian dari CI pipeline." eyebrow="Arsitektur">
        <ArchitectureDiagram />
      </Section>
      <KubernetesSection />
      <ObservabilitySection />
    </div>
  );
}