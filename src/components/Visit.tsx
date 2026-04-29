/*
 * PLACEHOLDER HOURS - These need to be confirmed with Sam before the site goes live.
 */

import { Car, Clock, ExternalLink, MapPin, Phone } from "lucide-react";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";

const MAPS_QUERY = encodeURIComponent(
  "Barber @ the harbour, Unit 4/50 Catamaran Drive, Werribee South VIC 3030"
);
const MAPS_LINK = `https://maps.google.com/?q=${MAPS_QUERY}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`;

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative w-full px-6 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading block — centred */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            Find the shop
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Drop in or call ahead.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-cream/85 sm:text-lg">
            Tucked inside Wyndham Harbour, with the marina on one side and a
            coffee on the bench.
          </p>
        </div>

        {/* Two-column body — 45% info / 55% map */}
        <div className="mt-14 grid gap-10 md:grid-cols-[45fr_55fr] md:items-start md:gap-12">
          {/* Left column — info blocks */}
          <div className="flex flex-col gap-8">
            {/* Where */}
            <div className="flex gap-4">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-cream/70"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-barber-red">
                  Where
                </p>
                <address className="mt-2 font-serif not-italic text-cream">
                  <p className="text-lg leading-relaxed">
                    Unit 4/50 Catamaran Drive
                  </p>
                  <p className="text-lg leading-relaxed">
                    Werribee South VIC 3030
                  </p>
                  <p className="mt-1 text-base text-cream/65">
                    Inside Wyndham Harbour
                  </p>
                </address>
              </div>
            </div>

            {/* When */}
            <div className="flex gap-4">
              <Clock
                className="mt-1 h-5 w-5 shrink-0 text-cream/70"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-barber-red">
                  When
                </p>
                {/* PLACEHOLDER HOURS - CONFIRM WITH SAM */}
                <div className="mt-2 text-cream">
                  <p className="text-base sm:text-lg">9:00am – 5:30pm</p>
                  <p className="mt-0.5 text-sm text-cream/65">Open daily</p>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="flex gap-4">
              <Car
                className="mt-1 h-5 w-5 shrink-0 text-cream/70"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-barber-red">
                  Parking
                </p>
                <p className="mt-2 text-base text-cream">
                  Free parking on-site at the marina.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-barber-red px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_8px_28px_-10px_rgba(168,48,46,0.65)] transition-colors hover:bg-barber-red-soft sm:text-base"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Call Sam — {PHONE_DISPLAY}
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5 sm:text-base"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right column — embedded map */}
          <figure className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] md:h-[400px]">
            <iframe
              src={MAPS_EMBED}
              title="Map showing Barber @ the Harbour at Wyndham Harbour, Werribee South"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
            {/* Subtle dark vignette — edges blend into page bg */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_rgba(10,10,10,0.45)_100%)]"
            />
            {/* Barber-red accent line — left edge, matches About Sam photo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-barber-red"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
