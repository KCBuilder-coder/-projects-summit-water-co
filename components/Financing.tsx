import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Financing() {
  return (
    <section id="financing" className="section-pad bg-mist">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Financing</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
            Better water, without the large upfront cost.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
            Qualified homeowners may have access to flexible financing options, so you can start
            enjoying soft, clean water without paying for the full system up front.
          </p>
          <div className="mt-8">
            <Button href="#quote" size="lg">
              Explore Financing
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8 shadow-subtle">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Good to know
          </p>
          <ul className="mt-4 space-y-4 text-[0.95rem] text-slate">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Options are reviewed based on individual qualification.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              We'll walk you through terms clearly before you decide anything.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              No pressure to finance &mdash; it's simply one more option.
            </li>
          </ul>
          {/* TODO: add specific rate/term details here only once confirmed with the financing partner. */}
        </div>
      </Container>
    </section>
  );
}
