import React from 'react'
import { Mail, Phone, Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react'

const phones = ['98 147 666','98 140 565','98 147 500','22 700 924','97 449 510']

const socials = [
  { label: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/agencesilianos' },
  { label: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@silianosvoyage' },
  { label: 'TikTok', icon: MessageCircle, url: 'https://www.tiktok.com/@agence.silianos' },
  { label: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/silianosofficielle' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Contactez Silianos Voyage</h2>
        <p className="mt-2 text-slate-600 text-center">Rue Ahmed Ibn Abi Dhiaf, Siliana</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 h-[360px]">
            <iframe
              title="Silianos Voyage 2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6448.608559202946!2d9.368544!3d36.08607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fc6500206f1d51%3A0x6bdc1539ba950b18!2sSilianos%20voyage%202!5e0!3m2!1sfr!2stn!4v1763591195348!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Téléphone</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                {phones.map(p => (
                  <li key={p}>
                    <a href={`tel:+216${p.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 text-slate-700 hover:text-[#1E40AF]">
                      <Phone size={18} />{p}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a href="https://api.whatsapp.com/send/?phone=21698147666" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <div className="mt-6">
                <a href="mailto:direction@silianos.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-[#1E40AF]">
                  <Mail size={18} /> direction@silianos.com
                </a>
              </div>

              <div className="mt-6 flex gap-3">
                {socials.map(({ label, icon: Icon, url }) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-slate-700 hover:text-[#1E40AF] hover:border-[#1E40AF]">
                    <Icon size={18} /> <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
