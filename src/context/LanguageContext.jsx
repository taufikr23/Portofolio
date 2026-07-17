// src/context/LanguageContext.jsx
// Konteks bahasa ringan (tanpa dependensi i18n). Menyediakan:
//   - lang     : 'id' | 'en'
//   - setLang  : ganti bahasa eksplisit
//   - toggle   : bergiliran id <-> en
//   - t(key)   : ambil string UI chrome dari kamus src/data/ui.js
//   - tr(field): ambil field data bilingual { id, en } sesuai bahasa aktif.
//                String biasa dikembalikan apa adanya (aman untuk nama teknologi).
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from '../data/ui'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' || saved === 'id' ? saved : 'id'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const dict = ui[lang] ?? ui.id
    return {
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'id' ? 'en' : 'id')),
      // String UI chrome — fallback ke key mentah bila belum diterjemahkan.
      t: (key) => dict[key] ?? ui.id[key] ?? key,
      // Field data bilingual — passthrough untuk string biasa / nilai kosong.
      tr: (field) =>
        field && typeof field === 'object' && !Array.isArray(field)
          ? field[lang] ?? field.id ?? ''
          : field,
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang harus dipakai di dalam <LanguageProvider>')
  return ctx
}
