// src/data/certificates.js
// Foto asli ada di src/assets/certificates/ — di-import lalu dipasang ke field `image`.
//
// Kategori: 'Semua' hanya untuk filter (menampilkan semua).
// Setiap sertifikat berkategori 'Pelatihan' atau 'Instruktur'.

import pelatihanHTML from '../assets/certificates/PelatihanHTML.png'
import pelatihanLogikaAlgoritma from '../assets/certificates/PelatihanLogikaAlgoritma.png'
import pelatihanGitHub from '../assets/certificates/PeltihanGITHUB.png'
import pelatihanBasisData from '../assets/certificates/PelatihanBasisData.png'
import pelatihanStrukturData from '../assets/certificates/PelatihanStrukturData.png'
import instrukturLogikaAlgoritma from '../assets/certificates/InstrukturLogikaAlgoritma.png'
import instrukturBasisData from '../assets/certificates/InstrukturBasisData.jpeg'
import reactFundamental from '../assets/certificates/ReactFundamental.png'

// Kategori: `key` dipakai untuk filter (stabil, tidak diterjemahkan),
// `label` untuk tampilan (bilingual). 'Semua' hanya untuk menampilkan semua.
export const certificateCategories = [
  { key: 'Semua', label: { id: 'Semua', en: 'All' } },
  { key: 'Pelatihan', label: { id: 'Pelatihan', en: 'Training' } },
  { key: 'Instruktur', label: { id: 'Instruktur', en: 'Instructor' } },
]

export const certificates = [
  // ── Pelatihan ──────────────────────────────────────────────
  // Urutan tampil: React Fundamental, GitHub, HTML dulu; sisanya menyusul.
  {
    id: 'cert-react-fundamental',
    title: { id: 'Pelatihan React Fundamental', en: 'React Fundamentals Training' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Jul 2025', en: 'Jul 2025' },
    category: 'Pelatihan',
    image: reactFundamental,
    verifyUrl: '',
  },
  {
    id: 'cert-github',
    title: { id: 'Pelatihan Version Control dengan Git & GitHub', en: 'Version Control Training with Git & GitHub' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Apr 2025', en: 'Apr 2025' },
    category: 'Pelatihan',
    image: pelatihanGitHub,
    verifyUrl: '',
  },
  {
    id: 'cert-html',
    title: { id: 'Pelatihan Dasar Pemrograman Web — HTML, CSS & JavaScript', en: 'Web Programming Basics Training — HTML, CSS & JavaScript' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Jan 2025', en: 'Jan 2025' },
    category: 'Pelatihan',
    image: pelatihanHTML,
    verifyUrl: '',
  },
  {
    id: 'cert-logika-algoritma',
    title: { id: 'Pelatihan Logika Algoritma', en: 'Algorithm Logic Training' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Des 2024', en: 'Dec 2024' },
    category: 'Pelatihan',
    image: pelatihanLogikaAlgoritma,
    verifyUrl: '',
  },
  {
    id: 'cert-basis-data',
    title: { id: 'Pelatihan Basis Data', en: 'Database Training' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Jun 2025', en: 'Jun 2025' },
    category: 'Pelatihan',
    image: pelatihanBasisData,
    verifyUrl: '',
  },
  {
    id: 'cert-struktur-data',
    title: { id: 'Pelatihan Struktur Data', en: 'Data Structures Training' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Mei 2025', en: 'May 2025' },
    category: 'Pelatihan',
    image: pelatihanStrukturData,
    verifyUrl: '',
  },

  // ── Instruktur ─────────────────────────────────────────────
  {
    id: 'cert-instruktur-logika-algoritma',
    title: { id: 'Sertifikat Instruktur — Logika Algoritma', en: 'Instructor Certificate — Algorithm Logic' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Jul 2025', en: 'Jul 2025' },
    category: 'Instruktur',
    image: instrukturLogikaAlgoritma,
    verifyUrl: '',
  },
  {
    id: 'cert-instruktur-basis-data',
    title: { id: 'Sertifikat Instruktur — Basis Data', en: 'Instructor Certificate — Database' },
    issuer: 'Beasiswa PUB',
    date: { id: 'Agu 2025', en: 'Aug 2025' },
    category: 'Instruktur',
    image: instrukturBasisData,
    verifyUrl: '',
  },
]
