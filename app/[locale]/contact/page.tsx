import type { Metadata } from "next";

import { ContactSections } from "@/components/sections/contact-sections";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Contact | Odyssey Counselling",
  description:
    "Send a secure confidential enquiry to Odyssey Counselling in English or Turkish, or email imran@odysseycounselling.uk directly.",
};

type ContactPageSearchParams = {
  status?: string;
};

const validStatuses = ["sent", "invalid", "configuration", "failed"] as const;

type ContactFormStatus = (typeof validStatuses)[number];

function isContactFormStatus(value: string | undefined): value is ContactFormStatus {
  return validStatuses.includes(value as ContactFormStatus);
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<ContactPageSearchParams>;
}) {
  const [{ locale }, { status }] = await Promise.all([params, searchParams]);
  const activeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const activeStatus = isContactFormStatus(status) ? status : undefined;

  return <ContactSections locale={activeLocale} status={activeStatus} />;
}
