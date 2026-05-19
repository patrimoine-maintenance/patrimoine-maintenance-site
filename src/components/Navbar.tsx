"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className="fixed top-0 left-0 w-full z-[9999] bg-black/20 backdrop-blur-md">

        <div className="flex items-center justify-between px-4 py-1">

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 rounded-full bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-900 border border-orange-200 text-white text-sm md:text-base font-semibold shadow-xl"
          >
            ☰ Menu
          </button>

        </div>

        {menuOpen && (
         <nav className="flex flex-col items-center gap-3 px-4 pb-6 pt-4 mx-4 rounded-3xl bg-transparent backdrop-blur-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(0,180,255,0.15)]">

            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    w-full max-w-sm text-center
                    px-4 py-3 rounded-full
                    text-white text-sm md:text-base font-semibold
                    transition-all duration-300
                    border shadow-xl
                    ${
                      isActive
                        ? "bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700 border-cyan-200"
                        : "bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-900 border-orange-200"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}

          </nav>
        )}
      </header>

      <div className="h-20"></div>
    </>
  );
}