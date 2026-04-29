/*
 * PLACEHOLDER HOURS - The "Open daily, 9:00am – 5:30pm" line below mirrors the
 * Visit section. Confirm with Sam before going live.
 */

import { ExternalLink, Phone } from "lucide-react";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Barber+%40+the+harbour+Werribee+South";

export default function VisitCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 md:py-[120px]">
      {/* Subtle dark-red radial wash — the only non-pure-black section bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,12,12,0.95)_0%,_rgba(26,10,10,0.55)_45%,_transparent_75%)]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Red rule */}
        <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />

        {/* Eyebrow */}
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
          Ready for a fresh cut?
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.5rem,5.5vw,4rem)]">
          See you on the harbour.
        </h2>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-cream/85 sm:text-lg">
          No appointments needed. Just call ahead if you&apos;re driving in
          from the city — Sam can let you know what the wait looks like.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-barber-red px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_8px_28px_-10px_rgba(168,48,46,0.65)] transition-colors hover:bg-barber-red-soft sm:text-base"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Sam — {PHONE_DISPLAY}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5 sm:text-base"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
            Open in Google Maps
          </a>
        </div>

        {/* Hours line */}
        {/* PLACEHOLDER HOURS - CONFIRM WITH SAM */}
        <p className="mt-8 text-sm italic text-cream/65">
          Open daily, 9:00am – 5:30pm
        </p>
      </div>
    </section>
  );
}
