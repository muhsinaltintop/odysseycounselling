import { submitContactForm } from "@/app/[locale]/contact/actions";
import { Container } from "@/components/ui/container";

const visibleContactEmail = "imran@odysseycounselling.uk";

type ContactFormStatus = "sent" | "invalid" | "configuration" | "failed";

type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  emailLabel: string;
  formTitle: string;
  formDescription: string;
  statusMessages: Record<ContactFormStatus, string>;
  nameLabel: string;
  emailFieldLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  securityLabel: string;
  honeypotLabel: string;
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
      "Your message is checked on the server before it is emailed securely to Odyssey Counselling.",
    statusMessages: {
      sent: "Thank you. Your enquiry has been sent to Odyssey Counselling.",
      invalid: "Please check the form details and answer the security question before sending.",
      configuration: "The form is ready, but email delivery settings still need to be configured.",
      failed: "The message could not be sent just now. Please email Odyssey Counselling directly.",
    },
    nameLabel: "Name",
    emailFieldLabel: "Your email address",
    messageLabel: "Message",
    messagePlaceholder: "You can briefly share what you would like support with, or ask a practical question.",
    securityLabel: "Security question: what is 3 + 4?",
    honeypotLabel: "Company",
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
      "Mesajınız Odyssey Counselling’e güvenli şekilde e-posta ile gönderilmeden önce sunucuda kontrol edilir.",
    statusMessages: {
      sent: "Teşekkürler. Mesajınız Odyssey Counselling’e gönderildi.",
      invalid: "Lütfen form bilgilerini ve güvenlik sorusunun cevabını kontrol edin.",
      configuration: "Form hazır, ancak e-posta gönderim ayarlarının yapılandırılması gerekiyor.",
      failed: "Mesaj şu anda gönderilemedi. Lütfen doğrudan Odyssey Counselling’e e-posta gönderin.",
    },
    nameLabel: "İsim",
    emailFieldLabel: "E-posta adresiniz",
    messageLabel: "Mesaj",
    messagePlaceholder: "Destek almak istediğiniz konuyu kısaca paylaşabilir veya pratik bir soru sorabilirsiniz.",
    securityLabel: "Güvenlik sorusu: 3 + 4 kaç eder?",
    honeypotLabel: "Şirket",
    submitLabel: "Gizli mesaj gönder",
    privacyTitle: "Gizlilik ve özen",
    privacyText:
      "Lütfen acil kriz bilgilerini bu form üzerinden göndermeyin. Anlık risk altındaysanız acil servislerle veya yerel kriz destek hattıyla iletişime geçin.",
    responseTitle: "Sonrasında ne olur",
    responseText:
      "İmran mesajınızı değerlendirir ve ilk görüşme ayarlamak ya da sorunuzu yanıtlamak gibi sakin bir sonraki adımla e-posta üzerinden dönüş yapar.",
  },
};

export function ContactSections({
  locale = "en",
  status,
}: {
  locale?: "en" | "tr";
  status?: ContactFormStatus;
}) {
  const content = contactContent[locale];
  const submitContactFormForLocale = submitContactForm.bind(null, locale);

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
              href={`mailto:${visibleContactEmail}`}
              className="mt-3 block break-words text-lg font-medium text-primary transition-colors hover:text-text-soft focus-visible:rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/35"
            >
              {visibleContactEmail}
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

            <form action={submitContactFormForLocale} className="mt-8 space-y-6">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-company">{content.honeypotLabel}</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
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

              <div>
                <label htmlFor="contact-security" className="block text-sm font-medium text-primary">
                  {content.securityLabel}
                </label>
                <input
                  id="contact-security"
                  name="securityAnswer"
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="7"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-text transition-colors focus:border-primary/40 focus:bg-surface focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="btn-primary">
                {content.submitLabel}
              </button>
            </form>
            {status ? (
              <p
                className="mt-6 rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm leading-relaxed text-text-soft"
                role="status"
              >
                {content.statusMessages[status]}
              </p>
            ) : null}
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
