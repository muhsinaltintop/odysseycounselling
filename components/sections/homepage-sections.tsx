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

type LanguageBenefit = {
  title: string;
  description: string;
};



type WhyOdysseyItem = {
  title: string;
  description: string;
};

const whyOdysseyContent: Record<"en" | "tr", { label: string; heading: string; items: WhyOdysseyItem[] }> = {
  en: {
    label: "Why Odyssey Consulting?",
    heading: "Expert support rooted in trust, science, and lived context.",
    items: [
      {
        title: "Expertise and Experience",
        description:
          "Odyssey Consulting offers services with a team of experts possessing years of academic knowledge and professional experience in the fields of developmental psychology and adult psychology. Effective and professional support is provided tailored to the specific needs of each client.",
      },
      {
        title: "Specialization in the Field of Migration and Refugees",
        description:
          "We focus on the psychological, social, and emotional challenges faced by immigrant and refugee individuals. We offer expert support on integration processes, identity conflicts, trauma, and belonging.",
      },
      {
        title: "Scientific and Contemporary Approach",
        description:
          "We use scientifically based methods in all our consulting processes and closely follow current research and developments. This allows us to offer our clients reliable and effective solutions.",
      },
      {
        title: "Holistic Perspective",
        description:
          "We evaluate individuals not only based on the problems they face, but also considering their family structure, social environment, education, work life, and cultural conditions. This approach leads to more lasting and sustainable results.",
      },
      {
        title: "Corporate Consulting Experience",
        description:
          "In addition to individual counseling, we also offer training, project development, psychosocial support programs, and consulting services to institutions.",
      },
      {
        title: "Trust and Empathy",
        description:
          "We build trusting, respectful, and understanding relationships with our clients. We value each individual's life experience and provide a safe space where they can express themselves comfortably.",
      },
      {
        title: "Socially Beneficial Service",
        description:
          "Our goal is not only to provide individual support, but also to contribute to the creation of healthier, stronger, and more resilient communities.",
      },
    ],
  },
  tr: {
    label: "Neden Odyssey Danışmanlık?",
    heading: "Güven, bilim ve yaşam deneyimine dayalı uzman destek.",
    items: [
      {
        title: "Uzmanlık ve Deneyim",
        description:
          "Odyssey Danışmanlık, gelişim psikolojisi ve yetişkin psikolojisi alanlarında uzun yıllara dayanan akademik bilgi ve profesyonel deneyime sahip uzman kadrosuyla hizmet sunar. Her danışanın ihtiyaçlarına özel, etkili ve profesyonel destek sağlanır.",
      },
      {
        title: "Göçmen ve Sığınmacı Alanında Uzmanlaşma",
        description:
          "Göçmen ve sığınmacı bireylerin karşılaştığı psikolojik, sosyal ve duygusal zorluklara odaklanırız. Uyum süreci, kimlik çatışmaları, travma ve aidiyet konularında uzman destek sunarız.",
      },
      {
        title: "Bilimsel ve Güncel Yaklaşım",
        description:
          "Tüm danışmanlık süreçlerinde bilimsel temelli yöntemler kullanır, güncel araştırmaları ve gelişmeleri yakından takip ederiz. Böylece danışanlarımıza güvenilir ve etkili çözümler sunarız.",
      },
      {
        title: "Bütüncül Bakış Açısı",
        description:
          "Bireyi yalnızca yaşadığı sorunlarla değil; aile yapısı, sosyal çevresi, eğitim hayatı, iş yaşamı ve kültürel koşullarıyla birlikte değerlendiririz. Bu yaklaşım, daha kalıcı ve sürdürülebilir sonuçlar sağlar.",
      },
      {
        title: "Kurumsal Danışmanlık Deneyimi",
        description:
          "Bireysel danışmanlığın yanı sıra kurumlara yönelik eğitim, proje geliştirme, psikososyal destek programları ve danışmanlık hizmetleri de sunmaktayız.",
      },
      {
        title: "Güven ve Empati",
        description:
          "Danışanlarımızla güvene dayalı, saygılı ve anlayışlı bir ilişki kurarız. Her bireyin yaşam deneyimine değer verir, kendini rahat ifade edebileceği güvenli bir alan sunarız.",
      },
      {
        title: "Toplumsal Fayda Odaklı Hizmet",
        description:
          "Amacımız yalnızca bireysel destek sağlamak değil, aynı zamanda daha sağlıklı, güçlü ve dayanıklı toplumların oluşmasına katkı sunmaktır.",
      },
    ],
  },
};

type Testimonial = {
  quote: string;
  person: string;
};

const serviceCards: ServiceCard[] = [
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
];

const languageBenefits: LanguageBenefit[] = [
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
];

const testimonials: Testimonial[] = [
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
];

export function HomepageSections({ locale = "en" }: { locale?: "en" | "tr" }) {
  const t = locale === "tr";
  const withLocale = (href: string) => `/${locale}${href}`;
  return (
    <>
      <Container as="section" className="app-section">
        <div className="grid gap-10 rounded-[3rem] border border-border bg-gradient-to-br from-background to-surface-soft px-8 py-10 md:grid-cols-12 md:items-center md:px-12 md:py-14">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{t ? "Kültürel duyarlılığa sahip terapi" : "Culturally focused therapy"}</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">{t ? "Kendi dilinizde destek." : "Support in your own language."}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-xl">
              Therapy, group support, and migrant wellbeing services for Turkish-speaking people in the UK. A calm
              clinical space designed around dignity, privacy, and emotional safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLocale("/services")}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {t ? "Yaklaşımımız" : "Our approach"}
              </Link>
              <Link
                href={withLocale("/therapist")}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {t ? "İmran ile tanışın" : "Meet İmran"}
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-surface shadow-[0_10px_40px_-15px_rgba(15,23,42,0.08)]">
              <Image
                src="/imran.png"
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
        <div className="mb-10 max-w-4xl">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{whyOdysseyContent[locale].label}</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{whyOdysseyContent[locale].heading}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {whyOdysseyContent[locale].items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-surface p-6 md:p-7">
              <h3 className="text-2xl md:text-3xl">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-soft">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Services preview</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Pathways to wellbeing</h2>
          </div>
          <Link href={withLocale("/services")} className="text-sm font-medium text-primary underline decoration-border decoration-2 underline-offset-6">
            Explore all services
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
        <div className="grid gap-10 rounded-[2rem] border border-border bg-surface-soft p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border/70">
              <Image
                src="/imran.png"
                alt="Professional portrait of Psychologist İmran Altıntop."
                className="h-full min-h-96 w-full object-cover"
                width={720}
                height={900}
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Meet therapist</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Meet Psychologist İmran Altıntop</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-soft md:text-lg">
              <p>
                With over a decade of clinical experience, İmran offers integrative therapy adapted to each person’s
                emotional and practical needs.
              </p>
              <p>
                As a first-generation migrant, she understands dual identity pressures and provides professional care
                with empathy, structure, and clear boundaries.
              </p>
            </div>
            <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-primary">MSc Clinical Psychology</p>
                <p className="mt-1 text-sm text-text-muted">University of London</p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">BACP Accredited</p>
                <p className="mt-1 text-sm text-text-muted">MBACP (Accred)</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Why native language therapy matters</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Language is the home of the inner world.</h2>
          <p className="mt-5 text-base leading-relaxed text-text-soft md:text-lg">
            When therapy happens in your native language, nuance, memory, and emotional precision become easier to
            access.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {languageBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-border bg-surface px-6 py-8">
              <h3 className="text-2xl md:text-3xl">{benefit.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-soft">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Testimonials</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Voices from our community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.person} className="rounded-[2rem] border border-border bg-surface px-6 py-8">
              <blockquote className="text-base leading-relaxed text-text-soft md:text-lg">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-text-muted">— {testimonial.person}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="rounded-[3rem] border border-border bg-surface-muted px-8 py-12 md:px-14 md:py-16">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">CTA</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-primary md:text-5xl">Begin your journey with a gentle first step.</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">
            If you are unsure where to begin, you can book an initial 15-minute consultation or send a confidential
            message first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={withLocale("/contact")}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted"
            >
              Book initial consultation
            </Link>
            <Link
              href={withLocale("/contact")}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
