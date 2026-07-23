import { Container } from "@/components/ui/Container";
import { TESTIMONIALS_PLACEHOLDER } from "@/lib/constants";

// DEVELOPER NOTE: The testimonials below are placeholders for layout and
// spacing purposes only. They are not real customer reviews. Do NOT publish
// this section until every quote, name, and location has been replaced with
// a real, verifiable customer testimonial (with permission to publish).
export function Testimonials() {
  return (
    <section className="section-pad bg-mist">
      <Container>
        <div className="max-w-xl">
          <p className="eyebrow">Placeholder Section</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
            What Central Texas homeowners will say
          </h2>
          <p className="mt-4 text-lg text-slate">
            Layout preview only &mdash; replace every quote below with a real, verified customer
            testimonial before this section goes live.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS_PLACEHOLDER.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between rounded-2xl border border-dashed border-accent/40 bg-white p-7 shadow-subtle"
            >
              <span className="absolute right-5 top-5 rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                Placeholder
              </span>
              <blockquote className="mt-6 text-[0.95rem] leading-relaxed text-slate">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                <span className="block font-semibold text-navy">{t.name}</span>
                <span className="text-slate">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
