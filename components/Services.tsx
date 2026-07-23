import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="section-pad bg-mist">
      <Container>
        <div className="max-w-xl">
          <p className="eyebrow">What We Install</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
            Three systems. One standard of quality.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Every system we install is sized and specified for your home, then backed by a team
            that's easy to reach.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-subtle transition-shadow duration-300 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy/5">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-deep">
                  {service.label}
                </span>
                <h3 className="mt-2 font-display text-2xl text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-accent-deep"
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href="#quote"
                    className="text-sm font-semibold text-accent-deep underline-offset-4 hover:underline"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
