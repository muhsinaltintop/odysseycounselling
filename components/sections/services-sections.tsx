"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { type Locale } from "@/i18n/config";

type ServiceKey = "individual" | "family" | "migration" | "corporate";

type ServiceContent = {
  title: string;
  description: string;
  items: string[];
};

type PageContent = {
  heading: string;
  intro: string;
  sections: Record<ServiceKey, ServiceContent>;
};

const contentByLocale: Record<Locale, PageContent> = {
  tr: {
    heading: "Hizmetlerimiz",
    intro:
      "Odyssey Danışmanlık'ta bireyler, aileler ve kurumlar için psikolojik iyi oluşu güçlendiren, kültürel duyarlılığa sahip profesyonel danışmanlık hizmetleri sunuyoruz.",
    sections: {
      individual: {
        title: "Bireysel Danışmanlık",
        description:
          "Bireyin duygusal, psikolojik ve sosyal iyi oluşunu desteklemeye yönelik profesyonel danışmanlık hizmetleri sunuyoruz.",
        items: [
          "Kaygı, stres ve duygu yönetimi",
          "Depresif duygu durum ve motivasyon desteği",
          "Özgüven, benlik saygısı ve öz farkındalık çalışmaları",
          "Travma, kayıp ve yas süreci desteği",
          "İlişki sorunları ve kişilerarası iletişim güçlükleri",
          "Öfke kontrolü ve duygu düzenleme becerileri",
          "Tükenmişlik sendromu, iş yaşamı stresi ve yaşam dengesi",
          "Karar verme süreçleri ve yaşam dönemlerine uyum desteği",
          "Psikolojik dayanıklılık ve kişisel gelişim çalışmaları",
        ],
      },
      family: {
        title: "Çocuk, Ergen ve Aile Danışmanlığı",
        description:
          "Çocukların ve ergenlerin gelişimsel, duygusal ve davranışsal ihtiyaçlarını aile sistemi içerisinde değerlendirerek bütüncül danışmanlık hizmeti sunuyoruz. Süreçte ebeveynlerle iş birliği içinde çalışılır.",
        items: [
          "Duygu düzenleme ve davranış sorunları desteği",
          "Okul uyum sorunları ve akademik süreçlere uyum desteği",
          "Dikkat, sosyal beceri ve duygusal gelişim desteği",
          "Ergenlik dönemi duygusal ve davranışsal zorlukları",
          "Özgüven, akran ilişkileri ve sosyal uyum konuları",
          "Kardeş kıskançlığı ve aile içi uyum sorunları",
          "Ebeveyn danışmanlığı ve sağlıklı sınır koyma becerileri",
          "Aile içi iletişim güçlendirme çalışmaları",
          "Yaşam değişiklikleri sonrası uyum desteği (taşınma, ayrılık, okul değişimi vb.)",
        ],
      },
      migration: {
        title: "Göç ve Göçmen Psikolojisi Danışmanlığı",
        description:
          "Göç süreci; bireyler ve aileler için duygusal, sosyal ve psikolojik açıdan önemli değişimler barındırabilir. Odyssey Danışmanlık olarak göçmen, sığınmacı ve uluslararası ailelerin yaşadığı uyum süreçlerine yönelik uzman desteği sunuyoruz.",
        items: [
          "Yeni ülkeye uyum süreci, kültürel geçiş ve yaşam değişikliklerine destek",
          "Göç sonrası kaygı, stres, yalnızlık ve belirsizlikle başa çıkma",
          "Kimlik, aidiyet ve iki kültür arasında denge kurma süreçleri",
          "Travmatik göç deneyimleri ve psikolojik dayanıklılık desteği",
          "Çocuklar ve ergenlerde okul, arkadaş çevresi ve sosyal uyum desteği",
          "Aile içi kuşak çatışmaları, ebeveynlik rolleri ve iletişim desteği",
          "Dil bariyeri, sosyal izolasyon ve toplumsal uyum sürecine psikolojik destek",
        ],
      },
      corporate: {
        title: "Kurumsal Danışmanlık",
        description:
          "Kurumların çalışan refahını güçlendirmelerine, psikososyal destek mekanizmaları oluşturmalarına ve toplumsal etki odaklı projeler geliştirmelerine yönelik profesyonel danışmanlık hizmetleri sunuyoruz.",
        items: [
          "Okul, belediye, STK ve özel kurumlara yönelik danışmanlık hizmetleri",
          "İhtiyaç analizi, proje planlama ve değerlendirme süreçleri",
          "Psikososyal destek programlarının tasarımı ve uygulanması",
          "Çalışan iyi oluşu, motivasyon ve refah programları",
          "Stres yönetimi, tükenmişlik önleme ve dayanıklılık eğitimleri",
          "Göçmen ve dezavantajlı topluluklara yönelik sosyal uyum projeleri",
          "Seminer, atölye çalışmaları ve uzman konuşmaları",
          "Travma bilgili yaklaşım ve kapsayıcı hizmet modelleri danışmanlığı",
        ],
      },
    },
  },
  en: {
    heading: "Our Services",
    intro:
      "At Odyssey Counselling, we provide culturally informed professional services that strengthen emotional well-being for individuals, families, and organizations.",
    sections: {
      individual: {
        title: "Individual Counseling",
        description:
          "We offer professional counseling services aimed at supporting individuals' emotional, psychological, and social well-being.",
        items: [
          "Anxiety, stress, and emotion management.",
          "Support for depressive mood and motivation.",
          "Self-confidence, self-esteem, and self-awareness exercises.",
          "Support for trauma, loss, and the grieving process.",
          "Relationship problems and interpersonal communication difficulties",
          "Anger management and emotion regulation skills",
          "Burnout syndrome, work-life stress, and life balance.",
          "Decision-making processes and life stage adaptation support",
          "Psychological resilience and personal development studies",
        ],
      },
      family: {
        title: "Child, Adolescent and Family Counseling",
        description:
          "We offer holistic counseling services by assessing the developmental, emotional, and behavioral needs of children and adolescents within the family system. We work collaboratively with parents throughout the process.",
        items: [
          "Support for emotion regulation and behavioral problems.",
          "School adjustment problems and support for adapting to academic processes.",
          "Support for attention, social skills, and emotional development.",
          "Adolescent emotional and behavioral challenges",
          "Self-confidence, peer relationships, and social adjustment issues.",
          "Sibling rivalry and family harmony problems",
          "Parental counseling and healthy boundary-setting skills.",
          "Efforts to strengthen family communication.",
          "Support for adapting to life changes (moving, separation, changing schools, etc.)",
        ],
      },
      migration: {
        title: "Migration and Migrant Psychology Counseling",
        description:
          "Migration can involve significant emotional, social, and psychological changes for individuals and families. At Odyssey Consulting, we offer expert support for the integration processes experienced by migrant, refugee, and international families.",
        items: [
          "Support for the process of adapting to a new country, cultural transition, and life changes.",
          "Coping with anxiety, stress, loneliness, and uncertainty after migration.",
          "Identity, belonging, and processes of balancing two cultures.",
          "Traumatic migration experiences and support for psychological resilience.",
          "School, peer group, and social adjustment support for children and adolescents.",
          "Family generation conflicts, parenting roles, and communication support.",
          "Language barriers, social isolation, and psychological support for the social adaptation process.",
        ],
      },
      corporate: {
        title: "Corporate Consulting",
        description:
          "We offer professional consulting services to help organizations strengthen employee well-being, establish psychosocial support mechanisms, and develop projects focused on social impact.",
        items: [
          "Consulting services for schools, municipalities, NGOs, and private institutions.",
          "Needs analysis, project planning and evaluation processes",
          "Design and implementation of psychosocial support programs.",
          "Employee well-being, motivation and welfare programs",
          "Stress management, burnout prevention, and resilience training.",
          "Social integration projects for immigrant and disadvantaged communities.",
          "Seminars, workshops, and expert talks",
          "Consultancy on trauma-informed approaches and inclusive service models.",
        ],
      },
    },
  },
};

const serviceOrder: ServiceKey[] = ["individual", "family", "migration", "corporate"];

export function ServicesSections({ locale }: { locale: Locale }) {
  const [activeService, setActiveService] = useState<ServiceKey>("individual");
  const pageCopy = contentByLocale[locale];
  const activeCopy = pageCopy.sections[activeService];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <header className="max-w-4xl">
          <p className="text-xs font-medium tracking-[0.18em] text-text-soft uppercase">
            {locale === "tr" ? "Odyssey Danışmanlık" : "Odyssey Counselling"}
          </p>
          <h1 className="mt-4 text-4xl text-primary md:text-6xl">{pageCopy.heading}</h1>
          <p className="mt-6 text-base leading-relaxed text-text-soft md:text-lg">{pageCopy.intro}</p>
        </header>

        <div className="mt-12 rounded-[2rem] border border-border bg-surface p-4 md:p-6">
          <div role="tablist" aria-label={locale === "tr" ? "Hizmet sekmeleri" : "Services tabs"} className="flex flex-wrap gap-3">
            {serviceOrder.map((serviceKey) => {
              const isActive = activeService === serviceKey;
              const label = pageCopy.sections[serviceKey].title;

              return (
                <button
                  key={serviceKey}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`services-panel-${serviceKey}`}
                  id={`services-tab-${serviceKey}`}
                  onClick={() => setActiveService(serviceKey)}
                  className={`rounded-xl border px-4 py-2 text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 ${
                    isActive
                      ? "border-primary/20 bg-surface-muted text-primary"
                      : "border-border bg-surface text-text-soft hover:text-text"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <article
            id={`services-panel-${activeService}`}
            role="tabpanel"
            aria-labelledby={`services-tab-${activeService}`}
            className="mt-8 rounded-2xl border border-border-soft bg-background px-6 py-8"
          >
            <h2 className="text-2xl text-primary md:text-3xl">{activeCopy.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg">{activeCopy.description}</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-text-soft md:text-lg">
              {activeCopy.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
