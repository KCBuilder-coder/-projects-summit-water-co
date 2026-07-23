import { Container } from "@/components/ui/Container";
import { VALUE_POINTS } from "@/lib/constants";

export function ValueProp() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Why Summit</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
            Premium systems. Honest pricing.{" "}
            <span className="italic text-accent-deep">No franchise markup.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Large national franchises carry the overhead of showrooms, call centers, and
            commission-driven sales teams &mdash; and that overhead shows up in your quote. Summit
            Water Co. keeps our structure lean, so you get quality equipment and professional
            installation without paying for someone else's overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {VALUE_POINTS.map((point) => (
            <div key={point.title} className="bg-white p-8">
              <span className="block h-[3px] w-8 rounded-full bg-accent" />
              <h3 className="mt-4 text-lg font-semibold text-navy">{point.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
