import { DevSecOpsSection } from "@/components/devsecops/devsecops-section";
import { ProgressiveDeliverySection } from "@/components/devsecops/progressive-delivery-section";
import { Section } from "@/components/ui/section";

export default function DevSecOpsPage() {
  return (
    <div className="pt-24">
      <Section title="Security adalah bagian dari pipeline." description="Security tidak seharusnya dilakukan setelah deployment. Security harus menjadi bagian dari proses delivery sejak awal." eyebrow="DevSecOps">
        <DevSecOpsSection />
      </Section>
      <ProgressiveDeliverySection />
    </div>
  );
}