import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="max-w-xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-navy sm:text-4xl">
            From quote to clean water, in three steps.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {PROCESS_STEPS.map((item, i) => (
            <li key={item.step} className="relative pl-0">
              <div className="flex items-center gap-4 sm:block">
                <span className="font-display text-4xl italic text-accent/50">
                  {i + 1}
                </span>
                <div className="hidden h-px flex-1 bg-line sm:mt-6 sm:block" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy sm:mt-5">{item.step}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
