import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useLang } from '../context/LanguageContext'

export default function Footer({ onJump }) {
  const { t } = useLang()
  return (
    <footer className="relative border-t border-white/10 bg-[#0B1020] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4f46e5]/10 rounded-[100%] blur-[80px] pointer-events-none -z-10 opacity-50" />

      <div className="mx-auto max-w-6xl px-5 py-12 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <button
            onClick={() => onJump?.('home')}
            className="group flex items-center gap-4 focus:outline-none transition-transform hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] to-[#8b5cf6] rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#8b5cf6] font-display text-xl font-bold text-white shadow-glow">
                T
              </span>
            </div>
            <div className="text-left">
              <span className="block font-display text-xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
                {profile.name}
              </span>
              <span className="block font-mono text-xs text-slate-400 mt-1">
                Fullstack Developer
              </span>
            </div>
          </button>

          <div className="flex flex-col sm:items-end gap-6">
            <div className="flex flex-wrap items-center gap-4">
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
            
            <p className="font-mono text-xs font-medium text-slate-500">
              © {new Date().getFullYear()} {profile.name}. {t('footer.builtWith') || 'All rights reserved.'}
            </p>
          </div>
        </div>
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
      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6]/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  )
}
