// src/hooks/useScrollSpy.js
// Melacak posisi scroll: progress keseluruhan (0..1) + section aktif.
// Dipakai ProgressRail (elemen signature) & Navbar.
//
// Catatan penting: posisi batas section diukur dengan offsetTop (posisi
// layout), bukan getBoundingClientRect — jadi tidak terpengaruh transform
// animasi Reveal yang sedang berjalan. Lock aktif dilepas saat smooth-scroll
// selesai (atau saat user scroll manual), sehingga spy langsung akurat lagi
// setelah klik navigasi.

import { useEffect, useRef, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(sectionIds[0])
  const lockRef = useRef(null)
  const lockTimerRef = useRef(null)

  // Fungsi untuk lock sementara — dipanggil dari jump()
  const lockActive = (id) => {
    setActive(id)
    lockRef.current = id
    clearTimeout(lockTimerRef.current)
    // Fallback: kalau event scroll tidak sampai (mis. sudah di posisi target),
    // jangan biarkan lock nyangkut selamanya.
    lockTimerRef.current = setTimeout(() => {
      lockRef.current = null
    }, 2000)
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)

      const atTop = scrollTop <= 5
      const atBottom = docHeight > 0 && scrollTop >= docHeight - 2

      // Bila lock aktif (usai klik nav), tahan nilai aktif selama smooth-scroll
      // masih bergerak; lepas begitu scroll berhenti (atau mentok ujung atas/
      // bawah) supaya spy langsung akurat kembali.
      if (lockRef.current) {
        if (atTop || atBottom) {
          lockRef.current = null
          clearTimeout(lockTimerRef.current)
        } else {
          return
        }
      }

      // Edge: paling atas → langsung home
      if (atTop) {
        setActive(sectionIds[0])
        return
      }

      // Edge: paling bawah → section terakhir
      if (atBottom) {
        setActive(sectionIds[sectionIds.length - 1])
        return
      }

      // section aktif = yang batas atasnya terdekat di atas tengah viewport.
      // Bandingkan scrollTop dengan offsetTop layout (tahan transform).
      const mid = scrollTop + window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        // offsetTop 0 hanya masuk akal untuk section pertama; selain itu
        // berarti pengukuran kena transform → abaikan biar spy tidak ngaco.
        if (el.offsetTop === 0 && id !== sectionIds[0]) continue
        if (el.offsetTop <= mid) current = id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      clearTimeout(lockTimerRef.current)
    }
  }, [sectionIds])

  return { progress, active, lockActive }
}
