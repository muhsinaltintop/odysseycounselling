import type { Metadata } from "next";

import { OdysseyAppSections } from "@/components/sections/odyssey-app-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Odyssey App | Odyssey Counselling",
  description:
    "Learn how Odyssey App supports migrants and people living abroad with short, psychology-informed daily wellbeing practices.",
};

export default async function OdysseyAppPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <OdysseyAppSections locale={activeLocale} />;
}
