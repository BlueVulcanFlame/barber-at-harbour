/*
 * PLACEHOLDER HOURS - The "Open daily 9:00am – 5:30pm" line mirrors the Visit
 * section. Confirm with Sam before going live.
 */

import Image from "next/image";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";

const FOOTER_LINKS = [
  { label: "About Sam", href: "/about", external: false },
  { label: "Services & Pricing", href: "/services", external: false },
  { label: "Find the Shop", href: "/#visit", external: false },
  {
    label: "Wyndham Harbour",
    href: "https://www.wyndhamharbour.com.au/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-barber-red/40 bg-ink-900 px-6 pb-10 pt-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Three columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {/* Brand column */}
          <div>
            <Image
              src="/logo.png"
              alt="Barber @ the Harbour"
              width={1536}
              height={1024}
              className="h-32 w-auto invert brightness-200 sm:h-40"
            />
            <p className="mt-5 max-w-[28ch] text-sm text-cream/75">
              Old-school cuts on Wyndham Harbour. Since 2018.
            </p>
          </div>

          {/* Visit column */}
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream/85 sm:text-xs">
              Visit
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-cream/85">
              <p>Unit 4/50 Catamaran Drive</p>
              <p>Werribee South VIC 3030</p>
              <p className="text-cream/65">Inside Wyndham Harbour</p>
            </address>
            <div className="mt-5">
              <a
                href={PHONE_HREF}
                className="text-sm text-cream transition-colors hover:text-barber-red"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            {/* PLACEHOLDER HOURS - CONFIRM WITH SAM */}
            <p className="mt-5 text-sm text-cream/75">
              Open daily 9:00am – 5:30pm
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream/85 sm:text-xs">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-cream/85 transition-colors hover:text-barber-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Barber @ the Harbour</p>
          <p>
            Site by{" "}
            <a
              href="https://starfinchmedia.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/75 transition-colors hover:text-barber-red"
            >
              Starfinch Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
