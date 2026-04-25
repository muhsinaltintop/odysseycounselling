import Link from "next/link";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <Container as="div" className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <section aria-labelledby="footer-brand">
          <h2 id="footer-brand" className="font-heading text-2xl text-primary">
            Odyssey Counselling
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-soft md:text-base">
            Bilingual Turkish-English counselling delivered with calm, clinical
            professionalism and deep respect for confidentiality.
          </p>
        </section>

        <nav aria-label="Footer links" className="space-y-4">
          <h2 className="text-xs tracking-[0.18em] text-text-muted uppercase">Navigate</h2>
          <ul className="space-y-3 text-sm text-text-soft">
            <li>
              <Link className="transition-colors hover:text-text" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-text" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-text" href="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="footer-contact" className="space-y-4">
          <h2 id="footer-contact" className="text-xs tracking-[0.18em] text-text-muted uppercase">
            Contact
          </h2>
          <p className="text-sm leading-relaxed text-text-soft">
            For a gentle first step, send a confidential enquiry and we will
            reply with clear next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-primary/15 bg-surface px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:bg-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
          >
            Send a confidential enquiry
          </Link>
        </section>
      </Container>
      <Container as="div" className="border-t border-border-soft py-5">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Odyssey Counselling. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
