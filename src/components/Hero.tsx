import Image from "next/image";
import { Phone, Star } from "lucide-react";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay 1 — left-to-right dimming (stronger on mobile, lighter on md+) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 to-black/50 md:from-black/55 md:to-black/35"
      />

      {/* Overlay 2 — bottom vignette for social proof legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
      />

      {/* Overlay 3 — subtle warm red tint to tie into the brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(168,48,46,0.05)_0%,_transparent_70%)]"
      />

      {/* Centred hero content */}
      <div
        id="top"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-32 text-center sm:px-8"
      >
        {/* Eyebrow */}
        <p className="mb-7 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-cream/70 sm:text-xs">
          Werribee South · Wyndham Harbour
        </p>

        {/* Three-line vintage headline */}
        <h1 className="font-serif font-normal leading-[1.02] tracking-tight text-cream text-[clamp(3rem,7vw,5.5rem)]">
          <span className="block">Sharp blades.</span>
          <span className="block">Steady hand.</span>
          <span className="block text-barber-red">
            Wyndham Harbour&apos;s barber.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-8 max-w-[600px] text-base leading-relaxed text-cream/85 sm:mt-10 sm:text-lg">
          Old-school cuts and clean lines, on the harbour since 2018. Walk in,
          sit down, fresh cut. Coffee&apos;s on us.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-barber-red px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_8px_28px_-10px_rgba(168,48,46,0.65)] transition-colors hover:bg-barber-red-soft sm:text-base"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Sam — {PHONE_DISPLAY}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5 sm:text-base"
          >
            View Services
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-9 flex items-center gap-2 text-sm">
          <div
            className="flex items-center gap-0.5 text-barber-red"
            aria-label="4.9 out of 5 stars"
          >
            <Star className="h-4 w-4 fill-current" strokeWidth={0} />
            <Star className="h-4 w-4 fill-current" strokeWidth={0} />
            <Star className="h-4 w-4 fill-current" strokeWidth={0} />
            <Star className="h-4 w-4 fill-current" strokeWidth={0} />
            <Star className="h-4 w-4 fill-current" strokeWidth={0} />
          </div>
          <span className="text-cream/80">4.9 from 84 Google reviews</span>
        </div>
      </div>
    </section>
  );
}
