import React from 'react'
import { ShieldCheck, BadgeDollarSign, Globe2 } from 'lucide-react'

const points = [
  { icon: Globe2, text: 'Destinations Variées' },
  { icon: BadgeDollarSign, text: 'Prix Compétitifs & Facilités' },
  { icon: ShieldCheck, text: 'Service Client Premium' },
]

export default function WhyUs() {
  return (
    <section id="pourquoi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Pourquoi nous ?</h2>
        <p className="mt-2 text-slate-600 text-center">Votre tranquillité d'esprit est notre priorité</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Icon />
              </div>
              <p className="mt-4 font-medium text-slate-900">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
