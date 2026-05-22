"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ROUTES = {
  accueil: "/",
  formules: "/formules",
  interventions: "/interventions",
  zoneIntervention: "/zone-intervention",
  espaceCollectivite: "/gestion-connectee",
  contact: "/contact",
} as const;

const MOBILE_MENU_TOGGLE_ID = "mobile-menu-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.classList.remove("mobile-menu-open");
      return;
    }

    document.body.classList.add("mobile-menu-open");
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const links = [
    { href: ROUTES.accueil, label: "Accueil" },
    { href: ROUTES.interventions, label: "Interventions" },
    { href: ROUTES.formules, label: "Formules" },
    { href: ROUTES.espaceCollectivite, label: "Gestion connectée" },
    { href: ROUTES.zoneIntervention, label: "Zone d'intervention" },
    { href: ROUTES.contact, label: "Contact" },
  ];

  return (
    <>
      {/* ——— Mobile iPhone : navbar premium ——— */}
      <header className="mobile-header md:hidden">
        <input
          type="checkbox"
          id={MOBILE_MENU_TOGGLE_ID}
          className="mobile-menu-check"
          checked={mobileMenuOpen}
          onChange={(event) => setMobileMenuOpen(event.target.checked)}
          tabIndex={-1}
          aria-hidden="true"
        />

        <div className="mobile-header-inner">
          <div className="mobile-header-bar">
            <Link href={ROUTES.accueil} className="mobile-brand">
              Patrimoine <span>& Maintenance</span>
            </Link>

            <div className="mobile-header-actions">
              <Link
                href={ROUTES.espaceCollectivite}
                className="mobile-nav-cta"
                onClick={closeMobileMenu}
              >
                Espace collectivité
              </Link>

              <label
                htmlFor={MOBILE_MENU_TOGGLE_ID}
                className="mobile-menu-trigger"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-panel"
                role="button"
              >
                <span className="mobile-menu-icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span>Menu</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mobile-menu-layer" role="presentation">
          <label
            htmlFor={MOBILE_MENU_TOGGLE_ID}
            className="mobile-menu-backdrop"
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
          />
          <nav
            id="mobile-menu-panel"
            className="mobile-menu-overlay"
            aria-label="Menu de navigation"
          >
            <label
              htmlFor={MOBILE_MENU_TOGGLE_ID}
              className="mobile-menu-close"
              role="button"
              onClick={closeMobileMenu}
            >
              Fermer
            </label>
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={
                    isActive
                      ? "mobile-menu-link mobile-menu-link--active"
                      : "mobile-menu-link"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ROUTES.espaceCollectivite}
              onClick={closeMobileMenu}
              className="mobile-menu-link mobile-menu-link--cta"
            >
              Espace collectivité
            </Link>
          </nav>
        </div>
      </header>

      {/* ——— Desktop : navbar premium ——— */}
      <header className="desktop-header hidden md:block fixed top-0 inset-x-0 z-[9999]">
        <div className="desktop-header-inner">
          <div className="desktop-header-bar">
            <Link href={ROUTES.accueil} className="desktop-brand">
              Patrimoine <span>& Maintenance</span>
            </Link>

            <nav className="desktop-nav-inline" aria-label="Navigation principale">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      isActive
                        ? "desktop-nav-link desktop-nav-link--active"
                        : "desktop-nav-link"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link href={ROUTES.espaceCollectivite} className="desktop-nav-cta">
              Espace collectivité
            </Link>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="desktop-menu-panel"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="desktop-menu-trigger"
            >
              <span className="desktop-menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>Menu</span>
            </button>
          </div>

          {menuOpen && (
            <nav
              id="desktop-menu-panel"
              className="desktop-menu-panel"
              aria-label="Menu de navigation"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      isActive
                        ? "desktop-menu-link desktop-menu-link--active"
                        : "desktop-menu-link"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={ROUTES.espaceCollectivite}
                onClick={() => setMenuOpen(false)}
                className="desktop-menu-link desktop-menu-link--cta"
              >
                Espace collectivité
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
