import type { Metadata } from "next";

import { AboutSections } from "@/components/sections/about-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "About Odyssey Counselling",
  description:
    "Learn about Odyssey Counselling's holistic approach, mission, and vision for bilingual psychological support across the UK.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <AboutSections locale={activeLocale} />;
}
