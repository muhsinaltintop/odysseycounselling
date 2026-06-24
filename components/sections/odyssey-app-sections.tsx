import { type Locale } from "@/i18n/config";

import { Container } from "@/components/ui/container";

type LocalizedContent = {
  heroTitle: string;
  heroBody: string[];
  heroCta: string[];
  heroSubtext: string;
  whatIsTitle: string;
  whatIsBody: string[];
  whatIsList: string[];
  whoTitle: string;
  whoIntro: string;
  whoList: string[];
  whoFeelIntro: string;
  whoFeelList: string[];
  howTitle: string;
  howSteps: Array<{ title: string; body: string }>;
  foundationTitle: string;
  foundationBody: string;
  foundationList: string[];
  foundationOutro: string;
  finalTitle: string;
  finalBody: string;
  finalCta: string[];
  footerNote: string;
};

const content: Record<Locale, LocalizedContent> = {
  en: {
    heroTitle: "When life changes, your mind needs support too.",
    heroBody: [
      "Adjusting to a new country, a new routine, and a new life can sometimes feel heavier than it looks.",
      "Odyssey App is a wellbeing platform designed to support migrants and people living abroad through daily stress, loneliness, uncertainty, and emotional overwhelm.",
      "Through short daily exercises, reflective prompts, and psychology-based content, Odyssey helps you create small but sustainable moments of balance in everyday life.",
    ],
    heroCta: ["Start Your Journey", "Get Early Access", "Explore Odyssey"],
    heroSubtext:
      "Created with psychological expertise • Short daily exercises • Calm and safe experience",
    whatIsTitle: "What is Odyssey?",
    whatIsBody: [
      "Odyssey is a mobile-first wellbeing app designed to support small, sustainable mental wellbeing habits.",
      "Instead of overwhelming content, it focuses on simple daily steps that can be completed in just a few minutes.",
    ],
    whatIsList: [
      "Short daily wellbeing exercises",
      "Emotional awareness practices",
      "Migration & adaptation focused content",
      "Personal reflection and note areas",
      "Progress tracking",
      "Guidance toward professional support when needed",
    ],
    whoTitle: "Who is Odyssey For?",
    whoIntro: "Odyssey was created especially for:",
    whoList: [
      "Migrants living in the UK",
      "People adjusting to a new country",
      "Individuals experiencing loneliness or lack of belonging",
      "Those carrying daily stress and emotional pressure",
      "Busy people who want healthier emotional routines",
    ],
    whoFeelIntro: "If you sometimes feel:",
    whoFeelList: [
      "I carry everything on my own",
      "I always have to stay strong",
      "I don’t fully belong here",
      "My mind never slows down",
    ],
    howTitle: "How It Works",
    howSteps: [
      { title: "1. Choose your focus areas", body: "Select the wellbeing topics that feel most relevant to you." },
      { title: "2. Spend a few minutes each day", body: "Build your own rhythm with short 5–10 minute exercises." },
      { title: "3. Continue with small steps", body: "Small consistent practices can gradually create a healthier emotional balance." },
    ],
    foundationTitle: "Built on Psychological Understanding",
    foundationBody:
      "Odyssey content is developed through a psychology-informed perspective shaped by wellbeing and migration-focused experience.",
    foundationList: [
      "Without clinical language",
      "Without judgement",
      "Without pressure",
      "In a way that fits naturally into daily life",
    ],
    foundationOutro:
      "Odyssey was designed as a digital extension of the Odyssey Counselling approach.",
    finalTitle: "Small steps are still part of the journey.",
    finalBody:
      "Start creating calmer, safer, and more sustainable moments for yourself with Odyssey.",
    finalCta: ["Join Early Access", "Experience Odyssey"],
    footerNote:
      "Odyssey App is not a replacement for therapy or emergency mental health support. Please contact local health services if immediate support is needed.",
  },
  tr: {
    heroTitle: "Hayatın değiştiğinde, zihnin de desteğe ihtiyaç duyar.",
    heroBody: [
      "Yeni bir ülkeye, yeni bir düzene ve yeni bir hayata uyum sağlamak bazen görünenden daha zor olabilir.",
      "Odyssey App, göçmenlerin ve yurtdışında yaşayan bireylerin günlük stres, yalnızlık, belirsizlik ve duygusal yüklerle daha sağlıklı başa çıkabilmesi için tasarlanmış bir wellbeing uygulamasıdır.",
      "Kısa günlük egzersizler, farkındalık çalışmaları ve psikoloji temelli içeriklerle kendinize küçük ama sürdürülebilir alanlar açmanıza yardımcı olur.",
    ],
    heroCta: ["Yolculuğuna Başla", "Erken Erişim Al", "Odyssey’i Keşfet"],
    heroSubtext:
      "Uzman Psikolog desteğiyle geliştirildi • Günlük kısa egzersizler • Güvenli ve sakin bir deneyim",
    whatIsTitle: "Odyssey Nedir?",
    whatIsBody: [
      "Odyssey, günlük mental wellbeing alışkanlıklarını destekleyen mobil odaklı bir uygulamadır.",
      "Yoğun ve karmaşık içerikler yerine, birkaç dakikada tamamlanabilen küçük adımlara odaklanır.",
    ],
    whatIsList: [
      "Günlük kısa wellbeing egzersizleri",
      "Duygusal farkındalık çalışmaları",
      "Göç ve uyum sürecine yönelik içerikler",
      "Kişisel notlar ve düşünce alanları",
      "İlerleme takibi",
      "İhtiyaç halinde profesyonel destek yönlendirmeleri",
    ],
    whoTitle: "Odyssey Kimler İçin?",
    whoIntro: "Odyssey özellikle:",
    whoList: [
      "İngiltere’de yaşayan göçmenler",
      "Yeni taşınmış bireyler",
      "Yalnızlık veya aidiyet zorlukları yaşayanlar",
      "Günlük stres ve zihinsel yük hissedenler",
      "Yoğun tempoda kendine alan açmak isteyenler",
    ],
    whoFeelIntro: "Kendinizi bazen:",
    whoFeelList: [
      "Her şeyi tek başıma taşıyorum",
      "Sürekli güçlü olmak zorundayım",
      "Buraya ait hissedemiyorum",
      "Kafam hiç durmuyor",
    ],
    howTitle: "Nasıl Çalışır?",
    howSteps: [
      { title: "1. İlgi alanlarını seç", body: "İhtiyacına uygun wellbeing başlıklarını belirle." },
      { title: "2. Günlük birkaç dakika ayır", body: "5–10 dakikalık kısa içeriklerle kendi ritmini oluştur." },
      { title: "3. Küçük adımlarla devam et", body: "Düzenli küçük pratikler zamanla daha sürdürülebilir bir denge yaratır." },
    ],
    foundationTitle: "Psikoloji Temelli Bir Yaklaşım",
    foundationBody:
      "Odyssey içerisindeki içerikler; psikoloji, wellbeing ve göç deneyimi üzerine çalışan uzman bakış açısıyla hazırlanmıştır.",
    foundationList: [
      "Klinik bir dil kullanmadan",
      "Yargılamadan",
      "Baskı yaratmadan",
      "Günlük hayata uyumlu şekilde",
    ],
    foundationOutro:
      "Odyssey Counselling yaklaşımının dijital bir uzantısı olarak tasarlanmıştır.",
    finalTitle: "Küçük adımlar da bir yolculuktur.",
    finalBody:
      "Odyssey ile günlük yaşamın içinde kendinize daha sakin, daha güvenli ve daha sürdürülebilir alanlar açmaya başlayın.",
    finalCta: ["Erken Erişim İçin Kaydol", "Odyssey’i Deneyimle"],
    footerNote:
      "Odyssey App bir terapi yerine geçmez. Acil psikolojik destek ihtiyaçlarında yerel sağlık hizmetlerine başvurmanız önerilir.",
  },
};

export function OdysseyAppSections({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <div className="py-16 md:py-24">
      <Container className="space-y-16 md:space-y-24">
        <section className="space-y-6">
          <h1 className="font-heading text-4xl leading-tight text-primary md:text-5xl">{t.heroTitle}</h1>
          {t.heroBody.map((item) => (
            <p key={item} className="max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">
              {item}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            {t.heroCta.map((cta) => (
              <span key={cta} className="rounded-full border border-primary/20 bg-surface px-4 py-2 text-sm text-primary">
                {cta}
              </span>
            ))}
          </div>
          <p className="text-sm text-text-muted">{t.heroSubtext}</p>
        </section>

        <section className="space-y-5">
          <h2 className="font-heading text-3xl text-primary">{t.whatIsTitle}</h2>
          {t.whatIsBody.map((item) => (
            <p key={item} className="max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{item}</p>
          ))}
          <ul className="list-disc space-y-2 pl-5 text-text-soft marker:text-primary/70">
            {t.whatIsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="font-heading text-3xl text-primary">{t.whoTitle}</h2>
          <p className="text-base text-text-soft md:text-lg">{t.whoIntro}</p>
          <ul className="list-disc space-y-2 pl-5 text-text-soft marker:text-primary/70">
            {t.whoList.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-base text-text-soft md:text-lg">{t.whoFeelIntro}</p>
          <ul className="list-disc space-y-2 pl-5 text-text-soft marker:text-primary/70">
            {t.whoFeelList.map((item) => <li key={item}>“{item}”</li>)}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-heading text-3xl text-primary">{t.howTitle}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {t.howSteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-lg font-medium text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-soft md:text-base">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="font-heading text-3xl text-primary">{t.foundationTitle}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{t.foundationBody}</p>
          <ul className="list-disc space-y-2 pl-5 text-text-soft marker:text-primary/70">
            {t.foundationList.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{t.foundationOutro}</p>
        </section>

        <section className="rounded-2xl border border-border bg-surface-soft p-8">
          <h2 className="font-heading text-3xl text-primary">{t.finalTitle}</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-soft md:text-lg">{t.finalBody}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {t.finalCta.map((cta) => <span key={cta} className="rounded-full border border-primary/20 bg-background px-4 py-2 text-sm text-primary">{cta}</span>)}
          </div>
        </section>

        <p className="border-t border-border pt-6 text-sm leading-relaxed text-text-muted">{t.footerNote}</p>
      </Container>
    </div>
  );
}
