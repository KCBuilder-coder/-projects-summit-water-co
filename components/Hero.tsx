"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClarityMeter } from "@/components/ClarityMeter";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      {/* Subtle depth gradient behind the copy — no imagery required to launch. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 0%, rgba(78,125,163,0.25) 0%, rgba(11,27,46,0) 55%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow text-white/70">Serving San Marcos &amp; Central Texas</p>

          <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.08] tracking-tightest text-white sm:text-5xl lg:text-[3.4rem]">
            Premium water treatment,{" "}
            <span className="italic text-white/90">without the franchise price</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Professional water softeners, reverse osmosis systems, and whole-home filtration
            installed for Central Texas homeowners.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#quote" variant="onDark" size="lg">
              Get My Free Quote
            </Button>
            <Button href={COMPANY.phoneHref} variant="ghost" size="lg" className="text-white hover:text-white/70">
              <Phone size={18} /> Call Now
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Professional Installation &middot; Financing Available &middot; Serving Central Texas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <ClarityMeter />
        </motion.div>
      </Container>
    </section>
  );
}
