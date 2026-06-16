"use client";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, ImagePlus, Play, Send, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { copy, GalleryCategory, galleryItems, imageBank } from "@/data/travel";
import { ParticleField } from "@/components/ui/ParticleField";

type GalleryFilter = "all" | GalleryCategory;

const filters: { value: GalleryFilter; key: string }[] = [
  { value: "all", key: "filters.all" },
  { value: "landscapes", key: "filters.landscapes" },
  { value: "beaches", key: "filters.beaches" },
  { value: "culture", key: "filters.culture" },
  { value: "wildlife", key: "filters.wildlife" },
  { value: "tourists", key: "filters.tourists" },
  { value: "video", key: "filters.video" }
];

export function GalleryPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "ru" ? "ru" : "en";
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(() => {
    return filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const active = activeIndex !== null ? visible[activeIndex] : null;

  const move = (direction: number) => {
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index + direction + visible.length) % visible.length;
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, visible.length]);

  return (
    <div className="page-shell gallery-page">
      <section className="gallery-hero">
        <img src={imageBank.sylhet} alt="Lush green travel landscape" />
        <div className="gallery-hero__overlay" />
        <ParticleField density={36} />
        <div className="gallery-mosaic" aria-hidden="true">
          {galleryItems.slice(0, 6).map((item, index) => (
            <img key={item.id} src={item.image} alt="" style={{ animationDelay: `${index * 80}ms` }} />
          ))}
        </div>
        <div className="section-inner">
          <p className="section-kicker">{t("sections.galleryHero")}</p>
          <h1>{copy({ en: "Moments worth returning to.", ru: "Моменты, к которым хочется вернуться." }, locale)}</h1>
          <p>
            {copy(
              {
                en: "A visual fieldbook from beaches, forest routes, tea valleys, cultural stops, and guest journeys.",
                ru: "Визуальный дневник пляжей, лесных маршрутов, чайных долин, культурных остановок и поездок гостей."
              },
              locale
            )}
          </p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-inner">
          <div className="gallery-tabs glass-card" role="tablist" aria-label={t("sections.galleryHero")}>
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={filter === item.value}
                data-active={filter === item.value}
                onClick={() => {
                  setFilter(item.value);
                  setActiveIndex(null);
                }}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          <div className="gallery-masonry">
            <AnimatePresence mode="popLayout">
              {visible.map((item, index) => (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className="gallery-card magnetic"
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${t("gallery.open")}: ${copy(item.title, locale)}`}
                  data-cursor="image"
                >
                  <img src={item.image} alt={copy(item.title, locale)} />
                  {item.category === "video" && (
                    <span className="play-badge">
                      <Play size={18} aria-hidden="true" />
                    </span>
                  )}
                  <span className="gallery-card__overlay">
                    <strong>{copy(item.title, locale)}</strong>
                    <small>{item.credit}</small>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section submit-photo-section">
        <div className="section-inner submit-photo-card">
          <div>
            <p className="section-kicker">{t("gallery.submit")}</p>
            <h2>{copy({ en: "Share the frame that stayed with you.", ru: "Поделитесь кадром, который остался с вами." }, locale)}</h2>
            <p>
              {copy(
                {
                  en: "Send guest photos to the Stuci desk with a short note and we will add selected images to future route stories.",
                  ru: "Отправьте фотографии гостей с короткой заметкой, и мы добавим избранные кадры в будущие истории маршрутов."
                },
                locale
              )}
            </p>
          </div>
          <a
            className="cinematic-button"
            href={`mailto:info@stucitravel.com?subject=${encodeURIComponent("Guest travel photo submission")}`}
          >
            <ImagePlus size={18} aria-hidden="true" />
            {t("gallery.submit")}
          </a>
        </div>
      </section>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <GalleryLightbox
            active={active}
            locale={locale}
            onClose={() => setActiveIndex(null)}
            move={move}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryLightbox({
  active,
  locale,
  onClose,
  move,
  t
}: {
  active: (typeof galleryItems)[number];
  locale: string;
  onClose: () => void;
  move: (direction: number) => void;
  t: any;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t("gallery.close")}>
        <X size={24} aria-hidden="true" />
      </button>
      <button type="button" className="lightbox-arrow lightbox-arrow--left" onClick={() => move(-1)} aria-label={t("gallery.previous")}>
        <ArrowLeft size={24} aria-hidden="true" />
      </button>
      <motion.figure
        key={active.id}
        initial={{ opacity: 0, scale: 0.94, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.22 }}
      >
        <img src={active.image} alt={copy(active.title, locale)} />
        {active.category === "video" && (
          <span className="lightbox-play">
            <Play size={26} aria-hidden="true" />
          </span>
        )}
        <figcaption>
          <strong>{copy(active.title, locale)}</strong>
          <span>{active.credit}</span>
        </figcaption>
      </motion.figure>
      <button type="button" className="lightbox-arrow lightbox-arrow--right" onClick={() => move(1)} aria-label={t("gallery.next")}>
        <ArrowRight size={24} aria-hidden="true" />
      </button>
      <a className="lightbox-download" href={active.image} target="_blank" rel="noreferrer" aria-label="Open image source">
        <Download size={22} aria-hidden="true" />
      </a>
    </motion.div>,
    document.body
  );
}
