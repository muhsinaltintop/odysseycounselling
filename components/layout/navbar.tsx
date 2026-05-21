"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale } from "@/i18n/config";

import { Container } from "@/components/ui/container";

const primaryNavItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/therapist", label: "Therapist" },
  { href: "/faq", label: "Odyssey App" },
  { href: "/contact", label: "Contact" },
] as const;

function getLocalizedPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  segments[0] = nextLocale;
  return `/${segments.join("/")}`;
}

export function Navbar({ locale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();
  const t = locale === "tr";
  const withLocale = (href: string) => `/${locale}${href}`;
  const switchLocale: Locale = locale === "en" ? "tr" : "en";
  const switchLocalePath = getLocalizedPath(pathname, switchLocale);
  const navLabels: Record<(typeof primaryNavItems)[number]["href"], string> = t
    ? {
        "/about": "Hakkında",
        "/services": "Hizmetler",
        "/therapist": "Terapist",
        "/faq": "Odyssey App",
        "/contact": "İletişim",
      }
    : {
        "/about": "About",
        "/services": "Services",
        "/therapist": "Therapist",
        "/faq": "Odyssey App",
        "/contact": "Contact",
      };

  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container as="div" className="flex min-h-18 items-center gap-6 py-4">
        <Link
          href={`/${locale}`}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-[0.14em] text-primary uppercase transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/odyssey-logo.png"
            alt="Odyssey Counselling"
            width={338}
            height={60}
            className="h-[3.25rem] w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={withLocale(item.href)}
                  className="text-sm text-text-soft transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {navLabels[item.href]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href={withLocale("/contact")}
            className="inline-flex items-center justify-center rounded-xl border border-primary/15 bg-surface px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:border-primary/25 hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t ? "Randevu Al" : "Book an Appointment"}
          </Link>

          <Link
            href={switchLocalePath}
            className="rounded-lg border border-border px-3 py-1 text-xs text-text-soft uppercase transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35"
            aria-label={t ? "Dili İngilizceye değiştir" : "Switch language to Turkish"}
          >
            {locale === "en" ? "TR" : "EN"}
          </Link>
        </div>
      </Container>

      <Container as="nav" aria-label="Primary mobile" className="pb-3 md:hidden">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border-soft pt-3">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={withLocale(item.href)}
                className="text-sm text-text-soft transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {navLabels[item.href]}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
