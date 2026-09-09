import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { skillGroups } from '../data/skills'
import { useLang } from '../context/LanguageContext'

export default function Keahlian() {
  const { t, tr } = useLang()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="keahlian" className="relative px-5 py-32 overflow-hidden bg-[#070B17]">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4f46e5]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#8b5cf6] uppercase mb-4">
            {tr({ id: '02. Keahlian & Teknologi', en: '02. Skills & Technologies' })}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Tech Ecosystem
          </h2>
          <p className="max-w-2xl font-body text-slate-400 text-lg">
            {tr({
              id: 'Teknologi dan alat yang saya gunakan untuk membangun aplikasi modern, efisien, dan berskala besar.',
              en: 'Technologies and tools I use to build modern, efficient, and scalable applications.'
            })}
          </p>
        </motion.div>

        <div className="space-y-16 perspective-1000">
          {skillGroups.map((g, index) => (
            <motion.div 
              key={tr(g.category)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-2xl font-bold text-white">
                  {tr(g.category)}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              >
                {/* Remove duplicates, just render items once in a 3D grid */}
                {g.items.map((it, i) => {
                  const Icon = it.icon
                  if (!Icon) return null
                  
                  return (
                    <motion.div 
                      key={it.name + i} 
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        z: 20, 
                        scale: 1.05,
                        rotateX: 5,
                        rotateY: -5,
                        boxShadow: `0 20px 40px -10px ${it.color}40, 0 0 20px ${it.color}20` 
                      }}
                      className="group flex flex-col items-center justify-center gap-4 rounded-2xl glass-panel p-6 preserve-3d transition-all duration-300 border border-white/5 cursor-default relative overflow-hidden"
                      style={{ 
                        '--brand-color': it.color, 
                        '--brand-dark-color': it.darkColor || it.color 
                      }}
                    >
                      {/* Hover Gradient Background */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle at center, ${it.color}, transparent)` }}
                      />
                      
                      <div 
                        className="flex items-center justify-center text-[color:var(--brand-color)] dark:text-[color:var(--brand-dark-color)] transform translate-z-[20px] transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                      >
                         <Icon size={48} />
                      </div>
                      <span className="font-body text-sm font-bold text-slate-300 group-hover:text-white transition-colors text-center transform translate-z-[10px]">
                        {it.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

