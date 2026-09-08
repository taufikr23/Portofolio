// src/sections/About.jsx — "Modul 01: Profil & Latar Belakang"
import SectionLabel from '../components/SectionLabel'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'
import { education, experience } from '../data/experience'
import { skillGroups, softSkills } from '../data/skills'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t, tr } = useLang()
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          module="01"
          title={tr({ id: 'Profil & Latar Belakang', en: 'Profile & Background' })}
          kicker={tr(profile.summary)}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Kolom kiri: pendidikan + CV */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-display text-xl font-bold text-surface-fg">
                {t('about.education')}
              </h3>
              <p className="mt-3 font-body font-semibold text-amber">
                {tr(education.degree)}
              </p>
              <p className="font-body text-sm text-surface-fg/70">
                {tr(education.school)}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="rounded-xl bg-amber-alpha px-3 py-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber">
                    {t('about.gpa')}
                  </span>
                  <p className="font-display text-lg font-bold text-surface-fg">
                    {education.gpa}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.highlights.map((h, i) => (
                    <Badge key={i} tone="sage">
                      {tr(h)}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-display text-xl font-bold text-surface-fg">
                {t('about.extraSkills')}
              </h3>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-sage">
                {t('about.softSkills')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((s, i) => (
                  <Badge key={i} tone="clay">
                    {tr(s)}
                  </Badge>
                ))}
              </div>
            </Card>

            <Button variant="secondary" href={profile.cvUrl} download className="w-full">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {t('about.downloadCv')}
            </Button>
          </div>

          {/* Kolom kanan: timeline pengalaman + keahlian */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-surface-fg">
                {t('about.experience')}
              </h3>

              <ol className="relative space-y-8 border-l-2 border-ink/10 pl-6">
                {experience.map((e) => (
                  <li key={e.id} className="relative">
                    {/* titik timeline */}
                    <span
                      className={[
                        'absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2',
                        e.current
                          ? 'border-amber bg-surface'
                          : 'border-ink/20 bg-surface',
                      ].join(' ')}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="font-body font-bold text-surface-fg">
                        {tr(e.role)}
                      </h4>
                      <span className="font-mono text-xs font-medium text-amber">
                        {e.period}
                      </span>
                    </div>
                    <p className="font-body text-sm font-medium text-sage">{tr(e.org)}</p>
                    <ul className="mt-3 space-y-2">
                      {e.details.map((d, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 font-body text-sm leading-relaxed text-surface-fg/75"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/20" />
                          {tr(d)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {/* Soft Skills digabungkan di About */}
            <Card>
              <h3 className="font-display text-xl font-bold text-surface-fg">
                {t('about.extraSkills')}
              </h3>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-sage">
                {t('about.softSkills')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((s, i) => (
                  <Badge key={i} tone="clay">
                    {tr(s)}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
