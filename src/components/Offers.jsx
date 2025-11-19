import React from 'react'
import { motion } from 'framer-motion'

const offers = [
  {
    title: 'Sud Tunisien - Aventure',
    price: '380 DT',
    dates: '30 Oct - 02 Nov 2025',
    includes: ['Chebika', 'Tozeur', 'Matmata', 'Transport 4x4', 'Demi-pension'],
  },
  {
    title: 'Visa Émirats',
    price: '400 DT / mois',
    details: 'Facilités de paiement',
  },
  {
    title: 'Visa Qatar',
    price: '280 DT / mois',
    details: 'Visa touristique',
  },
  {
    title: 'Visa Oman',
    price_men: '350 DT / mois',
    price_women: '550 DT / mois',
    details: 'Tarifs différenciés homme/femme',
  },
  {
    title: 'Voyage Égypte',
    price: '150 DT / mois',
    details: 'Le Caire, Sharm El Sheikh',
  },
  {
    title: 'Omra & Hajj',
    status: 'Available',
    details: 'Vols directs, Hôtels proches Haram',
  },
]

function OfferCard({ data, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.05 }}
      className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-lg font-semibold text-slate-900">{data.title}</h3>
      {data.price && <p className="mt-2 text-2xl font-bold text-[#1E40AF]">{data.price}</p>}
      {data.price_men && (
        <p className="mt-2 text-slate-700"><span className="font-semibold">Hommes:</span> {data.price_men} • <span className="font-semibold">Femmes:</span> {data.price_women}</p>
      )}
      {data.dates && <p className="mt-1 text-slate-600">{data.dates}</p>}
      {data.details && <p className="mt-3 text-slate-700">{data.details}</p>}
      {data.includes && (
        <ul className="mt-3 text-slate-700 list-disc pl-5 space-y-1">
          {data.includes.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )}
      <div className="mt-5">
        <a href="https://api.whatsapp.com/send/?phone=21698147666" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#1E40AF] text-white px-4 py-2 text-sm hover:bg-blue-800">Demander info</a>
      </div>
    </motion.div>
  )
}

export default function Offers() {
  return (
    <section id="tarifs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Tarifs & Services</h2>
        <p className="mt-2 text-slate-600 text-center">Des offres flexibles pour chaque voyageur</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, idx) => (
            <OfferCard key={o.title} data={o} i={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
