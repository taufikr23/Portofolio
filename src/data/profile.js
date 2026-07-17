// src/data/profile.js
// Data profil terpusat — dipakai di Home, About, Kontak, Footer.

export const profile = {
  name: 'Taufik Rahman Tanjung',
  role: {
    id: 'Fullstack Developer',
    en: 'Fullstack Developer',
  },
  tagline: {
    id: 'Membangun aplikasi web sambil mengajar logika algoritma & database. Saya percaya kode terbaik lahir dari cara berpikir yang bisa dijelaskan ke orang lain.',
    en: 'Building web applications while teaching algorithm logic & databases. I believe the best code comes from a way of thinking that can be explained to others.',
  },
  summary: {
    id: 'Fullstack developer dengan latar D3 Manajemen Informatika dan pengalaman sebagai instruktur pemrograman. Terbiasa membangun aplikasi end-to-end dengan React, Node.js, dan PostgreSQL/MySQL — sekaligus menerjemahkan konsep teknis menjadi materi ajar yang mudah dipahami.',
    en: 'Fullstack developer with a Diploma in Informatics Management and experience as a programming instructor. Comfortable building end-to-end applications with React, Node.js, and PostgreSQL/MySQL — while translating technical concepts into teaching material that is easy to understand.',
  },
  location: { id: 'Bandung, Indonesia', en: 'Bandung, Indonesia' },
  email: 'taufiksibolga1@gmail.com',
  phone: '+62 822-8766-5584',
  whatsapp: '6282287665584', // format internasional tanpa + untuk wa.me
  cvUrl: '/cv.pdf', // taruh CV di public/cv.pdf
  socials: {
    linkedin: 'https://www.linkedin.com/in/taufik-rahman-tanjung-b7aa163a2/',
    github: 'https://github.com/taufikr23',
  },
}

// Strip tech stack di Home (badge monospace kecil)
export const techStack = [
  'React',
  'Node.js',
  'PostgreSQL',
  'JWT',
  'Tailwind',
]
