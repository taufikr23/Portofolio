import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useLang } from '../context/LanguageContext'
import profilePhoto from '../assets/profile/saya.jpeg'

export default function Kontak() {
  const { t, tr } = useLang()

  return (
    <section id="kontak" className="relative px-5 py-32 overflow-hidden bg-[#070B17]">
      {/* Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#4f46e5]/10 via-[#8b5cf6]/5 to-transparent rounded-full blur-[120px]" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#4f46e5] uppercase mb-4">
            {tr({ id: '05. Kontak', en: '05. Contact' })}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            {tr({ id: 'Mari Bangun Sesuatu Bersama', en: "Let's Build Something Together" })}
          </h2>
          <p className="max-w-2xl font-body text-slate-400 text-lg">
            {t('kicker.kontak')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <ContactCard
              href={`mailto:${profile.email}`}
              label={t('contact.label.email')}
              value={profile.email}
              delay={0.1}
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </ContactCard>

            <ContactCard
              href={`https://wa.me/${profile.whatsapp}`}
              label={t('contact.label.whatsapp')}
              value={profile.phone}
              delay={0.2}
              external
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
            </ContactCard>

            <ContactCard 
              label={t('contact.label.location')} 
              value={tr(profile.location)} 
              delay={0.3}
              static
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </ContactCard>
          </motion.div>

          {/* Right Column - Action Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center preserve-3d"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4f46e5]/20 to-[#8b5cf6]/20 border border-white/10 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] to-[#8b5cf6] rounded-full opacity-20 blur-xl" />
              <div className="w-16 h-16 rounded-full bg-[#111827] flex items-center justify-center relative z-10 overflow-hidden">
                <img src={profilePhoto} alt="Taufik" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">Available for Work</h3>
            <p className="font-body text-slate-400 mb-8 max-w-sm">
              Currently open for new opportunities, freelance projects, or full-time roles.
            </p>

            <a 
              href={`mailto:${profile.email}`}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] w-full max-w-xs py-4 font-display font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center justify-center gap-3 group"
            >
              <span className="relative z-10">Hubungi Saya</span>
              <svg className="relative z-10 transform transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <div className="w-full h-[1px] bg-white/10 my-8" />

            <div className="flex gap-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ href, label, value, children, external, static: isStatic, delay = 0 }) {
  const inner = (
    <>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4f46e5]/10 border border-[#4f46e5]/20 text-[#4f46e5] group-hover:scale-110 group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
          {label}
        </span>
        <span className="font-display text-lg font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
          {value}
        </span>
      </div>
    </>
  )

  const cls = 'group flex items-center gap-5 rounded-2xl glass-panel border border-white/5 p-4 md:p-6 transition-all duration-300'

  if (isStatic) return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cls}
    >
      {inner}
    </motion.div>
  )
  
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${cls} hover:-translate-y-1 hover:border-[#4f46e5]/40 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)]`}
    >
      {inner}
    </motion.a>
  )
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  )
}
