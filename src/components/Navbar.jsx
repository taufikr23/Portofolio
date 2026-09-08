// src/components/Navbar.jsx
import { useState } from 'react'
import { sections } from '../data/sections'
import { useLang } from '../context/LanguageContext'

export default function Navbar({ active, onJump, dark, onToggleDark }) {
  const [open, setOpen] = useState(false)
  const { t, tr, lang, toggle } = useLang()

  const handleJump = (id) => {
    onJump?.(id)
    setOpen(false)
  }

  return (
    <header id="site-navbar" className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-[color:var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        {/* Brand */}
        <button
          onClick={() => handleJump('home')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber font-display text-lg font-bold text-white shadow-card">
            T
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-surface-fg">
            {t('nav.brand')}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleJump(s.id)}
              className={[
                'relative rounded-lg px-3 py-2 font-body text-sm font-semibold transition-colors',
                active === s.id
                  ? 'text-amber'
                  : 'text-surface-fg/70 hover:text-amber',
              ].join(' ')}
            >
              {tr(s.nav)}
              {active === s.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-amber" />
              )}
            </button>
          ))}
          <LangToggle lang={lang} onToggle={toggle} label={t('lang.switch')} />
          <DarkToggle dark={dark} onToggle={onToggleDark} t={t} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <LangToggle lang={lang} onToggle={toggle} label={t('lang.switch')} />
          <DarkToggle dark={dark} onToggle={onToggleDark} t={t} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t('nav.menu')}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-surface-fg hover:bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
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
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/10 bg-[color:var(--bg)] px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleJump(s.id)}
                className={[
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-left font-body text-sm font-semibold transition-colors',
                  active === s.id
                    ? 'bg-amber-alpha text-amber'
                    : 'text-surface-fg/80 hover:bg-paper',
                ].join(' ')}
              >
                {tr(s.nav)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function LangToggle({ lang, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="flex h-10 items-center gap-0.5 rounded-lg px-1 font-mono text-xs font-semibold text-surface-fg transition-colors hover:bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <span className={lang === 'id' ? 'rounded bg-surface-alt px-1.5 py-1 text-amber' : 'px-1.5 py-1 text-surface-fg/50'}>
        ID
      </span>
      <span className={lang === 'en' ? 'rounded bg-surface-alt px-1.5 py-1 text-amber' : 'px-1.5 py-1 text-surface-fg/50'}>
        EN
      </span>
    </button>
  )
}

function DarkToggle({ dark, onToggle, t }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? t('theme.toLight') : t('theme.toDark')}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-surface-fg transition-colors hover:bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}
