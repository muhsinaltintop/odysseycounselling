import type { Metadata } from "next";

import { ServicesSections } from "@/components/sections/services-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Services | Odyssey Counselling",
  description:
    "Explore Odyssey Counselling services for individuals, families, migrants, and organizations in Turkish and English.",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <ServicesSections locale={activeLocale} />;
}
