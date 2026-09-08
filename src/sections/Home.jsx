// src/sections/Home.jsx — "Sampul Modul"
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { profile, techStack } from '../data/profile'
import { stats } from '../data/experience'
import { useLang } from '../context/LanguageContext'
import profilePhoto from '../assets/profile/saya.jpeg'

export default function Home({ onJump }) {
  const { t, tr } = useLang()
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:pt-32"
    >
      {/* dekorasi modern minimal di latar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-alpha blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-clay-alpha blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Kolom teks */}
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-surface-fg sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl font-medium text-amber sm:text-2xl">
            {tr(profile.role)}
          </p>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-surface-fg/75 sm:text-lg">
            {tr(profile.tagline)}
          </p>

          {/* Strip tech stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <Badge key={t} tone="ink">
                {t}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => onJump?.('projek')}>{t('home.cta.projects')}</Button>
            <Button variant="ghost" onClick={() => onJump?.('kontak')}>
              {t('home.cta.contact')}
            </Button>
          </div>

          {/* Statistik */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-ink/10 bg-surface-alt px-4 py-5 text-center shadow-card transition-transform hover:-translate-y-1"
              >
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-wider text-sage">
                  {tr(s.label)}
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-surface-fg">
                  {s.value}
                </dd>
                <dd className="mt-0.5 font-mono text-[10px] text-surface-fg/50">
                  {tr(s.unit)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Kolom foto profil dengan gaya profesional */}
        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative">
            {/* latar belakng */}
            <div className="absolute -inset-4 rounded-[2rem] bg-amber-alpha opacity-50 blur-xl" />
            {/* frame foto */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 bg-paper shadow-card-hover">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
            {/* label sudut */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink/10 bg-surface px-5 py-2 font-mono text-xs font-medium text-surface-fg shadow-card">
              📍 {tr(profile.location)}
            </span>
          </div>
        </div>
      </div>

      {/* petunjuk scroll */}
      <div className="mt-16 flex justify-center">
        <span className="flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest text-sage">
          {t('home.scroll')}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </div>
    </section>
  )
}
