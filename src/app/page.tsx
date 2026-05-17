export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex justify-center">

      <div className="relative w-full">

        <img
          src="/images/landing-patrimoine-maintenance.png"
          alt="Patrimoine et Maintenance"
          className="w-full min-h-screen object-cover"
        />

        {/* BANDEAU SITE EN CONSTRUCTION */}

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-black/70 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl shadow-2xl">

            <p className="text-white text-2xl md:text-3xl font-black tracking-widest uppercase text-center">
              Site internet en cours de construction
            </p>

            <p className="text-orange-400 text-center text-sm mt-1 tracking-[4px] uppercase">
              Ouverture prochaine
            </p>

          </div>
        </div>

        {/* BOUTONS CONTACT */}

        <div className="fixed bottom-10 right-6 flex flex-col gap-4 z-50">

          <a
            href="tel:+33631951877"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transition-all"
          >
            📞 Appeler maintenant
          </a>

          <a
            href="mailto:contact@patrimoine-maintenance.fr"
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transition-all"
          >
            ✉️ Demander un devis
          </a>

        </div>

      </div>

    </main>
  )
}