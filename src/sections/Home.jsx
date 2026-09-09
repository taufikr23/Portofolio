import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import OrbitTechRing from '../components/ui/OrbitTechRing'
import { profile, techStack } from '../data/profile'
import { stats } from '../data/experience'
import { useLang } from '../context/LanguageContext'
import profilePhoto from '../assets/profile/saya.jpeg'

export default function Home({ onJump }) {
  const { t, tr } = useLang()
  const ref = useRef(null)
  
  // Parallax for background elements
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse parallax state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 50
      const moveY = (clientY - window.innerHeight / 2) / 50
      setMousePosition({ x: moveX, y: moveY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden px-5 py-20 mt-16 sm:mt-0"
    >
      {/* 3D Grid & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div style={{ y: y1 }} className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-amber/10 blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-clay/10 blur-[100px]" />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 w-full"
      >
        {/* Left Column - Content */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-sm font-medium tracking-wide text-amber backdrop-blur-md">
              {tr(profile.role)}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-xl font-body text-lg leading-relaxed text-slate-300"
          >
            {tr(profile.tagline)}
          </motion.p>

          {/* Tech Stack Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mt-2"
          >
            {techStack.map((t, i) => (
              <motion.div
                key={t}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-panel px-4 py-2 rounded-xl text-sm font-medium text-slate-200 cursor-default"
              >
                {t}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 flex flex-wrap gap-5"
          >
            <button 
              onClick={() => onJump?.('projek')}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] px-8 py-4 font-display font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
            >
              <span className="relative z-10">{t('home.cta.projects')}</span>
            </button>
            <button 
              onClick={() => onJump?.('kontak')}
              className="rounded-xl glass-panel px-8 py-4 font-display font-bold text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              {t('home.cta.contact')}
            </button>
          </motion.div>
        </div>

        {/* Right Column - 3D Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md perspective-1000 hidden md:block"
        >
          <motion.div
            animate={{ 
              rotateX: mousePosition.y, 
              rotateY: -mousePosition.x,
            }}
            transition={{ type: "spring", stiffness: 75, damping: 15 }}
            className="preserve-3d relative w-full aspect-[4/5] rounded-[2rem] glass-panel p-2 shadow-2xl"
          >
            {/* Cincin logo bahasa pemrograman mengelilingi foto — berputar terus */}
            <OrbitTechRing />
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#4f46e5]/40 to-[#8b5cf6]/40 blur-2xl -z-10 transform translate-z-[-50px]" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#111827]">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-80" />
            </div>

            <motion.div 
              className="absolute -right-6 top-1/4 glass-panel p-3 rounded-xl shadow-glow z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="text-2xl font-bold text-[#4f46e5]">3.62</div>
              <div className="text-xs text-slate-300">GPA</div>
            </motion.div>

            <motion.div 
              className="absolute -left-8 bottom-1/4 glass-panel p-3 rounded-xl shadow-glow z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              style={{ transform: "translateZ(70px)" }}
            >
              <div className="text-2xl font-bold text-[#8b5cf6]">2+</div>
              <div className="text-xs text-slate-300">Years Exp.</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#4f46e5]/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#4f46e5]"
          />
        </div>
      </motion.div>
    </section>
  )
}
