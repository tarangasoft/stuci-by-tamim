"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { copy, imageBank, milestones, services, team, trustBadges, values } from "@/data/travel";
import { ParticleField } from "@/components/ui/ParticleField";

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "ru" ? "ru" : "en";

  return (
    <div className="page-shell about-page">
      <section className="about-hero">
        <img src={imageBank.about} alt="Travelers looking across a scenic landscape" />
        <div className="about-hero__overlay" />
        <ParticleField density={42} />
        <div className="section-inner">
          <p className="section-kicker">{t("sections.aboutHero")}</p>
          <h1>{copy({ en: "We are Bangladesh's most passionate travel company.", ru: "Мы самая увлеченная туристическая компания Бангладеш." }, locale)}</h1>
          <p>
            {copy(
              {
                en: "Stuci blends local care, bilingual communication, and crisp logistics for routes that feel effortless from the first message.",
                ru: "Stuci соединяет местную заботу, двуязычное общение и точную логистику, чтобы маршрут был легким с первого сообщения."
              },
              locale
            )}
          </p>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-inner">
          <p className="section-kicker">{t("sections.origin")}</p>
          <h2 className="section-title">{copy({ en: "From one desk in Dhaka to thousands of journeys.", ru: "От одного офиса в Дакке до тысяч поездок." }, locale)}</h2>
          <div className="timeline-track">
            {milestones.map((item, index) => (
              <article className="timeline-item" key={item.year}>
                <span>{item.year}</span>
                <h3>{copy(item.title, locale)}</h3>
                <p>{copy(item.body, locale)}</p>
                {index < milestones.length - 1 && <i aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="section-inner">
          <p className="section-kicker">{t("sections.values")}</p>
          <h2 className="section-title">{copy({ en: "The quiet rules behind every route.", ru: "Тихие правила за каждым маршрутом." }, locale)}</h2>
          <div className="values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article className="value-card magnetic" key={copy(item.title, locale)}>
                  <div className="value-card__inner glass-card">
                    <div className="value-card__face">
                      <Icon size={34} aria-hidden="true" />
                      <h3>{copy(item.title, locale)}</h3>
                      <p>{copy(item.body, locale)}</p>
                    </div>
                    <div className="value-card__face value-card__back">
                      <p>{copy(item.back, locale)}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-inner">
          <p className="section-kicker">{t("sections.services")}</p>
          <h2 className="section-title">{copy({ en: "Everything the travel day needs.", ru: "Все, что нужно дню путешествия." }, locale)}</h2>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card glass-card" key={copy(service.title, locale)}>
                  <Icon size={30} aria-hidden="true" />
                  <h3>{copy(service.title, locale)}</h3>
                  <p>{copy(service.body, locale)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="section-inner">
          <p className="section-kicker">{t("sections.team")}</p>
          <h2 className="section-title">{copy({ en: "People who answer fast and plan carefully.", ru: "Люди, которые быстро отвечают и тщательно планируют." }, locale)}</h2>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name} data-cursor="image">
                <img src={member.image} alt={member.name} />
                <div>
                  <h3>{member.name}</h3>
                  <p>{copy(member.role, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-inner">
          <p className="section-kicker">{t("sections.trust")}</p>
        </div>
        <div className="trust-marquee">
          <div className="trust-track">
            {[...trustBadges, ...trustBadges].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <span key={`${badge.label}-${index}`}>
                  <Icon size={20} aria-hidden="true" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="section-inner about-cta__inner">
          <h2>{copy({ en: "Ready for a route that feels personal?", ru: "Готовы к маршруту, который ощущается личным?" }, locale)}</h2>
          <Link href="/tours" className="cinematic-button">
            {t("actions.viewTours")}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
