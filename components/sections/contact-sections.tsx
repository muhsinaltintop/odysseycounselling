import { Container } from "@/components/ui/container";

const contactEmail = "imran@odysseycounselling.com";

type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  emailLabel: string;
  formTitle: string;
  formDescription: string;
  nameLabel: string;
  emailFieldLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  privacyTitle: string;
  privacyText: string;
  responseTitle: string;
  responseText: string;
};

const contactContent: Record<"en" | "tr", ContactContent> = {
  en: {
    eyebrow: "Contact",
    title: "Send a confidential enquiry when you feel ready.",
    intro:
      "You are welcome to write in English or Turkish. A simple message is enough; you do not need to explain everything before the first conversation.",
    emailLabel: "Email",
    formTitle: "Simple enquiry form",
    formDescription:
      "This form opens your email app with the details you enter, addressed to Odyssey Counselling.",
    nameLabel: "Name",
    emailFieldLabel: "Your email address",
    messageLabel: "Message",
    messagePlaceholder: "You can briefly share what you would like support with, or ask a practical question.",
    submitLabel: "Send confidential enquiry",
    privacyTitle: "Privacy and care",
    privacyText:
      "Please avoid sending urgent crisis information through this form. If you are at immediate risk, contact emergency services or a local crisis service.",
    responseTitle: "What happens next",
    responseText:
      "İmran will review your enquiry and reply by email with a calm next step, such as arranging an initial consultation or answering your question.",
  },
  tr: {
    eyebrow: "İletişim",
    title: "Hazır hissettiğinizde gizli bir mesaj gönderebilirsiniz.",
    intro:
      "İngilizce veya Türkçe yazabilirsiniz. Kısa bir mesaj yeterlidir; ilk görüşmeden önce her şeyi anlatmak zorunda değilsiniz.",
    emailLabel: "E-posta",
    formTitle: "Basit iletişim formu",
    formDescription:
      "Bu form, girdiğiniz bilgilerle e-posta uygulamanızı Odyssey Counselling adresine yönlendirecek şekilde açar.",
    nameLabel: "İsim",
    emailFieldLabel: "E-posta adresiniz",
    messageLabel: "Mesaj",
    messagePlaceholder: "Destek almak istediğiniz konuyu kısaca paylaşabilir veya pratik bir soru sorabilirsiniz.",
    submitLabel: "Gizli mesaj gönder",
    privacyTitle: "Gizlilik ve özen",
    privacyText:
      "Lütfen acil kriz bilgilerini bu form üzerinden göndermeyin. Anlık risk altındaysanız acil servislerle veya yerel kriz destek hattıyla iletişime geçin.",
    responseTitle: "Sonrasında ne olur",
    responseText:
      "İmran mesajınızı değerlendirir ve ilk görüşme ayarlamak ya da sorunuzu yanıtlamak gibi sakin bir sonraki adımla e-posta üzerinden dönüş yapar.",
  },
};

export function ContactSections({ locale = "en" }: { locale?: "en" | "tr" }) {
  const content = contactContent[locale];

  return (
    <>
      <Container as="section" className="app-section">
        <div className="grid gap-10 rounded-[3rem] border border-border bg-gradient-to-br from-background to-surface-soft px-8 py-10 md:grid-cols-12 md:items-end md:px-12 md:py-14">
          <div className="md:col-span-8">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{content.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-tight md:text-7xl">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-xl">{content.intro}</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-surface/80 p-6 md:col-span-4">
            <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{content.emailLabel}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block break-words text-lg font-medium text-primary transition-colors hover:text-text-soft focus-visible:rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </Container>

      <Container as="section" className="pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="rounded-[2rem] border border-border bg-surface p-6 md:col-span-7 md:p-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.18em] text-text-muted uppercase">{content.formTitle}</p>
              <p className="mt-4 text-base leading-relaxed text-text-soft">{content.formDescription}</p>
            </div>

            <form
              action={`mailto:${contactEmail}`}
              method="post"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-primary">
                  {content.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-text transition-colors focus:border-primary/40 focus:bg-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-primary">
                  {content.emailFieldLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-text transition-colors focus:border-primary/40 focus:bg-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-primary">
                  {content.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  placeholder={content.messagePlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-text transition-colors focus:border-primary/40 focus:bg-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button type="submit" className="btn-primary">
                {content.submitLabel}
              </button>
            </form>
          </div>

          <aside className="space-y-6 md:col-span-5">
            <div className="rounded-[2rem] border border-border bg-surface-muted p-6 md:p-8">
              <h2 className="text-2xl">{content.privacyTitle}</h2>
              <p className="mt-4 leading-relaxed text-text-soft">{content.privacyText}</p>
            </div>
            <div className="rounded-[2rem] border border-border bg-surface p-6 md:p-8">
              <h2 className="text-2xl">{content.responseTitle}</h2>
              <p className="mt-4 leading-relaxed text-text-soft">{content.responseText}</p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
