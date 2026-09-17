// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sections } from '../data/sections'
import { useLang } from '../context/LanguageContext'

export default function Navbar({ active, onJump }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, tr, lang, toggle } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJump = (id) => {
    onJump?.(id)
    setOpen(false)
  }

  return (
    <header id="site-navbar" className="fixed inset-x-0 top-0 z-50 py-4 px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 pointer-events-auto transition-all duration-300 ${
          scrolled 
            ? 'glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => handleJump('home')}
          className="group flex items-center gap-3 focus:outline-none transition-transform hover:scale-105"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#211C18] border border-[#332C26] overflow-hidden shadow-glow">
            <img src="/favicon.png" alt="Logo" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-[#EDE6DC] hidden sm:block">
            {t('nav.brand')}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleJump(s.id)}
              className="relative rounded-lg px-4 py-2 font-body text-sm font-semibold transition-colors text-[#A69B8D] hover:text-[#EDE6DC] group"
            >
              {tr(s.nav)}
              {active === s.id && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#C9A15A] shadow-[0_0_10px_rgba(201,161,90,0.5)]" 
                />
              )}
            </button>
          ))}
          <div className="h-6 w-[1px] bg-[#332C26] mx-2" />
          <LangToggle lang={lang} onToggle={toggle} label={t('lang.switch')} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LangToggle lang={lang} onToggle={toggle} label={t('lang.switch')} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t('nav.menu')}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white glass-panel focus:outline-none"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mx-4 mt-2 rounded-2xl glass-panel border border-white/10 p-4 pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleJump(s.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left font-body text-sm font-semibold transition-all ${
                    active === s.id
                      ? 'bg-[#C9A15A]/10 text-[#C9A15A] border border-[#C9A15A]/30'
                      : 'text-[#A69B8D] hover:bg-[#2A2420]'
                  }`}
                >
                  {tr(s.nav)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LangToggle({ lang, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="flex h-10 items-center gap-1 rounded-xl px-2 font-mono text-xs font-bold text-[#A69B8D] transition-all hover:bg-[#2A2420] focus:outline-none glass-panel"
    >
      <span className={`rounded-lg px-2 py-1 transition-colors ${lang === 'id' ? 'bg-[#C9A15A] text-[#161311] font-bold shadow-glow' : 'text-[#A69B8D]'}`}>
        ID
      </span>
      <span className={`rounded-lg px-2 py-1 transition-colors ${lang === 'en' ? 'bg-[#C9A15A] text-[#161311] font-bold shadow-glow' : 'text-[#A69B8D]'}`}>
        EN
      </span>
    </button>
  )
}

