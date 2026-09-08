import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProgressRail from './components/ProgressRail'
import Reveal from './components/ui/Reveal'
import Home from './sections/Home'
import About from './sections/About'
import Keahlian from './sections/Keahlian'
import Sertifikat from './sections/Sertifikat'
import Projek from './sections/Projek'
import Kontak from './sections/Kontak'
import { sectionIds } from './data/sections'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useLang } from './context/LanguageContext'

export default function App() {
  const { progress, active, lockActive } = useScrollSpy(sectionIds)
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

  // Smooth-scroll ke section dengan offset = tinggi navbar aktual.
  // Diukur dinamis setiap klik supaya tetap akurat meski tinggi navbar
  // berubah (mis. responsif / ganti bahasa), dan tidak bergantung pada
  // offset CSS statis yang bisa berbeda dari tinggi navbar sebenarnya.
  const jump = useCallback((id) => {
    lockActive(id)
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // Section pertama (home): scroll ke paling atas viewport.
    if (id === sectionIds[0]) {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      return
    }

    const navH = document.getElementById('site-navbar')?.offsetHeight ?? 0
    const top =
      el.getBoundingClientRect().top + window.scrollY - navH

    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
  }, [lockActive])

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
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={100}>
          <Keahlian />
        </Reveal>
        <Reveal delay={100}>
          <Sertifikat />
        </Reveal>
        <Reveal delay={100}>
          <Projek />
        </Reveal>
        <Reveal delay={100}>
          <Kontak />
        </Reveal>
      </main>

      <Footer onJump={jump} />
    </>
  )
}
