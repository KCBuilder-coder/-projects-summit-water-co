import { Facebook, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl text-white">
            Summit <span className="italic">Water Co.</span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Premium water treatment without the franchise price. Serving San Marcos and Central
            Texas homeowners.
          </p>
          <div className="mt-6 flex gap-3">
            {/* TODO: link to real social profiles before launch. */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-white">Water Softeners</a></li>
            <li><a href="#services" className="hover:text-white">Reverse Osmosis</a></li>
            <li><a href="#services" className="hover:text-white">Whole-Home Filtration</a></li>
            <li><a href="#financing" className="hover:text-white">Financing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#quote" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/40">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={COMPANY.phoneHref} className="hover:text-white">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></li>
          </ul>
          <p className="mt-5 text-sm text-white/50">
            Serving {SERVICE_AREAS.slice(0, 3).join(", ")}, and surrounding Central Texas
            communities.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name} All rights reserved.</p>
          <p>Central Texas &mdash; San Marcos and surrounding communities.</p>
        </Container>
      </div>
    </footer>
  );
}
