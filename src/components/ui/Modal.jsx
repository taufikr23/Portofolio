// src/components/ui/Modal.jsx
// Lightbox sederhana untuk zoom foto sertifikat.
// State buka/tutup dikelola parent (useState) — komponen ini render bila `open`.

import { useEffect, useRef } from 'react'

export default function Modal({ open, onClose, children, label = 'Detail' }) {
  const closeRef = useRef(null)

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

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

      {/* konten — stopPropagation supaya klik di dalam tidak menutup */}
      <div
        className="relative z-10 max-h-full w-full max-w-4xl overflow-auto rounded-2xl bg-surface-alt shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ink shadow-card transition hover:bg-clay hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
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
        {children}
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </div>
  )
}
