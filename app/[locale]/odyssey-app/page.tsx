import type { Metadata } from "next";

import { OdysseyAppSections } from "@/components/sections/odyssey-app-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

const seoByLocale: Record<Locale, Metadata> = {
  en: {
    title: "Odyssey App | Wellbeing for Migrants & Expats",
    description:
      "Odyssey App supports migrants, international students, and expats with calm, psychology-informed daily wellbeing practices.",
  },
  tr: {
    title: "Odyssey App | Göçmenler için Wellbeing Desteği",
    description:
      "Odyssey App, göçmenler ve yurtdışında yaşayan bireyler için psikoloji temelli, günlük uygulanabilir wellbeing pratikleri sunar.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return seoByLocale[activeLocale];
}

export default async function OdysseyAppPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <OdysseyAppSections locale={activeLocale} />;
}
