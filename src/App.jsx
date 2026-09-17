import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProgressRail from './components/ProgressRail'
import WelcomeDoors from './components/ui/WelcomeDoors'
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
  // Posisi target dihitung dari getBoundingClientRect + scrollY — akurat
  // terhadap posisi dokumen sebenarnya (offsetTop bisa meleset bila
  // offsetParent elemen bukan body). Setelah scroll berhenti, posisi dicek
  // ulang dan diluruskan sekali: saat smooth-scroll jarak jauh (umum di HP)
  // melewati section yang baru animate-in, tinggi layout bisa berubah di
  // tengah jalan sehingga pendaratan pertama meleset.
  const jump = useCallback((id) => {
    lockActive(id)
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    // Offset = tinggi pill navbar SAJA (nav di dalam header), bukan seluruh
    // header — saat menu mobile terbuka, panel menu ikut menggembungkan
    // tinggi header dan membuat offset meleset ratusan px.
    const navEl = document.querySelector('#site-navbar nav')
    const navH = navEl
      ? navEl.offsetTop + navEl.offsetHeight
      : (document.getElementById('site-navbar')?.offsetHeight ?? 0)

    // Section pertama (home): scroll ke paling atas viewport.
    if (id === sectionIds[0]) {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      return
    }

    const target = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - navH,
    )
    window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' })
    if (reduce) return

    // Koreksi pendaratan: tunggu sampai scroll benar-benar diam, lalu luruskan
    // selisihnya sekali tanpa animasi. Dibatalkan bila user ikut menggulir.
    let cancelled = false
    const cancel = () => { cancelled = true }
    window.addEventListener('wheel', cancel, { passive: true, once: true })
    window.addEventListener('touchstart', cancel, { passive: true, once: true })
    const started = performance.now()
    let lastY = -1
    let stillFrames = 0
    const settle = () => {
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      if (cancelled || performance.now() - started > 3000) return
      const y = window.scrollY
      stillFrames = Math.abs(y - lastY) < 1 ? stillFrames + 1 : 0
      lastY = y
      if (stillFrames < 4) {
        requestAnimationFrame(settle)
        return
      }
      const err = el.getBoundingClientRect().top - navH
      // Koreksi selalu instant: behavior 'auto' mengikuti CSS
      // scroll-behavior: smooth dan bisa gagal jalan di beberapa environment.
      if (Math.abs(err) > 2) window.scrollBy({ top: err, behavior: 'instant' })
    }
    requestAnimationFrame(settle)
  }, [lockActive])

  return (
    <>
      {/* Animasi pintu pembuka saat web pertama kali dibuka */}
      <WelcomeDoors />

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

