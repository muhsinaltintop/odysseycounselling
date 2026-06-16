"use server";

import { redirect } from "next/navigation";

import { type Locale } from "@/i18n/config";

const formRecipientEmail = process.env.CONTACT_FORM_TO ?? "imran@odysseycounselling.uk";
const formSenderEmail = process.env.CONTACT_FORM_FROM ?? "noreply@odysseycounselling.uk";
const expectedSecurityAnswer = "7";

type ContactFormStatus = "sent" | "invalid" | "configuration" | "failed";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function readField(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function redirectWithStatus(locale: Locale, status: ContactFormStatus): never {
  redirect(`/${locale}/contact?status=${status}`);
}

function validateContactForm(formData: FormData): ContactPayload | null {
  const honeypot = readField(formData, "company");
  const securityAnswer = readField(formData, "securityAnswer");
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const message = readField(formData, "message");

  if (honeypot !== "" || securityAnswer !== expectedSecurityAnswer) {
    return null;
  }

  if (name.length < 2 || name.length > 120) {
    return null;
  }

  if (!isValidEmail(email) || email.length > 160) {
    return null;
  }

  if (message.length < 10 || message.length > 3000) {
    return null;
  }

  return { name, email, message };
}

async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return "configuration" as const;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Odyssey Counselling <${formSenderEmail}>`,
      to: [formRecipientEmail],
      reply_to: payload.email,
      subject: `New Odyssey Counselling enquiry from ${payload.name}`,
      text: [
        "A new enquiry was submitted through the Odyssey Counselling website.",
        "",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    }),
  });

  return response.ok ? ("sent" as const) : ("failed" as const);
}

export async function submitContactForm(locale: Locale, formData: FormData) {
  const payload = validateContactForm(formData);

  if (!payload) {
    redirectWithStatus(locale, "invalid");
  }

  const result = await sendContactEmail(payload);
  redirectWithStatus(locale, result);
}
