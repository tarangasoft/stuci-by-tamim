"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  const toggleLanguage = () => {
    void i18n.changeLanguage(isRu ? "en" : "ru");
    document.documentElement.lang = isRu ? "en" : "ru";
  };

  return (
    <button
      type="button"
      className="language-toggle magnetic"
      onClick={toggleLanguage}
      data-cursor="language"
      aria-label={isRu ? "Switch language to English" : "Переключить язык на русский"}
    >
      <Languages size={16} aria-hidden="true" />
      <span className="language-card" data-flipped={isRu}>
        <span>EN</span>
        <span>RU</span>
      </span>
    </button>
  );
}
