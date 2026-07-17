// src/data/skills.js
// Keahlian dikelompokkan per kategori — tampil sebagai badge di About.
// tone: 'amber' | 'sage' | 'clay' menentukan warna badge.

export const skillGroups = [
  {
    category: { id: 'Bahasa Pemrograman', en: 'Programming Languages' },
    tone: 'amber',
    items: ['JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: { id: 'Framework & Library', en: 'Frameworks & Libraries' },
    tone: 'clay',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
  },
  {
    category: { id: 'Tools & Teknologi', en: 'Tools & Technologies' },
    tone: 'sage',
    items: ['PostgreSQL', 'MySQL', 'Git', 'JWT', 'Nodemailer', 'Postman'],
  },
  {
    category: { id: 'Konsep & Metodologi', en: 'Concepts & Methodologies' },
    tone: 'amber',
    items: [
      { id: 'Logika Algoritma', en: 'Algorithm Logic' },
      'REST API',
      { id: 'Relational Database', en: 'Relational Database' },
      { id: 'Auth & Security', en: 'Auth & Security' },
      { id: 'Responsive Design', en: 'Responsive Design' },
    ],
  },
]

// Soft skills — tampil seperti "kompetensi tambahan" di rapor.
export const softSkills = [
  { id: 'Mengajar & Menjelaskan', en: 'Teaching & Explaining' },
  { id: 'Komunikasi', en: 'Communication' },
  { id: 'Problem Solving', en: 'Problem Solving' },
  { id: 'Manajemen Waktu', en: 'Time Management' },
  { id: 'Kolaborasi Tim', en: 'Team Collaboration' },
  { id: 'Adaptif', en: 'Adaptable' },
]
