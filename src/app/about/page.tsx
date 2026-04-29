// Meet Sam copy: FINAL - confirmed by Ashish. Other sections may still contain // SAMPLE COPY markers — search to find.

import Image from "next/image";
import { ExternalLink, Phone } from "lucide-react";

import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Barber+%40+the+harbour+Werribee+South";

const THEMES = [
  {
    eyebrow: "On the cuts",
    name: "Sharp, every time.",
    description:
      "Skin fades, scissor cuts, classic short back and sides — the work lands. Multiple reviews mention 'best cut I've had' and 'won't go anywhere else.'",
  },
  {
    eyebrow: "On the coffee",
    name: "The coffee thing.",
    description:
      "Customers mention the coffee machine as often as the haircuts. It's not a marketing tactic — it's just hospitality. Sit down, have a coffee, get a fresh cut.",
  },
  {
    eyebrow: "On the kids",
    name: "Patient with the squirmy ones.",
    description:
      "Multi-generational customers — fathers bringing sons, regulars now bringing their grandkids. Sam's pace works for kids who don't want to sit still.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <PageHero />
        <SamStory />
        <TheShop />
        <CustomersSay />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

/* ────────── Section 1 — Page hero ────────── */

function PageHero() {
  return (
    <section className="relative w-full px-6 pt-32 pb-16 sm:px-8 sm:pt-36 md:pt-40 md:pb-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
          About
        </p>
        <h1 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2rem,5.5vw,3.5rem)]">
          The barber, the shop, the harbour.
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-cream/85 sm:text-lg">
          How a small barber shop became part of the Wyndham Harbour precinct
          — and stayed there.
        </p>
      </div>
    </section>
  );
}

/* ────────── Section 2 — Sam's story ────────── */

function SamStory() {
  return (
    <section className="relative w-full px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-5 md:items-start md:gap-16">
        {/* Text column — 60% */}
        <div className="md:col-span-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            Meet Sam
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Hi, I&apos;m Sam.
          </h2>

          {/* FINAL COPY - confirmed by Ashish */}
          <div className="mt-7 max-w-[580px] space-y-5 text-base leading-relaxed text-cream/85 sm:text-lg">
            <p>
              Started with a single chair, a coffee machine, and the harbour
              just down the road. Not much has changed, except the regulars
              who keep coming back.
            </p>
            <p>
              I&apos;ve been cutting hair at Wyndham Harbour since 2018. Same
              spot, same standard. Clean, consistent cuts every time.
            </p>
            <p>
              It&apos;s straightforward. You sit down, we talk it through, and
              you walk out sharp. No overthinking, no rushing. Just attention
              to detail and solid work.
            </p>
            <p>
              The harbour sets the pace. Calm, close to the water, and a
              steady mix of locals and marina regulars. Steady, familiar, and
              exactly how it should be.
            </p>
            <p>Haircuts, fades, beard trims. Done properly.</p>
          </div>
        </div>

        {/* Photo column — 40%, same treatment as home About Sam */}
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
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(10,10,10,0.55)_100%)]"
              />
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

/* ────────── Section 3 — The shop ────────── */

function TheShop() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            The shop
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Inside the shop.
          </h2>
          {/* SAMPLE COPY - confirm with Sam */}
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-cream/85 sm:text-lg">
            The shop sits inside Wyndham Harbour at Unit 4/50 Catamaran Drive.
            Big front windows, the marina just down the road. Inside,
            there&apos;s room for a chair, a couch for whoever&apos;s waiting,
            and the coffee machine. Just enough to feel at home.
          </p>
        </div>

        {/* Shop interior */}
        <FadeInOnScroll className="mt-12 block">
          <figure className="relative aspect-video w-full overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
            <Image
              src="/shop-interior.jpg"
              alt="Inside Barber @ the Harbour, looking out over the marina"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
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
    </section>
  );
}

/* ────────── Section 4 — What customers say ────────── */

function CustomersSay() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            What regulars say
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Three patterns from 84 reviews.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-cream/85 sm:text-lg">
            We didn&apos;t make these up. These are the things customers
            actually mention, again and again.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {THEMES.map((theme) => (
            <article
              key={theme.name}
              className="group rounded-sm border-t-4 border-barber-red bg-ink-800 p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_-2px_28px_-6px_rgba(168,48,46,0.45),0_10px_28px_-12px_rgba(0,0,0,0.6)] sm:p-7"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/70 sm:text-[0.7rem]">
                {theme.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-cream">
                {theme.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                {theme.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-cream/30 pb-0.5 text-sm font-medium text-cream transition-colors hover:border-barber-red hover:text-barber-red"
          >
            Read all reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────── Section 5 — Closing CTA ────────── */

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 md:py-24">
      {/* Same red radial wash as the home VisitCTA, slightly tighter */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,12,12,0.95)_0%,_rgba(26,10,10,0.55)_45%,_transparent_75%)]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
          Ready for a fresh cut?
        </p>
        <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2rem,4.5vw,3rem)]">
          Drop in and meet Sam.
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
