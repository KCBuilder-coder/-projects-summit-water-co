"use client";

import { motion } from "framer-motion";

/**
 * Signature visual for the homepage: a vertical gauge that reads like a
 * product spec readout (in the spirit of Tesla/Eight Sleep telemetry UI),
 * but grounded in the one number every water-treatment shopper already
 * cares about — grains per gallon (GPG) hardness. It animates from a
 * "before" reading down to a soft-water reading on load.
 */
export function ClarityMeter() {
  return (
    <div className="relative mx-auto flex w-full max-w-xs items-center gap-6 sm:max-w-sm">
      <div className="relative h-72 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-inner sm:h-80">
        <motion.div
          className="absolute inset-x-0 bottom-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #DCE6ED 0%, #9FC1D9 35%, #4E7DA3 65%, #B08A5A 100%)",
          }}
          initial={{ height: "100%" }}
          animate={{ height: "18%" }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-x-0 top-0 flex h-full flex-col justify-between py-3 text-center">
          {[0, 1, 2, 3].map((tick) => (
            <div key={tick} className="h-px w-full bg-white/10" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">
            After Summit
          </p>
          <p className="font-display text-3xl text-white">1 GPG</p>
          <p className="text-sm text-white/60">Soft, treated water</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">
            Typical Central Texas Water
          </p>
          <p className="font-display text-2xl text-white/70">15&ndash;20 GPG</p>
          <p className="text-sm text-white/50">Untreated hardness*</p>
        </motion.div>
      </div>
    </div>
  );
}
