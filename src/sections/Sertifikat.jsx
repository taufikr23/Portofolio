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
      className="relative overflow-hidden px-5 py-32 bg-[#161311]"
    >
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C9A15A]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[#C9A15A]">
            {tr({ id: '03. Sertifikat & Pencapaian', en: '03. Certificates & Achievements' })}
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-[#EDE6DC] md:text-5xl">
            {tr({ id: 'Rekam Jejak & Pencapaian', en: 'Credentials & Milestones' })}
          </h2>
          <p className="max-w-2xl font-body text-lg text-[#A69B8D]">
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
                  ? 'bg-[#C9A15A] text-[#161311] shadow-glow'
                  : 'bg-[#211C18] border border-[#332C26] text-[#A69B8D] hover:bg-[#2A2420] hover:text-[#EDE6DC]',
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
                className="group w-[calc(100%-0.5rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#332C26] bg-[#211C18] text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A15A]/50 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15A] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                {/* thumbnail — aspect ratio konsisten */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#211C18]">
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
                  <span className="absolute right-3 top-3 rounded-full bg-[#211C18]/90 border border-[#332C26] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#C9A15A] backdrop-blur-sm">
                    {categoryLabel(c.category)}
                  </span>
                  {/* overlay zoom */}
                  <span className="absolute inset-0 flex items-center justify-center bg-[#161311]/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#C9A15A] px-4 py-2 font-mono text-xs font-semibold text-[#161311] shadow-glow">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                      </svg>
                      {t('cert.zoom')}
                    </span>
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-[#EDE6DC]">
                    {tr(c.title)}
                  </h3>
                  <p className="mt-1 font-body text-sm font-medium text-[#C9A15A]">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs font-medium text-[#A69B8D]">
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
                className="absolute -left-3 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#332C26] bg-[#211C18] text-[#EDE6DC] transition-all duration-300 hover:scale-110 hover:border-[#C9A15A] hover:text-[#C9A15A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15A] sm:-left-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={t('cert.next')}
                onClick={() => scrollByPage(1)}
                className="absolute -right-3 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#332C26] bg-[#211C18] text-[#EDE6DC] transition-all duration-300 hover:scale-110 hover:border-[#C9A15A] hover:text-[#C9A15A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15A] sm:-right-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center font-body text-[#A69B8D]">
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
            <div className="bg-[#161311]">
            <div className="h-[min(60vh,440px)] w-full bg-[#211C18]">
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
                <h3 className="font-display text-xl font-bold text-[#EDE6DC]">
                  {tr(active.title)}
                </h3>
                <p className="font-body text-sm font-medium text-[#C9A15A]">
                  {active.issuer} · <span className="font-mono">{tr(active.date)}</span>
                </p>
              </div>
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#332C26] bg-[#211C18] px-4 py-2 font-body text-sm font-semibold text-[#EDE6DC] transition hover:border-[#C9A15A] hover:bg-[#2A2420]"
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#211C18]">
      <svg width={large ? 56 : 40} height={large ? 56 : 40} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#C9A15A] opacity-60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
      </svg>
      <span className="font-mono text-[10px] text-[#A69B8D]/70">{t('cert.photoPlaceholder')}</span>
    </div>
  )
}
