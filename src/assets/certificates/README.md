# Foto Sertifikat — `src/assets/certificates/`

Simpan foto sertifikat asli di folder ini.

## Aturan
- Format **WebP** (atau JPG), maksimal **~300KB per file** — kompres dulu supaya loading cepat.
- Aspect ratio sertifikat umumnya landscape (mis. 4:3 atau A4 landscape). Card memakai `object-fit: cover` jadi bebas, tapi konsisten lebih rapi.
- Nama file cocokkan dengan field `image` di `src/data/certificates.js`.

## Cara pakai
1. Taruh file di sini, mis. `sertifikat-web-dev.webp`.
2. Di `src/data/certificates.js`, import & isi metadata:
   ```js
   import webDev from '../assets/certificates/sertifikat-web-dev.webp'
   // ...
   { id: 1, image: webDev, title: '...', issuer: '...', date: '...' }
   ```

Sampai foto asli tersedia, kartu akan menampilkan placeholder bertema.
