import React from 'react'
import { motion } from 'framer-motion'
import { Plane } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF] via-sky-300/30 to-white" />
      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 left-10 w-72 h-72 bg-white/50 rounded-full blur-3xl" />
        <div className="absolute top-32 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-sky-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow">
            Votre Porte Vers Le Monde Sacré & L'Aventure
          </h1>
          <p className="mt-6 text-lg text-slate-100/90 max-w-2xl">
            Agence de voyages spécialisée Omra & Hajj, visas et circuits sur mesure. Assistance premium et tarifs flexibles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#tarifs" className="rounded-full bg-white text-[#1E40AF] px-6 py-3 font-semibold shadow hover:shadow-md transition">Voir les offres</a>
            <a href="https://api.whatsapp.com/send/?phone=21698147666" target="_blank" rel="noreferrer" className="rounded-full bg-green-500 text-white px-6 py-3 font-semibold shadow hover:bg-green-600 transition">Réserver maintenant</a>
          </div>
        </div>

        {/* Animated airplane */}
        <div className="relative h-[380px] sm:h-[460px]">
          <motion.div
            className="absolute -left-40 top-1/3"
            initial={{ x: -300, y: -40, rotate: -10, opacity: 0 }}
            animate={{ x: [ -300, 600, -300 ], y: [ -40, -60, -40 ], rotate: [ -10, 5, -10 ], opacity: 1 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <Plane className="text-white drop-shadow-xl" size={36} />
              <div className="h-1 w-36 bg-white/70 rounded-full" />
            </div>
          </motion.div>

          {/* Landmarks silhouettes suggestion */}
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-6 opacity-80">
            <div className="w-16 h-16 rounded-full bg-white/70 blur-xl" />
            <div className="w-12 h-12 rounded-full bg-white/60 blur-xl" />
            <div className="w-20 h-20 rounded-full bg-white/60 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
