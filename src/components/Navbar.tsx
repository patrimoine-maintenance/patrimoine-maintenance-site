"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ROUTES = {
  accueil: "/",
  formules: "/formules",
  interventions: "/interventions",
  zoneIntervention: "/zone-intervention",
  espaceCollectivite: "/gestion-connectee",
  contact: "/contact",
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: ROUTES.accueil, label: "Accueil" },
    { href: ROUTES.interventions, label: "Interventions" },
    { href: ROUTES.formules, label: "Formules" },
    { href: ROUTES.espaceCollectivite, label: "Gestion connectée" },
    { href: ROUTES.zoneIntervention, label: "Zone d'intervention" },
    { href: ROUTES.contact, label: "Contact" },
  ];

  const mobileRow1Links = [
    { href: ROUTES.accueil, label: "Accueil" },
    { href: ROUTES.interventions, label: "Interventions" },
    { href: ROUTES.formules, label: "Formules" },
    { href: ROUTES.zoneIntervention, label: "Zone intervention" },
  ];

  return (
    <>
      {/* ——— Mobile iPhone : navigation directe ——— */}
      <header className="mobile-navbar fixed top-0 left-0 w-full z-[999999] md:hidden">
        <nav
          className="mobile-nav-bar"
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="mobile-nav-row-1">
            {mobileRow1Links.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "mobile-nav-btn mobile-nav-btn--orange"
                      : "mobile-nav-btn"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mobile-nav-row-2">
            <Link
              href={ROUTES.contact}
              className={
                pathname === ROUTES.contact
                  ? "mobile-nav-btn mobile-nav-btn--orange"
                  : "mobile-nav-btn"
              }
            >
              Contact
            </Link>
            <Link
              href={ROUTES.espaceCollectivite}
              className="mobile-nav-btn mobile-nav-btn--orange"
            >
              Espace collectivité
            </Link>
          </div>
        </nav>
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

            <Link
              href={ROUTES.espaceCollectivite}
              className="desktop-nav-cta"
            >
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
