import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { ValueProp } from "@/components/ValueProp";
import { EquipmentShowcase } from "@/components/EquipmentShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Financing } from "@/components/Financing";
import { ServiceArea } from "@/components/ServiceArea";
import { Testimonials } from "@/components/Testimonials";
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
      <Financing />
      <ServiceArea />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </main>
  );
}
