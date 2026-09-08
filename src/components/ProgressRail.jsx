// src/components/ProgressRail.jsx
// ELEMEN SIGNATURE — "garis progres silabus" di sisi kiri layar.
// Garis vertikal tipis yang terisi (amber) sesuai posisi scroll,
// dengan titik penanda tiap modul. Klik titik → lompat ke modul.
// Disembunyikan di layar kecil (lg+) supaya tidak mengganggu.

import { sections } from '../data/sections'
import { useLang } from '../context/LanguageContext'

export default function ProgressRail({ progress, active, onJump }) {
  const { t, tr } = useLang()
  // hanya modul bernomor yang jadi penanda (Home = sampul, tanpa nomor)
  const modules = sections.filter((s) => s.module)

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative flex flex-col items-center">
        {/* label progres kecil */}
        <span className="pointer-events-none mb-3 font-mono text-[10px] tracking-widest text-sage">
          {String(Math.round(progress * 100)).padStart(2, '0')}%
        </span>

        {/* rel */}
        <div className="relative h-64 w-[3px] rounded-full bg-ink/10">
          {/* isian sesuai scroll */}
          <div
            className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-amber to-clay transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />

          {/* titik penanda modul */}
          {modules.map((s, i) => {
            const top = ((i + 1) / (modules.length + 1)) * 100
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => onJump?.(s.id)}
                aria-label={`${t('label.module')} ${s.module} — ${tr(s.nav)}`}
                className="pointer-events-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ top: `${top}%` }}
              >
                <span
                  className={[
                    'block rounded-full border-2 transition-all duration-300',
                    isActive
                      ? 'h-4 w-4 border-amber bg-amber shadow-[0_0_0_4px_rgba(var(--color-amber-rgb),0.2)]'
                      : 'h-3 w-3 border-ink/20 bg-surface-alt hover:border-amber',
                  ].join(' ')}
                />
                {/* tooltip modul saat aktif */}
                <span
                  className={[
                    'absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] font-medium tracking-wider transition-all duration-300',
                    isActive
                      ? 'text-amber opacity-100'
                      : 'text-sage opacity-0',
                  ].join(' ')}
                >
                  M{s.module}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
