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
    <section id="about" className="relative px-5 py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#4f46e5]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8b5cf6]/5 rounded-full blur-[80px] -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#4f46e5] uppercase mb-4">
            {tr({ id: '01. Tentang Saya', en: '01. About Me' })}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Profile Overview
          </h2>
          <p className="max-w-2xl font-body text-slate-400 text-lg">
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
            className="glass-panel p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#8b5cf6] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">{t('about.education')}</h3>
            <p className="font-display font-bold text-white text-lg leading-tight mb-1">
              {tr(education.degree)}
            </p>
            <p className="font-body text-sm text-slate-400">
              {tr(education.school)}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 0 }}
            className="glass-panel p-6 rounded-2xl preserve-3d bg-gradient-to-br from-[#111827] to-[#4f46e5]/10 border-[#4f46e5]/20"
          >
            <div className="text-[#4f46e5] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">{t('about.gpa')}</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-white">{education.gpa}</span>
              <span className="text-slate-400">/ 4.00</span>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="glass-panel p-6 rounded-2xl preserve-3d"
          >
            <div className="text-[#4f46e5] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">{t('about.experience')}</h3>
            <p className="font-display text-3xl font-bold text-white">2+ Years</p>
            <p className="font-body text-sm text-slate-400 mt-2">Professional Work</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 5, rotateY: 10 }}
            className="glass-panel p-6 rounded-2xl preserve-3d bg-gradient-to-br from-[#111827] to-[#8b5cf6]/10 border-[#8b5cf6]/20"
          >
            <div className="text-[#8b5cf6] mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">Projects</h3>
            <p className="font-display text-3xl font-bold text-white">5+ Apps</p>
            <p className="font-body text-sm text-slate-400 mt-2">Completed</p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                {t('about.extraSkills')}
              </h3>
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#4f46e5]">
                {t('about.softSkills')}
              </p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
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
            >
              <a 
                href={profile.cvUrl} 
                download 
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 glass-panel px-6 py-4 font-body text-sm font-bold text-white transition-all hover:bg-white/10 hover:scale-[1.02] hover:border-[#4f46e5]/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('about.downloadCv')}
              </a>
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
            <h3 className="font-display text-2xl font-bold text-white mb-8">
              {t('about.experience')}
            </h3>
            
            <div className="relative border-l border-[#4f46e5]/30 ml-3 space-y-10 pb-4">
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
                  <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${e.current ? 'bg-[#4f46e5] shadow-[0_0_10px_#4f46e5]' : 'bg-slate-600'}`} />
                  
                  <div>
                    <div className={`inline-block px-3 py-1 mb-3 rounded-lg text-xs font-mono font-medium ${e.current ? 'bg-[#4f46e5]/20 text-[#4f46e5] border border-[#4f46e5]/30' : 'bg-slate-800/50 text-slate-400 border border-slate-700'}`}>
                      {e.period}
                    </div>
                    <h4 className="font-display text-xl font-bold text-white mb-1">{tr(e.role)}</h4>
                    <p className="font-body text-[#8b5cf6] text-sm mb-4 font-medium">{tr(e.org)}</p>
                    
                    <div className="glass-panel p-5 rounded-2xl">
                      <ul className="space-y-3">
                        {e.details.map((d, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                            <span className="text-[#4f46e5] mt-1 shrink-0">
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
