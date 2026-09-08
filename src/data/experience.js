// src/data/experience.js
// Timeline vertikal ala "jadwal mengajar" (About — Modul 01).

export const education = {
  degree: { id: 'D3 Manajemen Informatika', en: 'Diploma in Informatics Management' },
  school: { id: 'Universitas Nasional PASIM Bandung', en: 'Universitas Nasional PASIM Bandung' },
  period: 'Sep 2024 — Sekarang',
  gpa: '3.62',
  highlights: [
    { id: 'Beasiswa Pemberdayaan Umat Berkelanjutan (PUB)', en: 'PUB Scholarship (Pemberdayaan Umat Berkelanjutan)' },
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
    details: [
      {
        id: 'Mengajar materi Logika Algoritma dan Bahasa Pemrograman (Sep 2025 — Feb 2026): problem solving, flowchart, pseudocode, operator, percabangan, perulangan, fungsi, dan array.',
        en: 'Taught Algorithm Logic and Programming Language (Sep 2025 — Feb 2026): problem solving, flowchart, pseudocode, operators, branching, loops, functions, and arrays.',
      },
      {
        id: 'Mengajar materi Database MySQL (Feb 2026 — Jun 2026): operasi CRUD, normalisasi database, perancangan relasi antar tabel, dan implementasi query SQL.',
        en: 'Taught MySQL Database (Feb 2026 — Jun 2026): CRUD operations, database normalization, table relation design, and SQL query implementation.',
      },
      {
        id: 'Membimbing peserta dalam praktik pemrograman dan penyelesaian studi kasus serta memberikan evaluasi dan pendampingan.',
        en: 'Mentored participants in programming practice and case study problem solving, providing evaluation and guidance.',
      },
    ],
  },
  {
    id: 'exp-magang',
    role: { id: 'Magang Akademik', en: 'Academic Internship' },
    org: { id: 'Universitas Nasional PASIM Bandung', en: 'Universitas Nasional PASIM Bandung' },
    period: 'Sep 2025 — Sep 2026',
    current: true,
    details: [
      {
        id: 'Membantu pelaksanaan praktikum dan kegiatan akademik di laboratorium komputer.',
        en: 'Assisted in practicum sessions and academic activities in the computer laboratory.',
      },
      {
        id: 'Memberikan pendampingan kepada mahasiswa dalam penggunaan perangkat lunak dan penyelesaian tugas praktikum.',
        en: 'Provided guidance to students in software usage and practicum assignment completion.',
      },
      {
        id: 'Menyusun dokumentasi kegiatan dan membantu dosen dalam kelancaran proses pembelajaran.',
        en: 'Prepared activity documentation and assisted lecturers in ensuring smooth learning processes.',
      },
    ],
  },
  {
    id: 'exp-himami',
    role: { id: 'HIMAMI — Divisi Humas', en: 'HIMAMI — Public Relations Division' },
    org: { id: 'Universitas Nasional PASIM Bandung', en: 'Universitas Nasional PASIM Bandung' },
    period: 'Sep 2024 — Sep 2026',
    current: true,
    details: [
      {
        id: 'Menjalin hubungan serta koordinasi dengan mahasiswa, dosen, dan pihak eksternal untuk mendukung kegiatan organisasi.',
        en: 'Built relationships and coordinated with students, lecturers, and external parties to support organizational activities.',
      },
      {
        id: 'Mengelola komunikasi organisasi melalui media sosial dan berkolaborasi dengan divisi lain dalam pelaksanaan acara.',
        en: 'Managed organizational communication through social media and collaborated with other divisions in event execution.',
      },
    ],
  },
]

// Statistik "nilai rapor" untuk Home
export const stats = [
  { label: { id: 'Pengalaman', en: 'Experience' }, value: '2+', unit: { id: 'Tahun', en: 'Years' } },
  { label: { id: 'Projek', en: 'Projects' }, value: '5+', unit: { id: 'Aplikasi', en: 'Apps' } },
  { label: { id: 'IPK', en: 'GPA' }, value: '3.62', unit: { id: '/ 4.00', en: '/ 4.00' } },
]
