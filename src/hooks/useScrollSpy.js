// src/hooks/useScrollSpy.js
// Melacak posisi scroll: progress keseluruhan (0..1) + section aktif.
// Dipakai ProgressRail (elemen signature) & Navbar.

import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)

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
    }
  }, [sectionIds])

  return { progress, active }
}
