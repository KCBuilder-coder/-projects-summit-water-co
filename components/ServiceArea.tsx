import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceArea() {
  return (
    <section className="section-pad bg-white">
      <Container className="flex flex-col items-center rounded-2xl border border-line bg-mist px-8 py-16 text-center sm:px-16">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
          <MapPin size={20} />
        </span>
        <p className="eyebrow mt-6">Where We Serve</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
          Proudly serving San Marcos and Central Texas
        </h2>
        <p className="mt-4 max-w-md text-lg text-slate">
          If you're in the greater San Marcos area, there's a good chance we already work in your
          neighborhood.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SERVICE_AREAS.map((area) => (
            <span
              key={area}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-navy/80"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-9">
          <Button href="#quote" size="lg">
            Check Availability in Your Area
          </Button>
        </div>
      </Container>
    </section>
  );
}
