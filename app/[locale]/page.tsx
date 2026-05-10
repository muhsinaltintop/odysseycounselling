import type { Metadata } from "next";

import { HomepageSections } from "@/components/sections/homepage-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Professional Turkish-Speaking Therapy UK",
  description:
    "Odyssey Counselling provides confidential bilingual therapy in Turkish and English, with calm professional support for adults in the UK.",
};

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <HomepageSections locale={activeLocale} />;
}
