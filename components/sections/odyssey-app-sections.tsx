import Link from "next/link";

import { Container } from "@/components/ui/container";
import { type Locale } from "@/i18n/config";

type Bilingual = { tr: string; en: string };

type Feature = { title: Bilingual; description: Bilingual; icon: string };

const trustItems: Bilingual[] = [
  { tr: "Psikolog desteğiyle geliştirildi", en: "Created with psychological expertise" },
  { tr: "Günlük kısa egzersizler", en: "Short daily exercises" },
  { tr: "Güvenli ve sakin bir deneyim", en: "Calm and safe experience" },
];

const features: Feature[] = [
  {
    icon: "🧘",
    title: { tr: "Kısa günlük wellbeing egzersizleri", en: "Short daily wellbeing exercises" },
    description: {
      tr: "Yoğun günlerin içinde birkaç dakikalık sakinleşme alanları.",
      en: "A few calm minutes that fit naturally into busy days.",
    },
  },
  {
    icon: "📝",
    title: { tr: "Duygusal farkındalık ve yansıma", en: "Emotional awareness and reflection" },
    description: {
      tr: "Duygularınızı fark etmek ve düzenlemek için yapılandırılmış mini pratikler.",
      en: "Guided micro-practices to notice and regulate your emotions.",
    },
  },
  {
    icon: "🌍",
    title: { tr: "Göç ve uyum odaklı içerikler", en: "Migration-focused support content" },
    description: {
      tr: "Yeni bir ülkede aidiyet, belirsizlik ve geçiş süreçlerine özel içerikler.",
      en: "Support for belonging, uncertainty, and transitions in a new country.",
    },
  },
  {
    icon: "📈",
    title: { tr: "İlerleme takibi", en: "Progress tracking" },
    description: {
      tr: "Küçük adımların zamanla nasıl birikerek güçlendiğini görün.",
      en: "See how small steps build consistency over time.",
    },
  },
];

function SectionHeading({ badge, title, copy }: { badge: Bilingual; title: Bilingual; copy: Bilingual }) {
  return (
    <header className="max-w-4xl">
      <p className="text-xs tracking-[0.18em] text-text-soft uppercase">{badge.tr} • {badge.en}</p>
      <h2 className="mt-4 text-3xl text-primary md:text-5xl">{title.tr}</h2>
      <p className="mt-2 text-3xl text-primary/85 md:text-5xl">{title.en}</p>
      <p className="mt-6 text-base leading-relaxed text-text-soft md:text-lg">{copy.tr}</p>
      <p className="mt-2 text-base leading-relaxed text-text-soft md:text-lg">{copy.en}</p>
    </header>
  );
}

export function OdysseyAppSections({ locale }: { locale: Locale }) {
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent-sage/20 via-background to-background" aria-hidden />
        <Container as="div" className="relative">
          <div className="rounded-[3rem] border border-border bg-surface p-8 md:p-14">
            <p className="text-xs tracking-[0.18em] text-text-soft uppercase">Odyssey App • Mental Wellbeing</p>
            <h1 className="mt-5 text-4xl text-primary md:text-6xl">Hayatın değiştiğinde, zihnin de desteğe ihtiyaç duyar.</h1>
            <p className="mt-3 text-3xl text-primary/85 md:text-5xl">When life changes, your mind needs support too.</p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">Yeni bir ülkeye, yeni bir düzene ve yeni bir hayata uyum sağlamak bazen görünenden daha zor olabilir. Odyssey App, göçmenlerin ve yurtdışında yaşayan bireylerin günlük stres, yalnızlık, belirsizlik ve duygusal yüklerle daha sağlıklı başa çıkabilmesi için tasarlanmış bir wellbeing uygulamasıdır.</p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">Adjusting to a new country, a new routine, and a new life can sometimes feel heavier than it looks. Odyssey App supports migrants and people living abroad through stress, loneliness, uncertainty, and emotional overwhelm.</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={withLocale("/contact")} className="rounded-xl bg-primary px-5 py-3 text-sm text-surface transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft">{locale === "tr" ? "Yolculuğuna Başla" : "Start Your Journey"}</Link>
              <Link href={withLocale("/contact")} className="rounded-xl border border-primary/20 bg-surface px-5 py-3 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft">{locale === "tr" ? "Erken Erişim Al" : "Get Early Access"}</Link>
              <Link href="#what-is-odyssey" className="rounded-xl border border-border bg-background px-5 py-3 text-sm text-text transition-all duration-300 hover:-translate-y-px">{locale === "tr" ? "Odyssey’i Keşfet" : "Explore Odyssey"}</Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-text-soft md:grid-cols-3">
              {trustItems.map((item) => (
                <li key={item.en} className="rounded-xl border border-border-soft bg-background px-4 py-3">{item.tr} <span className="text-text-muted">• {item.en}</span></li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="what-is-odyssey" className="py-24 md:py-32">
        <Container>
          <SectionHeading badge={{ tr: "Odyssey Nedir", en: "What is Odyssey" }} title={{ tr: "Günlük hayat için sakin bir wellbeing alanı.", en: "A calm wellbeing space for daily life." }} copy={{ tr: "Odyssey, yoğun ve karmaşık içerikler yerine birkaç dakikada tamamlanabilen küçük adımlarla ilerler.", en: "Odyssey is mobile-first and focused on short, sustainable habits instead of overwhelming routines." }} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title.en} className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-px">
                <p className="text-2xl" aria-hidden>{feature.icon}</p>
                <h3 className="mt-4 text-xl text-primary">{feature.title.tr}</h3>
                <p className="mt-1 text-lg text-primary/80">{feature.title.en}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-soft md:text-base">{feature.description.tr}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-soft md:text-base">{feature.description.en}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading badge={{ tr: "Kimler için", en: "Who is it for" }} title={{ tr: "Yalnız hissettiğinizde, yalnız değilsiniz.", en: "If you feel alone, you are not alone." }} copy={{ tr: "Odyssey özellikle İngiltere’de yaşayan göçmenler, uluslararası öğrenciler, expatlar ve yoğun duygusal yük taşıyan bireyler için tasarlandı.", en: "Designed for migrants in the UK, international students, expats, and busy adults navigating emotional stress and life transitions." }} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading badge={{ tr: "Nasıl çalışır", en: "How it works" }} title={{ tr: "Her gün birkaç dakika ile başlar.", en: "It starts with a few minutes each day." }} copy={{ tr: "Basit, sürdürülebilir ve baskı yaratmayan bir akış.", en: "A gentle process designed to fit real life." }} />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[{tr:"İlgi alanlarını seç",en:"Choose your focus areas"},{tr:"Günlük birkaç dakika ayır",en:"Spend a few minutes daily"},{tr:"Küçük adımlarla devam et",en:"Continue with small steps"}].map((step, i)=>(<li key={step.en} className="rounded-2xl border border-border bg-surface p-6"><p className="text-xs tracking-[0.18em] text-text-muted uppercase">0{i+1}</p><h3 className="mt-3 text-lg text-primary">{step.tr}</h3><p className="text-base text-primary/80">{step.en}</p></li>))}
          </ol>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading badge={{ tr: "Psikoloji temelli yaklaşım", en: "Psychology-based approach" }} title={{ tr: "Yargılamadan, baskı kurmadan, güvenle.", en: "Non-judgmental, supportive, and psychologically informed." }} copy={{ tr: "Odyssey içeriği; psikoloji, wellbeing ve göç deneyimi üzerinde çalışan uzman bakış açısıyla hazırlanır ve Odyssey Counselling yaklaşımıyla şekillenir.", en: "Content is built with psychological expertise and aligned with the safe, humane care principles of Odyssey Counselling." }} />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="rounded-[2rem] border border-border bg-surface-soft p-8 md:p-12">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Final CTA</p>
            <h2 className="mt-4 text-3xl text-primary md:text-5xl">Küçük adımlar da bir yolculuktur.</h2>
            <p className="mt-2 text-3xl text-primary/85 md:text-5xl">Small steps are still part of the journey.</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">Hazır olduğunuz hızda başlayın. Erken erişim listesine katılın ve Odyssey App yayınlandığında ilk haberdar olanlardan olun. Join the early access list and explore Odyssey at your own pace.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href={withLocale("/contact")} className="rounded-xl bg-primary px-5 py-3 text-sm text-surface transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft">{locale === "tr" ? "Erken Erişim Al" : "Get Early Access"}</Link></div>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-text-muted">Odyssey App profesyonel terapi, tıbbi değerlendirme veya acil durum desteğinin yerine geçmez. Acil durumlarda lütfen yerel acil destek hizmetlerine başvurun. Odyssey App is not a replacement for therapy, medical care, or emergency services.</p>
        </Container>
      </section>
    </>
  );
}
