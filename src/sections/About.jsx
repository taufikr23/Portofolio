import { motion } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { education, experience } from '../data/experience'
import { softSkills } from '../data/skills'
import { useLang } from '../context/LanguageContext'
import Badge from '../components/ui/Badge'

export default function About() {
  const { t, tr } = useLang()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="about" className="relative px-5 py-32 overflow-hidden bg-[#161311]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A15A]/5 rounded-full blur-[100px] -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#C9A15A] uppercase mb-4">
            {tr({ id: '01. Tentang Saya', en: '01. About Me' })}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDE6DC] mb-6">
            Profile Overview
          </h2>
          <p className="max-w-2xl font-body text-[#A69B8D] text-lg">
            {tr(profile.summary)}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 perspective-1000 mb-16"
        >
          {/* Dashboard Cards */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            className="bg-[#211C18] border border-[#332C26] p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#C9A15A] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A69B8D] mb-2">{t('about.education')}</h3>
            <p className="font-display font-bold text-[#EDE6DC] text-lg leading-tight mb-1">
              {tr(education.degree)}
            </p>
            <p className="font-body text-sm text-[#A69B8D]">
              {tr(education.school)}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 0 }}
            className="bg-[#211C18] border border-[#332C26] p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#C9A15A] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A69B8D] mb-2">{t('about.gpa')}</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-[#C9A15A]">{education.gpa}</span>
              <span className="text-[#A69B8D]">/ 4.00</span>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="bg-[#211C18] border border-[#332C26] p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#C9A15A] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A69B8D] mb-2">{t('about.experience')}</h3>
            <p className="font-display text-3xl font-bold text-[#C9A15A]">2+ Years</p>
            <p className="font-body text-sm text-[#A69B8D] mt-2">Professional Work</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 10 }}
            className="bg-[#211C18] border border-[#332C26] p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#C9A15A] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A69B8D] mb-2">Projects</h3>
            <p className="font-display text-3xl font-bold text-[#C9A15A]">5+ Apps</p>
            <p className="font-body text-sm text-[#A69B8D] mt-2">Completed</p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#211C18] border border-[#332C26] p-8 rounded-3xl"
            >
              <h3 className="font-display text-xl font-bold text-[#EDE6DC] mb-6">
                {t('about.extraSkills')}
              </h3>
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#C9A15A]">
                {t('about.softSkills')}
              </p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-xl bg-[#2A2420] border border-[#332C26] text-sm font-medium text-[#EDE6DC]"
                  >
                    {tr(s)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C9A15A] mb-1">
                {t('about.downloadCv')}
              </p>
              <div className="grid gap-3">
                {profile.cvList.map((cvItem, idx) => (
                  <a
                    key={idx}
                    href={cvItem.url}
                    download
                    className="flex items-center justify-between gap-3 rounded-xl border border-[#332C26] bg-[#211C18] px-5 py-3.5 font-body text-sm font-bold text-[#EDE6DC] transition-all hover:bg-[#2A2420] hover:scale-[1.02] hover:border-[#C9A15A]/50 group"
                  >
                    <span className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#C9A15A] group-hover:scale-110 transition-transform" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M12 18v-6" />
                        <path d="m9 15 3 3 3-3" />
                      </svg>
                      {tr(cvItem.title)}
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[#A69B8D] px-2 py-0.5 rounded bg-[#161311] border border-[#332C26]">
                      PDF
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Modern Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="font-display text-2xl font-bold text-[#EDE6DC] mb-8">
              {t('about.experience')}
            </h3>
            
            <div className="relative border-l border-[#332C26] ml-3 space-y-10 pb-4">
              {experience.map((e, index) => (
                <motion.div 
                  key={e.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${e.current ? 'bg-[#C9A15A] shadow-[0_0_10px_#C9A15A]' : 'bg-[#332C26]'}`} />
                  
                  <div>
                    <div className={`inline-block px-3 py-1 mb-3 rounded-lg text-xs font-mono font-medium ${e.current ? 'bg-[#C9A15A]/10 text-[#C9A15A] border border-[#C9A15A]/30' : 'bg-[#211C18] text-[#A69B8D] border border-[#332C26]'}`}>
                      {e.period}
                    </div>
                    <h4 className="font-display text-xl font-bold text-[#EDE6DC] mb-1">{tr(e.role)}</h4>
                    <p className="font-body text-[#C9A15A] text-sm mb-4 font-medium">{tr(e.org)}</p>
                    
                    <div className="bg-[#211C18] border border-[#332C26] p-5 rounded-2xl">
                      <ul className="space-y-3">
                        {e.details.map((d, i) => (
                          <li key={i} className="flex gap-3 text-sm text-[#A69B8D] leading-relaxed">
                            <span className="text-[#C9A15A] mt-1 shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            <span>{tr(d)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
