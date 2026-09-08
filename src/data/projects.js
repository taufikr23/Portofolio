// src/data/projects.js
// Screenshot: taruh file di src/assets/projects/ lalu import & isi field `image`.
// Sampai screenshot asli ada, biarkan image: null → tampil placeholder bertema.

// Screenshot proyek — import file dari src/assets/projects/ lalu isi field `image`.
import quizsepShot from '../assets/projects/Projek QuizSep.png'
import tmedicShot from '../assets/projects/Projek T-Medic.png'
import masekShot from '../assets/projects/Projek MaSek.png'
import projectCShot from '../assets/projects/project-c.png'
import siasekShot from '../assets/projects/Projek Siasek.png'

export const projects = [
  {
    id: 'siasek',
    title: 'SIASEK',
    tagline: { id: 'Platform manajemen akademik terpadu berbasis microservices', en: 'Integrated academic management platform based on microservices' },
    image: siasekShot,
    description: {
      id: 'Platform manajemen akademik terpadu berbasis arsitektur microservices dengan Java Spring Boot yang terbagi ke dalam 7+ layanan mandiri (Auth, Student, Academic, Schedule, Attendance, Assignment, dan Grade). Dilengkapi API Gateway tersentralisasi, autentikasi JWT, notifikasi email via SMTP, dan kontainerisasi menyeluruh dengan Docker.',
      en: 'An integrated academic management platform built on a microservices architecture with Java Spring Boot, split into 7+ independent services (Auth, Student, Academic, Schedule, Attendance, Assignment, and Grade). Features a centralized API Gateway, JWT authentication, email notifications via SMTP, and full containerization with Docker.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Java', 'Spring Boot', 'Spring Cloud Gateway', 'MySQL', 'Docker'],
    features: [
      { id: 'Arsitektur microservices dengan 7+ layanan mandiri (Auth, Student, Academic, Schedule, Attendance, Assignment, Grade)', en: 'Microservices architecture with 7+ independent services (Auth, Student, Academic, Schedule, Attendance, Assignment, Grade)' },
      { id: 'API Gateway tersentralisasi dengan autentikasi JWT dan notifikasi email SMTP', en: 'Centralized API Gateway with JWT authentication and SMTP email notifications' },
      { id: 'Frontend interaktif, type-safe, dan responsif untuk siswa, guru, dan admin', en: 'Interactive, type-safe, and responsive frontend for students, teachers, and admins' },
      { id: 'Kontainerisasi menyeluruh dengan Docker & Docker Compose untuk deployment dan skalabilitas', en: 'Full containerization with Docker & Docker Compose for deployment and scalability' },
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'quizsep',
    title: 'QuizSep',
    tagline: { id: 'Platform kuis edukasi interaktif', en: 'Interactive educational quiz platform' },
    image: quizsepShot,
    description: {
      id: 'Platform kuis edukasi interaktif bertema kosmik/galaksi dengan User Panel (pilih kategori, kerjakan kuis, review jawaban, tracking progres) dan Admin Panel (manajemen soal, manajemen pengguna, dan laporan analitik). Memiliki 50+ soal dari 8 kategori dengan tingkat kesulitan bertingkat, timer 5 menit, dan skor real-time.',
      en: 'An interactive educational quiz platform with a cosmic/galaxy theme featuring a User Panel (category selection, quiz taking, answer review, progress tracking) and Admin Panel (question management, user management, and analytics reports). Includes 50+ questions from 8 categories with tiered difficulty levels, a 5-minute timer, and real-time scoring.',
    },
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Git & GitHub', 'Vercel'],
    features: [
      { id: 'Sistem kuis dengan 50+ soal dari 8 kategori, tingkat kesulitan bertingkat, timer 5 menit, dan skor real-time', en: 'Quiz system with 50+ questions from 8 categories, tiered difficulty, 5-minute timer, and real-time scoring' },
      { id: 'Fitur statistik pengguna untuk melacak riwayat kuis dan perkembangan skor', en: 'User statistics to track quiz history and score progress' },
      { id: 'Review jawaban dengan penjelasan dan analisis kesalahan per soal', en: 'Answer review with explanations and per-question error analysis' },
      { id: 'Dashboard admin dengan manajemen soal CRUD, manajemen pengguna, dan laporan aktivitas platform', en: 'Admin dashboard with CRUD question management, user management, and platform activity reports' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/taufikr23/quizsep',
  },
  {
    id: 't-medic',
    title: 'T-Medic',
    tagline: { id: 'Platform layanan kesehatan digital terintegrasi', en: 'Integrated digital healthcare platform' },
    image: tmedicShot,
    description: {
      id: 'Aplikasi full-stack layanan kesehatan digital yang menghubungkan pasien, dokter, dan admin dalam satu platform dengan autentikasi, otorisasi RBAC, dan deployment cloud. Dibangun dengan React, Express.js, dan Supabase dengan fitur konsultasi online real-time, E-Prescription, E-Pharmacy, dan rekam medis digital.',
      en: 'A full-stack digital healthcare application connecting patients, doctors, and admins in one platform with authentication, RBAC authorization, and cloud deployment. Built with React, Express.js, and Supabase featuring real-time online consultation, E-Prescription, E-Pharmacy, and digital medical records.',
    },
    stack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'Vercel', 'Railway'],
    features: [
      { id: 'Konsultasi online real-time, E-Prescription, E-Pharmacy, sistem pembayaran, dan rekam medis digital', en: 'Real-time online consultation, E-Prescription, E-Pharmacy, payment system, and digital medical records' },
      { id: 'Database PostgreSQL dengan 7 tabel relasional, RESTful API, pagination, filtering, dan pencarian data', en: 'PostgreSQL database with 7 relational tables, RESTful API, pagination, filtering, and data search' },
      { id: 'Sistem notifikasi dan verifikasi email menggunakan Brevo SMTP', en: 'Email notification and verification system using Brevo SMTP' },
      { id: 'Admin dashboard dengan CRUD dokter, obat, pengguna, verifikasi pembayaran, dan laporan analitik', en: 'Admin dashboard with doctor, medicine, user CRUD, payment verification, and analytics reports' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/taufikr23/t-medic',
  },
  {
    id: 'masek',
    title: 'Masek',
    tagline: { id: 'Website resep masakan', en: 'Cooking recipe website' },
    image: masekShot,
    description: {
      id: 'Website resep masakan yang menampilkan kumpulan resep beserta bahan dan langkah memasak. Dibangun dengan HTML, CSS, dan JavaScript murni sebagai latihan membangun antarmuka web yang rapi dan responsif.',
      en: 'A cooking recipe website that presents a collection of recipes along with ingredients and cooking steps. Built with plain HTML, CSS, and JavaScript as practice in crafting a clean, responsive web interface.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      { id: 'Katalog resep dengan bahan & langkah memasak', en: 'Recipe catalog with ingredients & cooking steps' },
      { id: 'Pencarian dan filter resep', en: 'Recipe search and filtering' },
      { id: 'Tampilan responsif untuk mobile & desktop', en: 'Responsive layout for mobile & desktop' },
      { id: 'Interaksi dinamis dengan JavaScript murni', en: 'Dynamic interactions with plain JavaScript' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/taufikr23/masek',
  },
  {
    id: 'project-c',
    title: 'Bioskop',
    tagline: { id: 'Simulasi platform streaming film berbasis CLI', en: 'CLI-based movie streaming platform simulation' },
    image: projectCShot,
    description: {
      id: 'Aplikasi CLI berbasis bahasa C yang mensimulasikan platform streaming film dengan sistem autentikasi (login/register), manajemen saldo, dan pemutaran film gratis maupun premium (VIP). Dilengkapi antarmuka teks interaktif custom menggunakan Windows Console API dengan navigasi arrow-key, box UI, dan skema warna truecolor.',
      en: 'A C-based CLI application simulating a movie streaming platform with authentication (login/register), balance management, and free/premium (VIP) movie playback. Features a custom interactive text interface using Windows Console API with arrow-key navigation, box UI, and truecolor color scheme.',
    },
    stack: ['C', 'Windows Console API', 'ANSI Truecolor', 'File-based Storage'],
    features: [
      { id: 'Sistem autentikasi (login/register) dengan manajemen saldo dan akses film berbayar vs gratis', en: 'Authentication system (login/register) with balance management and paid vs free movie access' },
      { id: 'Penyimpanan data berbasis file teks sebagai database sederhana dengan operasi CRUD', en: 'File-based text storage as simple database with CRUD operations' },
      { id: 'Antarmuka teks interaktif custom (navigasi arrow-key, box UI, truecolor) dengan Windows Console API', en: 'Custom interactive text interface (arrow-key navigation, box UI, truecolor) with Windows Console API' },
      { id: 'Modul validasi input, animasi loading, ASCII art, dan dashboard admin untuk monitoring pelanggan', en: 'Input validation module, loading animation, ASCII art, and admin dashboard for customer monitoring' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/taufikr23/UAS_TAUFIK_RAHMAN_TANJUNG',
  },
]
