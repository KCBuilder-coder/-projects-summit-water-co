import { BadgeCheck, HandCoins, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ITEMS = [
  { label: "Premium Equipment", icon: BadgeCheck },
  { label: "Professional Installation", icon: Wrench },
  { label: "Honest Pricing", icon: ShieldCheck },
  { label: "Financing Available", icon: HandCoins },
];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 sm:gap-6">
        {ITEMS.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
              <Icon size={18} strokeWidth={2} />
            </span>
            <span className="text-[0.875rem] font-medium leading-tight text-navy/85">
              {label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
