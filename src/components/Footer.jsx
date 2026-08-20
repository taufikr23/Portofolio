// src/components/Footer.jsx
import { profile } from '../data/profile'
import { useLang } from '../context/LanguageContext'

export default function Footer({ onJump }) {
  const { t } = useLang()
  return (
    <footer className="border-t border-ink/10 bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <button
            onClick={() => onJump?.('home')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-display text-lg font-bold text-amber">
              T
            </span>
            <span className="font-display text-lg font-semibold text-surface-fg">
              {profile.name}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </SocialLink>
            <SocialLink href={profile.socials.github} label="GitHub">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
            </SocialLink>
            <SocialLink href={profile.socials.instagram} label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </SocialLink>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-surface-fg/50">
          © {new Date().getFullYear()} {profile.name} · {t('footer.builtWith')}
        </p>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
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
