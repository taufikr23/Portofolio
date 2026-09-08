// src/data/profile.js
// Data profil terpusat — dipakai di Home, About, Kontak, Footer.
import cvFile from '../assets/cv/CV TAUFIK RAHMAN TANJUNG.pdf'

export const profile = {
  name: 'Taufik Rahman Tanjung',
  role: {
    id: 'Fullstack Developer',
    en: 'Fullstack Developer',
  },
  tagline: {
    id: 'Membangun aplikasi full-stack sambil mengajar logika algoritma & database. Menguasai arsitektur microservices maupun monolitik dengan React, Node.js/Express.js, Spring Boot, dan PostgreSQL/MySQL.',
    en: 'Building full-stack applications while teaching algorithm logic & databases. Skilled in both microservices and monolithic architectures with React, Node.js/Express.js, Spring Boot, and PostgreSQL/MySQL.',
  },
  summary: {
    id: 'Mahasiswa D3 Manajemen Informatika dengan pengalaman sebagai Instruktur Pelatihan Pemrograman dan Magang Akademik di Universitas Nasional PASIM Bandung. Memiliki pengalaman membangun aplikasi full-stack menggunakan React, Node.js/Express.js, Spring Boot, PostgreSQL, dan MySQL melalui berbagai proyek akademik berbasis microservices maupun monolitik. Menguasai perancangan RESTful API, database relasional, autentikasi JWT, serta pengembangan antarmuka pengguna yang responsif.',
    en: 'Diploma student in Informatics Management with experience as a Programming Training Instructor and Academic Intern at Universitas Nasional PASIM Bandung. Experienced in building full-stack applications using React, Node.js/Express.js, Spring Boot, PostgreSQL, and MySQL through various academic projects based on microservices and monolithic architectures. Proficient in RESTful API design, relational databases, JWT authentication, and responsive user interface development.',
  },
  location: { id: 'Bandung, Jawa Barat, Indonesia', en: 'Bandung, West Java, Indonesia' },
  email: 'taufiksibolga1@gmail.com',
  phone: '+62 822-8766-5564',
  whatsapp: '6282287665564',
  cvUrl: cvFile,
  socials: {
    linkedin: 'https://www.linkedin.com/in/taufik-rahman-tanjung-b7aa163a2/',
    github: 'https://github.com/taufikr23',
    instagram: 'https://www.instagram.com/taufikrtjg/',
  },
}

// Strip tech stack di Home (badge monospace kecil)
export const techStack = [
  'React',
  'Node.js',
  'Spring Boot',
  'PostgreSQL',
  'TypeScript',
  'Docker',
  'Tailwind',
]
