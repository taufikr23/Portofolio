import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function SectionLabel({ module, title, kicker }) {
  const { t } = useLang()
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center flex flex-col items-center"
    >
      {module && (
        <span className="font-mono text-sm tracking-[0.2em] text-[#4f46e5] uppercase mb-4">
          {t('label.module')} {module}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      {kicker && (
        <p className="max-w-2xl font-body text-slate-400 text-lg">
          {kicker}
        </p>
      )}
    </motion.div>
  )
}

