import Image from "next/image";

import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { MagicCard } from "@/components/magicui/magic-card";

const PLACES = [
  {
    eyebrow: "Eat",
    name: "3030 Waterfront",
    description:
      "Waterfront restaurant inside the harbour. Long lunches, seafood, and a view that does half the work.",
    linkLabel: "Visit 3030",
    href: "https://www.3030waterfront.com.au/",
  },
  {
    eyebrow: "Drink",
    name: "Elements Café",
    description:
      "Casual coffee and bites with picnic-table seating outside. Easy stop after a haircut, especially on a sunny day.",
    linkLabel: "Visit Elements",
    href: "https://www.wyndhamharbour.com.au/",
  },
  {
    eyebrow: "Play",
    name: "Wyndham Harbour Mini Golf",
    description:
      "Kids will not let you skip this. 18 holes, harbour views, family-friendly chaos in the best way.",
    linkLabel: "Visit Mini Golf",
    href: "https://www.wyndhamharbour.com.au/mini-golf",
  },
];

export default function MakeADayOfIt() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading block — centred */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            More than a haircut
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Make a day of it.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-cream/85 sm:text-lg">
            Sam&apos;s chair is one stop on the harbour. Come for the cut, stay
            for the coffee, the food, the walk, and a round of mini golf if the
            kids are restless.
          </p>
        </div>

        {/* Grid — hero card 7 cols × 3 rows + 3 small cards stacked on right */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-3">
          {/* Hero card — Walk the Harbour */}
          <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-sm border-t-4 border-barber-red transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_-2px_28px_-6px_rgba(168,48,46,0.45),0_10px_28px_-12px_rgba(0,0,0,0.6)] lg:col-span-7 lg:row-span-3">
            <FadeInOnScroll className="absolute inset-0">
              <Image
                src="/walk-the-harbour.jpg"
                alt="Wyndham Harbour marina with walking paths"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </FadeInOnScroll>
            {/* Dark gradient overlay — keeps content legible at bottom */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/75"
            />

            {/* Content — pinned to bottom over the darker portion */}
            <div className="relative flex flex-1 flex-col justify-end p-8 sm:p-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cream/70 sm:text-xs">
                Explore
              </p>
              <h3 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2rem,3.5vw,3rem)]">
                Walk the Harbour
              </h3>
              <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-cream/85">
                Wide walking paths circle the marina. Watch the boats come in,
                catch the sunset over Port Phillip Bay, or just stretch your
                legs after a fresh cut. Free, open every day, never crowded.
              </p>
              <a
                href="https://www.wyndhamharbour.com.au/about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cream/85 transition-colors hover:text-barber-red"
              >
                View the marina map
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          {/* Three small cards — Eat / Drink / Play */}
          {PLACES.map((place) => {
            const isExternal = place.href.startsWith("http");
            return (
              <MagicCard
                key={place.name}
                gradientColor="rgba(201, 169, 97, 0.15)"
                gradientFrom="rgba(201, 169, 97, 0.4)"
                gradientTo="rgba(201, 169, 97, 0.4)"
                gradientOpacity={1}
                gradientSize={180}
                className="rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_-2px_28px_-6px_rgba(168,48,46,0.45),0_10px_28px_-12px_rgba(0,0,0,0.6)] lg:col-span-5"
              >
                <article className="flex h-full flex-col rounded-sm border-t-4 border-barber-red p-6 sm:p-7">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/70 sm:text-[0.7rem]">
                    {place.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-cream">
                    {place.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80">
                    {place.description}
                  </p>
                  <a
                    href={place.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-cream/85 transition-colors hover:text-barber-red"
                  >
                    {place.linkLabel}
                    <span aria-hidden>→</span>
                  </a>
                </article>
              </MagicCard>
            );
          })}
        </div>

        {/* Bottom precinct link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.wyndhamharbour.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-cream/30 pb-0.5 text-sm font-medium text-cream transition-colors hover:border-barber-red hover:text-barber-red"
          >
            Learn more about the precinct at wyndhamharbour.com.au
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
