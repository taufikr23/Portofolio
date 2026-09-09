// src/sections/Sertifikat.jsx — "Modul 03: Sertifikat & Pencapaian"
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/ui/Modal'
import DoorLightbox from '../components/ui/DoorLightbox'
import { certificates, certificateCategories } from '../data/certificates'
import { useLang } from '../context/LanguageContext'

export default function Sertifikat() {
  const { t, tr } = useLang()
  const [filter, setFilter] = useState('Semua') // simpan `key` kategori (stabil)
  const [active, setActive] = useState(null) // sertifikat yang dibuka di lightbox
  const trackRef = useRef(null)

  const visible = useMemo(
    () =>
      filter === 'Semua'
        ? certificates
        : certificates.filter((c) => c.category === filter),
    [filter],
  )

  // Peta key kategori → label bilingual untuk badge di kartu.
  const categoryLabel = (key) =>
    tr(certificateCategories.find((x) => x.key === key)?.label) ?? key

  // Geser satu "halaman" (selebar viewport). Bila sudah mentok, balik ke ujung lain.
  const scrollByPage = (dir) => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * dir
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    const atStart = el.scrollLeft <= 4
    if (dir > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (dir < 0 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  // Reset ke awal saat ganti filter.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
  }, [filter])

  return (
    <section
      id="sertifikat"
      className="relative overflow-hidden px-5 py-32 bg-[#070B17]"
    >
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#4f46e5]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#8b5cf6]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[#8b5cf6]">
            {tr({ id: '03. Sertifikat & Pencapaian', en: '03. Certificates & Achievements' })}
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            {tr({ id: 'Rekam Jejak & Pencapaian', en: 'Credentials & Milestones' })}
          </h2>
          <p className="max-w-2xl font-body text-lg text-slate-400">
            {t('kicker.sertifikat')}
          </p>
        </motion.div>

        {/* Filter kategori */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {certificateCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={[
                'rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all duration-300',
                filter === cat.key
                  ? 'bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white shadow-glow'
                  : 'glass-panel text-slate-300 hover:bg-white/10 hover:text-white',
              ].join(' ')}
            >
              {tr(cat.label)}
            </button>
          ))}
        </div>

        {/* Carousel: 3 kartu per tampilan (desktop), navigasi kiri/kanan manual */}
        <div className="relative">
          {/* Track scroll horizontal dengan snap */}
          <div
            ref={trackRef}
            className="cert-track flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {visible.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c)}
                className="group w-[calc(100%-0.5rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 glass-panel text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#4f46e5]/50 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                {/* thumbnail — aspect ratio konsisten */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111827]">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={tr(c.title)}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  ) : (
                    <CertPlaceholder />
                  )}
                  <span className="absolute right-3 top-3 rounded-full glass-panel px-2.5 py-1 font-mono text-[10px] font-semibold text-[#a5b4fc] backdrop-blur-sm">
                    {categoryLabel(c.category)}
                  </span>
                  {/* overlay zoom */}
                  <span className="absolute inset-0 flex items-center justify-center bg-[#070B17]/0 opacity-0 transition-all duration-300 group-hover:bg-[#070B17]/50 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] px-4 py-2 font-mono text-xs font-semibold text-white shadow-glow">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                      </svg>
                      {t('cert.zoom')}
                    </span>
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-white">
                    {tr(c.title)}
                  </h3>
                  <p className="mt-1 font-body text-sm font-medium text-[#8b5cf6]">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs font-medium text-slate-500">
                    {tr(c.date)}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Tombol navigasi kiri / kanan */}
          {visible.length > 3 && (
            <>
              <button
                type="button"
                aria-label={t('cert.prev')}
                onClick={() => scrollByPage(-1)}
                className="absolute -left-3 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 glass-panel text-white transition-all duration-300 hover:scale-110 hover:border-[#4f46e5] hover:text-[#4f46e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] sm:-left-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={t('cert.next')}
                onClick={() => scrollByPage(1)}
                className="absolute -right-3 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 glass-panel text-white transition-all duration-300 hover:scale-110 hover:border-[#4f46e5] hover:text-[#4f46e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] sm:-right-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center font-body text-slate-400">
            {t('cert.empty')}
          </p>
        )}
      </div>

      {/* Lightbox */}
      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        label={active ? tr(active.title) : undefined}
      >
        {active && (
          <DoorLightbox>
            <div className="bg-[#0B1020]">
            <div className="h-[min(60vh,440px)] w-full bg-[#111827]">
              {active.image ? (
                <img
                  src={active.image}
                  alt={tr(active.title)}
                  className="h-full w-full object-contain"
                />
              ) : (
                <CertPlaceholder large />
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {tr(active.title)}
                </h3>
                <p className="font-body text-sm font-medium text-[#8b5cf6]">
                  {active.issuer} · <span className="font-mono">{tr(active.date)}</span>
                </p>
              </div>
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 font-body text-sm font-semibold text-[#a5b4fc] transition hover:border-[#4f46e5] hover:bg-[#4f46e5]/10"
                >
                  {t('cert.verify')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          </DoorLightbox>
        )}
      </Modal>
    </section>
  )
}

function CertPlaceholder({ large = false }) {
  const { t } = useLang()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#111827] to-[#4f46e5]/20">
      <svg width={large ? 56 : 40} height={large ? 56 : 40} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#4f46e5] opacity-60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
      </svg>
      <span className="font-mono text-[10px] text-slate-500">{t('cert.photoPlaceholder')}</span>
    </div>
  )
}
