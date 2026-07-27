import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { ValueProp } from "@/components/ValueProp";
import { EquipmentShowcase } from "@/components/EquipmentShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceArea } from "@/components/ServiceArea";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <ValueProp />
      <EquipmentShowcase />
      <ProcessSteps />
      <ServiceArea />
      {/* Testimonials section removed until real customer reviews are ready.
          To bring it back: import { Testimonials } from "@/components/Testimonials";
          and add <Testimonials /> right here, above the QuoteForm. */}
      <QuoteForm />
      <Footer />
    </main>
  );
}
