// FINAL PRICES - confirmed by Sam Apr 29 2026

import { Coffee, ExternalLink, Footprints, Phone } from "lucide-react";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Barber+%40+the+harbour+Werribee+South";

const HAIRCUTS = [
  { name: "Haircut", price: "$30" },
  { name: "Pension", price: "$25" },
  { name: "Kids (under 7)", price: "$25" },
  { name: "Scissors haircut", price: "$35" },
  { name: "Zero fade", price: "$40" },
  { name: "Skin fade", price: "$45" },
  { name: "Kids skin fade", price: "$40" },
];

const BEARD_WORK = [
  { name: "Beard trim", price: "$25" },
  { name: "Beard fade", price: "$25" },
  { name: "Foil shave", price: "$25" },
  { name: "Beard foil shave", price: "$25" },
];

const STEPS = [
  {
    Icon: Footprints,
    name: "Walk in",
    body: "Most days, no waiting needed.",
  },
  {
    Icon: Phone,
    name: "Call ahead",
    body: `${PHONE_DISPLAY} — Sam will tell you the wait.`,
  },
  {
    Icon: Coffee,
    name: "Have a coffee",
    body: "While you wait. It's on the house.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <PageHero />
        <ServiceMenu />
        <HowItWorks />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

/* ────────── Section 1 — Page hero ────────── */

function PageHero() {
  return (
    <section className="relative w-full px-6 pt-32 pb-12 sm:px-8 sm:pt-36 md:pt-40 md:pb-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
          Services &amp; Pricing
        </p>
        <h1 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2rem,5.5vw,3.5rem)]">
          What Sam does. What it costs.
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-cream/85 sm:text-lg">
          Honest prices. No upsells, no surprises at the till.
        </p>
      </div>
    </section>
  );
}

/* ────────── Section 2 — Full service menu ────────── */

function ServiceMenu() {
  return (
    <section className="relative w-full px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Haircuts */}
          <div>
            <h2 className="font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(1.75rem,3.5vw,2.25rem)]">
              Haircuts
            </h2>
            <ul className="mt-6 divide-y divide-cream/10">
              {HAIRCUTS.map(({ name, price }) => (
                <li
                  key={name}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-serif text-[1.1rem] text-cream">
                    {name}
                  </span>
                  <span className="font-serif text-[1.1rem] font-bold text-barber-red">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beard Work */}
          <div>
            <h2 className="font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(1.75rem,3.5vw,2.25rem)]">
              Beard Work
            </h2>
            <ul className="mt-6 divide-y divide-cream/10">
              {BEARD_WORK.map(({ name, price }) => (
                <li
                  key={name}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-serif text-[1.1rem] text-cream">
                    {name}
                  </span>
                  <span className="font-serif text-[1.1rem] font-bold text-barber-red">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────── Section 3 — How it works ────────── */

function HowItWorks() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            How it works
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Walk-in. No drama.
          </h2>
          <div className="mx-auto mt-6 max-w-[580px] space-y-4 text-base leading-relaxed text-cream/85 sm:text-lg">
            <p>
              Most days you can drop in and wait under 15 minutes. Busy
              Saturday afternoons, expect a 30–45 minute wait.
            </p>
            <p>
              If you&apos;re driving in from the city or want a specific time,
              call ahead — Sam will let you know what the queue looks like.
            </p>
          </div>
        </div>

        {/* Three step blocks */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {STEPS.map(({ Icon, name, body }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center"
            >
              <Icon
                className="h-7 w-7 text-barber-red"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-4 font-serif text-xl font-normal text-cream">
                {name}
              </h3>
              <p className="mt-2 max-w-[26ch] text-sm text-cream/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── Section 4 — Closing CTA ────────── */

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,12,12,0.95)_0%,_rgba(26,10,10,0.55)_45%,_transparent_75%)]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
          Ready to sit down?
        </p>
        <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2rem,4.5vw,3rem)]">
          <span className="block">Sharp blades.</span>
          <span className="block">Steady hand.</span>
          <span className="block">Sam&apos;s ready when you are.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-cream/85 sm:text-lg">
          Wyndham Harbour, seven days a week.
        </p>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
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

        {/* PLACEHOLDER HOURS - CONFIRM WITH SAM */}
        <p className="mt-7 text-sm italic text-cream/65">
          Open daily, 9:00am – 5:30pm
        </p>
      </div>
    </section>
  );
}
