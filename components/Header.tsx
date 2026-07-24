"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-white/90 backdrop-blur" : "border-transparent bg-white"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/icon-mark.png"
            alt=""
            width={485}
            height={351}
            priority
            className="h-8 w-auto"
          />
          <span className="font-display text-xl tracking-tight text-navy">
            Summit <span className="italic text-accent-deep">Water Co.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            
              key={link.label}
              href={link.href}
              className="text-[0.925rem] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-[0.925rem] font-semibold text-navy"
          >
            <Phone size={16} strokeWidth={2} className="text-accent-deep" />
            {COMPANY.phone}
          </a>
          <Button href="#quote" size="md">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[1.05rem] font-medium text-navy hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-[0.95rem] font-semibold text-navy"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
            <Button href="#quote" size="lg" onClick={() => setOpen(false)}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

      
