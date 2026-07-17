// src/data/experience.js
// Timeline vertikal ala "jadwal mengajar" (About — Modul 01).

export const education = {
  degree: { id: 'D3 Manajemen Informatika', en: 'Diploma in Informatics Management' },
  school: { id: 'Politeknik PASIM Bandung', en: 'PASIM Polytechnic Bandung' },
  gpa: '3.62',
  highlights: [
    { id: 'Beasiswa PUB', en: 'PUB Scholarship' },
    { id: 'Program Akselerasi 2 Tahun', en: '2-Year Acceleration Program' },
  ],
}

export const experience = [
  {
    id: 'exp-instruktur',
    role: { id: 'Instruktur Pelatihan Pemrograman', en: 'Programming Training Instructor' },
    org: { id: 'Beasiswa PUB', en: 'PUB Scholarship' },
    period: 'Des 2024 — Jun 2026',
    current: true,
    // rincian materi per periode
    details: [
      {
        id: 'Periode I — Logika Algoritma: mengajar dasar pemrograman, alur berpikir, dan penyelesaian masalah bertahap.',
        en: 'Term I — Algorithm Logic: teaching programming fundamentals, thinking flow, and step-by-step problem solving.',
      },
      {
        id: 'Periode II — Database MySQL: merancang skema relasional, query, dan normalisasi data.',
        en: 'Term II — MySQL Database: designing relational schemas, queries, and data normalization.',
      },
      {
        id: 'Menyusun modul & latihan terstruktur serta mendampingi peserta hingga mandiri.',
        en: 'Building structured modules & exercises and mentoring participants until they become independent.',
      },
    ],
  },
  {
    id: 'exp-magang',
    role: { id: 'Magang Akademik — Pengembangan Sistem Informasi', en: 'Academic Internship — Information System Development' },
    org: { id: 'PASIM Bandung', en: 'PASIM Bandung' },
    period: '2024',
    current: false,
    details: [
      {
        id: 'Terlibat dalam pengembangan sistem informasi internal.',
        en: 'Involved in the development of an internal information system.',
      },
      {
        id: 'Menerapkan alur fullstack: front-end, REST API, dan database.',
        en: 'Applying a fullstack flow: front-end, REST API, and database.',
      },
    ],
  },
]

// Statistik "nilai rapor" untuk Home
export const stats = [
  { label: { id: 'Pengalaman', en: 'Experience' }, value: '2+', unit: { id: 'Tahun', en: 'Years' } },
  { label: { id: 'Projek', en: 'Projects' }, value: '2', unit: { id: 'Aplikasi', en: 'Apps' } },
  { label: { id: 'IPK', en: 'GPA' }, value: '3.62', unit: { id: '/ 4.00', en: '/ 4.00' } },
]
