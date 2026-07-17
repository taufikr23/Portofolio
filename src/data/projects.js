// src/data/projects.js
// Screenshot: taruh file di src/assets/projects/ lalu import & isi field `image`.
// Sampai screenshot asli ada, biarkan image: null → tampil placeholder bertema.

// Screenshot proyek — import file dari src/assets/projects/ lalu isi field `image`.
import quizsepShot from '../assets/projects/quizsep.png'
import tmedicShot from '../assets/projects/T-medic.png'
import masekShot from '../assets/projects/Masek.png'

export const projects = [
  {
    id: 'quizsep',
    title: 'QuizSep',
    tagline: { id: 'Platform kuis edukasi', en: 'Educational quiz platform' },
    image: quizsepShot,
    description: {
      id: 'Platform kuis edukasi tempat pengajar membuat bank soal dan peserta mengerjakan kuis secara real-time. Dibangun untuk mendukung cara saya mengajar: latihan terstruktur dengan umpan balik langsung.',
      en: 'An educational quiz platform where instructors create question banks and participants take quizzes in real time. Built to support the way I teach: structured exercises with instant feedback.',
    },
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    features: [
      { id: 'Autentikasi peran (pengajar & peserta) berbasis JWT', en: 'Role-based authentication (instructor & participant) using JWT' },
      { id: 'Editor bank soal dengan kategori & tingkat kesulitan', en: 'Question-bank editor with categories & difficulty levels' },
      { id: 'Penilaian otomatis dan rekap skor per sesi', en: 'Automatic grading and score recap per session' },
      { id: 'Dashboard progres peserta untuk evaluasi belajar', en: 'Participant progress dashboard for learning evaluation' },
    ],
    liveUrl: '', // isi URL live demo bila ada
    githubUrl: 'https://github.com/taufikr23/quizsep', // sesuaikan bila nama repo berbeda
  },
  {
    id: 't-medic',
    title: 'T-Medic',
    tagline: { id: 'Sistem informasi layanan kesehatan', en: 'Healthcare service information system' },
    image: tmedicShot,
    description: {
      id: 'Aplikasi manajemen layanan kesehatan untuk mengelola data pasien, jadwal, dan riwayat pemeriksaan dalam satu alur yang rapi. Fokus pada relasi data yang bersih dan alur kerja yang mudah dipakai petugas.',
      en: 'A healthcare service management app to handle patient data, schedules, and examination history in one tidy flow. Focused on clean data relations and a workflow that is easy for staff to use.',
    },
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    features: [
      { id: 'Manajemen data pasien & rekam pemeriksaan', en: 'Patient data & examination record management' },
      { id: 'Penjadwalan dan pencarian data yang cepat', en: 'Scheduling and fast data search' },
      { id: 'Relasi database ternormalisasi untuk integritas data', en: 'Normalized database relations for data integrity' },
      { id: 'Antarmuka responsif untuk desktop & tablet', en: 'Responsive interface for desktop & tablet' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/taufikr23/t-medic', // sesuaikan bila nama repo berbeda
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
    githubUrl: 'https://github.com/taufikr23/masek', // sesuaikan bila nama repo berbeda
  },
]
