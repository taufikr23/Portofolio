import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from './ui/Badge'
import Modal from './ui/Modal'
import DoorLightbox from './ui/DoorLightbox'
import { projects } from '../data/projects'
import { useLang } from '../context/LanguageContext'

const defaultItems = projects

export default function ProjectCarousel({ items = defaultItems }) {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const [detail, setDetail] = useState(null)
  const total = items.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const relativePos = (index) => {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div className="w-full">
      <div className="relative mx-auto flex h-[40rem] max-w-6xl items-center justify-center overflow-visible perspective-1000">
        <AnimatePresence initial={false}>
          {items.map((p, index) => {
            const pos = relativePos(index)
            const isCenter = pos === 0
            const isVisible = pos >= -2 && pos <= 2
            
            if (!isVisible) return null

            let x = 0
            let z = 0
            let rotateY = 0
            let scale = 1
            let opacity = 1
            let filter = 'blur(0px)'

            if (pos === -1) { x = -280; z = -100; rotateY = 15; scale = 0.85; opacity = 0.6; filter = 'blur(2px)' }
            else if (pos === 1) { x = 280; z = -100; rotateY = -15; scale = 0.85; opacity = 0.6; filter = 'blur(2px)' }
            else if (pos === -2) { x = -500; z = -250; rotateY = 25; scale = 0.7; opacity = 0.3; filter = 'blur(4px)' }
            else if (pos === 2) { x = 500; z = -250; rotateY = -25; scale = 0.7; opacity = 0.3; filter = 'blur(4px)' }

            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  x, 
                  z, 
                  rotateY, 
                  scale, 
                  opacity, 
                  filter,
                  zIndex: isCenter ? 30 : 30 - Math.abs(pos) * 10
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => (isCenter ? setDetail(p) : setActive(index))}
                className={`absolute w-full max-w-sm lg:max-w-md h-[34rem] rounded-3xl preserve-3d glass-panel border ${
                  isCenter 
                    ? 'cursor-pointer border-[#4f46e5]/50 shadow-[0_0_40px_rgba(79,70,229,0.3)]' 
                    : 'cursor-pointer border-white/5'
                }`}
              >
                <ProjectCard project={p} interactive={isCenter} />
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-8">
        <ArrowButton direction="left" onClick={prev} label={t('project.prev')} />

        <div className="flex items-center gap-3">
          {items.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setActive(index)}
              aria-label={`${t('project.goTo')} ${p.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? 'w-10 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] shadow-[0_0_10px_rgba(79,70,229,0.5)]' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <ArrowButton direction="right" onClick={next} label={t('project.next')} />
      </div>

      <Modal open={!!detail} onClose={() => setDetail(null)} label={detail?.title} wide fit>
        {detail && <ProjectDetail project={detail} interactive={true} />}
      </Modal>
    </div>
  )
}

function ProjectDetail({ project, interactive }) {
  const { t, tr } = useLang()
  const { title, tagline, image, description, stack, features, liveUrl, githubUrl } = project

  return (
    <DoorLightbox>
      {/* Gambar di kiri — utuh, deskripsi di kanan — semua muat tanpa scroll */}
      <div className="bg-[#0B1020]">
      <div className="md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="flex items-center justify-center bg-[#111827]">
          {image ? (
            <img src={image} alt={`Screenshot ${title}`} className="w-full h-auto max-h-[48vh] object-contain" />
          ) : (
            <ProjectPlaceholder title={title} />
          )}
        </div>

        <div className="p-5 sm:p-6">
          {tagline && <span className="font-mono text-[10px] font-bold text-[#8b5cf6] uppercase tracking-wider">{tr(tagline)}</span>}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5 mb-2">{title}</h3>
          <p className="font-body text-[13px] leading-snug text-slate-400 line-clamp-6">
            {tr(description)}
          </p>
        </div>
      </div>

      {/* Fitur + stack + link — rapat di bawah */}
      <div className="px-5 sm:px-6 pt-4 pb-5 border-t border-white/10">
        {features?.length > 0 && (
          <div className="mb-4">
            <h4 className="font-display text-sm font-bold text-white mb-2.5 flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Key Features
            </h4>
            <ul className="grid gap-2 sm:grid-cols-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-xs font-medium text-slate-400 glass-panel px-3 py-2 rounded-lg border border-white/5">
                  <svg className="mt-0.5 shrink-0 text-[#4f46e5]" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {tr(f)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <h4 className="font-display text-sm font-bold text-white mb-2.5 flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span key={s} className="px-2 py-1 rounded-md bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-xs font-medium text-[#c7d2fe]">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <CardLink href={liveUrl} primary interactive={interactive} disabledLabel={t('project.demoSoon')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
            {t('project.liveDemo')}
          </CardLink>
          <CardLink href={githubUrl} interactive={interactive} disabledLabel={t('project.repoPrivate')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
            </svg>
            {t('project.github')}
          </CardLink>
        </div>
      </div>
      </div>
    </DoorLightbox>
  )
}

function ProjectCard({ project, interactive }) {
  const { t, tr } = useLang()
  const { title, tagline, image, description, stack, liveUrl, githubUrl } = project

  return (
    <div className="group flex h-full flex-col overflow-hidden relative">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#111827]">
        {image ? (
          <img
            src={image}
            alt={`Screenshot ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <ProjectPlaceholder title={title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-90" />
        
        {interactive && (
          <div className="absolute inset-0 bg-[#070B17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0 }} 
              whileHover={{ scale: 1.1 }}
              animate={{ scale: 1 }} 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] flex items-center gap-2 text-white shadow-glow font-bold text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
              </svg>
              View Details
            </motion.div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8 relative z-10 bg-gradient-to-b from-[#111827]/80 to-[#111827]">
        <div className="flex flex-col gap-1 mb-3">
          {tagline && <span className="font-mono text-[10px] font-bold text-[#8b5cf6] uppercase tracking-wider">{tr(tagline)}</span>}
          <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        </div>

        <p className="font-body text-sm leading-relaxed text-slate-400 line-clamp-3 mb-6">
          {tr(description)}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.slice(0, 3).map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                {s}
              </span>
            ))}
            {stack.length > 3 && (
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-500">
                +{stack.length - 3}
              </span>
            )}
          </div>

          <div
            className="flex flex-wrap gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <CardLink href={liveUrl} primary interactive={interactive} disabledLabel={t('project.demoSoon')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              Demo
            </CardLink>
            <CardLink href={githubUrl} interactive={interactive} disabledLabel={t('project.repoPrivate')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
              </svg>
              Code
            </CardLink>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardLink({ href, primary, interactive, disabledLabel, children }) {
  const tabIndex = interactive ? 0 : -1

  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 font-body text-sm font-semibold text-slate-500">
        {children}
        <span className="font-mono text-[10px]">A {disabledLabel}</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      tabIndex={tabIndex}
      className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-body text-sm font-bold transition-all hover:scale-105 ${
        primary
          ? 'bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white shadow-glow'
          : 'glass-panel text-white hover:bg-white/10'
      }`}
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
      className="group flex h-14 w-14 items-center justify-center rounded-full glass-panel border border-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-[#4f46e5] hover:bg-white/5 hover:text-[#4f46e5] hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] z-50 focus:outline-none"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isLeft ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  )
}

function ProjectPlaceholder({ title }) {
  const { t } = useLang()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#111827] to-[#4f46e5]/20">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#4f46e5] opacity-50" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
      <div className="text-center opacity-50">
        <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">{t('project.screenshotPlaceholder') || `Screenshot`}</span>
      </div>
    </div>
  )
}
