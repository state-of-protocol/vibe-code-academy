# Vibe Code Academy — DESIGN.md

## 1. Falsafah Reka Bentuk

- **Gelap & Navy** — Latar navy gelap (`#0f172a`) dengan aksen biru-ke-ungu untuk kontras
- **Didorong Token** — Semua nilai reka bentuk melalui CSS custom properties
- **Boleh Diakses** — WCAG-compliant: kontras tinggi, sasaran sentuh 44px, sokongan skrin pembaca
- **Neo-morphism** — Bayang dua arah (gelap + highlight) untuk efek timbul lembut pada permukaan
- **Glassmorphism** — Kesan kaca dengan `backdrop-filter: blur()` pada lapisan timbul
- **Gerakan Bermusim** — Gunakan `--motion-spring` untuk animasi semula jadi; patuhi `prefers-reduced-motion`

---

## 2. Palet Warna

| Token | Nilai | Guna |
|---|---|---|
| `--color-text-primary` | `#f1f5f9` | Semua teks kandungan |
| `--color-text-muted` | `#94a3b8` | Teks pudar, subtitle, footer |
| `--color-surface-base` | `#0f172a` | Latar belakang utama (navy gelap) |
| `--color-surface-muted` | `#3b82f6` | Aksen biru, butang, pautan, fokus |
| `--color-surface-raised` | `#1e293b` | Kad, input, latar naik |
| `--color-surface-glass` | `rgba(30,41,59,0.6)` | Glassmorphism lapisan |
| `--color-border-strong` | `#334155` | Sempadan, outline |
| `--glass-bg` | `rgba(30,41,59,0.5)` | Latar glass effect |
| `--glass-border` | `1px solid rgba(255,255,255,0.06)` | Sempadan glass |

### Gradient

| Token | Nilai | Guna |
|---|---|---|
| `--gradient-accent` | `linear-gradient(135deg, #3b82f6, #a855f7)` | Butang primer, aksen |
| `--gradient-hero` | `radial-gradient(circle at top, #1e3a8a 0%, #0f172a 100%)` | Latar hero |
| `--gradient-text` | `linear-gradient(to right, #60a5fa, #a855f7)` | Teks gradient |
| `--gradient-card` | `linear-gradient(135deg, rgba(59,130,246,0.08), rgba(168,85,247,0.04))` | Hover kad |

### Bayang (Neo-morphism & Glass)

| Token | Nilai | Guna |
|---|---|---|
| `--shadow-neo` | `8px 8px 16px rgba(0,0,0,0.3), -4px -4px 12px rgba(255,255,255,0.03)` | Kad, certificate |
| `--shadow-neo-sm` | `4px 4px 8px rgba(0,0,0,0.3), -2px -2px 6px rgba(255,255,255,0.02)` | Input, badge |
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.3)` | Header scrolled, mobile nav |
| `--shadow-glow` | `0 0 30px rgba(59,130,246,0.15)` | Card hover |
| `--shadow-card` | `0 4px 20px rgba(0,0,0,0.2)` | Kad biasa |
| `--shadow-button` | `0 4px 15px rgba(59,130,246,0.3)` | Butang primer |

### Glassmorphism Tokens

| Token | Nilai | Guna |
|---|---|---|
| `--glass-blur` | `12px` | Kekaburan backdrop |
| `--glass-border` | `1px solid rgba(255,255,255,0.06)` | Sempadan glass |
| `--glass-bg` | `rgba(30,41,59,0.5)` | Latar glass |

### Penggunaan Warna

- **Aksen biru (#3b82f6)** — Butang primer, logo accent, hover links, fokus, card hover
- **Gradient aksen** — Butang primer, nav button hover
- **Gradient hero** — Latar hero dengan radial gradient navy gelap
- **Gradient teks** — Tajuk hero, teks khas (biru ke ungu)
- **Neo-morphism** — Kad, input, certificate: bayang luar lembut + highlight
- **Glassmorphism** — Header scrolled, mobile nav, input, certificate seal, learn items
- **Fokus** — Outline 2px `--color-surface-muted` dengan glow ring
- **Disabled** — Opacity 0.4, cursor not-allowed

### Glassmorphism & Neo-morphism: Kesan Visual

**Glassmorphism** dicapai melalui:
```css
background: var(--glass-bg);
backdrop-filter: blur(var(--glass-blur));
-webkit-backdrop-filter: blur(var(--glass-blur));
border: var(--glass-border);
box-shadow: var(--shadow-glass);
```

**Neo-morphism** dicapai melalui bayang dua arah:
```css
box-shadow: var(--shadow-neo);
/* 8px 8px 16px rgba(0,0,0,0.3) — bayang gelap bawah kanan
   -4px -4px 12px rgba(255,255,255,0.03) — highlight atas kiri */
```

---

## 3. Tipografi

### Font Family
- **Font Utama**: `'Raleway', sans-serif` — digunakan untuk semua teks
- **Monospace**: `'Courier New', monospace` — kod dalam tetingkap kod
- **Weight**: 500 (regular), 700 (bold)

### Saiz Fon

| Token | Nilai | Guna |
|---|---|---|
| `--font-size-xs` | `0px` | (tidak digunakan secara praktikal) |
| `--font-size-sm` | `12px` | Label, metadata, caption |
| `--font-size-md` | `16px` | Pautan nav, kandungan kecil |
| `--font-size-lg` | `19.28px` | Teks body, penerangan |
| `--font-size-xl` | `22.56px` | Tajuk kad, subheading |
| `--font-size-2xl` | `42.23px` | Tajuk bahagian, hero title |
| `--font-size-3xl` | `71.8px` | (tidak digunakan) |
| `--font-size-4xl` | `75.01px` | Tajuk sijil |

### Line Height
- Body: `calc(28.9176px / 19.2784px)` = **1.5**
- Heading: **1.3**

---

## 4. Jarak (Spacing)

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

---

## 5. Jejari & Bayang

| Token | Nilai | Guna |
|---|---|---|
| `--radius-xs` | `6.4px` | Butang |
| `--radius-sm` | `12px` | Input, badge, detail item sijil |
| `--radius-md` | `16px` | Kad, code window, learn item |
| `--radius-lg` | `24px` | Certificate, glass panel |

### Bayang (Lihat 2. Palet Warna > Bayang untuk senarai penuh)
- Neo-morphism: bayang dua arah (gelap + highlight) untuk efek timbul
- Glassmorphism: bayang lembut untuk lapisan kaca
- Glow: bayang bercahaya untuk hover kad
- Button: bayang biru untuk butang primer

---

## 6. Gerakan (Motion)

| Token | Masa | Guna |
|---|---|---|
| `--motion-instant` | `100ms` | Scale on button active |
| `--motion-fast` | `150ms` | Warna, opacity, border hover |
| `--motion-normal` | `170ms` | Togol menu, FAQ ikon |
| `--motion-slow` | `300ms` | Mobile nav slide, header scroll, FAQ accordion |
| `--motion-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Kad hover, animasi semula jadi |

### Prinsip Gerakan
- Transisi standard guna `ease`
- Animasi timbul (kad, butang) guna `--motion-spring` untuk efek lantunan semula jadi
- `prefers-reduced-motion: reduce` — semua animasi dihentikan (duration 0.01ms)

---

## 7. Komponen UI

### 7.1 Butang (`.btn`)

| Varian | Latar | Sempadan | Teks | Hover | Bayang |
|---|---|---|---|---|---|---|
| `.btn-primary` | `--gradient-accent` | Tiada | `--color-text-primary` | `brightness(1.15)`, naik 2px | `--shadow-button` |
| `.btn-secondary` | Transparent | `1px solid --color-border-strong` | `--color-text-primary` | `--color-surface-raised` | Tiada |
| `.btn-ghost` | Transparent | Tiada | `--color-text-primary` | `--color-surface-raised` | Tiada |
| `.btn-nav` | Transparent | `1px solid --color-surface-muted` | `--color-surface-muted` | `--gradient-accent`, teks putih | `--shadow-button` |

- Min height/width: **44px** (WCAG 2.5.5)
- Border-radius: `--radius-xs` (6.4px)
- Active: `transform: scale(0.97)` (100ms)
- Loading: kelas `.btn-loading` — spinner pseudo-element, teks disembunyi
- Butang primer guna **gradient biru ke ungu** + bayang biru untuk efek premium

### 7.2 Kad Kursus (`.course-card`)
- Latar: `--color-surface-raised`
- Border: 1px solid transparent → hover jadi `--color-surface-muted`
- Hover: `translateY(-6px)` (300ms, spring easing)
- Padding: `--space-6`
- Tajuk: `-webkit-line-clamp: 2`
- Penerangan: `-webkit-line-clamp: 3`
- Bayang: `--shadow-card` (biasa) → `--shadow-glow` (hover)
- Hover gradient: `--gradient-card` melalui `::before` pseudo-element
- Duration badge: `rgba(59, 130, 246, 0.15)` latar, `#60a5fa` teks

### 7.3 Akordion FAQ (`.faq-item`)
- Border bawah: `1px solid rgba(255,255,255,0.08)`
- Soalan: button lebar penuh, teks kiri
- Jawapan: `max-height` transition (0 → 200px)
- Ikon `+` berputar 45° bila aktif
- Satu item dibuka pada satu masa

### 7.4 Borang (`.form-group`)
- Input: latar `--glass-bg` + `backdrop-filter: blur(4px)`, border `--color-border-strong`
- Bayang: `--shadow-neo-sm` (neo-morphism ringan)
- Fokus: outline 2px `--color-surface-muted` + box-shadow glow ring
- Ralat: `.has-error` — border `--color-surface-muted`
- Disabled: opacity 0.4
- Placeholder: `#666`
- Label (borang daftar): uppercase, `font-size-sm`, weight 700

### 7.5 Navigasi
- Header: fixed, transition latar 300ms
- `.scrolled`: `--glass-bg` + `backdrop-filter: blur(12px)` + `--shadow-glass`
- Nav link: uppercase, `letter-spacing: 0.08em`, opacity 0.8
- Nav link hover: opacity 1, warna aksen
- Garis bawah animasi: `::after` — width 0 → 100% pada hover
- Mobile: toggle hamburger, menu slide dari kanan (80vw, max 400px) — **glassmorphism**
- Escape: tutup menu, fokus balik ke butang togol

### 7.6 Sijil (`.certificate`)
- Latar: `--color-surface-raised`
- Border: 2px solid `--color-surface-muted`
- Bayang: `--shadow-neo` + `0 0 60px rgba(59,130,246,0.08)` (neo-morphism + glow)
- Radius: `--radius-lg` (24px)
- Nama: saiz `--font-size-3xl`, warna aksen
- Seal: glassmorphism (`--glass-bg` + `blur(8px)` + `--shadow-neo-sm`)
- Detail items: glassmorphism ringan
- Gradient lapisan: `--gradient-card` melalui `::before`
- Print: header/footer/actions disembunyi, background dikekalkan, border biru pejal

### 7.7 Halaman Kursus (sub-page)
- Hero: 60vh, padding-top 120px, guna `--gradient-hero` + `::after` fade ke base
- Meta badge: glassmorphism (`--glass-bg` + `blur(8px)` + `--shadow-neo-sm`)
- Learn grid: `repeat(auto-fit, minmax(250px, 1fr))`
- Learn item: glassmorphism + `--shadow-neo-sm` + hover naik + `--shadow-neo`
- Curriculum: border antara item, module label warna `#60a5fa`

---

## 8. Tokens Lain

| Kategori | Token | Nilai | Guna |
|---|---|---|---|
| Font | `--font-family-primary` | `'Raleway', sans-serif` | Tajuk |
| Font | `--font-family-stack` | `'Raleway', sans-serif` | Body |
| Saiz | `--font-size-base` | `19.2784px` | Saiz fon body root |

---

## 9. Responsif

- Breakpoint: **768px**
- Grid hero: 2 lajur → 1 lajur (visual di atas)
- Grid kursus: auto-fit, min 280px
- Navigasi: fixed sidebar dari kanan
- Butang mobile toggle: display flex (tersembunyi >768px)
- Tajuk hero: 3xl → 2xl

---

## 10. Pengecualian & Nota

- `rgba()` dibenarkan untuk lapisan, overlay, dan elemen hiasan
- `#666` dibenarkan untuk placeholder — bukan teks kandungan
- `rem` dibenarkan untuk logo (1.6rem) — pengecualian kecil
- Warna dot merah/kuning/hijau dalam code-window — hardcode untuk realisme
- Warna sintaks kod (`#ff79c6`, `#50fa7b`, `#f1fa8c`) — hardcode untuk tema kod

---

## 11. Ubahsuai Terkini (Rujukan: state-of-protocol.github.io/Jom-mula-coding)

Palet telah diubah daripada tema merah jambu/hitam ke tema biru/navy:
- **Latar**: `#000000` → `#0f172a`
- **Aksen**: `#e3356f` (merah jambu) → `#3b82f6` (biru)
- **Kad**: `#1c1c1c` → `#1e293b`
- **Sempadan**: `#a9a9a9` → `#334155`
- **Teks**: `#fafafa` → `#f1f5f9`

Kesan baru ditambah:
- **Glassmorphism**: Header scrolled, mobile nav, input, badge, certificate seal
- **Neo-morphism**: Kad, certificate, learn items, code window
- **Gradient**: Hero background (navy radial), butang (biru ke ungu), teks (biru ke ungu)

---

## 12. Database Architecture

### Aliran Data
```
Pelajar → apply.html → Google Apps Script API → Google Sheets
                                              ↕ (fallback)
                                       Node.js server → data/students.json
                                              ↕ (fallback)
                                       localStorage (browser)
```

### Google Sheets Struktur (Sheet: "Pelajar")
| id | fullName | email | phone | address | github | social | portfolio | linkedin | course | experience | motivation | referral | submittedAt |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

### Setup GAS
1. Buka https://script.google.com/
2. Projek Baru → salin `gas/Code.gs`
3. Tukar `SHEET_ID` (dari URL Google Sheets)
4. Deploy → Web App → "Anyone" access
5. Letak URL di `apply.html` dan `certificate.html` pembolehubah `GAS_URL`
