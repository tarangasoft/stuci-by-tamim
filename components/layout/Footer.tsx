"use client";

import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { navItems } from "@/data/travel";

export function Footer() {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-particles" aria-hidden="true" />
      <section className="contact-band section-inner glass-card">
        <div>
          <MapPin aria-hidden="true" />
          <span>{t("footer.location")}</span>
          <a href="https://maps.google.com/?q=Dhaka%20Bangladesh" target="_blank" rel="noreferrer">
            {t("actions.viewMap")}
          </a>
        </div>
        <div>
          <Phone aria-hidden="true" />
          <span>{t("footer.phone")}</span>
          <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div>
          <Mail aria-hidden="true" />
          <span>{t("footer.email")}</span>
          <a href="mailto:info@stucitravel.com">{t("footer.schedule")}</a>
        </div>
      </section>

      <section className="newsletter section-inner">
        <div>
          <p>{t("sections.newsletter")}</p>
        </div>
        <form onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            {t("forms.email")}
          </label>
          <input id="newsletter-email" type="email" required placeholder={t("forms.email")} />
          <button type="submit" className="cinematic-button">
            {subscribed ? t("forms.subscribed") : t("forms.subscribe")}
            <Send size={16} aria-hidden="true" />
          </button>
        </form>
      </section>

      <div className="footer-grid section-inner">
        <div>
          <Link href="/" className="footer-brand">
            STUCI
          </Link>
          <p>{t("brand.tagline")}</p>
          <div className="social-row">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2>{t("footer.quickLinks")}</h2>
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {t(item.key)}
            </Link>
          ))}
        </div>
        <div>
          <h2>{t("footer.contact")}</h2>
          <p>{t("footer.phone")}</p>
          <p>{t("footer.email")}</p>
          <p>{t("footer.schedule")}</p>
        </div>
        <div>
          <button
            type="button"
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("actions.backTop")}
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="footer-bottom section-inner">
        <span>© {new Date().getFullYear()} STUCI Travel and Tours.</span>
        <span>{t("footer.rights")}</span>
      </div>
    </footer>
  );
}
