# Summit Water Co. — Homepage

A production-ready Next.js homepage for Summit Water Co., a Central Texas
water treatment company. Built to convert Google Search Ads traffic into
quote requests and phone calls.

## 1. Design direction

**Positioning:** premium water treatment without franchise pricing — so the
design needed to feel closer to Apple, Tesla, or Eight Sleep than a typical
plumbing-company site, while staying grounded in what a hard-water shopper
actually cares about.

- **Color:** deep navy (`#0B1B2E`), white, a soft light gray (`#F3F5F7`), and
  one muted steel-blue accent (`#4E7DA3`), with a small warm "mineral" tone
  (`#B08A5A`) reserved only for the hardness/clarity visual. Only two
  sections go full-dark (hero, equipment showcase), so contrast is used
  intentionally rather than making every section dark.
- **Type:** Fraunces (a warm, slightly organic serif) for headlines, paired
  with Manrope (a precise, technical grotesk) for body copy and UI. The
  pairing mirrors the product itself — water is organic, treatment is
  engineered.
- **Signature element:** the "ClarityMeter" in the hero — a vertical gauge
  that animates from an untreated hardness reading down to a soft-water
  reading. It's a spec-sheet/telemetry moment (in the spirit of a Tesla
  performance stat) built from the one number every water-treatment shopper
  already knows to look for: grains per gallon (GPG).
- **Motion:** restrained — a page-load reveal in the hero and the
  ClarityMeter animation. No scroll gimmicks or decorative motion elsewhere.
- **What was intentionally left out:** aggressive competitor-comparison
  tables, symptom checklists with emoji, review counts, and urgency language.
  Those patterns work for lead-gen funnels, but they read as "franchise
  sales page" rather than "premium local company," which is the opposite of
  this brand's positioning.

## 2. Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata, LocalBusiness JSON-LD
  page.tsx           Assembles all homepage sections
  globals.css        Base styles, eyebrow/tick utility, reduced-motion support
components/
  Header.tsx         Sticky nav + mobile menu
  Hero.tsx           Hero section + ClarityMeter
  ClarityMeter.tsx   Signature animated hardness/clarity gauge
  TrustBar.tsx        Four-item trust bar
  Services.tsx        Three service cards (softener / RO / filtration)
  ValueProp.tsx       "Why Summit" section
  EquipmentShowcase.tsx  Dark product-launch-style equipment section
  ProcessSteps.tsx    Three-step process
  Financing.tsx       Financing section
  ServiceArea.tsx     Local service-area section
  Testimonials.tsx    Placeholder testimonials (see warning below)
  QuoteForm.tsx       Lead form with CRM integration point
  Footer.tsx
  ui/
    Button.tsx
    Container.tsx
lib/
  constants.ts        Nav links, service area list, copy content, etc.
```

## 3. Setup and run instructions

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## 4. Connecting the quote form to your CRM

The form in `components/QuoteForm.tsx` has a placeholder submit handler with
a clearly marked integration point. To connect it to GoHighLevel:

1. Create an inbound webhook (or form) in GoHighLevel and copy its URL.
2. In `QuoteForm.tsx`, find the comment block labeled `CRM INTEGRATION POINT`
   and replace the placeholder `setTimeout` with a `fetch` POST to that URL.
3. Alternatively, swap the custom form for an embedded GoHighLevel form —
   the surrounding card layout will hold either approach.

## 5. Before this goes live — business checklist

**Must-fix before launch (currently placeholders in the code):**

- [ ] Real business phone number (currently `(000) 000-0000` in `lib/constants.ts`)
- [ ] Real business email address
- [ ] Real street address, city/state/ZIP, and hours for the LocalBusiness
      structured data in `app/layout.tsx`
- [ ] Verified geo coordinates for the structured data
- [ ] Logo file (SVG preferred) — light version for the header, reversed/white
      version for the dark footer
- [ ] Product and jobsite photography (see `public/images/README.md` for the
      full shot list)
- [ ] Open Graph share image (`og-image.jpg`, 1200×630)
- [ ] Real, verified customer testimonials to replace the placeholders in
      `components/Testimonials.tsx` — **do not publish the placeholder
      quotes as real reviews**
- [ ] Real social media URLs (Facebook, Instagram) in `components/Footer.tsx`
- [ ] GoHighLevel webhook URL or embedded form (see section 4 above)
- [ ] Final domain for `siteUrl` in `app/layout.tsx`
- [ ] Confirm any financing partner terms before adding specific rate/term
      language to the Financing section
- [ ] Legal review of the SMS/call consent language in the quote form
- [ ] Privacy Policy and Terms pages (linked from the footer, not yet built)

**Not yet built (by design, per your brief):**

- [ ] Dedicated pages for Water Softeners, Reverse Osmosis, Whole-Home
      Filtration, Financing, and Contact (nav currently links to homepage
      sections)
- [ ] Individual service-area landing pages, if you want them later
