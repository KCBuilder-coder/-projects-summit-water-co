# Image checklist

The homepage currently ships with styled placeholder blocks instead of real
photography, so it can go live the moment real images are ready — no code
changes needed beyond dropping files in and swapping a few `<div>` placeholders
for `<Image>` (see notes below).

## What to shoot or source

1. **Hero background (optional)** — a clean, well-lit utility room or garage
   shot showing an installed system. Keep it uncluttered; the current hero
   uses a solid navy background with the ClarityMeter graphic and reads
   premium without a photo, so only add one if it's genuinely high quality.
2. **Service cards (3 images)** — one photo each for:
   - Water softener (installed, in a utility space)
   - Reverse osmosis (under-sink or faucet detail)
   - Whole-home filtration (installed system)
3. **Equipment showcase (3 images)** — cleaner, more "product shot" style
   versions of the above, ideally on a plain background or with a shallow
   depth of field, similar to how Tesla/Apple photograph hardware.
4. **Open Graph image** (`og-image.jpg`, 1200x630) — used when the page is
   shared on social media or in ads.
5. **Logo** — SVG preferred, both a full-color version (for the light header)
   and a white/reversed version (for the dark footer).

## Guidance

- Prefer real jobsite and product photography over stock images — it's the
  single biggest lever for the "we're a real, local company" trust signal.
- Keep backgrounds clean and uncluttered; avoid busy garages or visible clutter.
- Shoot in landscape and in good, even lighting (avoid harsh direct flash).
- Once photos are ready, replace the placeholder `<div>` blocks in
  `components/Services.tsx` and `components/EquipmentShowcase.tsx` with
  Next.js `<Image>` components pointing at files placed in this folder.
