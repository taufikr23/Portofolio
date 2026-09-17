import { motion } from 'framer-motion'
import { sections } from '../data/sections'
import { useLang } from '../context/LanguageContext'

export default function ProgressRail({ progress, active, onJump }) {
  const { t, tr } = useLang()

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-6 md:right-8 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <div className="relative flex flex-col items-center">
        {/* Futuristic Rail Container */}
        <div className="relative h-64 w-1 rounded-full bg-[#332C26] overflow-hidden">
          {/* Active Fill */}
          <motion.div
            className="absolute left-0 top-0 w-full rounded-full bg-[#C9A15A] shadow-glow"
            style={{ height: `${progress * 100}%` }}
            layout
          />
        </div>

        {/* Nodes */}
        <div className="absolute inset-y-0 flex flex-col justify-between items-center w-6 left-1/2 -translate-x-1/2 pointer-events-none">
          {sections.map((s, i) => {
            const isActive = active === s.id
            const isPast = progress * 100 >= (i / (sections.length - 1)) * 100
            
            return (
              <button
                key={s.id}
                onClick={() => onJump?.(s.id)}
                aria-label={tr(s.nav)}
                className="pointer-events-auto group relative w-6 h-6 flex items-center justify-center focus:outline-none"
              >
                {/* Node Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-3 w-3 bg-[#C9A15A] shadow-[0_0_15px_rgba(201,161,90,0.8)]'
                      : isPast
                        ? 'h-2 w-2 bg-[#C9A15A]/60'
                        : 'h-2 w-2 bg-[#332C26] group-hover:bg-[#A69B8D]'
                  }`}
                />
                
                {/* Tooltip Label */}
                <span
                  className={`absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#211C18] font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 pointer-events-none ${
                    isActive
                      ? 'opacity-100 text-[#EDE6DC] border border-[#C9A15A]/50 translate-x-0'
                      : 'opacity-0 text-[#A69B8D] group-hover:opacity-100 translate-x-2'
                  }`}
                >
                  {tr(s.nav)}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

