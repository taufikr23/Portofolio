// src/sections/Projek.jsx — "Proyek yang Telah Dibangun"
import SectionLabel from '../components/SectionLabel'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLang } from '../context/LanguageContext'

export default function Projek() {
  const { t, tr } = useLang()
  return (
    <section id="projek" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          title={tr({ id: 'Proyek yang Telah Dibangun', en: 'Projects I Have Built' })}
        />

        <ProjectCarousel />
      </div>
    </section>
  )
}
