"use client";

import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function QuoteForm() {
  return (
    <section id="quote" className="section-pad bg-navy text-white">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-white/70">Get Started</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tightest sm:text-4xl">
            Get your free, no-pressure quote
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
            Tell us a bit about your home and water concerns. We'll follow up with straightforward
            options and pricing &mdash; no obligation.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm text-white/60">
            <div>
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                Call
              </span>
              <a href={`tel:${COMPANY.phone}`} className="mt-1 block text-white">
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                Email
              </span>
              <a href={`mailto:${COMPANY.email}`} className="mt-1 block text-white">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-card sm:p-9">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Z0PkQAnYSjuawHKe4Ok8"
            style={{ width: "100%", height: "637px", border: "none", borderRadius: "3px" }}
            id="inline-Z0PkQAnYSjuawHKe4Ok8"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us Form (on the website)"
            data-height="637"
            data-layout-iframe-id="inline-Z0PkQAnYSjuawHKe4Ok8"
            data-form-id="Z0PkQAnYSjuawHKe4Ok8"
            title="Contact Us Form (on the website)"
          />
        </div>
      </Container>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
