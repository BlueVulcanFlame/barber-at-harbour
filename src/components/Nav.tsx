"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const PHONE_DISPLAY = "0432 526 301";
const PHONE_HREF = "tel:0432526301";

const MOBILE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visit", href: "/#visit" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Auto-close if viewport grows past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
      >
        <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-cream/10 bg-black/30 px-4 py-2.5 backdrop-blur-md sm:px-6 sm:py-3">
          {/* Brand wordmark — blackletter */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-blackletter text-lg text-cream sm:text-xl">
              Barber <span className="text-barber-red">@</span> the Harbour
            </span>
            <span className="mt-1 text-[0.6rem] tracking-[0.22em] uppercase text-cream/60 sm:text-[0.65rem]">
              Wyndham Harbour · Est. 2018
            </span>
          </Link>

          {/* Right-side links */}
          <div className="flex items-center gap-1 sm:gap-6">
            <Link
              href="/about"
              className="hidden text-sm text-cream/75 transition-colors hover:text-cream md:inline"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hidden text-sm text-cream/75 transition-colors hover:text-cream md:inline"
            >
              Services
            </Link>
            <Link
              href="/#visit"
              className="hidden text-sm text-cream/75 transition-colors hover:text-cream md:inline"
            >
              Visit
            </Link>

            {/* Mobile hamburger — visible only below md */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:text-barber-red md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>

            {/* Call Sam — always visible */}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 rounded-full bg-barber-red px-3.5 py-1.5 text-xs font-semibold text-cream transition-colors hover:bg-barber-red-soft sm:px-4 sm:py-2 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              Call<span className="hidden md:inline"> Sam</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex flex-col bg-ink-900/95 backdrop-blur-lg transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        {/* Top bar with close */}
        <div className="flex justify-end px-4 pt-4 sm:px-6 sm:pt-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-cream transition-colors hover:text-barber-red"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Centered links */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
          {MOBILE_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-8 py-4 text-center font-serif text-4xl text-cream transition-colors hover:text-barber-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Call Sam */}
        <div className="px-6 pb-10 pt-6 sm:px-8">
          <a
            href={PHONE_HREF}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-barber-red px-6 py-4 text-base font-semibold text-cream shadow-[0_8px_28px_-10px_rgba(168,48,46,0.65)] transition-colors hover:bg-barber-red-soft"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Sam — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  );
}
