"use client";

import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WhatsAppButton() {
  const { t } = useTranslation();
  const message = encodeURIComponent("Hello Stuci Travel, I want to book a tour.");

  return (
    <a
      className="whatsapp-button magnetic"
      href={`https://wa.me/8801700000000?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t("actions.whatsapp")}
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span>{t("actions.whatsapp")}</span>
    </a>
  );
}
