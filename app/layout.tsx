import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Odyssey Counselling",
    template: "%s | Odyssey Counselling",
  },
  description:
    "Premium bilingual Turkish-English counselling in the UK with calm, confidential, and clinically professional support.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="app-shell min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
