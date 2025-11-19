import React from 'react'

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">À propos</h2>
          <p className="mt-4 text-slate-700">
            Silianos Voyage accompagne les voyageurs tunisiens vers les destinations du monde entier, avec un focus particulier sur les voyages religieux Omra & Hajj. Nous offrons un service premium, des facilités de paiement et une assistance complète.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200" />
          <div className="absolute inset-0 flex items-center justify-center text-[#1E40AF] font-semibold">
            Silianos Voyage
          </div>
        </div>
      </div>
    </section>
  )
}
