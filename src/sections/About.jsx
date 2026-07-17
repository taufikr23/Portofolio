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
    <section id="about" className="scroll-mt-20 px-5 py-20">
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
              <h3 className="font-display text-xl font-semibold text-surface-fg">
                {t('about.education')}
              </h3>
              <p className="mt-3 font-body font-medium text-clay">
                {tr(education.degree)}
              </p>
              <p className="font-body text-sm text-surface-fg/70">
                {tr(education.school)}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="rounded-lg bg-amber/10 px-3 py-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sage">
                    {t('about.gpa')}
                  </span>
                  <p className="font-display text-lg font-semibold text-surface-fg">
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
              <h3 className="font-display text-xl font-semibold text-surface-fg">
                {t('about.extraSkills')}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-sage">
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
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-surface-fg">
                {t('about.experience')}
                <span className="font-mono text-xs font-normal text-sage">
                  {t('about.teachingSchedule')}
                </span>
              </h3>

              <ol className="relative space-y-6 border-l-2 border-amber/30 pl-6">
                {experience.map((e) => (
                  <li key={e.id} className="relative">
                    {/* titik timeline */}
                    <span
                      className={[
                        'absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2',
                        e.current
                          ? 'border-clay bg-amber'
                          : 'border-sage bg-cream',
                      ].join(' ')}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="font-body font-semibold text-surface-fg">
                        {tr(e.role)}
                      </h4>
                      <span className="font-mono text-xs text-clay">
                        {e.period}
                      </span>
                    </div>
                    <p className="font-body text-sm text-sage">{tr(e.org)}</p>
                    <ul className="mt-2 space-y-1.5">
                      {e.details.map((d, i) => (
                        <li
                          key={i}
                          className="flex gap-2 font-body text-sm leading-relaxed text-surface-fg/75"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                          {tr(d)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {/* Keahlian per kategori */}
            <div>
              <h3 className="mb-5 font-display text-xl font-semibold text-surface-fg">
                {t('about.skills')}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <Card key={g.tone + tr(g.category)} className="p-5">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-sage">
                      {tr(g.category)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((it, i) => (
                        <Badge key={i} tone={g.tone}>
                          {tr(it)}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
