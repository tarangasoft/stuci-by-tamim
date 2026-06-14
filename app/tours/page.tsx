import type { Metadata } from "next";
import { ToursPage } from "@/components/pages/ToursPage";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse one-day, domestic, and international tour packages from Stuci Travel and Tours."
};

export default function Page() {
  return <ToursPage />;
}
