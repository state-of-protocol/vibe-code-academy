# Vibe Code Academy — SKILL.md

## 1. Projek & Seni Bina

- **Jenis**: Multi-page website + backend API — landing page, sub-page kursus, pendaftaran, sijil
- **Teknologi**: HTML5, CSS3 (vanilla), JavaScript (vanilla), Node.js + Express
- **Reka bentuk**: Token-driven design system dengan CSS custom properties
- **Font**: Raleway (Google Fonts) — weight 500 (regular) dan 700 (bold)
- **Modulariti**: `style.css` dan `script.js` dikongsi oleh semua halaman
- **Backend**: `server.js` (Express) menyimpan data pelajar dalam `data/students.json`
- **Jalankan**: `npm start` atau `node server.js` — server di `http://localhost:3000`

## 2. Organisasi Fail

```
index.html                        — Halaman utama (landing page)
apply.html                        — Borang pendaftaran pelajar
certificate.html                  — Sijil / lesen pelajar (selepas daftar)
style.css                         — Stylesheet kongsi (semua halaman)
script.js                         — Skrip kongsi (semua halaman)
server.js                         — Backend API (Express, Node.js)
package.json                      — Konfigurasi npm
data/
  students.json                   — Data pelajar (format JSON array)
courses/
  frontend-vibes.html             — Sub-page kursus Frontend Vibes
  backend-flow.html               — Sub-page kursus Backend Flow
  reka-bentuk-kod.html            — Sub-page kursus Reka Bentuk & Kod
SKILL.md                          — Fail ini
```

## 3. Design Token (CSS Custom Properties)

Semua token ditakrifkan dalam `:root` — guna token ini sahaja, tiada hardcode.

### Tipografi
| Token | Nilai |
|---|---|
| `--font-family-primary` | `'Raleway', sans-serif` |
| `--font-family-stack` | `'Raleway', sans-serif` |
| `--font-size-xs` | `0px` |
| `--font-size-sm` | `12px` |
| `--font-size-md` | `16px` |
| `--font-size-lg` | `19.28px` |
| `--font-size-xl` | `22.56px` |
| `--font-size-2xl` | `42.23px` |
| `--font-size-3xl` | `71.8px` |
| `--font-size-4xl` | `75.01px` |

### Warna
| Token | Nilai | Guna |
|---|---|---|
| `--color-text-primary` | `#f1f5f9` | Teks utama |
| `--color-text-muted` | `#94a3b8` | Teks pudar |
| `--color-surface-base` | `#0f172a` | Latar utama (navy) |
| `--color-surface-muted` | `#3b82f6` | Aksen biru |
| `--color-surface-raised` | `#1e293b` | Kad / input |
| `--color-border-strong` | `#334155` | Sempadan / fokus |

### Jarak (Spacing)
| Token | px |
|---|---|
| `--space-1` | 4 |
| `--space-2` | 7 |
| `--space-3` | 8 |
| `--space-4` | 10 |
| `--space-5` | 15 |
| `--space-6` | 16 |
| `--space-7` | 30 |
| `--space-8` | 32 |

### Lain-lain
- **Jejari**: `--radius-xs: 6.4px`, `--radius-sm: 27.09px`
- **Bayang**: `--shadow-1` — sifar (tiada bayang, guna sempadan)
- **Gerakan**: `--motion-instant: 100ms`, `--motion-fast: 150ms`, `--motion-normal: 170ms`, `--motion-slow: 300ms`

## 4. Konvensyen CSS

- Guna `var(--token)` untuk semua nilai — **tiada hardcode** (kecuali placeholder `#666` dan rgba lapisan)
- Nama kelas: `kebab-case` — contoh: `.site-header`, `.nav-link`, `.course-grid`
- Nama token: `--kategori-sifat` — contoh: `--color-surface-muted`, `--space-6`
- Aturan: setiap komponen ada kelas root dan kelas anak dengan awalan sama
- Responsif: breakpoint utama di `768px` — susun atur grid jadi satu lajur
- Media query `prefers-reduced-motion: reduce` — patuhi tetapan gerakan sistem
- Guna `rgba()` hanya untuk lapisan/overlay — bukan untuk teks kandungan

## 5. Konvensyen JavaScript

- Semua kod dalam **IIFE** (Immediately Invoked Function Expression) dengan `'use strict'`
- Guna `const` / `let` — **tiada `var`** kecuali untuk pembolehubah yang sengaja dihoist
- Dapatkan elemen dengan `document.getElementById()` / `querySelector()`
- Guna `addEventListener` — **tiada atribut `on*` inline**
- Nama fungsi: `camelCase` — contoh: `toggleMobileNav()`, `setError()`
- Nama pembolehubah: `camelCase` — contoh: `mobileToggle`, `faqItems`
- Semak kewujudan elemen sebelum guna (`if (elemen) { ... }`)
- Guna nullish coalescing (`??`) untuk parameter pilihan

## 6. Komponen UI

### Butang (`.btn`)
| Varian | Kelas | Ciri |
|---|---|---|
| Primer | `.btn-primary` | Latar `--color-surface-muted` |
| Sekunder | `.btn-secondary` | Sempadan `--color-border-strong` |
| Hantu | `.btn-ghost` | Transparent, hover `--color-surface-raised` |
| Navigasi | `.btn-nav` | Sempadan `--color-surface-muted` |
| Loading | `.btn-loading` | Teks disembunyi, spinner pseudo-element |

Semua butang: `min-height: 44px`, `min-width: 44px`, `touch-action: manipulation`.

### Kad Kursus (`.course-card`)
- Grid: `repeat(auto-fit, minmax(280px, 1fr))`
- Hover: naik `-4px`, border `--color-surface-muted`
- Tajuk: `-webkit-line-clamp: 2`
- Penerangan: `-webkit-line-clamp: 3`
- `tabindex="0"` untuk fokus papan kekunci
- Dibungkus dalam `.course-card-link` — paut ke sub-page kursus di `courses/`

### Halaman Sub-Page Kursus
- Setiap kursus ada fail HTML sendiri dalam `courses/`
- Guna `style.css` dan `script.js` yang dikongsi
- Struktur: Hero → Apa Yang Anda Akan Pelajari → Kurikulum → CTA
- Pautan "Kembali ke Kursus" kembali ke `index.html#courses`
- `course-hero`, `learn-grid`, `curriculum-list`, `cta-section` — kelas guna semula

### Akordion FAQ (`.faq-item`)
- Satu item dibuka pada satu masa (accordion)
- Guna kelas `.active` pada `.faq-item` untuk buka/tutup
- `.faq-question` adalah `<button>` — `aria-expanded` dikemas kini secara dinamik
- `.faq-answer` guna `max-height` transition (bukan `height`)
- Ikon `+` berputar `45deg` bila aktif

### Borang Hubungan (`.contact-form`)
- Setiap input dalam `.form-group`
- Keadaan ralat: `.form-group.has-error` — sempadan merah, mesej ralat dipaparkan
- Input `:disabled` — opacity 0.4
- Mesej kejayaan: `.form-success-message.visible`

## 7. Piawaian Kebolehcapaian (Accessibility)

- **Pautan Langkau** (skip-link): `.skip-link` — fokus pertama pada halaman
- **Atribut ARIA**: `aria-expanded`, `aria-controls`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden`, `aria-live="polite"`
- **Fokus Papan Kekunci**: semua interaktif guna `:focus-visible` dengan `outline`
- **Sasaran Sentuh**: minimum `44×44px` (WCAG 2.5.5)
- **Warna**: kontras tinggi — teks putih (#fafafa) pada latar hitam (#000000)
- **Gerakan Dikurangkan**: `prefers-reduced-motion: reduce` — hentikan semua animasi
- **Role**: `role="alert"` untuk mesej ralat, `role="contentinfo"` untuk footer
- **Form status**: kawasan `aria-live="polite"` untuk pengumuman pembaca skrin
- **Kandungan tersembunyi**: `.sr-only` untuk teks yang hanya untuk pembaca skrin

## 8. Aturan Umum

1. **Guna token reka bentuk** — jangan hardcode nilai warna, jarak, atau tipografi
2. **Semua interaksi mesti boleh capai papan kekunci** — guna `:focus-visible`
3. **Kemas kini atribut ARIA** untuk setiap perubahan keadaan UI
4. **Patuhi `prefers-reduced-motion`** — semua animasi mesti boleh dimatikan
5. **Guna bayang neo-morphism dan glassmorphism** — rujuk DESIGN.md untuk token bayang
6. **Guna semantik HTML** — `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
7. **Setiap bahagian perlu `aria-labelledby`** merujuk pada tajuk bahagian
8. **Setiap borang perlu mesej ralat khusus** dan `aria-describedby`
9. **Sembunyikan elemen hiasan** dengan `aria-hidden="true"`
10. **Jangan ubah suai `:root` tokens tanpa kebenaran** — tambah token baru jika perlu
11. **Guna `rgba()` hanya untuk lapisan/latar** — bukan untuk teks kandungan utama
12. **Guna `#666` hanya untuk placeholder** — pengecualian dibenarkan

## 9. Database & Backend

### Pilihan 1: Google Apps Script + Google Sheets (Disyorkan)
- **Fail**: `gas/Code.gs` — skrip GAS untuk deploy ke Google Apps Script
- **Simpanan**: Data dalam Google Sheet (boleh edit guna Excel online)
- **Kelebihan**: Percuma, cloud, boleh diakses dari GitHub Pages
- **Setup**:
  1. Buka https://script.google.com/ → Projek Baru
  2. Tampal `gas/Code.gs` ke editor
  3. Tukar `SHEET_ID` dengan ID Google Sheet anda
  4. Deploy → Web App → dapatkan URL
  5. Tampal URL di `apply.html` dan `certificate.html` (pembolehubah `GAS_URL`)

### Pilihan 2: Node.js + Express (Tempatan)
- **Fail**: `server.js` + `data/students.json`
- **Jalankan**: `npm start` (port 3000)
- **Nota**: `data/students.json` dikecualikan dalam `.gitignore` — jangan push

### Pilihan 3: localStorage (Offline Fallback)
- Data disimpan dalam browser sekiranya server/GAS tidak tersedia
- Untuk pembangunan tempatan / demo

## 10. Isu Semasa (Dari Analisis)

- `--font-size-xs: 0px` — nilai tidak praktikal untuk saiz fon
