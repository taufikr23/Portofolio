// src/components/ProjectCarousel.jsx
// Carousel proyek dengan efek 3D: kartu tengah normal, kartu kiri/kanan
// mengecil + blur + mundur ke belakang. Reusable — terima `items` (default
// dari data proyek + 1 dummy). State `active` menentukan kartu tengah.

import { useState } from 'react'
import Badge from './ui/Badge'
import Modal from './ui/Modal'
import { projects } from '../data/projects'
import { useLang } from '../context/LanguageContext'

// Semua kartu carousel berasal dari data proyek asli.
const defaultItems = projects

// Style per posisi relatif terhadap kartu tengah (2 kiri + 1 tengah + 2 kanan).
// Tetangga luar (±2) lebih kecil, lebih pudar, lebih blur, dan di belakang.
const POSITION_STYLES = {
  0: { transform: 'translateX(0) scale(1)', opacity: 1, filter: 'blur(0px)', zIndex: 30 },
  '-1': { transform: 'translateX(-230px) scale(0.85)', opacity: 0.7, filter: 'blur(1.5px)', zIndex: 20 },
  1: { transform: 'translateX(230px) scale(0.85)', opacity: 0.7, filter: 'blur(1.5px)', zIndex: 20 },
  '-2': { transform: 'translateX(-420px) scale(0.7)', opacity: 0.4, filter: 'blur(3px)', zIndex: 10 },
  2: { transform: 'translateX(420px) scale(0.7)', opacity: 0.4, filter: 'blur(3px)', zIndex: 10 },
}

// Kartu di luar 5 posisi terlihat: sembunyikan di belakang tengah.
const HIDDEN_STYLE = { transform: 'translateX(0) scale(0.6)', opacity: 0, filter: 'blur(4px)', zIndex: 0 }

export default function ProjectCarousel({ items = defaultItems }) {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const [detail, setDetail] = useState(null) // proyek yang dibuka di lightbox
  const total = items.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  // Posisi relatif tiap kartu terhadap kartu aktif: 0 = tengah,
  // -1/-2 = kiri, +1/+2 = kanan (dinormalisasi melingkar).
  const relativePos = (index) => {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div className="w-full">
      {/* Panggung carousel — overflow-hidden agar kartu samping (±420px) tidak
          menjulur keluar viewport dan memicu scroll horizontal di HP. */}
      <div className="relative mx-auto flex h-[34rem] max-w-5xl items-center justify-center overflow-hidden [perspective:1200px]">
        {items.map((p, index) => {
          const pos = relativePos(index)
          const isCenter = pos === 0

          // Style per posisi — transisi halus lewat CSS transition duration-500.
          // 0 = tengah, ±1 = tetangga dalam, ±2 = tetangga luar (lebih kecil,
          // lebih pudar, lebih blur). Selebihnya disembunyikan.
          const style = POSITION_STYLES[pos] ?? HIDDEN_STYLE
          const isVisible = pos >= -2 && pos <= 2

          return (
            <article
              key={p.id}
              aria-hidden={!isCenter}
              onClick={() => (isCenter ? setDetail(p) : isVisible && setActive(index))}
              style={style}
              className={[
                'absolute h-[30rem] w-96 select-none rounded-2xl border bg-surface-alt shadow-card transition-all duration-500 ease-out',
                isCenter
                  ? 'cursor-pointer border-amber/40 hover:-translate-y-2 hover:shadow-card-hover'
                  : isVisible
                    ? 'cursor-pointer border-ink/10'
                    : 'pointer-events-none border-ink/10',
              ].join(' ')}
            >
              <ProjectCard project={p} interactive={isCenter} />
            </article>
          )
        })}
      </div>

      {/* Kontrol */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <ArrowButton direction="left" onClick={prev} label={t('project.prev')} />

        {/* Indikator dot */}
        <div className="flex items-center gap-2">
          {items.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setActive(index)}
              aria-label={`${t('project.goTo')} ${p.title}`}
              aria-current={index === active}
              className={[
                'h-2 rounded-full transition-all duration-300',
                index === active ? 'w-6 bg-amber' : 'w-2 bg-ink/20 hover:bg-ink/40',
              ].join(' ')}
            />
          ))}
        </div>

        <ArrowButton direction="right" onClick={next} label={t('project.next')} />
      </div>

      {/* Lightbox detail proyek */}
      <Modal open={!!detail} onClose={() => setDetail(null)} label={detail?.title}>
        {detail && <ProjectDetail project={detail} />}
      </Modal>
    </div>
  )
}

// Isi lightbox — foto besar + deskripsi lengkap + fitur + stack + tombol.
function ProjectDetail({ project }) {
  const { t, tr } = useLang()
  const { title, tagline, image, description, stack, features, liveUrl, githubUrl } = project

  return (
    <div>
      <div className="aspect-[16/9] w-full bg-paper">
        {image ? (
          <img src={image} alt={`Screenshot ${title}`} className="h-full w-full object-contain" />
        ) : (
          <ProjectPlaceholder title={title} />
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-surface-fg">{title}</h3>
          {tagline && <span className="font-mono text-xs text-sage">{tr(tagline)}</span>}
        </div>

        <p className="mt-3 font-body text-sm leading-relaxed text-surface-fg/80">
          {tr(description)}
        </p>

        {features?.length > 0 && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-sm text-surface-fg/75">
                <svg className="mt-0.5 shrink-0 text-amber" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {tr(f)}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <Badge key={s} tone="amber">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <CardLink href={liveUrl} primary interactive disabledLabel={t('project.demoSoon')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            {t('project.liveDemo')}
          </CardLink>
          <CardLink href={githubUrl} interactive disabledLabel={t('project.repoPrivate')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
            </svg>
            {t('project.github')}
          </CardLink>
        </div>
      </div>
    </div>
  )
}

// Isi kartu — dipakai oleh setiap slide.
function ProjectCard({ project, interactive }) {
  const { t, tr } = useLang()
  const { title, tagline, image, description, stack, liveUrl, githubUrl } = project

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl">
      {/* Screenshot proyek (placeholder bertema bila belum ada) */}
      <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-paper">
        {image ? (
          <img
            src={image}
            alt={`Screenshot ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProjectPlaceholder title={title} />
        )}
        {/* overlay petunjuk perbesar — hanya untuk kartu tengah */}
        {interactive && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 font-mono text-xs font-medium text-ink">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
              </svg>
              {t('project.zoom')}
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-surface-fg">{title}</h3>
          {tagline && <span className="font-mono text-[10px] text-sage">{tr(tagline)}</span>}
        </div>

        <p className="mt-2 font-body text-sm leading-relaxed text-surface-fg/75 line-clamp-3">
          {tr(description)}
        </p>

        {/* Stack teknologi */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <Badge key={s} tone="amber">
              {s}
            </Badge>
          ))}
        </div>

        {/* Tombol — hanya interaktif untuk kartu tengah. stopPropagation agar
            klik tombol tidak ikut membuka lightbox. */}
        <div
          className="mt-auto flex flex-wrap gap-2 pt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <CardLink href={liveUrl} primary interactive={interactive} disabledLabel={t('project.demoSoon')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            {t('project.liveDemo')}
          </CardLink>
          <CardLink href={githubUrl} interactive={interactive} disabledLabel={t('project.repoPrivate')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
            </svg>
            {t('project.github')}
          </CardLink>
        </div>
      </div>
    </div>
  )
}

function CardLink({ href, primary, interactive, disabledLabel, children }) {
  // Kartu samping tidak boleh menerima fokus/klik link.
  const tabIndex = interactive ? 0 : -1

  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-dashed border-ink/20 px-3.5 py-2 font-body text-sm font-medium text-surface-fg/40">
        {children}
        <span className="font-mono text-[10px]">· {disabledLabel}</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      tabIndex={tabIndex}
      className={[
        'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-body text-sm font-medium transition-all hover:-translate-y-0.5',
        primary
          ? 'bg-amber text-ink hover:bg-clay hover:text-cream'
          : 'border border-ink/20 text-surface-fg hover:border-amber hover:text-clay',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

function ArrowButton({ direction, onClick, label }) {
  const isLeft = direction === 'left'
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-surface-alt text-surface-fg shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-amber hover:text-clay hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {isLeft ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  )
}

// Placeholder bertema saat screenshot proyek belum tersedia.
function ProjectPlaceholder({ title }) {
  const { t } = useLang()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-paper via-amber/10 to-clay/10">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C15F3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
      <span className="font-mono text-[11px] text-clay/70">{t('project.screenshot')} {title}</span>
    </div>
  )
}
