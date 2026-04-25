import Link from "next/link";

import { Container } from "@/components/ui/container";

const primaryNavItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/therapist", label: "Therapist" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container as="div" className="flex min-h-18 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.14em] text-primary uppercase transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="h-2 w-2 rounded-full bg-accent-sage" aria-hidden />
          Odyssey Counselling
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-soft transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-primary/15 bg-surface px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:border-primary/25 hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Confidential Enquiry
        </Link>
      </Container>
      <Container as="nav" aria-label="Primary mobile" className="pb-3 md:hidden">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border-soft pt-3">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-text-soft transition-colors hover:text-text focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
