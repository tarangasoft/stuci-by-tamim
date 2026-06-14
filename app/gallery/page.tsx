import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore destination photography from Stuci Travel and Tours routes across Bangladesh and beyond."
};

export default function Page() {
  return <GalleryPage />;
}
