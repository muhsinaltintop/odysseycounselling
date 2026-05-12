"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { type Locale } from "@/i18n/config";

type ContentLocale = "en" | "tr";

type ContentModel = {
  badge: string;
  hero: { title: string; bodyOne: string; bodyTwo: string; ctaPrimary: string; ctaSecondary: string; ctaTertiary: string; trust: string[] };
  whatIs: { eyebrow: string; title: string; intro: string; features: Array<{ icon: string; title: string; description: string }> };
  whoFor: { eyebrow: string; title: string; intro: string; points: string[] };
  how: { eyebrow: string; title: string; intro: string; steps: string[] };
  psychology: { eyebrow: string; title: string; body: string; bullets: string[] };
  finalCta: { title: string; body: string; button: string };
  disclaimer: string;
};

const content: Record<ContentLocale, ContentModel> = {
  en: {
    badge: "Odyssey App • Mental Wellbeing",
    hero: {
      title: "When life changes, your mind needs support too.",
      bodyOne: "Adjusting to a new country, a new routine, and a new life can sometimes feel heavier than it looks.",
      bodyTwo: "Odyssey App is a wellbeing platform for migrants and people living abroad, designed to support daily stress, loneliness, uncertainty, and emotional overwhelm through small sustainable practices.",
      ctaPrimary: "Start Your Journey",
      ctaSecondary: "Get Early Access",
      ctaTertiary: "Explore Odyssey",
      trust: ["Created with psychological expertise", "Short daily exercises", "Calm and safe experience"],
    },
    whatIs: { eyebrow: "What is Odyssey", title: "A calm wellbeing space for daily life.", intro: "Odyssey is a mobile-first app that supports small, sustainable wellbeing habits in just a few minutes a day.", features: [
      { icon: "🧘", title: "Short daily exercises", description: "Quiet practices designed for busy days." },
      { icon: "📝", title: "Reflection and emotional awareness", description: "Simple prompts to help you notice and process emotions." },
      { icon: "🌍", title: "Migration-focused support", description: "Content built around adaptation, belonging, and life transitions." },
      { icon: "📈", title: "Progress tracking", description: "See your small steps turn into steady routines." },
    ] },
    whoFor: { eyebrow: "Who is it for", title: "Designed for people building a life abroad.", intro: "Odyssey was created especially for people navigating emotional pressure while adapting to a new environment.", points: ["Migrants living in the UK", "International students", "People adjusting to a new country", "Individuals experiencing loneliness or lack of belonging", "Busy adults carrying emotional stress"] },
    how: { eyebrow: "How it works", title: "A gentle routine in three simple steps.", intro: "Structured to feel supportive, never overwhelming.", steps: ["Choose your focus areas", "Spend a few minutes each day", "Continue with small steps"] },
    psychology: { eyebrow: "Psychology-based approach", title: "Supportive, non-judgmental, and grounded in expertise.", body: "Odyssey content is informed by psychology and wellbeing principles, and shaped in connection with Odyssey Counselling.", bullets: ["No clinical jargon", "No pressure", "No judgment", "Aligned with everyday life"] },
    finalCta: { title: "Small steps are still part of the journey.", body: "Join early access and be the first to explore Odyssey App when it launches.", button: "Get Early Access" },
    disclaimer: "Odyssey App is not a replacement for therapy, medical care, or emergency services.",
  },
  tr: {
    badge: "Odyssey App • Mental Wellbeing",
    hero: {
      title: "Hayatın değiştiğinde, zihnin de desteğe ihtiyaç duyar.",
      bodyOne: "Yeni bir ülkeye, yeni bir düzene ve yeni bir hayata uyum sağlamak bazen görünenden daha zor olabilir.",
      bodyTwo: "Odyssey App, göçmenlerin ve yurtdışında yaşayan bireylerin günlük stres, yalnızlık, belirsizlik ve duygusal yüklerle daha sağlıklı başa çıkabilmesi için tasarlanmış bir wellbeing uygulamasıdır.",
      ctaPrimary: "Yolculuğuna Başla",
      ctaSecondary: "Erken Erişim Al",
      ctaTertiary: "Odyssey’i Keşfet",
      trust: ["Psikolog desteğiyle geliştirildi", "Günlük kısa egzersizler", "Güvenli ve sakin bir deneyim"],
    },
    whatIs: { eyebrow: "Odyssey Nedir", title: "Günlük hayat için sakin bir wellbeing alanı.", intro: "Odyssey, karmaşık programlar yerine birkaç dakikada tamamlanabilen küçük ve sürdürülebilir adımlara odaklanır.", features: [
      { icon: "🧘", title: "Kısa günlük egzersizler", description: "Yoğun günlerde uygulanabilecek sakinleştirici mini pratikler." },
      { icon: "📝", title: "Yansıma ve duygusal farkındalık", description: "Duyguları fark etmeye ve düzenlemeye yardımcı basit yönlendirmeler." },
      { icon: "🌍", title: "Göç odaklı içerik", description: "Uyum, aidiyet ve geçiş dönemlerine özel destek içerikleri." },
      { icon: "📈", title: "İlerleme takibi", description: "Küçük adımlarınızın istikrarlı bir rutine dönüştüğünü görün." },
    ] },
    whoFor: { eyebrow: "Kimler İçin", title: "Yurtdışında yeni bir düzen kuranlar için tasarlandı.", intro: "Odyssey, yeni bir çevreye uyum sağlarken duygusal yük taşıyan bireyler için hazırlandı.", points: ["İngiltere’de yaşayan göçmenler", "Uluslararası öğrenciler", "Yeni bir ülkeye uyum sağlamaya çalışan bireyler", "Yalnızlık veya aidiyet zorlukları yaşayanlar", "Günlük stres taşıyan yoğun yetişkinler"] },
    how: { eyebrow: "Nasıl Çalışır", title: "Üç basit adımla nazik bir rutin.", intro: "Baskı yaratmayan, sürdürülebilir bir akış.", steps: ["Odak alanlarını seç", "Her gün birkaç dakika ayır", "Küçük adımlarla devam et"] },
    psychology: { eyebrow: "Psikoloji Temelli Yaklaşım", title: "Yargılamayan, güvenli ve uzmanlıkla şekillenen içerik.", body: "Odyssey içeriği psikoloji, wellbeing ve göç deneyimi alanındaki uzman yaklaşımıyla ve Odyssey Counselling ilkeleriyle hazırlanır.", bullets: ["Klinik jargon olmadan", "Baskı kurmadan", "Yargılamadan", "Günlük yaşama uyumlu"] },
    finalCta: { title: "Küçük adımlar da bir yolculuktur.", body: "Erken erişim listesine katılın ve Odyssey App yayınlandığında ilk haberdar olanlardan olun.", button: "Erken Erişim Al" },
    disclaimer: "Odyssey App; terapi, tıbbi değerlendirme veya acil destek hizmetlerinin yerine geçmez.",
  },
};

export function OdysseyAppSections({ locale }: { locale: Locale }) {
  const [activeLanguage, setActiveLanguage] = useState<ContentLocale>("en");
  const withLocale = (href: string) => `/${locale}${href}`;
  const copy = content[activeLanguage];

  return (
    <div lang={activeLanguage} className="pb-24 md:pb-32">
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent-sage/20 via-background to-background" aria-hidden />
        <Container as="div" className="relative">
          <div className="flex justify-end">
            <div className="inline-flex rounded-xl border border-border bg-surface p-1" role="tablist" aria-label="Language switcher">
              {(["en", "tr"] as const).map((lang) => (
                <button key={lang} type="button" role="tab" aria-selected={activeLanguage === lang} onClick={() => setActiveLanguage(lang)} className={`rounded-lg px-4 py-1.5 text-xs uppercase transition-all duration-300 ${activeLanguage === lang ? "bg-primary text-surface" : "text-text-soft hover:text-text"}`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative -mt-8 py-16 md:py-24">
        <Container><div className="rounded-[3rem] border border-border bg-surface p-8 md:p-14 transition-all duration-300"><p className="text-xs tracking-[0.18em] text-text-soft uppercase">{copy.badge}</p><h1 className="mt-5 text-4xl text-primary md:text-6xl">{copy.hero.title}</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.hero.bodyOne}</p><p className="mt-3 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.hero.bodyTwo}</p><div className="mt-10 flex flex-wrap gap-3"><Link href={withLocale("/contact")} className="rounded-xl bg-primary px-5 py-3 text-sm text-surface transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft">{copy.hero.ctaPrimary}</Link><Link href={withLocale("/contact")} className="rounded-xl border border-primary/20 bg-surface px-5 py-3 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft">{copy.hero.ctaSecondary}</Link><Link href="#what-is-odyssey" className="rounded-xl border border-border bg-background px-5 py-3 text-sm text-text transition-all duration-300 hover:-translate-y-px">{copy.hero.ctaTertiary}</Link></div><ul className="mt-10 grid gap-3 text-sm text-text-soft md:grid-cols-3">{copy.hero.trust.map((item) => (<li key={item} className="rounded-xl border border-border-soft bg-background px-4 py-3">{item}</li>))}</ul></div></Container>
      </section>

      <section id="what-is-odyssey" className="py-24 md:py-32"><Container><p className="text-xs tracking-[0.18em] text-text-soft uppercase">{copy.whatIs.eyebrow}</p><h2 className="mt-4 text-3xl text-primary md:text-5xl">{copy.whatIs.title}</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.whatIs.intro}</p><div className="mt-12 grid gap-5 md:grid-cols-2">{copy.whatIs.features.map((f) => (<article key={f.title} className="rounded-2xl border border-border bg-surface p-6"><p className="text-2xl" aria-hidden>{f.icon}</p><h3 className="mt-4 text-xl text-primary">{f.title}</h3><p className="mt-3 text-sm leading-relaxed text-text-soft md:text-base">{f.description}</p></article>))}</div></Container></section>

      <section className="py-24 md:py-32"><Container><p className="text-xs tracking-[0.18em] text-text-soft uppercase">{copy.whoFor.eyebrow}</p><h2 className="mt-4 text-3xl text-primary md:text-5xl">{copy.whoFor.title}</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.whoFor.intro}</p><ul className="mt-10 grid gap-4 md:grid-cols-2">{copy.whoFor.points.map((point) => (<li key={point} className="rounded-2xl border border-border bg-surface p-5 text-text-soft">{point}</li>))}</ul></Container></section>

      <section className="py-24 md:py-32"><Container><p className="text-xs tracking-[0.18em] text-text-soft uppercase">{copy.how.eyebrow}</p><h2 className="mt-4 text-3xl text-primary md:text-5xl">{copy.how.title}</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.how.intro}</p><ol className="mt-12 grid gap-5 md:grid-cols-3">{copy.how.steps.map((step, i) => (<li key={step} className="rounded-2xl border border-border bg-surface p-6"><p className="text-xs tracking-[0.18em] text-text-muted uppercase">0{i + 1}</p><h3 className="mt-3 text-lg text-primary">{step}</h3></li>))}</ol></Container></section>

      <section className="py-24 md:py-32"><Container><p className="text-xs tracking-[0.18em] text-text-soft uppercase">{copy.psychology.eyebrow}</p><h2 className="mt-4 text-3xl text-primary md:text-5xl">{copy.psychology.title}</h2><p className="mt-6 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{copy.psychology.body}</p><ul className="mt-8 flex flex-wrap gap-3">{copy.psychology.bullets.map((b) => (<li key={b} className="rounded-xl border border-border bg-surface px-4 py-2 text-sm text-text-soft">{b}</li>))}</ul></Container></section>

      <section><Container><div className="rounded-[2rem] border border-border bg-surface-soft p-8 md:p-12"><h2 className="text-3xl text-primary md:text-5xl">{copy.finalCta.title}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">{copy.finalCta.body}</p><div className="mt-8"><Link href={withLocale("/contact")} className="rounded-xl bg-primary px-5 py-3 text-sm text-surface transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft">{copy.finalCta.button}</Link></div></div><p className="mt-8 text-sm leading-relaxed text-text-muted">{copy.disclaimer}</p></Container></section>
    </div>
  );
}
