import { motion } from 'framer-motion'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLang } from '../context/LanguageContext'

export default function Projek() {
  const { t, tr } = useLang()
  
  return (
    <section id="projek" className="relative px-5 py-32 overflow-hidden bg-[#070B17]">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4f46e5]/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b5cf6]/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#8b5cf6] uppercase mb-4">
            {tr({ id: '04. Karya', en: '04. Work' })}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl font-body text-slate-400 text-lg">
            {tr({ 
              id: 'Koleksi aplikasi yang telah saya bangun, mencakup berbagai teknologi dan arsitektur.', 
              en: 'A collection of applications I have built, spanning various technologies and architectures.' 
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProjectCarousel />
        </motion.div>
      </div>
    </section>
  )
}
