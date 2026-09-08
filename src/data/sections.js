// src/data/sections.js
// Sumber tunggal struktur "modul pembelajaran".
// Dipakai Navbar, ProgressRail, dan label section.

export const sections = [
  { id: 'home', module: null, nav: { id: 'Home', en: 'Home' }, title: { id: 'Sampul Modul', en: 'Module Cover' } },
  { id: 'about', module: '01', nav: { id: 'Tentang', en: 'About' }, title: { id: 'Profil & Latar Belakang', en: 'Profile & Background' } },
  { id: 'keahlian', module: '02', nav: { id: 'Keahlian', en: 'Skills' }, title: { id: 'Keahlian & Teknologi', en: 'Skills & Technologies' } },
  { id: 'sertifikat', module: '03', nav: { id: 'Sertifikat', en: 'Certificates' }, title: { id: 'Sertifikat & Pencapaian', en: 'Certificates & Achievements' } },
  { id: 'projek', module: '04', nav: { id: 'Projek', en: 'Projects' }, title: { id: 'Proyek yang Telah Dibangun', en: 'Projects I Have Built' } },
  { id: 'kontak', module: '05', nav: { id: 'Kontak', en: 'Contact' }, title: { id: 'Mari Terhubung', en: "Let's Connect" } },
]

export const sectionIds = sections.map((s) => s.id)
