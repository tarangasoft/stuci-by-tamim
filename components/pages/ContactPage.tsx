"use client";

import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const faqs = [
  {
    q: { en: "How do I book a tour?", ru: "Как забронировать тур?" },
    a: {
      en: "You can book via our website, email, or WhatsApp. Our team responds within 2 hours during office hours.",
      ru: "Вы можете забронировать через сайт, email или WhatsApp. Команда отвечает в течение 2 часов в рабочее время."
    }
  },
  {
    q: { en: "Do you offer custom tour packages?", ru: "Вы делаете индивидуальные туры?" },
    a: {
      en: "Yes! We specialize in tailor-made itineraries. Tell us your dates, budget, and interests and we'll craft something unforgettable.",
      ru: "Да! Мы специализируемся на маршрутах под заказ. Сообщите даты, бюджет и интересы — мы создадим незабываемое путешествие."
    }
  },
  {
    q: { en: "What languages do you support?", ru: "Какие языки вы поддерживаете?" },
    a: {
      en: "We offer full service in English and Russian, with guides and documentation available in both languages.",
      ru: "Мы предоставляем полный сервис на английском и русском языках: гиды и документы доступны на обоих."
    }
  },
  {
    q: { en: "Can you assist with visas?", ru: "Вы помогаете с визами?" },
    a: {
      en: "For international packages we provide full visa guidance, documentation support, and advice on e-Visa destinations.",
      ru: "Для международных туров мы оказываем полную визовую поддержку, помощь с документами и консультации по e-Visa."
    }
  }
];

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com/stucitravel" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/stucitravel" },
  { label: "WhatsApp", icon: Phone, href: "https://wa.me/8801700000000" },
  { label: "Website", icon: Globe, href: "https://stucitravel.com" }
];

export function ContactPage() {
  const { i18n } = useTranslation();
  const locale = i18n.language as "en" | "ru";
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    formRef.current?.reset();
  };

  const copy = (obj: { en: string; ru: string }) => (locale === "ru" ? obj.ru : obj.en);

  return (
    <div className="contact-page page-shell">
      {/* ── Hero ──────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero__overlay" />
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
          alt="Travel scenic view"
          fill
          priority
          className="contact-hero__img"
          sizes="100vw"
        />
        <div className="contact-hero__content section-inner">
          <p className="section-kicker">
            {locale === "ru" ? "Давайте поговорим" : "Let's Talk"}
          </p>
          <h1>
            {locale === "ru" ? "Свяжитесь с нами" : "Get in Touch"}
          </h1>
          <p className="contact-hero__sub">
            {locale === "ru"
              ? "Наша команда готова помочь вам спланировать идеальное путешествие."
              : "Our team is ready to help you plan the perfect journey."}
          </p>
        </div>
      </section>

      {/* ── Contact Band ──────────────────────── */}
      <section className="section contact-info-section">
        <div className="section-inner contact-info-grid">
          {/* Location */}
          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <MapPin size={26} />
            </div>
            <h2>{locale === "ru" ? "Адрес" : "Location"}</h2>
            <p>Dhaka, Bangladesh</p>
            <p className="contact-info-card__detail">Mirpur / Motijheel</p>
            <a
              href="https://maps.google.com/?q=Dhaka+Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card__link"
            >
              {locale === "ru" ? "Открыть карту" : "View on Map"} →
            </a>
          </div>

          {/* Phone / WhatsApp */}
          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <Phone size={26} />
            </div>
            <h2>{locale === "ru" ? "Телефон" : "Contact"}</h2>
            <p>+880 1700 000000</p>
            <p className="contact-info-card__detail">info@stucitravel.com</p>
            <a
              href="https://wa.me/8801700000000?text=Hello+Stuci+Travel%2C+I%27d+like+to+book+a+tour"
              target="_blank"
              rel="noreferrer"
              className="contact-info-card__link"
            >
              {locale === "ru" ? "Написать в WhatsApp" : "Message on WhatsApp"} →
            </a>
          </div>

          {/* Hours */}
          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <Clock size={26} />
            </div>
            <h2>{locale === "ru" ? "Часы работы" : "Office Hours"}</h2>
            <p>{locale === "ru" ? "Сб–Чт: 10:00–19:00" : "Sat–Thu: 10:00–19:00"}</p>
            <p className="contact-info-card__detail">
              {locale === "ru" ? "Пт: 14:00–19:00" : "Fri: 14:00–19:00"}
            </p>
            <a href="mailto:info@stucitravel.com" className="contact-info-card__link">
              {locale === "ru" ? "Написать письмо" : "Send an Email"} →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Map ────────────────── */}
      <section className="section contact-form-section">
        <div className="section-inner contact-form-layout">
          {/* Form */}
          <div className="contact-form-card glass-card">
            <p className="section-kicker">
              {locale === "ru" ? "Форма обратной связи" : "Send a Message"}
            </p>
            <h2 className="contact-form-card__title">
              {locale === "ru" ? "Напишите нам" : "Write to Us"}
            </h2>

            {sent ? (
              <div className="contact-form-success">
                <CheckCircle size={52} />
                <h3>{locale === "ru" ? "Сообщение отправлено!" : "Message Sent!"}</h3>
                <p>
                  {locale === "ru"
                    ? "Мы свяжемся с вами в течение 24 часов."
                    : "We'll get back to you within 24 hours."}
                </p>
                <button
                  type="button"
                  className="cinematic-button"
                  onClick={() => setSent(false)}
                >
                  {locale === "ru" ? "Отправить ещё" : "Send Another"}
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>{locale === "ru" ? "Имя" : "Full Name"} *</span>
                    <input type="text" name="name" required placeholder={locale === "ru" ? "Ваше имя" : "Your name"} />
                  </label>
                  <label className="contact-form__field">
                    <span>Email *</span>
                    <input type="email" name="email" required placeholder={locale === "ru" ? "your@email.com" : "your@email.com"} />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>{locale === "ru" ? "Телефон / WhatsApp" : "Phone / WhatsApp"}</span>
                    <input type="tel" name="phone" placeholder="+880..." />
                  </label>
                  <label className="contact-form__field">
                    <span>{locale === "ru" ? "Интересующий тур" : "Tour of Interest"}</span>
                    <select name="tour">
                      <option value="">{locale === "ru" ? "Выберите..." : "Select..."}</option>
                      <option value="cox">{locale === "ru" ? "Кокс-Базар" : "Cox's Bazar"}</option>
                      <option value="sundarban">{locale === "ru" ? "Сундарбан" : "Sundarban"}</option>
                      <option value="sylhet">{locale === "ru" ? "Силхет" : "Sylhet"}</option>
                      <option value="bandarban">{locale === "ru" ? "Бандарбан" : "Bandarban"}</option>
                      <option value="international">{locale === "ru" ? "Международный тур" : "International Tour"}</option>
                      <option value="custom">{locale === "ru" ? "Индивидуальный тур" : "Custom Package"}</option>
                    </select>
                  </label>
                </div>
                <label className="contact-form__field">
                  <span>{locale === "ru" ? "Дата поездки" : "Travel Date"}</span>
                  <input type="date" name="date" />
                </label>
                <label className="contact-form__field">
                  <span>{locale === "ru" ? "Сообщение" : "Message"} *</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={
                      locale === "ru"
                        ? "Расскажите о вашем путешествии мечты..."
                        : "Tell us about your dream trip..."
                    }
                  />
                </label>
                <button type="submit" className="cinematic-button" disabled={sending}>
                  {sending ? (
                    <>{locale === "ru" ? "Отправка..." : "Sending..."}</>
                  ) : (
                    <>
                      {locale === "ru" ? "Отправить" : "Send Message"}
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map embed */}
          <div className="contact-map-col">
            <div className="contact-map-embed">
              <iframe
                title="Stuci Travel office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.37800890366!2d90.27923831641636!3d23.780573003455255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social links */}
            <div className="contact-social glass-card">
              <p className="contact-social__label">
                {locale === "ru" ? "Мы в соцсетях" : "Follow Us"}
              </p>
              <div className="contact-social__links">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="contact-social__link"
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <section className="section contact-faq-section">
        <div className="section-inner">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">
            {locale === "ru" ? "Часто задаваемые вопросы" : "Frequently Asked Questions"}
          </h2>
          <div className="contact-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`contact-faq-item glass-card${openFaq === i ? " contact-faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="contact-faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{copy(faq.q)}</span>
                  <span className="contact-faq-item__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="contact-faq-item__a">{copy(faq.a)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ──────────────────────── */}
      <section className="section contact-wa-section">
        <div className="section-inner contact-wa-card glass-card">
          <div>
            <p className="section-kicker">
              {locale === "ru" ? "Быстрый ответ" : "Quick Response"}
            </p>
            <h2>
              {locale === "ru"
                ? "Предпочитаете WhatsApp?"
                : "Prefer WhatsApp?"}
            </h2>
            <p>
              {locale === "ru"
                ? "Напишите нам напрямую — мы отвечаем в течение нескольких минут."
                : "Message us directly — we typically reply within minutes."}
            </p>
          </div>
          <a
            href="https://wa.me/8801700000000?text=Hello+Stuci+Travel%2C+I%27d+like+to+enquire+about+a+tour"
            target="_blank"
            rel="noreferrer"
            className="cinematic-button contact-wa-btn"
          >
            <Phone size={18} aria-hidden="true" />
            {locale === "ru" ? "Открыть WhatsApp" : "Open WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
}
