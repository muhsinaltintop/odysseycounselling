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

export function HomepageSections() {
  return (
    <>
      <Container as="section" className="app-section">
        <div className="grid gap-10 rounded-[3rem] border border-border bg-gradient-to-br from-background to-surface-soft px-8 py-10 md:grid-cols-12 md:items-center md:px-12 md:py-14">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Culturally focused therapy</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">Support in your own language.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-xl">
              Therapy, group support, and migrant wellbeing services for Turkish-speaking people in the UK. A calm
              clinical space designed around dignity, privacy, and emotional safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-primary-soft px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Our approach
              </Link>
              <Link
                href="/therapist"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Meet İmran
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-surface shadow-[0_10px_40px_-15px_rgba(15,23,42,0.08)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjNqNS-3GCMG86F0Vz6YfRAICSYm7ftA0t_40QuOjT4MrFqH9trqy6Fq4n3cbmQ_TrhqAWg6Puu25OyCB1Q2E7c2-doEvRT-D3-ZsjPIgbmI0P3jHDEVCGv2a5nfSXSE_JaT4A_JT6cNDeSJb9E7oQCDCy0s2lZaor2Nb-G_2lO5OUQJ8Uw25t39KPINatBZPZs5YcNHddxNsca-pMxNNXiiicRrdAGWdDUNm0NfHC5do3uUOM87gcswFjsInpxi__cZu-G0yydB4"
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
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Trust statement</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">A space for human warmth and clinical excellence.</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-soft md:text-lg">
              <p>
                Odyssey Counselling is built on the belief that emotional wellbeing is deeply connected to language,
                identity, and cultural context.
              </p>
              <p>
                Our work is confidential, ethically grounded, and tailored for Turkish-speaking clients navigating life
                in the UK.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <article className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-4xl md:text-5xl">12+</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-text-muted uppercase">Years experience</p>
            </article>
            <article className="rounded-2xl border border-border bg-surface-soft p-5">
              <p className="text-4xl md:text-5xl">500+</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-text-muted uppercase">Lives supported</p>
            </article>
            <article className="col-span-2 overflow-hidden rounded-2xl border border-border bg-surface-muted">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqkWSnr9W5zW0t-up7EA7JSjywqpa7ncai1eQXBiFLdb8v8VZug930Y5AUcivvbSZHbtV3rxMx4olWUlufdO5BpW9c3lpTdlGxYmWUHT_RomofmXOZfHgnANs-qDjfJNYX6VbFlzN6D2maxoRTH3LdhqySHbAIss_pf5M0JzrTq9MM6qFBzFZFam-bp05xOiHXVof0gjfAo7_bJNZWzNZd2F9urtz6jPPaW3YVZJ_ioetsghjC214LoSc0sF7em0h0h9KTQq-aU04"
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
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Services preview</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Pathways to wellbeing</h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-primary underline decoration-border decoration-2 underline-offset-6">
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
                src="https://drive.google.com/uc?export=view&id=1eEz-3k0afupJFKbwVXBtVTC0tnW--ncO"
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
        <div className="rounded-[3rem] border border-primary/20 bg-primary-soft px-8 py-12 text-surface md:px-14 md:py-16">
          <p className="text-xs tracking-[0.18em] text-surface/85 uppercase">CTA</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-surface md:text-5xl">Begin your journey with a gentle first step.</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface/85 md:text-lg">
            If you are unsure where to begin, you can book an initial 15-minute consultation or send a confidential
            message first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-surface px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-surface/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Book initial consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-surface/60 bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/85 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-surface/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
