import type { Metadata } from "next";

import { HomepageSections } from "@/components/sections/homepage-sections";

export const metadata: Metadata = {
  title: "Turkish & English Counselling in the UK",
  description:
    "Odyssey Counselling provides confidential bilingual therapy in Turkish and English, with calm professional support for adults in the UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Turkish & English Counselling in the UK | Odyssey Counselling",
    description:
      "Calm, confidential, bilingual counselling in Turkish and English for adults across the UK.",
    type: "website",
  },
};

export default function Home() {
  return <HomepageSections />;
}
