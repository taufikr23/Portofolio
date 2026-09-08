// src/components/SectionLabel.jsx
// Header bergaya "modul pembelajaran": label mono + judul serif + garis amber.
import { useLang } from '../context/LanguageContext'

export default function SectionLabel({ module, title, kicker }) {
  const { t } = useLang()
  return (
    <div className="mb-12">
      {module && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-amber">
          {t('label.module')} {module}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-surface-fg sm:text-4xl">
        {title}
      </h2>
      {kicker && (
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-surface-fg/70">
          {kicker}
        </p>
      )}
    </div>
  )
}
