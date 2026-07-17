// src/data/ui.js
// Kamus string UI chrome (tombol, label, aria, placeholder, pesan) untuk
// toggle bahasa. Field konten panjang (bio, deskripsi) tinggal di data files
// masing-masing sebagai { id, en }. Dipakai lewat t('key') dari useLang().

export const ui = {
  id: {
    // Navbar / global
    'nav.menu': 'Menu',
    'nav.brand': 'Portofolio',
    'theme.toLight': 'Mode terang',
    'theme.toDark': 'Mode gelap',
    'lang.switch': 'Ganti bahasa',
    'skip.toContent': 'Lompat ke konten',
    'label.module': 'Modul',

    // Home
    'home.badge': 'Sampul Modul — Portofolio',
    'home.cta.projects': 'Lihat Projek Saya',
    'home.cta.contact': 'Hubungi Saya',
    'home.scroll': 'SCROLL',
    'home.photoPlaceholder': 'Taruh foto profil di sini',

    // About
    'about.education': 'Pendidikan',
    'about.extraSkills': 'Kompetensi Tambahan',
    'about.softSkills': 'Soft skills',
    'about.experience': 'Pengalaman',
    'about.teachingSchedule': '/ jadwal mengajar',
    'about.skills': 'Keahlian',
    'about.gpa': 'IPK',
    'about.downloadCv': 'Download CV (PDF)',

    // Sertifikat
    'cert.zoom': 'Perbesar',
    'cert.prev': 'Sebelumnya',
    'cert.next': 'Berikutnya',
    'cert.empty': 'Belum ada sertifikat pada kategori ini.',
    'cert.verify': 'Verifikasi',
    'cert.photoPlaceholder': 'foto sertifikat',

    // Projek / Carousel
    'project.zoom': 'Perbesar',
    'project.liveDemo': 'Live Demo',
    'project.github': 'GitHub',
    'project.demoSoon': 'Demo segera',
    'project.repoPrivate': 'Repo privat',
    'project.prev': 'Proyek sebelumnya',
    'project.next': 'Proyek berikutnya',
    'project.goTo': 'Ke proyek', // + nama proyek
    'project.screenshot': 'screenshot', // + nama proyek

    // Kontak
    'contact.err.name': 'Nama wajib diisi.',
    'contact.err.email': 'Email tidak valid.',
    'contact.err.message': 'Pesan minimal 10 karakter.',
    'contact.label.email': 'Email',
    'contact.label.whatsapp': 'WhatsApp',
    'contact.label.location': 'Lokasi',
    'contact.label.social': 'Sosial',
    'contact.label.name': 'Nama',
    'contact.label.message': 'Pesan',
    'contact.ph.name': 'Nama lengkap',
    'contact.ph.email': 'nama@email.com',
    'contact.ph.message': 'Tulis pesan kamu di sini…',
    'contact.sent.title': 'Pesan terkirim!',
    'contact.sent.body': 'Terima kasih sudah menghubungi. Saya akan membalas secepatnya.',
    'contact.sent.again': 'Kirim pesan lain',
    'contact.sending': 'Mengirim…',
    'contact.submit': 'Kirim Pesan',
    'contact.quote': '“Terbuka untuk peluang Fullstack Engineer.”',

    // Footer
    'footer.builtWith': 'Dibuat dengan React & Tailwind · Bandung',

    // Kicker per section
    'kicker.sertifikat': 'Rekam jejak pelatihan dan capaian — klik kartu untuk melihat sertifikat ukuran penuh.',
    'kicker.projek': 'Aplikasi yang saya rancang dan bangun end-to-end — klik kartu untuk melihat detail lengkap.',
    'kicker.kontak': 'Terbuka untuk peluang Fullstack Engineer, kolaborasi projek, maupun sekadar diskusi teknis.',
  },

  en: {
    // Navbar / global
    'nav.menu': 'Menu',
    'nav.brand': 'Portfolio',
    'theme.toLight': 'Light mode',
    'theme.toDark': 'Dark mode',
    'lang.switch': 'Switch language',
    'skip.toContent': 'Skip to content',
    'label.module': 'Module',

    // Home
    'home.badge': 'Module Cover — Portfolio',
    'home.cta.projects': 'View My Projects',
    'home.cta.contact': 'Contact Me',
    'home.scroll': 'SCROLL',
    'home.photoPlaceholder': 'Put your profile photo here',

    // About
    'about.education': 'Education',
    'about.extraSkills': 'Additional Competencies',
    'about.softSkills': 'Soft skills',
    'about.experience': 'Experience',
    'about.teachingSchedule': '/ teaching schedule',
    'about.skills': 'Skills',
    'about.gpa': 'GPA',
    'about.downloadCv': 'Download CV (PDF)',

    // Sertifikat
    'cert.zoom': 'Zoom in',
    'cert.prev': 'Previous',
    'cert.next': 'Next',
    'cert.empty': 'No certificates in this category yet.',
    'cert.verify': 'Verify',
    'cert.photoPlaceholder': 'certificate photo',

    // Projek / Carousel
    'project.zoom': 'Zoom in',
    'project.liveDemo': 'Live Demo',
    'project.github': 'GitHub',
    'project.demoSoon': 'Demo soon',
    'project.repoPrivate': 'Private repo',
    'project.prev': 'Previous project',
    'project.next': 'Next project',
    'project.goTo': 'Go to project', // + project name
    'project.screenshot': 'screenshot', // + project name

    // Kontak
    'contact.err.name': 'Name is required.',
    'contact.err.email': 'Invalid email.',
    'contact.err.message': 'Message must be at least 10 characters.',
    'contact.label.email': 'Email',
    'contact.label.whatsapp': 'WhatsApp',
    'contact.label.location': 'Location',
    'contact.label.social': 'Social',
    'contact.label.name': 'Name',
    'contact.label.message': 'Message',
    'contact.ph.name': 'Full name',
    'contact.ph.email': 'name@email.com',
    'contact.ph.message': 'Write your message here…',
    'contact.sent.title': 'Message sent!',
    'contact.sent.body': 'Thanks for reaching out. I will reply as soon as possible.',
    'contact.sent.again': 'Send another message',
    'contact.sending': 'Sending…',
    'contact.submit': 'Send Message',
    'contact.quote': '“Open to Fullstack Engineer opportunities.”',

    // Footer
    'footer.builtWith': 'Built with React & Tailwind · Bandung',

    // Kicker per section
    'kicker.sertifikat': 'A track record of training and achievements — click a card to view the full-size certificate.',
    'kicker.projek': 'Applications I designed and built end-to-end — click a card to see the full details.',
    'kicker.kontak': 'Open to Fullstack Engineer opportunities, project collaborations, or simply technical discussions.',
  },
}
