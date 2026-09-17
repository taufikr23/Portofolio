import { motion } from 'framer-motion'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLang } from '../context/LanguageContext'

export default function Projek() {
  const { t, tr } = useLang()
  
  return (
    <section id="projek" className="relative px-5 py-32 overflow-hidden bg-[#161311]">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#C9A15A]/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <span className="font-mono text-sm tracking-[0.2em] text-[#C9A15A] uppercase mb-4">
            {tr({ id: '04. Karya', en: '04. Work' })}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EDE6DC] mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl font-body text-[#A69B8D] text-lg">
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
