import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

import { Container } from "@/components/ui/container";

const footerContent = {
  en: {
    description:
      "Bilingual Turkish-English counselling delivered with calm, clinical professionalism and deep respect for confidentiality.",
    navigationLabel: "Footer links",
    navigationHeading: "Navigate",
    links: {
      about: "About",
      services: "Services",
      app: "Odyssey App",
    },
    contactHeading: "Contact",
    contactCopy: "For a gentle first step, contact us and we will reply with clear next steps.",
    contactCta: "Contact Us",
    rights: "All rights reserved.",
  },
  tr: {
    description:
      "Gizliliğe derin saygı ve sakin, klinik profesyonellikle sunulan iki dilli Türkçe-İngilizce danışmanlık.",
    navigationLabel: "Alt bilgi bağlantıları",
    navigationHeading: "Gezinme",
    links: {
      about: "Hakkımızda",
      services: "Hizmetler",
      app: "Odyssey App",
    },
    contactHeading: "İletişim",
    contactCopy:
      "Nazik bir ilk adım için bize ulaşın; size sonraki adımları açık ve sakin bir şekilde iletelim.",
    contactCta: "Bize Ulaşın",
    rights: "Tüm hakları saklıdır.",
  },
} as const satisfies Record<
  Locale,
  {
    description: string;
    navigationLabel: string;
    navigationHeading: string;
    links: {
      about: string;
      services: string;
      app: string;
    };
    contactHeading: string;
    contactCopy: string;
    contactCta: string;
    rights: string;
  }
>;

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const content = footerContent[locale];
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <footer className="border-t border-border bg-surface-soft">
      <Container as="div" className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <section aria-labelledby="footer-brand">
          <Image
            id="footer-brand"
            src="/odyssey-logo.png"
            alt="Odyssey Counselling"
            width={413}
            height={75}
            className="h-[3.75rem] w-auto"
          />
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-soft md:text-base">
            {content.description}
          </p>
        </section>

        <nav aria-label={content.navigationLabel} className="space-y-4">
          <h2 className="text-sm font-semibold text-text">
            {content.navigationHeading}
          </h2>
          <ul className="space-y-3 text-sm text-text-soft">
            <li>
              <Link className="transition-colors hover:text-text" href={withLocale("/about")}>
                {content.links.about}
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-text" href={withLocale("/services")}>
                {content.links.services}
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-text" href={withLocale("/odyssey-app")}>
                {content.links.app}
              </Link>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="footer-contact" className="space-y-4">
          <h2 id="footer-contact" className="text-sm font-semibold text-text">
            {content.contactHeading}
          </h2>
          <p className="text-sm leading-relaxed text-text-soft">{content.contactCopy}</p>
          <Link
            href={withLocale("/contact")}
            className="inline-flex rounded-xl border border-primary/15 bg-surface px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:bg-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
          >
            {content.contactCta}
          </Link>
        </section>
      </Container>
      <Container as="div" className="border-t border-border-soft py-5">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Odyssey Counselling. {content.rights}
        </p>
      </Container>
    </footer>
  );
}
