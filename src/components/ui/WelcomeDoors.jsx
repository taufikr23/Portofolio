// src/components/ui/WelcomeDoors.jsx
// Animasi pembuka: dua daun pintu menutupi seluruh layar saat web pertama
// dibuka. Pintu **tetap tertutup** sampai pengunjung mengklik / menekan Enter,
// lalu terbuka 3D ke kiri & kanan — senada dengan animasi pintu pada lightbox
// sertifikat & projek.
//
// Hanya tampil sekali per sesi tab (sessionStorage) agar refresh dalam sesi
// yang sama tidak mengulang animasi.

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DOOR_DURATION = 0.55

export default function WelcomeDoors() {
  // 'check' → 'closed' (menunggu klik) → 'opening' → selesai (unmount)
  const [phase, setPhase] = useState('check')
  const timersRef = useRef([])

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('welcome-doors') === '1'
    } catch {
      /* storage diblokir → biarkan animasi tetap tampil */
    }
    if (seen) return
    setPhase('closed')
    document.body.style.overflow = 'hidden'
    return () => {
      timersRef.current.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  const openDoors = useCallback(() => {
    setPhase((p) => {
      if (p !== 'closed') return p
      // buka kunci scroll begitu pintu mulai terbuka lebar
      timersRef.current.push(
        setTimeout(() => {
          document.body.style.overflow = ''
        }, (DOOR_DURATION + 0.25) * 1000),
      )
      // tandai sudah dilihat & unmount setelah fade
      timersRef.current.push(
        setTimeout(() => {
          try {
            sessionStorage.setItem('welcome-doors', '1')
          } catch {
            /* abaikan */
          }
          setPhase('done')
        }, (DOOR_DURATION + 0.9) * 1000),
      )
      return 'opening'
    })
  }, [])

  if (phase === 'check' || phase === 'done') return null

  const panel = (side) => ({
    initial: { rotateY: 0 },
    animate:
      phase === 'opening'
        ? {
            rotateY: side === 'left' ? -105 : 105,
            transition: { duration: DOOR_DURATION, ease: [0.7, 0, 0.3, 1] },
          }
        : { rotateY: 0 },
  })

  return (
    <motion.div
      className={`fixed inset-0 z-[300] flex items-center justify-center ${
        phase === 'closed' ? 'cursor-pointer' : 'pointer-events-none'
      }`}
      style={{ perspective: '1400px' }}
      onClick={openDoors}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') openDoors()
      }}
      role="button"
      tabIndex={phase === 'closed' ? 0 : -1}
      aria-label="Klik untuk masuk"
      exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.55 } }}
    >
      {/* Konten di balik pintu — judul yang "menunggu" dibuka */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0B1020]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <span className="font-mono text-xs tracking-[0.35em] text-[#8b5cf6] uppercase">
          Selamat Datang
        </span>
        <span className="font-display text-4xl sm:text-6xl font-bold text-white text-center px-6">
          Portofolio
        </span>
      </motion.div>

      {/* Sepasang daun pintu */}
      {['left', 'right'].map((side) => (
        <motion.div
          key={side}
          className={`absolute inset-y-0 w-1/2 z-10 flex items-center ${
            side === 'left' ? 'left-0 origin-left justify-end border-r' : 'right-0 origin-right justify-start border-l'
          } border-[#4f46e5]/30 bg-gradient-to-b from-[#141a33] via-[#0d1226] to-[#141a33] shadow-[inset_0_0_80px_rgba(0,0,0,0.55)]`}
          style={{ backfaceVisibility: 'hidden' }}
          {...panel(side)}
        >
          {/* Ornamen gagang pintu */}
          <div
            className={`h-3 w-3 rounded-full bg-[#8b5cf6] shadow-[0_0_14px_rgba(139,92,246,0.9)] ${
              side === 'left' ? 'mr-6' : 'ml-6'
            }`}
          />
        </motion.div>
      ))}

      {/* Petunjuk "klik untuk masuk" — hilang saat pintu mulai membuka */}
      <AnimatePresence>
        {phase === 'closed' && (
          <motion.div
            className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.span
              className="inline-block rounded-full border border-[#a78bfa] bg-[#0B1020]/85 px-7 py-3 font-mono text-sm font-bold tracking-[0.25em] text-white uppercase backdrop-blur-md shadow-[0_0_24px_rgba(139,92,246,0.65)]"
              animate={{
                opacity: [0.9, 1, 0.9],
                boxShadow: [
                  '0 0 16px rgba(139,92,246,0.45)',
                  '0 0 34px rgba(139,92,246,0.85)',
                  '0 0 16px rgba(139,92,246,0.45)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              Klik untuk masuk
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
