import type { Metadata } from "next";

import { OdysseyAppSections } from "@/components/sections/odyssey-app-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Odyssey App | Wellbeing for Migrants & Expats",
  description:
    "Discover Odyssey App, a bilingual wellbeing app supporting migrants, international students, and expats with short psychology-informed daily practices.",
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
