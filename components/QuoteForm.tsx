"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY, SERVICE_INTEREST_OPTIONS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!result.ok) throw new Error(result.error || "Submission failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <h3 className="font-display text-2xl text-navy">Request received</h3>
              <p className="mt-2 max-w-sm text-slate">
                Thanks &mdash; we'll be in touch shortly to schedule your free quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              <Field label="Full Name" name="fullName" required className="sm:col-span-2" />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="ZIP Code" name="zip" inputMode="numeric" required />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="serviceInterest" className="text-sm font-medium text-navy">
                  Service Interested In
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  required
                  className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-[0.95rem] text-navy focus:border-accent"
                >
                  <option value="">Select one</option>
                  {SERVICE_INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="resize-none rounded-lg border border-line bg-white px-3.5 py-2.5 text-[0.95rem] text-navy focus:border-accent"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-relaxed text-slate sm:col-span-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-line text-accent focus:ring-accent"
                />
                <span>
                  By submitting this form, I agree to be contacted by {COMPANY.name} by phone,
                  text, and email regarding my quote request. Message and data rates may apply.
                  Message frequency varies. Reply STOP to opt out at any time. Consent is not a
                  condition of purchase.
                </span>
              </label>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full justify-center">
                  {status === "submitting" ? "Sending..." : "Get My Free Quote"}
                </Button>
                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">
                    Something went wrong. Please call us at {COMPANY.phone}.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  inputMode?: "numeric";
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        className="rounded-lg border border-line bg-white px-3.5 py-2.5 text-[0.95rem] text-navy focus:border-accent"
      />
    </div>
  );
}
