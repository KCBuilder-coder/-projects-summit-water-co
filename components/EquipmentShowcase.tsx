import { Gauge, Layers, ShieldCheck, Volume1 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EQUIPMENT_SPECS } from "@/lib/constants";

const ICONS = [Gauge, Layers, ShieldCheck, Volume1];

export function EquipmentShowcase() {
  return (
    <section className="section-pad bg-navy text-white">
      <Container>
        <div className="max-w-xl">
          <p className="eyebrow text-white/70">The Build</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest sm:text-4xl">
            What's inside every install.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            The same standard of equipment goes into every system we install &mdash; softener, RO,
            or whole-home filtration &mdash; sized correctly for your home, not the smallest unit
            that fits the lowest quote.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {EQUIPMENT_SPECS.map((spec, i) => {
            const Icon = ICONS[i];
            return (
              <div key={spec.title} className="flex gap-5 bg-navy-soft/60 p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl">{spec.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{spec.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="#quote" variant="onDark" size="lg">
            Find the Right System for Your Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
