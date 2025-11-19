import React, { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#pourquoi', label: 'Pourquoi nous ?' },
  { href: '#tarifs', label: 'Tarifs & Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = scrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm text-slate-900' : 'bg-transparent text-white'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${base}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#accueil" className="flex items-center gap-2 font-semibold">
            <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white">SV</div>
            <span>Silianos Voyage</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-700 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send/?phone=21698147666"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow hover:bg-green-600 transition-colors"
            >
              <Phone size={18} />
              <span>Réserver</span>
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden ${scrolled ? 'bg-white/95 text-slate-900' : 'bg-slate-900/90 text-white'} backdrop-blur`}> 
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-700">
                {l.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=21698147666"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow hover:bg-green-600"
            >
              <Phone size={18} />
              <span>Réserver</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
