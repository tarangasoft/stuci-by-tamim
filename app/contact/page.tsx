import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Stuci Travel and Tours. Book tours, ask questions, or plan your custom trip to Bangladesh or international destinations."
};

export default function Page() {
  return <ContactPage />;
}
