import type { Metadata } from "next";

import { ContactSections } from "@/components/sections/contact-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Contact | Odyssey Counselling",
  description:
    "Send a confidential enquiry to Odyssey Counselling in English or Turkish, or email imran@odysseycounselling.com directly.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <ContactSections locale={activeLocale} />;
}
