import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Odyssey Counselling",
    template: "%s | Odyssey Counselling",
  },
  description:
    "Premium bilingual Turkish-English counselling in the UK with calm, confidential, and clinically professional support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="app-shell min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-xl focus:bg-surface focus:px-4 focus:py-2 focus:text-primary focus:ring-2 focus:ring-primary/40"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
