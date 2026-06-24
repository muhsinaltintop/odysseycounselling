import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";

type ServiceCard = {
  title: string;
  description: string;
  format: string;
  imageUrl: string;
  imageAlt: string;
};

type LanguageContent = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: LanguageBenefit[];
};

type LanguageBenefit = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  person: string;
};

type TestimonialContent = {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
};

const serviceCardsByLocale: Record<"en" | "tr", ServiceCard[]> = {
  en: [
    {
      title: "1:1 Individual Therapy",
      description:
        "Personalized support for anxiety, low mood, trauma, and identity challenges in a confidential setting.",
      format: "In-person & online",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtatxAELfN7I4sbNqbap2kYLNqGb4zkfL-_eOWpwVpOM241CRUomzTVPN3Zw6kek4Ms_Se5t3TZkawk1NarXoIA20anlzuQN5ikTP3wFY9N1Mw-taWe5e3bqi4JOLGYdZbeDK6ChZSSak7u5edFo9dUfM80n4E_GSaVKWEM5S1bfkChE26rd9WFvwZfyDWzSu9aSzealki1y-3f0_3GOWnrbD4bxvmQE5bPqT1jzgGE8NmQHVw5JOqU0dRFxnf5q5nu1UoXubsG6A",
      imageAlt: "Two hands holding a warm cup of tea in a calm indoor setting.",
    },
    {
      title: "Group Support",
      description:
        "Facilitated spaces that reduce isolation and build connection for Turkish-speaking communities in the UK.",
      format: "Small facilitated groups",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD35dZGIVwuL97VVCk0MN5dmki_0MeSvKb5InYTmLdkl_vPORt3T9eLnaSnRH_GjPJB2UPSdPCW7Q9fcb630u9Rmh_KX-CKaYfaS_ND2vy2cJBz-j65gpkv9CLVKbg-UVnUzbZpN0RBO6e2kN-43LP3gvhG10tHBWrSSwkzYtLjE19SkEge6wj0902LAgLmMnI_oOm_EYs0TouYRvVScMNs0Q-AA_LZkt0BeCFdYNn-McTXN8xGclodkfk5Zs6hKgibuipN1zGHi0A",
      imageAlt: "A diverse group in a community room having a collaborative discussion.",
    },
    {
      title: "Migrant Wellbeing",
      description:
        "Targeted support for relocation stress, bicultural identity strain, and emotional adjustment.",
      format: "Projects & workshops",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkWSnr9W5zW0t-up7EA7JSjywqpa7ncai1eQXBiFLdb8v8VZug930Y5AUcivvbSZHbtV3rxMx4olWUlufdO5BpW9c3lpTdlGxYmWUHT_RomofmXOZfHgnANs-qDjfJNYX6VbFlzN6D2maxoRTH3LdhqySHbAIss_pf5M0JzrTq9MM6qFBzFZFam-bp05xOiHXVof0gjfAo7_bJNZWzNZd2F9urtz6jPPaW3YVZJ_ioetsghjC214LoSc0sF7em0h0h9KTQq-aU04",
      imageAlt: "Abstract soft green brushstrokes representing emotional flow.",
    },
  ],
  tr: [
    {
      title: "1:1 Bireysel Terapi",
      description:
        "Kaygı, düşük ruh hali, travma ve kimlik zorlukları için gizli bir ortamda kişiselleştirilmiş destek.",
      format: "Yüz yüze ve online",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtatxAELfN7I4sbNqbap2kYLNqGb4zkfL-_eOWpwVpOM241CRUomzTVPN3Zw6kek4Ms_Se5t3TZkawk1NarXoIA20anlzuQN5ikTP3wFY9N1Mw-taWe5e3bqi4JOLGYdZbeDK6ChZSSak7u5edFo9dUfM80n4E_GSaVKWEM5S1bfkChE26rd9WFvwZfyDWzSu9aSzealki1y-3f0_3GOWnrbD4bxvmQE5bPqT1jzgGE8NmQHVw5JOqU0dRFxnf5q5nu1UoXubsG6A",
      imageAlt: "Sakin bir iç mekânda sıcak bir çay fincanını tutan iki el.",
    },
    {
      title: "Grup Desteği",
      description:
        "İngiltere’deki Türkçe konuşan topluluklarda yalnızlığı azaltan ve bağlantı kurmayı destekleyen kolaylaştırılmış alanlar.",
      format: "Küçük kolaylaştırılmış gruplar",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD35dZGIVwuL97VVCk0MN5dmki_0MeSvKb5InYTmLdkl_vPORt3T9eLnaSnRH_GjPJB2UPSdPCW7Q9fcb630u9Rmh_KX-CKaYfaS_ND2vy2cJBz-j65gpkv9CLVKbg-UVnUzbZpN0RBO6e2kN-43LP3gvhG10tHBWrSSwkzYtLjE19SkEge6wj0902LAgLmMnI_oOm_EYs0TouYRvVScMNs0Q-AA_LZkt0BeCFdYNn-McTXN8xGclodkfk5Zs6hKgibuipN1zGHi0A",
      imageAlt: "Bir topluluk odasında birlikte konuşan farklı geçmişlerden bir grup insan.",
    },
    {
      title: "Göçmen Danışmanlığı",
      description:
        "Yer değiştirme stresi, iki kültürlü kimlik zorlanması ve duygusal uyum için hedeflenmiş destek.",
      format: "Projeler ve atölyeler",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkWSnr9W5zW0t-up7EA7JSjywqpa7ncai1eQXBiFLdb8v8VZug930Y5AUcivvbSZHbtV3rxMx4olWUlufdO5BpW9c3lpTdlGxYmWUHT_RomofmXOZfHgnANs-qDjfJNYX6VbFlzN6D2maxoRTH3LdhqySHbAIss_pf5M0JzrTq9MM6qFBzFZFam-bp05xOiHXVof0gjfAo7_bJNZWzNZd2F9urtz6jPPaW3YVZJ_ioetsghjC214LoSc0sF7em0h0h9KTQq-aU04",
      imageAlt: "Duygusal akışı temsil eden yumuşak yeşil soyut fırça izleri.",
    },
  ],
};

const languageContent: Record<"en" | "tr", LanguageContent> = {
  en: {
    eyebrow: "Why native language therapy matters",
    title: "Language is the home of the inner world.",
    description:
      "When therapy happens in your native language, nuance, memory, and emotional precision become easier to access.",
    benefits: [
      {
        title: "Untranslatable nuance",
        description:
          "Certain feelings and lived experiences can only be expressed through familiar language and cultural context.",
      },
      {
        title: "Reduced cognitive load",
        description:
          "When you are not translating your emotions, more energy remains for reflection, regulation, and healing work.",
      },
      {
        title: "Cultural safety",
        description:
          "You can discuss migration, family expectations, and identity complexity without repeatedly explaining context.",
      },
    ],
  },
  tr: {
    eyebrow: "Ana dilde terapi neden önemlidir",
    title: "Dil, iç dünyanın evidir.",
    description:
      "Terapi ana dilinizde gerçekleştiğinde nüansa, belleğe ve duygusal hassasiyete erişmek kolaylaşır.",
    benefits: [
      {
        title: "Çevrilemeyen nüanslar",
        description:
          "Bazı duygular ve yaşam deneyimleri yalnızca tanıdık bir dil ve kültürel bağlam içinde ifade edilebilir.",
      },
      {
        title: "Azalan zihinsel yük",
        description:
          "Duygularınızı tercüme etmek zorunda kalmadığınızda; düşünme, düzenleme ve iyileşme çalışması için daha fazla enerji kalır.",
      },
      {
        title: "Kültürel güvenlik",
        description:
          "Göç, aile beklentileri ve kimliğin karmaşıklığı üzerine konuşurken bağlamı tekrar tekrar açıklamak zorunda kalmazsınız.",
      },
    ],
  },
};

const testimonialContent: Record<"en" | "tr", TestimonialContent> = {
  en: {
    eyebrow: "Testimonials",
    title: "Voices from our community",
    testimonials: [
      {
        quote:
          "Finding a therapist who understood the pressure of being a migrant in London changed everything for me.",
        person: "Ayşe K., Individual Client",
      },
      {
        quote:
          "The group sessions gave me a sense of community I did not realize I was missing while navigating two worlds.",
        person: "Mehmet S., Group Participant",
      },
      {
        quote:
          "İmran's professional yet warm approach helped me through a difficult transition with clarity and care.",
        person: "Elif D., Online Therapy",
      },
    ],
  },
  tr: {
    eyebrow: "Danışan yorumları",
    title: "Topluluğumuzdan sesler",
    testimonials: [
      {
        quote:
          "Londra’da göçmen olmanın baskısını anlayan bir terapist bulmak benim için her şeyi değiştirdi.",
        person: "Ayşe K., Bireysel Danışan",
      },
      {
        quote:
          "Grup seansları, iki dünya arasında yol alırken eksikliğini fark etmediğim bir topluluk hissi verdi.",
        person: "Mehmet S., Grup Katılımcısı",
      },
      {
        quote:
          "İmran’ın profesyonel ama sıcak yaklaşımı, zorlu bir geçiş döneminden açıklık ve özenle geçmeme yardımcı oldu.",
        person: "Elif D., Online Terapi",
      },
    ],
  },
};

export function HomepageSections({ locale = "en" }: { locale?: "en" | "tr" }) {
  const t = locale === "tr";
  const language = languageContent[locale];
  const testimonialSection = testimonialContent[locale];
  const withLocale = (href: string) => `/${locale}${href}`;
  const serviceCards = serviceCardsByLocale[locale];
  return (
    <>
      <Container as="section" className="app-section">
        <div className="grid gap-10 rounded-[3rem] border border-border bg-gradient-to-br from-background to-surface-soft px-8 py-10 md:grid-cols-12 md:items-center md:px-12 md:py-14">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{t ? "Göç yolculuğunda anlaşılmaya alan açmak" : "Therapy Across Borders, Grounded in Understanding"}</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">{t ? "Göç yolculuğunda anlaşılmaya alan açmak" : "Therapy Across Borders, Grounded in Understanding"}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-xl">
              {t
                ? "İngiltere merkezli Odyssey Counselling, dünyanın farklı ülkelerinde yaşayan göçmen Türklere yönelik kültürel olarak duyarlı terapi ve wellbeing desteği sunmaktadır. Psikolog İmran Altıntop liderliğinde yürütülen çalışmalar; İngiltere, Almanya, Hollanda ve Amerika başta olmak üzere farklı ülkelerde bireyler, topluluklar, dernekler ve kurumlarla yaklaşık 10 yıla yaklaşan deneyime dayanmaktadır. Klinik profesyonelliği göç deneyiminin gerçekliğiyle birleştiren Odyssey Counselling; aidiyet, kimlik, duygusal dayanıklılık ve kültürler arası yaşamın getirdiği zorluklar için güvenli, sakin ve destekleyici bir alan sunar."
                : "UK-based Odyssey Counselling provides culturally informed therapy and wellbeing support for Turkish-speaking migrants around the world. Led by Psychologist İmran Altıntop, the practice draws on nearly a decade of experience working with individuals, communities, NGOs, and organisations across countries including the UK, Germany, the Netherlands, and the United States. Combining clinical professionalism with lived migrant experience, Odyssey Counselling offers a calm and emotionally safe space to support identity, belonging, emotional resilience, and life across cultures."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale("/services")}
                className="btn-primary"
              >
                {t ? "Yaklaşımımız" : "Our approach"}
              </Link>
              <Link
                href={withLocale("/therapist")}
                className="btn-secondary"
              >
                {t ? "İmran ile tanışın" : "Meet İmran"}
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-surface shadow-[0_10px_40px_-15px_rgba(15,23,42,0.08)]">
              <Image
                src="/man.png"
                alt="Minimalist therapist office interior with sage green walls and soft morning light."
                className="h-full min-h-96 w-full object-cover"
                width={720}
                height={900}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              {t
                ? "Kültürel sıcaklığın ve klinik profesyonelliğin buluştuğu bir alan."
                : "A space for human warmth and clinical excellence."}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-soft md:text-lg">
              <p>
                {t
                  ? "İngiltere merkezli Odyssey Counselling, dünyanın farklı ülkelerinde yaşayan Türkçe konuşan bireylere psikolojik danışmanlık ve duygusal destek hizmetleri sunmaktadır. Psikolog İmran Altıntop liderliğinde yürütülen çalışmalar; İngiltere, Almanya, Hollanda ve Amerika başta olmak üzere farklı ülkelerde bireyler, topluluklar, dernekler ve kurumlarla yaklaşık 10 yıla yaklaşan deneyime dayanmaktadır."
                  : "UK-based Odyssey Counselling provides psychological counselling and emotional wellbeing support for Turkish-speaking individuals living across different countries around the world. Led by Psychologist İmran Altıntop, our work is informed by nearly a decade of experience supporting individuals, communities, associations, and organisations across the United Kingdom, Germany, the Netherlands, the United States, and beyond."}
              </p>
              <p>
                {t
                  ? "Odyssey Counselling, profesyonel psikolojik danışmanlık alanındaki uzmanlığını farklı ülkelerde yaşayan bireylerin deneyimlerine ilişkin derin bir anlayışla birleştirerek, danışanlarına güvenli, destekleyici ve yargılamayan bir alan sunmaktadır."
                  : "By combining professional expertise in psychological counselling with a deep understanding of the experiences of people living between cultures, Odyssey Counselling offers a safe, supportive, and non-judgmental space where clients can explore challenges, build resilience, and work towards greater emotional wellbeing."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <article className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-4xl md:text-5xl">12+</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-text-muted uppercase">{t ? "Yıllık deneyim" : "Years experience"}</p>
            </article>
            <article className="rounded-2xl border border-border bg-surface-soft p-5">
              <p className="text-4xl md:text-5xl">500+</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-text-muted uppercase">{t ? "Desteklenen yaşam" : "Lives supported"}</p>
            </article>
            <article className="col-span-2 overflow-hidden rounded-2xl border border-border bg-surface-muted">
              <Image
                src="/tea.png"
                alt="Abstract soft green brushstrokes artwork."
                className="h-52 w-full object-cover"
                width={800}
                height={420}
              />
            </article>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-4 text-3xl md:text-5xl">{t ? "İyi oluşa giden yollar" : "Pathways to wellbeing"}</h2>
          </div>
          <Link href={withLocale("/services")} className="text-sm font-medium text-primary underline decoration-border decoration-2 underline-offset-6">
            {t ? "Tüm hizmetleri keşfedin" : "Explore all services"}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[2rem] border border-border bg-surface">
              <Image src={service.imageUrl} alt={service.imageAlt} className="h-44 w-full object-cover" width={640} height={320} />
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl">{service.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-soft">{service.description}</p>
                <p className="mt-5 text-xs tracking-[0.18em] text-text-muted uppercase">{service.format}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <Link
          href={withLocale("/therapist")}
          className="block rounded-[2rem] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={t ? "Psikolog İmran Altıntop profilini aç" : "Open Psychologist İmran Altıntop profile"}
        >
          <div className="grid gap-10 rounded-[2rem] border border-border bg-surface-soft p-8 transition-colors hover:bg-surface md:grid-cols-12 md:p-12">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-[2rem] border border-border/70">
                <Image
                  src="/imran.png"
                  alt={t ? "Psikolog İmran Altıntop'un profesyonel portresi." : "Professional portrait of Psychologist İmran Altıntop."}
                  className="h-full min-h-96 w-full object-cover"
                  width={720}
                  height={900}
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{t ? "Psikolog ile tanışın" : "Meet therapist"}</p>
              <h2 className="mt-4 text-3xl md:text-5xl">{t ? "Psikolog İmran Altıntop ile Tanışın" : "Meet Psychologist İmran Altıntop"}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-soft md:text-lg">
                <p>
                  {t
                    ? "İmran Altıntop, göçmenlerle, topluluklarla ve uluslararası wellbeing projeleriyle geçen 10 yılı aşkın deneyimiyle; klinik uzmanlığı göç deneyiminin gerçekliğiyle birleştiren kültürel olarak duyarlı bir terapi yaklaşımı sunmaktadır."
                    : "With over a decade of experience working with migrants, communities, and international wellbeing projects, İmran offers culturally informed therapy shaped by both clinical expertise and lived migrant experience."}
                </p>
                <p>
                  {t
                    ? "İngiltere’de yaşayan birinci nesil bir göçmen olarak, kültürler arasında hayat kurmanın duygusal zorluklarını yakından bilir ve güvenli, yapılandırılmış ve duygusal olarak destekleyici bir terapi alanı oluşturmayı hedefler."
                    : "As a first-generation migrant living in the UK, she understands the emotional complexity of building life between cultures and provides a calm, structured, and emotionally safe therapeutic space."}
                </p>
              </div>
              <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-primary">MSc Clinical Psychology</p>
                  <p className="mt-1 text-sm text-text-muted">{t ? "Ege Üniversitesi" : "Ege University"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{t ? "Üyelik" : "Member of"}</p>
                  <p className="mt-1 text-sm text-text-muted">The British Psychological Society</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{language.eyebrow}</p>
          <h2 className="mt-4 text-3xl md:text-5xl">{language.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-text-soft md:text-lg">{language.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {language.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-border bg-surface px-6 py-8">
              <h3 className="text-2xl md:text-3xl">{benefit.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-soft">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{testimonialSection.eyebrow}</p>
          <h2 className="mt-4 text-3xl md:text-5xl">{testimonialSection.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialSection.testimonials.map((testimonial) => (
            <figure key={testimonial.person} className="rounded-[2rem] border border-border bg-surface px-6 py-8">
              <blockquote className="text-base leading-relaxed text-text-soft md:text-lg">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-text-muted">— {testimonial.person}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="rounded-[3rem] border border-border bg-surface-muted px-8 py-12 md:px-14 md:py-16">
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-primary md:text-5xl">
            {t ? "Yolculuğunuza sakin bir ilk adımla başlayın." : "Begin your journey with a gentle first step."}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">
            {t
              ? "Nereden başlayacağınızdan emin değilseniz, 15 dakikalık bir ön görüşme planlayabilir ya da önce bizimle iletişime geçebilirsiniz."
              : "If you are unsure where to begin, you can book an initial 15-minute consultation or contact us first."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={withLocale("/contact")}
              className="btn-primary focus-visible:ring-offset-surface-muted"
            >
              {t ? "Ön görüşme planlayın" : "Book initial consultation"}
            </Link>
            <Link
              href={withLocale("/contact")}
              className="btn-secondary hover:bg-background focus-visible:ring-offset-surface-muted"
            >
              {t ? "İletişime geçin" : "Contact us"}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
