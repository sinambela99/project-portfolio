import { CertificationsSection } from "@/components/certifications/certifications-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import { KubernetesSection } from "@/components/kubernetes/kubernetes-section";
import { ObservabilitySection } from "@/components/observability/observability-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProgressiveDeliverySection } from "@/components/devsecops/progressive-delivery-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <KubernetesSection />
      <ProgressiveDeliverySection />
      <ObservabilitySection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}