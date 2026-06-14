"use client";

import clsx from "clsx";
import { Menu, Plane, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { navItems } from "@/data/travel";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > 160 && current > lastY);
      lastY = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={clsx("site-nav", scrolled && "site-nav--scrolled", hidden && "site-nav--hidden")}>
      <Link href="/" className="brand-lockup magnetic" aria-label="STUCI Travel and Tours home">
        <span className="brand-mark">
          <Plane size={20} aria-hidden="true" />
        </span>
        <span>
          <strong>STUCI</strong>
          <small>Travel & Tours</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx("nav-link magnetic", pathname === item.href && "nav-link--active")}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <LanguageToggle />
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

      <div className={clsx("mobile-menu", open && "mobile-menu--open")}>
        {navItems.map((item, index) => (
          <Link key={item.href} href={item.href} style={{ transitionDelay: `${index * 50}ms` }}>
            {t(item.key)}
          </Link>
        ))}
      </div>
    </header>
  );
}
