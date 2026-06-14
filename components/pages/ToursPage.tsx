"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MapPinned,
  MessageCircle,
  Plane,
  Send,
  SlidersHorizontal,
  Sparkles,
  Tag,
  Users,
  X
} from "lucide-react";
import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { copy, destinations, imageBank, TourCategory, tours } from "@/data/travel";
import { ParticleField } from "@/components/ui/ParticleField";

type Filter = "all" | TourCategory;

const filterOptions: { value: Filter; key: string }[] = [
  { value: "all", key: "filters.all" },
  { value: "oneDay", key: "filters.oneDay" },
  { value: "domestic", key: "filters.domestic" },
  { value: "international", key: "filters.international" }
];

export function ToursPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "ru" ? "ru" : "en";
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<(typeof tours)[number] | null>(null);

  const visibleTours = useMemo(() => {
    return filter === "all" ? tours : tours.filter((tour) => tour.category === filter);
  }, [filter]);

  return (
    <div className="page-shell tours-page">
      <section className="tours-hero">
        <img src={imageBank.bandarban} alt="Misty mountain travel route" />
        <div className="tours-hero__overlay" />
        <ParticleField density={54} />
        <div className="section-inner">
          <p className="section-kicker">{t("sections.tourHero")}</p>
          <h1>{copy({ en: "Choose your adventure.", ru: "Выберите приключение." }, locale)}</h1>
          <p>
            {copy(
              {
                en: "One-day escapes, Bangladesh classics, and international packages with thoughtful support from first quote to final drop-off.",
                ru: "Однодневные поездки, классика Бангладеш и международные пакеты с заботливой поддержкой от заявки до возвращения."
              },
              locale
            )}
          </p>
        </div>
      </section>

      <section className="tour-filter-shell">
        <div className="section-inner tour-filter-bar glass-card">
          <SlidersHorizontal size={18} aria-hidden="true" />
          {filterOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="magnetic"
              data-active={filter === option.value}
              onClick={() => setFilter(option.value)}
            >
              {t(option.key)}
            </button>
          ))}
        </div>
      </section>

      <section className="section tour-grid-section">
        <div className="section-inner">
          <div className="tour-grid-heading">
            <div>
              <p className="section-kicker">{t("nav.tours")}</p>
              <h2 className="section-title">{copy({ en: "Fast to scan. Rich when opened.", ru: "Легко выбрать. Подробно внутри." }, locale)}</h2>
            </div>
            <span>{visibleTours.length} {t(filterOptions.find((item) => item.value === filter)?.key ?? "filters.all")}</span>
          </div>

          <motion.div layout className="tour-card-grid">
            <AnimatePresence mode="popLayout">
              {visibleTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} locale={locale} onOpen={() => setSelected(tour)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <PackageBuilder locale={locale} />

      <AnimatePresence>
        {selected && <TourDetail tour={selected} locale={locale} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}

function TourCard({
  tour,
  locale,
  onOpen
}: {
  tour: (typeof tours)[number];
  locale: string;
  onOpen: () => void;
}) {
  const { t } = useTranslation();
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - py) * 14,
      y: (px - 0.5) * 14,
      shineX: px * 100,
      shineY: py * 100
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.84 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="tour-card magnetic"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        "--shine-x": `${tilt.shineX}%`,
        "--shine-y": `${tilt.shineY}%`
      } as React.CSSProperties}
      data-cursor="image"
    >
      <div className="tour-card__media">
        <img src={tour.image} alt={copy(tour.title, locale)} />
        <span>{copy(tour.badge, locale)}</span>
      </div>
      <div className="tour-card__body">
        <div>
          <h3>{copy(tour.title, locale)}</h3>
          <p>{copy(tour.subtitle, locale)}</p>
        </div>
        <div className="tour-meta">
          <span>
            <Clock size={15} aria-hidden="true" />
            {copy(tour.duration, locale)}
          </span>
          <strong>
            <Tag size={15} aria-hidden="true" />
            {t("tours.from")} {tour.price}
          </strong>
        </div>
        <ul>
          {tour.includes.slice(0, 4).map((item) => (
            <li key={copy(item, locale)}>
              <Check size={14} aria-hidden="true" />
              {copy(item, locale)}
            </li>
          ))}
        </ul>
        <button type="button" className="ghost-button" onClick={onOpen}>
          {t("tours.viewDetails")}
          <ChevronDown size={16} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

function TourDetail({
  tour,
  locale,
  onClose
}: {
  tour: (typeof tours)[number];
  locale: string;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div className="tour-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.article
        className="tour-modal glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-modal-title"
        initial={{ y: 80, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 70, opacity: 0, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label={t("tours.close")}>
          <X size={22} aria-hidden="true" />
        </button>
        <div className="tour-modal__media">
          <img src={tour.image} alt={copy(tour.title, locale)} />
        </div>
        <div className="tour-modal__content">
          <span className="modal-badge">{copy(tour.badge, locale)}</span>
          <h2 id="tour-modal-title">{copy(tour.title, locale)}</h2>
          <p>{copy(tour.subtitle, locale)}</p>

          <div className="modal-facts">
            <span>
              <Calendar size={16} aria-hidden="true" />
              {copy(tour.duration, locale)}
            </span>
            <strong>
              <Tag size={16} aria-hidden="true" />
              {tour.price}
            </strong>
          </div>

          <div className="modal-columns">
            <section>
              <h3>{t("tours.highlights")}</h3>
              <ul>
                {tour.highlights.map((item) => (
                  <li key={copy(item, locale)}>
                    <Sparkles size={14} aria-hidden="true" />
                    {copy(item, locale)}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>{t("tours.includes")}</h3>
              <ul>
                {tour.includes.map((item) => (
                  <li key={copy(item, locale)}>
                    <Check size={14} aria-hidden="true" />
                    {copy(item, locale)}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="itinerary-box">
            <h3>{t("tours.itinerary")}</h3>
            {tour.itinerary.map((item, index) => (
              <details key={copy(item, locale)} open={index === 0}>
                <summary>
                  Day {index + 1}
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <p>{copy(item, locale)}</p>
              </details>
            ))}
          </section>

          <form className="booking-form">
            <input aria-label={t("forms.name")} placeholder={t("forms.name")} />
            <input aria-label={t("forms.phone")} placeholder={t("forms.phone")} />
            <input aria-label={t("forms.date")} type="date" />
            <a
              className="cinematic-button"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/8801700000000?text=${encodeURIComponent(`Hello Stuci Travel, I want to book ${copy(tour.title, locale)}.`)}`}
            >
              <MessageCircle size={17} aria-hidden="true" />
              {t("tours.bookTour")}
            </a>
          </form>
        </div>
      </motion.article>
    </motion.div>
  );
}

function PackageBuilder({ locale }: { locale: string }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string[]>(["cox"]);
  const [duration, setDuration] = useState(5);
  const [budget, setBudget] = useState(60000);
  const progress = Math.round(((selected.length ? 1 : 0) + (duration > 1 ? 1 : 0) + (budget > 10000 ? 1 : 0)) / 3 * 100);

  const toggleDestination = (id: string) => {
    setSelected((value) => (value.includes(id) ? value.filter((item) => item !== id) : [...value, id]));
  };

  const summary = destinations
    .filter((item) => selected.includes(item.id))
    .map((item) => copy(item.name, locale))
    .join(", ");

  return (
    <section className="section builder-section">
      <div className="section-inner builder-card glass-card">
        <div>
          <p className="section-kicker">{t("tours.builder")}</p>
          <h2>{copy({ en: "Three steps to a custom package.", ru: "Три шага к индивидуальному туру." }, locale)}</h2>
          <p>{t("tours.builderSub")}</p>
          <div className="builder-progress" aria-label={`${progress}%`}>
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="builder-steps">
          <section>
            <h3>
              <MapPinned size={18} aria-hidden="true" />
              {copy({ en: "Choose places", ru: "Выберите места" }, locale)}
            </h3>
            <div className="destination-checks">
              {destinations.slice(0, 4).map((item) => (
                <label key={item.id}>
                  <input type="checkbox" checked={selected.includes(item.id)} onChange={() => toggleDestination(item.id)} />
                  <span>{copy(item.name, locale)}</span>
                </label>
              ))}
            </div>
          </section>
          <section>
            <h3>
              <Clock size={18} aria-hidden="true" />
              {copy({ en: "Set duration", ru: "Задайте длительность" }, locale)}
            </h3>
            <input type="range" min="2" max="14" value={duration} onChange={(event) => setDuration(Number(event.target.value))} />
            <strong>{duration} {t("planner.days")}</strong>
          </section>
          <section>
            <h3>
              <Plane size={18} aria-hidden="true" />
              {copy({ en: "Send request", ru: "Отправьте заявку" }, locale)}
            </h3>
            <input type="range" min="10000" max="200000" step="5000" value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
            <strong>৳{budget.toLocaleString()}</strong>
            <a
              className="cinematic-button"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                `Hello Stuci Travel, please build a custom package for ${summary || "Bangladesh"}, ${duration} days, budget ${budget}.`
              )}`}
            >
              <Send size={16} aria-hidden="true" />
              WhatsApp
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}
