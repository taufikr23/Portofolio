// src/components/ui/Modal.jsx
// Lightbox untuk zoom foto sertifikat & detail projek.
// State buka/tutup dikelola parent (useState) — komponen ini render bila `open`.

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, onClose, children, label = 'Detail', wide = false, fit = false }) {
  const closeRef = useRef(null)
  const contentRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    // kunci scroll body saat modal terbuka
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // fokus tombol close untuk aksesibilitas
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  // Mode `fit`: ukur konten & perkecil (transform scale) sampai seluruh popup
  // muat di viewport — tidak ada scrollbar, semua info tetap terlihat.
  useLayoutEffect(() => {
    if (!open) return
    const measure = () => {
      const el = contentRef.current
      if (!el) return
      // ukur tinggi alami konten pada lebar sekarang (reset scale dulu)
      el.style.transform = 'none'
      const needed = el.scrollHeight
      // ruang vertikal viewport dikurangi padding wrapper modal
      const pad = window.innerWidth < 640 ? 32 : 64
      const avail = window.innerHeight - pad
      setScale(needed > avail ? Math.max(0.4, avail / needed) : 1)
    }
    measure()
    window.addEventListener('resize', measure)
    // ukur ulang setelah gambar selesai dimuat (tinggi konten berubah)
    const t = setTimeout(measure, 300)
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(t)
    }
  }, [open, children])

  if (!open) return null

  // Portal ke body: kalau modal dirender di dalam subtree yang punya transform/filter
  // (mis. kartu carousel yang dianimasikan Framer Motion), `position: fixed` jadi relatif
  // terhadap ancestor itu — modal bisa kepotong & konten bawah tak terjangkau.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-[#070B17]/80 backdrop-blur-md animate-[fadeIn_0.2s_ease]" />

      {/* konten — stopPropagation supaya klik di dalam tidak menutup */}
      <div
        className={`relative z-10 max-h-full w-full ${wide ? 'max-w-5xl' : 'max-w-3xl'} ${
          fit ? 'overflow-visible' : 'overflow-auto'
        } rounded-2xl border border-white/10 bg-[#0B1020] shadow-[0_0_60px_rgba(79,70,229,0.25)]`}
        onClick={(e) => e.stopPropagation()}
        ref={fit ? contentRef : undefined}
        style={
          fit
            ? {
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out',
                maxHeight: 'none',
              }
            : undefined
        }
      >
        <div className="sticky top-0 z-20 flex justify-end p-3">
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-card backdrop-blur-md transition hover:bg-[#4f46e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]"
          >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
          </button>
        </div>
        {children}
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </div>,
    document.body
  )
}
