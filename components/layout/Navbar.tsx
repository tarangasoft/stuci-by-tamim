"use client";

import clsx from "clsx";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { navItems } from "@/data/travel";
import { useTheme } from "@/lib/ThemeProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > 160 && current > lastY && !open);
      lastY = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={clsx("site-nav", scrolled && "site-nav--scrolled", hidden && "site-nav--hidden")}>
        <Link href="/" className="brand-lockup magnetic" aria-label="STUCI Travel and Tours home">
          <span className="brand-logo-wrap">
            <Image
              src="/images/stuci_logo.png"
              alt="STUCI Logo"
              width={80}
              height={80}
              sizes="(max-width: 900px) 70px, 80px"
              className="brand-logo-img object-contain"
              priority
            />
          </span>
          <span>
            <strong>STUCI</strong>
            <small>Travel &amp; Tours</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx("nav-link magnetic", isActive(item.href) && "nav-link--active")}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageToggle />

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle magnetic"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <Link href="/tours" className="book-pill magnetic">
            {t("nav.book")}
          </Link>
          <button
            type="button"
            className="menu-button magnetic"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={clsx("mobile-menu", open && "mobile-menu--open")} role="dialog" aria-modal="true">
        <button
          type="button"
          className="mobile-menu__close"
          onClick={() => setOpen(false)}
          aria-label={t("nav.closeMenu")}
        >
          <X size={26} />
        </button>
        {navItems.map((item, index) => (
          <Link key={item.href} href={item.href} style={{ transitionDelay: `${index * 55}ms` }}>
            {t(item.key)}
          </Link>
        ))}
        <div className="mobile-menu__actions">
          <LanguageToggle />
          <button
            type="button"
            className="theme-toggle magnetic"
            onClick={() => { toggleTheme(); setOpen(false); }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}
