import SectionLabel from '../components/SectionLabel'
import Card from '../components/ui/Card'
import { skillGroups } from '../data/skills'
import { useLang } from '../context/LanguageContext'

export default function Keahlian() {
  const { t, tr } = useLang()
  
  return (
    <section id="keahlian" className="px-5 py-20 bg-surface-alt">
      <div className="mx-auto max-w-6xl overflow-hidden">
        <SectionLabel
          module="02"
          title={tr({ id: 'Keahlian & Teknologi', en: 'Skills & Technologies' })}
        />

        <div className="flex flex-col gap-6">
          {skillGroups.map((g, index) => {
            // Baris ganjil gerak ke kiri, genap gerak ke kanan
            const isEven = index % 2 === 0
            const animationClass = isEven ? 'animate-[marquee-left_35s_linear_infinite]' : 'animate-[marquee-right_35s_linear_infinite]'

            return (
              <Card key={g.tone + tr(g.category)} className="overflow-hidden p-0 py-6 border-none bg-surface">
                <div className="mb-5 px-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sage">
                    {tr(g.category)}
                  </p>
                </div>
                
                {/* Kontainer Marquee yang menyembunyikan overflow horizontal */}
                <div className="relative flex w-full overflow-hidden">
                  {/* Gradien fade untuk menutupi potongan ujung */}
                  <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

                  {/* Track Animasi yang berisi elemen ganda (supaya mulus loop) */}
                  <div className={`flex w-max items-center gap-4 px-4 hover:[animation-play-state:paused] ${animationClass}`}>
                    {/* Render daftar elemen beberapa kali untuk infinite scroll */}
                    {[...g.items, ...g.items, ...g.items, ...g.items].map((it, i) => {
                      const Icon = it.icon
                      if (!Icon) return null
                      return (
                        <div 
                          key={i} 
                          title={it.name}
                          className="group flex h-14 shrink-0 items-center gap-3 rounded-2xl border border-ink/10 bg-surface px-5 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:bg-surface-alt hover:shadow-card"
                          style={{ '--brand-color': it.color, '--brand-dark-color': it.darkColor || it.color }}
                        >
                          <div className="flex items-center justify-center text-[color:var(--brand-color)] dark:text-[color:var(--brand-dark-color)]">
                             <Icon size={24} />
                          </div>
                          <span className="font-body text-sm font-bold text-surface-fg">
                            {it.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
