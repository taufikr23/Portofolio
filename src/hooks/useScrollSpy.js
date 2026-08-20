// src/hooks/useScrollSpy.js
// Melacak posisi scroll: progress keseluruhan (0..1) + section aktif.
// Dipakai ProgressRail (elemen signature) & Navbar.

import { useEffect, useRef, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(sectionIds[0])
  const lockRef = useRef(null)

  // Fungsi untuk lock sementara — dipanggil dari jump()
  const lockActive = (id) => {
    setActive(id)
    clearTimeout(lockRef.current)
    lockRef.current = setTimeout(() => { lockRef.current = null }, 1500)
  }

  useEffect(() => {
    const onScroll = () => {
      // Jika masih terkunci (usai jump), jangan override
      if (lockRef.current) return

      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)

      // Edge: paling atas → langsung home
      if (scrollTop <= 5) {
        setActive(sectionIds[0])
        return
      }

      // Edge: paling bawah → section terakhir
      if (docHeight > 0 && scrollTop >= docHeight - 2) {
        setActive(sectionIds[sectionIds.length - 1])
        return
      }

      // section aktif = yang batas atasnya terdekat di atas tengah viewport
      const mid = scrollTop + window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) current = id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      clearTimeout(lockRef.current)
    }
  }, [sectionIds])

  return { progress, active, lockActive }
}
