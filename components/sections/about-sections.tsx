"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { type Locale } from "@/i18n/config";

type TabKey = "about" | "mission" | "vision";

type TabContent = {
  title: string;
  body: string;
};

const contentByLocale: Record<Locale, Record<TabKey, TabContent>> = {
  en: {
    about: {
      title: "About Us",
      body: "Odyssey Counselling adopts a holistic approach to human wellbeing, supporting individuals from the prenatal period through older adulthood. We focus not only on the challenges experienced by the individual, but also on the influence of family relationships, education, working life, social environments, and cultural adaptation processes. Through this broader perspective, we aim to create more sustainable and effective pathways to wellbeing. We offer specialist support for migrants and refugees experiencing adjustment difficulties, trauma, anxiety, identity-related challenges, and family-related concerns.",
    },
    mission: {
      title: "Our Mission",
      body: "To strengthen the psychological well-being of individuals, to provide the professional support they need throughout life, and to develop scientific solutions to the challenges faced by immigrant and refugee communities in particular.",
    },
    vision: {
      title: "Our Vision",
      body: "To be a trusted, innovative and leading consultancy centre in developmental psychology and adult psychology throughout the United Kingdom, particularly in Leicester.",
    },
  },
  tr: {
    about: {
      title: "Hakkımızda",
      body: "Odyssey Danışmanlık, bireyin yaşamını doğum öncesi dönemden yaşlılığa kadar bütüncül bir bakış açısıyla ele alır. Sadece bireyin yaşadığı sorunlara değil; aile, okul, iş hayatı, toplumsal çevre ve kültürel uyum süreçlerine de odaklanır. Böylece daha kalıcı ve etkili çözümler üretmeyi hedefler. Özellikle göçmen ve sığınmacı bireylerin yaşadığı uyum süreci, travma, kaygı, kimlik çatışması ve aile içi zorluklar konusunda uzman desteği sunmaktadır.",
    },
    mission: {
      title: "Misyonumuz",
      body: "Bireylerin psikolojik iyi oluşunu güçlendirmek, yaşamın her döneminde ihtiyaç duydukları profesyonel desteği sunmak ve özellikle göçmen ile sığınmacı toplulukların yaşadığı zorluklara bilimsel çözümler üretmek.",
    },
    vision: {
      title: "Vizyonumuz",
      body: "Leicester başta olmak üzere Birleşik Krallık genelinde gelişim psikolojisi ve yetişkin psikolojisi alanında güvenilir, yenilikçi ve öncü bir danışmanlık merkezi olmak.",
    },
  },
};

const tabOrder: TabKey[] = ["about", "mission", "vision"];

export function AboutSections({ locale }: { locale: Locale }) {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const copy = contentByLocale[locale];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-text-soft uppercase">
            {locale === "tr" ? "Odyssey Danışmanlık" : "Odyssey Counselling"}
          </p>
          <h1 className="mt-4 text-4xl text-primary md:text-6xl">{copy.about.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-text-soft md:text-lg">
            {locale === "tr"
              ? "Yaklaşımımız, bireyin hayatındaki psikolojik, kültürel ve sosyal bağlamları birlikte değerlendirerek güvenli ve sürdürülebilir bir iyileşme süreci oluşturur."
              : "Our care model considers psychological, cultural, and social contexts together, helping individuals move forward with structured and sustainable support."}
          </p>
        </header>

        <div className="mt-12 rounded-[2rem] border border-border bg-surface p-4 md:p-6">
          <div role="tablist" aria-label={locale === "tr" ? "Hakkımızda sekmeleri" : "About tabs"} className="flex flex-wrap gap-3">
            {tabOrder.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`about-panel-${tab}`}
                  id={`about-tab-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-xl border px-4 py-2 text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 ${
                    isActive
                      ? "border-primary/20 bg-surface-muted text-primary"
                      : "border-border bg-surface text-text-soft hover:text-text"
                  }`}
                >
                  {copy[tab].title}
                </button>
              );
            })}
          </div>

          <article
            id={`about-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${activeTab}`}
            className="mt-8 rounded-2xl border border-border-soft bg-background px-6 py-8"
          >
            <h2 className="text-2xl text-primary md:text-3xl">{copy[activeTab].title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg">{copy[activeTab].body}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
