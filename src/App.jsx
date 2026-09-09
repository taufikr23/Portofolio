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
  
  // Force dark mode
  const dark = true;

  // Terapkan class .dark ke <html>
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // Smooth-scroll ke section dengan offset = tinggi navbar aktual.
  // Posisi target dihitung dari offsetTop LAYOUT (bukan getBoundingClientRect),
  // jadi tidak terpengaruh transform/animasi yang sedang berjalan — klik
  // beruntun (mis. Sertifikat → Projek) tetap mendarat di posisi yang benar.
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
    // offsetTop relatif thd offsetParent — normalnya sudah posisi halaman
    // (section diberi .anchor-safe). Validasi: hasil mustahil (≤ 0 / melebihi
    // dokumen) → fallback ke getBoundingClientRect.
    let top = el.offsetTop - navH
    if (top <= 0 || el.offsetTop > document.documentElement.scrollHeight) {
      top = el.getBoundingClientRect().top + window.scrollY - navH
    }

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
        onToggleDark={() => {}}
      />

      <ProgressRail progress={progress} active={active} onJump={jump} />

      <main className="relative z-10">
        <Home onJump={jump} />
        {/* className anchor-safe: pastikan tiap section jadi acuan scroll yang
            stabil (offsetTop akurat) walau pembungkus Reveal-nya dianimasikan. */}
        <Reveal className="anchor-safe">
          <About />
        </Reveal>
        <Reveal delay={100} className="anchor-safe">
          <Keahlian />
        </Reveal>
        <Reveal delay={100} className="anchor-safe">
          <Sertifikat />
        </Reveal>
        <Reveal delay={100} className="anchor-safe">
          <Projek />
        </Reveal>
        <Reveal delay={100} className="anchor-safe">
          <Kontak />
        </Reveal>
      </main>

      <Footer onJump={jump} />
    </>
  )
}

