import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProgressRail from './components/ProgressRail'
import Home from './sections/Home'
import About from './sections/About'
import Sertifikat from './sections/Sertifikat'
import Projek from './sections/Projek'
import Kontak from './sections/Kontak'
import { sectionIds } from './data/sections'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useLang } from './context/LanguageContext'

export default function App() {
  const { progress, active } = useScrollSpy(sectionIds)
  const { t } = useLang()
  // Baca preferensi tema sinkron sebelum render pertama supaya tidak
  // tertimpa nilai default dan tetap konsisten setelah refresh.
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  // Terapkan class .dark ke <html> + simpan preferensi
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Smooth-scroll ke section (menghormati prefers-reduced-motion)
  const jump = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return (
    <>
      {/* skip link aksesibilitas */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-amber"
      >
        {t('skip.toContent')}
      </a>

      <Navbar
        active={active}
        onJump={jump}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
      />

      <ProgressRail progress={progress} active={active} onJump={jump} />

      <main>
        <Home onJump={jump} />
        <About />
        <Sertifikat />
        <Projek />
        <Kontak />
      </main>

      <Footer onJump={jump} />
    </>
  )
}
