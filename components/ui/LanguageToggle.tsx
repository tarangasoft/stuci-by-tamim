"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  const toggleLanguage = () => {
    const nextLang = isRu ? "en" : "ru";
    void i18n.changeLanguage(nextLang);
    document.documentElement.lang = nextLang;
    try {
      localStorage.setItem("stuci-language", nextLang);
    } catch {}
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
