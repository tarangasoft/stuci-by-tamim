"use client";

import CountUp from "react-countup";
import Typed from "typed.js";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Compass,
  MapPin,
  Minus,
  Plus,
  Send,
  Users,
  WalletCards
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ParticleField } from "@/components/ui/ParticleField";
import {
  copy,
  destinations,
  features,
  heroDestinations,
  imageBank,
  mapMarkers,
  stats,
  storyPanels,
  testimonials
} from "@/data/travel";

const HeroGlobe = dynamic(() => import("@/components/three/HeroGlobe").then((mod) => mod.HeroGlobe), {
  ssr: false,
  loading: () => <div className="hero-globe hero-globe--fallback" aria-hidden="true" />
});

export function HomePage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "ru" ? "ru" : "en";
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: heroDestinations[locale],
      typeSpeed: 70,
      backSpeed: 34,
      backDelay: 1200,
      loop: true,
      smartBackspace: true
    });

    return () => typed.destroy();
  }, [locale]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <img className="hero-image" src={imageBank.hero} alt="Golden beach waves at sunset" />
        <div className="hero-overlay" />
        <ParticleField density={90} />
        <div className="noise" />

        <div className="hero-content reveal">
          <div className="compass-rose" aria-hidden="true">
            <Compass size={42} />
          </div>
          <p className="hero-eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.headline")}</h1>
          <p className="typed-line">
            {t("hero.typePrefix")} <span ref={typedRef}>{t("hero.typeFallback")}</span>
          </p>
          <p className="hero-tagline">{t("brand.tagline")}</p>
          <div className="hero-actions">
            <Link href="/tours" className="cinematic-button magnetic">
              {t("hero.ctaExplore")}
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
            <a href="#contact" className="ghost-button magnetic">
              {t("hero.ctaBook")}
            </a>
          </div>
        </div>

        <HeroGlobe />

        <a className="scroll-indicator magnetic" href="#stats">
          <span />
          {t("hero.scroll")}
        </a>
      </section>

      <StatsSection locale={locale} />
      <FeatureSection locale={locale} />
      <DestinationCarousel locale={locale} />
      <StorySection locale={locale} />
      <Testimonials locale={locale} />
      <TripPlanner locale={locale} />
      <MapSection locale={locale} />
    </div>
  );
}

function StatsSection({ locale }: { locale: string }) {
  const { t } = useTranslation();

  return (
    <section className="stats-strip section" id="stats">
      <div className="section-inner">
        <p className="section-kicker">{t("sections.stats")}</p>
        <div className="stats-grid">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <article className="stat-card glass-card reveal" key={copy(item.label, locale)}>
                <Icon size={24} aria-hidden="true" />
                <strong>
                  <CountUp end={item.value} suffix={item.suffix} duration={2.2} enableScrollSpy scrollSpyOnce />
                </strong>
                <span>{copy(item.label, locale)}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ locale }: { locale: string }) {
  const { t } = useTranslation();

  return (
    <section className="section feature-section">
      <div className="section-inner">
        <p className="section-kicker">{t("sections.why")}</p>
        <h2 className="section-title">{copy({ en: "Travel that feels cared for.", ru: "Путешествие с ощущением заботы." }, locale)}</h2>
        <p className="section-lede">
          {copy(
            {
              en: "Every Stuci route combines Bangladesh-born insight, polished logistics, and little moments that make the day feel alive.",
              ru: "Каждый маршрут Stuci соединяет местное знание, точную логистику и маленькие моменты, которые делают день живым."
            },
            locale
          )}
        </p>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card glass-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={copy(feature.title, locale)}>
                <span className="icon-orbit">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3>{copy(feature.title, locale)}</h3>
                <p>{copy(feature.body, locale)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DestinationCarousel({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % destinations.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((value) => (value + direction + destinations.length) % destinations.length);
  };

  return (
    <section className="section carousel-section">
      <div className="section-inner carousel-heading">
        <div>
          <p className="section-kicker">{t("sections.featured")}</p>
          <h2 className="section-title">{copy({ en: "Your next adventure, in motion.", ru: "Следующее приключение уже движется." }, locale)}</h2>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous destination">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next destination">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="destination-stage" aria-live="polite">
        {destinations.map((destination, index) => {
          const offset = index - active;
          const normalized = offset > 2 ? offset - destinations.length : offset < -2 ? offset + destinations.length : offset;
          const isActive = index === active;
          return (
            <article
              className="destination-card magnetic"
              data-active={isActive}
              data-cursor="image"
              key={destination.id}
              style={{
                transform: `translateX(calc(${normalized} * 52%)) translateZ(${isActive ? 70 : -30 * Math.abs(normalized)}px) rotateY(${normalized * -12}deg) scale(${isActive ? 1.04 : Math.max(0.78, 1 - Math.abs(normalized) * 0.12)})`,
                zIndex: 10 - Math.abs(normalized),
                opacity: Math.abs(normalized) > 2 ? 0 : 1
              }}
            >
              <img src={destination.image} alt={copy(destination.name, locale)} />
              <div className="destination-card__body">
                <span>{copy(destination.duration, locale)}</span>
                <h3>{copy(destination.name, locale)}</h3>
                <p>{copy(destination.teaser, locale)}</p>
                <strong>
                  {t("tours.from")} {destination.price}
                </strong>
                <Link href="/tours">
                  {copy({ en: "Explore", ru: "Смотреть" }, locale)}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function StorySection({ locale }: { locale: string }) {
  const { t } = useTranslation();

  return (
    <section className="section story-section">
      <div className="section-inner">
        <p className="section-kicker">{t("sections.story")}</p>
        <h2 className="section-title">{copy({ en: "Every scroll is a route.", ru: "Каждая прокрутка как маршрут." }, locale)}</h2>
      </div>
      <div className="story-track" tabIndex={0} aria-label={t("sections.story")}>
        {storyPanels.map((panel, index) => (
          <article className="story-panel" key={copy(panel.title, locale)} data-cursor="image">
            <img src={panel.image} alt={copy(panel.title, locale)} />
            <div>
              <span>0{index + 1}</span>
              <h3>{copy(panel.title, locale)}</h3>
              <p>{copy(panel.body, locale)}</p>
            </div>
          </article>
        ))}
        <article className="story-panel story-panel--cta">
          <div>
            <span>04</span>
            <h3>{copy({ en: "Where will you go next?", ru: "Куда отправитесь дальше?" }, locale)}</h3>
            <p>
              {copy(
                {
                  en: "Choose a polished package or let us build a private route around your dates, budget, and travel style.",
                  ru: "Выберите готовый пакет или позвольте нам собрать частный маршрут под даты, бюджет и стиль поездки."
                },
                locale
              )}
            </p>
            <div className="hero-actions">
              <Link href="/tours" className="cinematic-button">
                {t("actions.viewTours")}
              </Link>
              <a href="#planner" className="ghost-button">
                {t("actions.custom")}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Testimonials({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const items = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section className="section testimonials-section">
      <div className="section-inner">
        <p className="section-kicker">{t("sections.testimonials")}</p>
        <h2 className="section-title">{copy({ en: "Warm days, clear plans, lasting stories.", ru: "Теплые дни, ясные планы, долгие истории." }, locale)}</h2>
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {items.map((item, index) => (
            <article className="testimonial-card glass-card" key={`${item.name}-${index}`}>
              <div className="stars" aria-label="5 star rating">
                ★★★★★
              </div>
              <p>“{copy(item.quote, locale)}”</p>
              <footer>
                <span>{item.flag}</span>
                <strong>{item.name}</strong>
                <small>{copy(item.origin, locale)}</small>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TripPlanner({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const [destination, setDestination] = useState(destinations[0].id);
  const [duration, setDuration] = useState(4);
  const [budget, setBudget] = useState(35000);
  const [group, setGroup] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const selected = destinations.find((item) => item.id === destination) ?? destinations[0];

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(false);
    window.setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 1200);
  };

  return (
    <section className="section planner-section" id="planner">
      <div className="section-inner planner-layout">
        <div>
          <p className="section-kicker">{t("sections.planner")}</p>
          <h2 className="section-title">{copy({ en: "Tell us the dream. We'll shape the route.", ru: "Расскажите мечту. Мы соберем маршрут." }, locale)}</h2>
          <p className="section-lede">
            {copy(
              {
                en: "Use the quick planner for a first itinerary. It is mocked locally, ready for a backend quote flow later.",
                ru: "Быстрый планировщик создает первый маршрут локально и готов к подключению расчета на сервере."
              },
              locale
            )}
          </p>
        </div>

        <form className="planner-card glass-card" onSubmit={submit}>
          <label>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {t("planner.destination")}
            </span>
            <select value={destination} onChange={(event) => setDestination(event.target.value)}>
              {destinations.map((item) => (
                <option key={item.id} value={item.id}>
                  {copy(item.name, locale)}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>
              <CalendarDays size={16} aria-hidden="true" />
              {t("planner.duration")}: {duration} {t("planner.days")}
            </span>
            <input type="range" min="1" max="14" value={duration} onChange={(event) => setDuration(Number(event.target.value))} />
          </label>

          <label>
            <span>
              <WalletCards size={16} aria-hidden="true" />
              {t("planner.budget")}: ৳{budget.toLocaleString()}
            </span>
            <input type="range" min="10000" max="200000" step="5000" value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
          </label>

          <div className="group-stepper">
            <span>
              <Users size={16} aria-hidden="true" />
              {t("planner.group")}
            </span>
            <div>
              <button type="button" onClick={() => setGroup((value) => Math.max(1, value - 1))} aria-label="Decrease group size">
                <Minus size={16} aria-hidden="true" />
              </button>
              <strong>
                {group} {t("planner.people")}
              </strong>
              <button type="button" onClick={() => setGroup((value) => Math.min(20, value + 1))} aria-label="Increase group size">
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <button type="submit" className="cinematic-button">
            {loading ? t("planner.loading") : t("planner.submit")}
            {loading ? <Compass className="button-spinner" size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
          </button>

          {result && (
            <aside className="planner-result">
              <h3>{t("planner.resultTitle")}</h3>
              <p>
                {copy(selected.name, locale)} · {duration} {t("planner.days")} · {group} {t("planner.people")}
              </p>
              <p>{t("planner.resultBody")}</p>
              <a
                className="ghost-button"
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                  `Hello Stuci Travel, I want to book ${copy(selected.name, locale)} for ${duration} days, budget ${budget}, group ${group}.`
                )}`}
              >
                <Check size={16} aria-hidden="true" />
                {t("planner.book")}
              </a>
            </aside>
          )}
        </form>
      </div>
    </section>
  );
}

function MapSection({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <section className="section map-section">
      <div className="section-inner map-layout">
        <div>
          <p className="section-kicker">{t("sections.map")}</p>
          <h2 className="section-title">{copy({ en: "Pins that lead to real days.", ru: "Метки, за которыми стоят настоящие дни." }, locale)}</h2>
          <p className="section-lede">
            {copy(
              {
                en: "A dark, lightweight destination map with the main Bangladesh routes. Leaflet tiles can drop into this shell when production map keys are ready.",
                ru: "Легкая темная карта основных маршрутов Бангладеш. Плитки Leaflet можно подключить, когда будут готовы ключи."
              },
              locale
            )}
          </p>
        </div>
        <div className="route-map glass-card" role="img" aria-label={t("sections.map")}>
          {mapMarkers.map((marker, index) => (
            <button
              key={copy(marker.label, locale)}
              type="button"
              className="map-pin"
              data-active={active === index}
              style={{ top: marker.top, left: marker.left }}
              onClick={() => setActive(index)}
            >
              <span />
              <strong>{copy(marker.label, locale)}</strong>
            </button>
          ))}
          <div className="map-popup">
            <MapPin size={18} aria-hidden="true" />
            <strong>{copy(mapMarkers[active].label, locale)}</strong>
            <Link href="/tours">{t("actions.viewTours")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
