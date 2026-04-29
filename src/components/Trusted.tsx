import { Coffee, ExternalLink, Scissors, Users } from "lucide-react";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";

type Stat = {
  value: number;
  decimalPlaces?: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 4.9, decimalPlaces: 1, suffix: "★", label: "Google rating" },
  { value: 84, suffix: "+", label: "Google reviews" },
  { value: 2018, label: "Cutting on the harbour since" },
  { value: 7, suffix: " days", label: "Open every week" },
];

const THEMES = [
  {
    Icon: Scissors,
    name: "Sharp, every time.",
    description:
      "Whether it's a skin fade or a classic short back and sides, the cut lands. People come back because Sam doesn't miss.",
  },
  {
    Icon: Coffee,
    name: "The coffee thing.",
    description:
      "Sam keeps a coffee machine running. Customers mention it constantly. Small thing, big difference.",
  },
  {
    Icon: Users,
    name: "Good with kids.",
    description:
      "Patient with the squirmy ones. Multi-generational customers — bring the kids, bring the dad.",
  },
];

const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Barber+%40+the+harbour+Werribee+South";

export default function Trusted() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 sm:px-8 md:py-32">
      {/* Subtle dot grid background — fades at edges via radial mask */}
      <DotPattern
        className="text-cream/[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Heading block — centred */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 h-[2px] w-12 bg-barber-red" aria-hidden />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-barber-red sm:text-xs">
            Trusted by the harbour
          </p>
          <h2 className="mt-4 font-serif font-normal leading-[1.05] tracking-tight text-cream text-[clamp(2.25rem,5vw,3.75rem)]">
            Real cuts. Real regulars. Real reviews.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-cream/85 sm:text-lg">
            Trusted by the locals through word of mouth on the marina, since
            2018.
          </p>
        </div>

        {/* Stats — 1 col / 2x2 / 4 across */}
        <dl className="mt-14 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ value, decimalPlaces, suffix, label }) => (
            <div key={label} className="flex flex-col items-center">
              <dt className="order-2 mt-3 text-sm text-cream/75">{label}</dt>
              <dd className="order-1 font-serif text-5xl leading-none text-barber-red">
                <NumberTicker
                  value={value}
                  decimalPlaces={decimalPlaces ?? 0}
                  className="font-serif text-5xl leading-none text-barber-red"
                />
                {suffix}
              </dd>
            </div>
          ))}
        </dl>

        {/* Subtle red divider */}
        <div
          className="mx-auto my-16 h-px w-20 bg-barber-red/40"
          aria-hidden
        />

        {/* Sub-section heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cream/70 sm:text-xs">
            What regulars comment on
          </p>
          <h3 className="mt-4 font-serif font-normal leading-[1.1] tracking-tight text-cream text-[1.75rem] sm:text-[2rem]">
            Three things people keep saying.
          </h3>
        </div>

        {/* Theme cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {THEMES.map(({ Icon, name, description }) => (
            <article
              key={name}
              className="group rounded-sm border-t-4 border-barber-red bg-ink-800 p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_-2px_28px_-6px_rgba(168,48,46,0.45),0_10px_28px_-12px_rgba(0,0,0,0.6)]"
            >
              <Icon
                className="h-6 w-6 text-barber-red"
                strokeWidth={1.75}
                aria-hidden
              />
              <h4 className="mt-4 font-serif text-2xl font-normal leading-snug text-cream">
                {name}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60 hover:bg-cream/5 sm:text-base"
          >
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
