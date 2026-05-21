import Image from "next/image";
import { Container } from "@/components/ui/container";
import { type Locale } from "@/i18n/config";

type TherapistContent = {
  label: string;
  title: string;
  intro: string;
  paragraphs: string[];
};

const contentByLocale: Record<Locale, TherapistContent> = {
  tr: {
    label: "Terapist",
    title: "Uzman Hakkında",
    intro: "Akademik birikim ve saha deneyimini birleştiren, göçmenlerle çalışmada uzman bir danışmanlık yaklaşımı.",
    paragraphs: [
      "2010 yılında Psikoloji eğitimimi tamamladıktan sonra akademik çalışmalarımı Sosyal Hizmet ve Gelişim Psikolojisi alanlarında sürdürdüm. Sosyal Hizmet alanında yüksek lisans ve doktora eğitimimi, ayrıca Gelişim Psikolojisi yüksek lisansımı tamamladım.",
      "16 yılı aşkın meslek hayatım boyunca bireysel danışmanlık, akademik araştırmalar ve proje yöneticiliği gibi farklı alanlarda, özellikle göçmenlerle çalıştım. Son 5 yıldır İngiltere'de göçmenlere yönelik bire bir psikolojik danışmanlık hizmeti sunarken, aynı zamanda uyum süreçlerini destekleyen ulusal ve uluslararası projelerde aktif olarak görev alıyorum.",
      "Çalışmalarımda Bilişsel Davranışçı Terapi (BDT), EMDR ve Sanat Terapisi gibi farklı terapi yaklaşımlarından faydalanıyorum. Akademik birikimim ve saha deneyimimle, yaşamın farklı dönemlerinde karşılaşılan zorlukları birlikte anlamak ve çözüm yolları geliştirmek için danışanlarıma güvenli ve destekleyici bir alan sunmayı amaçlıyorum.",
    ],
  },
  en: {
    label: "Therapist",
    title: "About the Therapist",
    intro: "A counselling practice grounded in academic depth and extensive field experience, with a focus on migrant wellbeing.",
    paragraphs: [
      "After completing my Psychology degree in 2010, I continued my academic studies in the fields of Social Work and Developmental Psychology. I completed my Master's and PhD degrees in Social Work, as well as a Master's degree in Developmental Psychology.",
      "Throughout my 16+ years of professional experience, I have worked in various areas including individual counselling, academic research, and project management, with a particular focus on migrant communities. For the past 5 years in the UK, I have been providing one-to-one psychological counselling for migrants while also taking an active role in national and international projects that support integration and adaptation processes.",
      "In my work, I draw from different therapeutic approaches such as Cognitive Behavioural Therapy (CBT), EMDR, and Art Therapy. Combining my academic background with extensive field experience, I aim to provide a safe and supportive space where clients can better understand the challenges they face at different stages of life and work towards meaningful solutions together.",
    ],
  },
};

export function TherapistSections({ locale }: { locale: Locale }) {
  const copy = contentByLocale[locale];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-text-soft uppercase">{copy.label}</p>
          <h1 className="mt-4 text-4xl text-primary md:text-6xl">{copy.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-text-soft md:text-lg">{copy.intro}</p>
        </header>

        <article className="mt-12 rounded-[2rem] border border-border bg-surface px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="overflow-hidden rounded-[1.5rem] border border-border/70 md:col-span-4">
              <Image
                src="/imran.png"
                alt={locale === "tr" ? "Psikolog İmran Altıntop'un profesyonel portresi." : "Professional portrait of Psychologist İmran Altıntop."}
                width={720}
                height={900}
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
            <div className="space-y-6 md:col-span-8">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-text md:text-lg">
                {paragraph}
              </p>
            ))}
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
