import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Stuci Travel and Tours, a bilingual Bangladesh travel company built around safe planning, local knowledge, and memorable routes."
};

export default function Page() {
  return <AboutPage />;
}
