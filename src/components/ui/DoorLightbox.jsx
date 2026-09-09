// src/components/ui/DoorLightbox.jsx
// Animasi "pintu": dua daun pintu menutupi konten, lalu terbuka 3D ke kiri & kanan,
// setelah itu konten (sertifikat / detail projek) tampil. Dipakai bersama oleh
// lightbox sertifikat dan popup detail projek.

import { motion } from 'framer-motion'

export default function DoorLightbox({ children }) {
  const panel = (side) => ({
    initial: { rotateY: 0 },
    animate: {
      rotateY: side === 'left' ? -105 : 105,
      transition: { duration: 0.55, ease: [0.7, 0, 0.3, 1], delay: 0.35 },
    },
    exit: { rotateY: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  })

  return (
    <div className="relative" style={{ perspective: '1200px' }}>
      {/* Konten — muncul setelah pintu terbuka */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.45, delay: 0.75, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.div>

      {/* Sepasang daun pintu menutupi layar, lalu terbuka ke samping */}
      {['left', 'right'].map((side) => (
        <motion.div
          key={side}
          className={`absolute inset-y-0 w-1/2 z-30 ${
            side === 'left' ? 'left-0 origin-left border-r' : 'right-0 origin-right border-l'
          } border-[#4f46e5]/30 bg-gradient-to-b from-[#141a33] via-[#0d1226] to-[#141a33] shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]`}
          style={{ backfaceVisibility: 'hidden' }}
          {...panel(side)}
        >
          {/* Ornamen gagang pintu */}
          <div
            className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.8)] ${
              side === 'left' ? 'right-3' : 'left-3'
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}
