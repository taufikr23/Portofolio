// src/sections/Sertifikat.jsx — "Modul 02: Sertifikat & Pencapaian"
import { useEffect, useMemo, useRef, useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import Modal from '../components/ui/Modal'
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
    <section id="sertifikat" className="scroll-mt-20 bg-surface-alt px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          module="02"
          title={tr({ id: 'Sertifikat & Pencapaian', en: 'Certificates & Achievements' })}
          kicker={t('kicker.sertifikat')}
        />

        {/* Filter kategori */}
        <div className="mb-8 flex flex-wrap gap-2">
          {certificateCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={[
                'rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all',
                filter === cat.key
                  ? 'bg-amber text-ink shadow-card'
                  : 'border border-ink/15 text-surface-fg/70 hover:border-amber hover:text-clay',
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
                className="group w-[calc(100%-0.5rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-ink/10 bg-[color:var(--bg)] text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-amber sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                {/* thumbnail — aspect ratio konsisten */}
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={tr(c.title)}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <CertPlaceholder />
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 font-mono text-[10px] text-clay shadow-card">
                    {categoryLabel(c.category)}
                  </span>
                  {/* overlay zoom */}
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 font-mono text-xs font-medium text-ink">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                      </svg>
                      {t('cert.zoom')}
                    </span>
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-display text-base font-semibold leading-snug text-surface-fg">
                    {tr(c.title)}
                  </h3>
                  <p className="mt-1 font-body text-sm text-sage">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-surface-fg/50">
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
                className="absolute -left-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-cream text-clay shadow-card transition hover:border-amber hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-amber sm:-left-5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={t('cert.next')}
                onClick={() => scrollByPage(1)}
                className="absolute -right-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-cream text-clay shadow-card transition hover:border-amber hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-amber sm:-right-5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center font-body text-surface-fg/60">
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
          <div>
            <div className="aspect-[4/3] w-full bg-paper">
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
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <h3 className="font-display text-lg font-semibold text-surface-fg">
                  {tr(active.title)}
                </h3>
                <p className="font-body text-sm text-sage">
                  {active.issuer} · <span className="font-mono">{tr(active.date)}</span>
                </p>
              </div>
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink/15 px-3 py-2 font-body text-sm font-medium text-clay transition hover:border-amber"
                >
                  {t('cert.verify')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

function CertPlaceholder({ large = false }) {
  const { t } = useLang()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-paper to-sage/15">
      <svg width={large ? 56 : 40} height={large ? 56 : 40} viewBox="0 0 24 24" fill="none" stroke="#6B7A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
      </svg>
      <span className="font-mono text-[10px] text-sage/70">{t('cert.photoPlaceholder')}</span>
    </div>
  )
}
