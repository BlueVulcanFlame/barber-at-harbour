import Image from "next/image";

import { FadeInOnScroll } from "@/components/FadeInOnScroll";

export default function AboutSam() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-5 md:items-start md:gap-16">
        {/* Text column — 60% */}
        <div className="md:col-span-3">
          {/* Short red rule — barber-pole stripe nod */}
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />

          {/* Eyebrow */}
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            Meet your barber
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Hi, I&apos;m Sam.
          </h2>

          {/* Body */}
          <div className="mt-7 max-w-[560px] space-y-5 text-base leading-relaxed text-cream/85 sm:text-lg">
            <p>
              I&apos;ve been cutting hair on the harbour since 2018. Started
              with a single chair, a coffee machine, and the view of the
              marina. Not much has changed — except the regulars who keep
              coming back.
            </p>
            <p>
              I&apos;m not interested in fancy menus or trendy techniques. Just
              sharp blades, a steady hand, and the kind of cut you&apos;d ask
              your dad to take you to. Walk in. Sit down. We&apos;ll get it
              done.
            </p>
          </div>

          {/* Values row */}
          <ul className="mt-9 flex flex-col gap-3 text-sm text-cream/90 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
            <li className="flex items-center gap-2.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-barber-red"
                aria-hidden
              />
              Old-school cuts
            </li>
            <li className="flex items-center gap-2.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-barber-red"
                aria-hidden
              />
              4.9 stars from real regulars
            </li>
            <li className="flex items-center gap-2.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-barber-red"
                aria-hidden
              />
              Coffee on the house
            </li>
          </ul>

          {/* Inline CTA link */}
          <a
            href="/about"
            className="mt-10 inline-flex items-center gap-1.5 border-b border-cream/30 pb-0.5 text-sm font-medium text-cream transition-colors hover:border-barber-red hover:text-barber-red"
          >
            Read more about Sam
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Photo column — 40% */}
        <div className="md:col-span-2">
          <FadeInOnScroll>
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
            <Image
              src="/sam.jpg"
              alt="Sam, lead barber at Barber @ the Harbour"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Subtle dark vignette — edges blend into page bg */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(10,10,10,0.55)_100%)]"
            />
            {/* Barber-red accent line — left edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-barber-red"
            />
            </figure>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
