import type { Metadata } from "next";

import { TherapistSections } from "@/components/sections/therapist-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Therapist | Odyssey Counselling",
  description:
    "Meet the therapist at Odyssey Counselling and learn about her academic background, clinical approach, and migrant-focused experience.",
};

export default async function TherapistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return <TherapistSections locale={activeLocale} />;
}
