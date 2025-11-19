import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Offers from './components/Offers'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <WhyUs />
        <Offers />
        <Contact />
        <footer className="py-8 text-center text-slate-600 border-t">© {new Date().getFullYear()} Silianos Voyage — Tous droits réservés</footer>
      </main>
    </div>
  )
}

export default App
