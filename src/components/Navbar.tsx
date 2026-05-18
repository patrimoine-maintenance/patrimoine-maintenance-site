"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/interventions", label: "Interventions" },
    { href: "/formules", label: "Formules" },
    { href: "/gestion-connectee", label: "Gestion connectée" },
    { href: "/zone-intervention", label: "Zone d’intervention" },
    { href: "/contact", label: "Contact" },
  ];

 return (
  <>
    <header className="fixed top-6 left-0 w-full z-[9999] flex justify-center px-4">
      <nav className="flex flex-wrap justify-center gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-3 md:px-4 py-1.5 rounded-full overflow-hidden relative
                text-white font-semibold text-[10px] md:text-sm
                transition-all duration-300 shadow-2xl backdrop-blur-md border
                ${
                  isActive
                    ? `bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700 border-cyan-200 shadow-[0_0_10px_rgba(0,180,255,0.7)] ring-1 ring-cyan-300`
                    : `bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-900 border-orange-200 shadow-[0_0_10px_rgba(255,140,0,0.35)] ring-1 ring-orange-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(120,200,255,0.7)]`
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>

    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      <a
        href="tel:+33361951877"
        className="px-5 py-3 rounded-full bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700 border border-cyan-200 ring-1 ring-cyan-300 shadow-[0_0_12px_rgba(255,140,0,0.55)] text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
      >
        📞 Appeler maintenant
      </a>

      <a
        href="mailto:contact@patrimoine-maintenance.fr"
        className="px-5 py-3 rounded-full bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-900 border border-orange-200 ring-1 ring-orange-300 shadow-[0_0_12px_rgba(0,170,255,0.45)] text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
      >
        📩 Demande de devis
      </a>
    </div>
  </>
);
}