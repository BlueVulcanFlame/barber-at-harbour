// FINAL PRICES - confirmed by Sam Apr 29 2026

import { MagicCard } from "@/components/magicui/magic-card";

const SERVICES = [
  {
    name: "Haircut",
    price: "$30",
    description:
      "A proper men's cut. Skin fade, scissor cut, classic short back and sides — whatever you walk in for, walk out sharp.",
  },
  {
    name: "Skin Fade",
    price: "$45",
    description:
      "Tight, clean fade down to the skin. Sharp lines, modern finish.",
  },
  {
    name: "Beard Trim",
    price: "$25",
    description:
      "Shape-ups, line-ups, full beard sculpts. Hot towel finish if you want one. Coffee while you wait.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-6 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading block — centred */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Short red rule */}
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />

          {/* Eyebrow */}
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            What Sam does
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Three things, done well.
          </h2>

          {/* Subhead */}
          <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-cream/85 sm:text-lg">
            No fancy menus. No upsells. Just sharp cuts at fair prices.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <MagicCard
              key={service.name}
              gradientColor="rgba(201, 169, 97, 0.15)"
              gradientFrom="rgba(201, 169, 97, 0.4)"
              gradientTo="rgba(201, 169, 97, 0.4)"
              gradientOpacity={1}
              gradientSize={180}
              className="rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_-2px_28px_-6px_rgba(168,48,46,0.45),0_10px_28px_-12px_rgba(0,0,0,0.6)]"
            >
              <article className="rounded-sm border-t-4 border-barber-red p-8">
                <h3 className="font-serif text-2xl font-normal leading-snug text-cream">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-barber-red">
                  {service.price}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-cream/80">
                  {service.description}
                </p>
              </article>
            </MagicCard>
          ))}
        </div>

        {/* CTA — descriptive line + ghost button */}
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="text-base text-cream/85 sm:text-lg">
            Plus pension cuts, kids&apos; cuts, beard fades, scissor cuts, and
            more.
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5 sm:text-base"
          >
            See all services &amp; prices
          </a>
        </div>
      </div>
    </section>
  );
}
