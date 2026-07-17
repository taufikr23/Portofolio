# Portofolio — Fullstack Developer & Instruktur Pemrograman

Single-page portfolio bertema **Mentor/Educator** — hangat, terstruktur seperti modul pembelajaran. Dibangun dengan **React + Vite + Tailwind CSS v4**.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi → dist/
npm run preview  # preview hasil build
```

## Struktur

```
src/
├── assets/
│   ├── certificates/   ← foto sertifikat asli (lihat README di folder)
│   └── projects/       ← screenshot projek
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProgressRail.jsx   ← elemen signature "garis progres modul"
│   ├── SectionLabel.jsx   ← header "Modul NN — …"
│   └── ui/ Badge · Button · Card · Modal
├── hooks/useScrollSpy.js  ← progress scroll + section aktif
├── sections/ Home · About · Sertifikat · Projek · Kontak
├── data/ profile · sections · skills · projects · certificates · experience
├── App.jsx
└── index.css              ← design tokens (@theme) + dark mode
```

## Yang perlu kamu isi

1. **Data pribadi** → `src/data/profile.js` (nama, email, WA, sosial, URL CV).
2. **Foto profil** → ganti `ProfilePlaceholder` di `src/sections/Home.jsx` dengan `<img>`.
3. **Foto sertifikat** → taruh di `src/assets/certificates/`, import & isi `src/data/certificates.js`.
4. **Screenshot projek** → taruh di `src/assets/projects/`, isi field `image` di `src/data/projects.js`.
5. **CV** → letakkan `public/cv.pdf` (tombol download di About sudah menunjuk ke sana).
6. **Link projek** → isi `liveUrl` & `githubUrl` di `src/data/projects.js`.

## Design system

| Token          | Hex       | Peran                          |
| -------------- | --------- | ------------------------------ |
| `--color-cream`| `#FBF6ED` | background utama               |
| `--color-ink`  | `#232019` | teks utama                     |
| `--color-amber`| `#E8A33D` | aksen utama                    |
| `--color-clay` | `#C15F3C` | aksen sekunder (hover/CTA)     |
| `--color-sage` | `#6B7A5E` | aksen tersier (badge capaian)  |
| `--color-paper`| `#F1EADA` | card / section alternate       |

Font: **Fraunces** (display serif), **Plus Jakarta Sans** (body), **JetBrains Mono** (label/angka).
Dark mode memakai varian gelap hangat (`#1F1B14`), disimpan di `localStorage`.

## Contact form

Form di `src/sections/Kontak.jsx` sudah lengkap dengan validasi; handler `handleSubmit` masih **stub** (mensimulasikan sukses). Ganti blok bertanda `STUB` dengan EmailJS atau backend Nodemailer/Brevo untuk pengiriman nyata.
