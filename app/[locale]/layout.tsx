import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { type Locale, defaultLocale, isLocale } from "@/i18n/config";

const skipLinkText: Record<Locale, string> = {
  en: "Skip to main content",
  tr: "Ana içeriğe geç",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const activeLocale = isLocale(locale) ? locale : defaultLocale;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-xl focus:bg-surface focus:px-4 focus:py-2 focus:text-primary focus:ring-2 focus:ring-primary/40"
      >
        {skipLinkText[activeLocale]}
      </a>
      <Navbar locale={activeLocale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={activeLocale} />
    </>
  );
}
