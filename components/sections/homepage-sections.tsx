import Link from "next/link";

import { Container } from "@/components/ui/container";

type ServicePreview = {
  title: string;
  description: string;
  detail: string;
};

type Testimonial = {
  quote: string;
  person: string;
};

const servicePreviews: ServicePreview[] = [
  {
    title: "Individual Counselling",
    description: "One-to-one sessions in Turkish or English, online or in person.",
    detail:
      "Structured support for anxiety, low mood, stress, life transitions, and relationship challenges.",
  },
  {
    title: "Bilingual Therapy",
    description: "Fluid language use within sessions when emotional nuance needs it.",
    detail:
      "Move between Turkish and English naturally so your experience is expressed with precision and dignity.",
  },
  {
    title: "Initial Consultation",
    description: "A calm first conversation to discuss fit, goals, and practical next steps.",
    detail:
      "A low-pressure introduction where you can ask questions about process, confidentiality, and pace.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "For the first time, I did not need to explain cultural context before explaining how I felt. That changed everything.",
    person: "Client, Turkish-speaking professional in London",
  },
  {
    quote:
      "The process was clear, respectful, and never rushed. I felt safe from the first conversation.",
    person: "Client, bilingual parent in the UK",
  },
  {
    quote:
      "Being able to switch language in session helped me talk about difficult family experiences with more honesty.",
    person: "Client, first-generation immigrant",
  },
];

export function HomepageSections() {
  return (
    <>
      <Container as="section" className="app-section">
        <div className="rounded-[3rem] border border-border/80 bg-surface px-8 py-14 md:px-14 md:py-18">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Bilingual counselling in the UK</p>
          <h1 className="mt-6 max-w-4xl text-5xl leading-tight md:text-7xl">
            A calm, confidential space to speak in Turkish, English, or both.
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-soft md:text-xl">
            Odyssey Counselling offers clinically grounded therapy for adults navigating anxiety, emotional
            overwhelm, identity complexity, and life transitions. You are welcome exactly as you are, at a pace
            that feels manageable.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary-soft px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Book an initial consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              View services
            </Link>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div>
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Trust statement</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Professional care with privacy and cultural understanding at the centre.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-text-soft md:text-lg">
            <p>
              Therapy is confidential, ethically grounded, and structured around your wellbeing. Sessions are
              designed to feel clear and contained, especially when life feels uncertain.
            </p>
            <p>
              We understand bicultural realities, migration stress, and family dynamics that can be difficult to
              translate. You will not need to simplify your story to be understood.
            </p>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Services preview</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Support designed for real life in the UK.</h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-primary underline decoration-border decoration-2 underline-offset-6 transition-colors hover:text-primary-soft"
          >
            Explore all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {servicePreviews.map((service) => (
            <article key={service.title} className="rounded-2xl border border-border bg-surface px-6 py-8">
              <h3 className="text-2xl md:text-3xl">{service.title}</h3>
              <p className="mt-4 text-base text-text-soft">{service.description}</p>
              <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">{service.detail}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-surface-soft px-8 py-10 md:grid-cols-[1.1fr_1fr] md:px-12 md:py-14">
          <div>
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Meet your therapist</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Clinically trained, culturally attuned, and deeply respectful.</h2>
            <p className="mt-6 text-base leading-relaxed text-text-soft md:text-lg">
              Sessions are led by a qualified bilingual therapist with experience supporting Turkish-speaking and
              international clients in the UK. The approach combines evidence-based methods with relational warmth
              and clear therapeutic boundaries.
            </p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-surface px-6 py-7">
            <h3 className="text-xl md:text-2xl">Professional profile</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-soft md:text-base">
              <li>• Bilingual practice in Turkish and English</li>
              <li>• Individual adult therapy</li>
              <li>• Trauma-informed and culturally sensitive care</li>
              <li>• Confidential online and in-person sessions</li>
            </ul>
            <Link
              href="/therapist"
              className="mt-7 inline-flex rounded-xl border border-primary/15 bg-surface px-4 py-2 text-sm text-primary transition-all duration-300 hover:-translate-y-px hover:bg-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Read full therapist profile
            </Link>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Why native language matters</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Emotions are often clearest in the language you feel in.</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-text-soft md:text-lg">
            <p>
              When therapy happens in a second language, emotional precision can be lost. Subtle meanings, family
              dynamics, and culturally specific experiences may become harder to express.
            </p>
            <p>
              Native-language therapy can reduce cognitive effort, support deeper honesty, and strengthen therapeutic
              alliance. For bilingual clients, flexibility across languages can make important conversations feel more
              natural and less fragmented.
            </p>
          </div>
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="mb-12">
          <p className="text-xs tracking-[0.18em] text-text-muted uppercase">Testimonials</p>
          <h2 className="mt-4 text-3xl md:text-5xl">What clients say about the experience.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.person} className="rounded-2xl border border-border bg-surface px-6 py-8">
              <blockquote className="text-base leading-relaxed text-text-soft md:text-lg">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-text-muted">{testimonial.person}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Container as="section" className="app-section border-t border-border-soft">
        <div className="rounded-[2rem] border border-border bg-primary px-8 py-12 text-surface md:px-14 md:py-16">
          <p className="text-xs tracking-[0.18em] text-surface/75 uppercase">Take a gentle first step</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight text-surface md:text-5xl">
            If you are considering therapy, you can begin with a confidential enquiry.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface/85 md:text-lg">
            Share as much or as little as you feel comfortable with. You will receive a thoughtful response with
            clear options and no pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-surface px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-px hover:bg-surface-soft focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-surface/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Send a confidential enquiry
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-xl border border-surface/35 px-6 py-3 text-sm font-medium text-surface transition-colors hover:bg-surface/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-surface/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Read common questions
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
