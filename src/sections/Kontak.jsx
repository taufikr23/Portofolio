// src/sections/Kontak.jsx — "Modul 04: Mari Terhubung"
import SectionLabel from '../components/SectionLabel'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'
import { useLang } from '../context/LanguageContext'

export default function Kontak() {
  const { t, tr } = useLang()

  return (
    <section id="kontak" className="bg-surface-alt px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          title={tr({ id: 'Mari Terhubung', en: "Let's Connect" })}
          kicker={t('kicker.kontak')}
        />

        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-clay">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {tr(profile.role)}
          </span>
        </div>

        <div className="mx-auto max-w-xl space-y-4">
          <ContactRow
            href={`mailto:${profile.email}`}
            label={t('contact.label.email')}
            value={profile.email}
          >
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <path d="m22 6-10 7L2 6" />
          </ContactRow>

          <ContactRow
            href={`https://wa.me/${profile.whatsapp}`}
            label={t('contact.label.whatsapp')}
            value={profile.phone}
            external
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
          </ContactRow>

          <ContactRow label={t('contact.label.location')} value={tr(profile.location)} static>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </ContactRow>

          <Card className="bg-[color:var(--bg)]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-sage">
              {t('contact.label.social')}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <SocialButton href={profile.socials.linkedin} label="LinkedIn">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </SocialButton>
              <SocialButton href={profile.socials.github} label="GitHub">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
              </SocialButton>
              <SocialButton href={profile.socials.instagram} label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </SocialButton>
            </div>
          </Card>
        </div>

        <p className="mt-12 text-center font-display text-lg italic text-clay">
          {t('contact.quote')}
        </p>
      </div>
    </section>
  )
}

function ContactRow({ href, label, value, children, external, static: isStatic }) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-clay">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-wider text-sage">
          {label}
        </span>
        <span className="font-body text-sm font-medium text-surface-fg">
          {value}
        </span>
      </span>
    </>
  )

  const cls =
    'flex items-center gap-3 rounded-2xl border border-ink/10 bg-[color:var(--bg)] p-4 shadow-card transition-all'

  if (isStatic) return <div className={cls}>{inner}</div>
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${cls} hover:-translate-y-0.5 hover:border-amber/40`}
    >
      {inner}
    </a>
  )
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-surface-fg transition-all hover:-translate-y-0.5 hover:border-amber hover:text-clay"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  )
}
