# Panduan Isi Konten

Cara menambah, mengubah, dan menghapus isi portofolio — **tanpa menyentuh kode komponen**.

Semua konten hidup di `src/data/`:

| File | Mengatur bagian |
| --- | --- |
| `src/data/experience.js` | Experience & Education |
| `src/data/certificates.js` | Certificates & Awards |
| `src/data/projects.js` | Projects |
| `src/data/tools.js` | Tools & Teknologi |

Tombol **"Tampilkan N lainnya"** menyesuaikan sendiri saat entri bertambah — tidak ada yang perlu diubah di komponen.

---

## Aturan dasar: field dwibahasa

Field yang **kalimatnya berubah** saat toggle ID/EN ditekan ditulis sebagai objek:

```js
title: { en: "Student Intern", id: "Mahasiswa Magang" }
```

Field berupa **nama diri** — nama institusi, judul sertifikat, nama proyek — tetap string biasa:

```js
place: "PT Media Sarana Data"
```

> **Patokan cepat:** kalau kalimatnya harus berubah saat bahasa diganti, jadikan objek `{ en, id }`. Kalau tidak, biarkan string.

Kalau salah satu bahasa lupa diisi, sistem otomatis jatuh ke `en`.

---

## 1. Experience & Education

**File:** `src/data/experience.js`

### Template salin-tempel

```js
  {
    id: 10,
    type: "work",
    period: { en: "Jan – Mar 2027", id: "Jan – Mar 2027" },
    title:  { en: "Backend Developer", id: "Backend Developer" },
    place:  "Nama Perusahaan",
    badge:  { en: "Internship", id: "Magang" },
    desc: {
      en: "Deskripsi dalam bahasa Inggris.",
      id: "Deskripsi dalam bahasa Indonesia.",
    },
    delay: "900",
  },
```

### Field

| Field | Wajib | Keterangan |
| --- | --- | --- |
| `id` | ✅ | Angka **unik**. Dipakai React sebagai key. |
| `type` | ✅ | Persis salah satu: `"work"` · `"education"` · `"organization"` |
| `period` | ✅ | Rentang waktu. Bulan berbeda antar bahasa (Des/Dec, Agt/Aug, Mei/May). |
| `title` | ✅ | Jabatan atau nama jurusan. |
| `place` | ✅ | Institusi. String biasa, atau objek bila penulisannya beda antar bahasa. |
| `badge` | ✅ | Label kecil: Magang/Internship, Proyek/Project, IPK/GPA. |
| `desc` | ✅ | Paragraf. Dipotong 3 baris di kartu. |
| `delay` | ✅ | Jeda animasi masuk (ms), string. Naikkan ~100 tiap entri. |

> ⚠️ **`type` harus persis salah satu dari tiga nilai itu.**
> Salah ketik — misalnya `"education "` dengan spasi di akhir, atau `"Work"` dengan huruf besar — membuat **seluruh section blank**, karena warna dan ikon diambil dari peta berdasarkan nilai ini.

**Urutan array = urutan di timeline.** Entri terbaru diletakkan di **paling atas**.

Angka pada tombol filter (Kerja 6 · Pendidikan 1 · Organisasi 2) dihitung otomatis dari `type`.

---

## 2. Certificates & Awards

**File:** `src/data/certificates.js`

### Template salin-tempel

```js
  {
    id: 10,
    title: "Nama Sertifikat",
    issuer: "Nama Penerbit",
    year: "2027",
    icon: "ri-award-line",
    colorFrom: "#fbbf24",
    colorTo: "#f97316",
    image: certImg("nama-file.png"),
    driveUrl: "https://drive.google.com/file/d/XXXX/view?usp=sharing",
    delay: "900",
  },
```

### Field

| Field | Wajib | Keterangan |
| --- | --- | --- |
| `id` | ✅ | Angka unik. |
| `title` | ✅ | Judul sertifikat. Nama diri → string biasa. |
| `issuer` | ✅ | Penerbit (BNSP, Oracle Academy, Red Hat, …). |
| `year` | ✅ | Tahun, sebagai **string**. |
| `icon` | ✅ | Kelas [Remixicon](https://remixicon.com), mis. `ri-database-2-line`. |
| `colorFrom` | ✅ | Hex. Mewarnai ikon dan tahun. |
| `colorTo` | ✅ | Hex. Dipakai gradien di modal. |
| `image` | — | `certImg("nama-file.png")` — cukup nama filenya. |
| `driveUrl` | — | Link dokumen. Isi `null` bila belum ada. |
| `delay` | ✅ | Jeda animasi (ms). |

**Gambar** → simpan di `public/assets/certs/`.
Nama file boleh mengandung spasi (mis. `DD Database.png`) — sudah ditangani otomatis.

**Urutan array = urutan tampil.** BNSP berada paling atas semata-mata karena ia entri pertama; geser posisinya di array untuk mengubah urutan.

`driveUrl: null` → baris tetap tampil, hanya tombol Drive-nya yang nonaktif.

---

## 3. Projects

**File:** `src/data/projects.js`

### Template salin-tempel

```js
  {
    id: 7,
    image: projectImg("Nama Proyek.jpeg"),
    title: "Nama Proyek",
    subtitle: {
      en: "Satu baris ringkas untuk kartu...",
      id: "Satu baris ringkas untuk kartu...",
    },
    fullDescription: {
      en: "Paragraf lengkap yang tampil di modal.",
      id: "Paragraf lengkap yang tampil di modal.",
    },
    techStack: ["Laravel", "Vue.js", "MySQL"],
    category: "Web App",
    duration: { en: "Jan – Mar 2027", id: "Jan – Mar 2027" },
    client: "Nama Klien",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/username/repo",
    delay: "700",
  },
```

### Field

| Field | Wajib | Keterangan |
| --- | --- | --- |
| `id` | ✅ | Angka unik. Dipakai navigasi prev/next di modal. |
| `image` | ✅ | `projectImg("Nama File.jpeg")` |
| `title` | ✅ | Nama proyek. |
| `subtitle` | ✅ | Satu baris untuk kartu. |
| `fullDescription` | ✅ | Paragraf untuk modal. |
| `techStack` | — | Array string. Dihilangkan → bagian Tech Stack tidak muncul. |
| `category` | ✅ | `Web App` · `Mobile App` · `Integration` · `Full Stack` |
| `duration` | — | Dihilangkan → baris durasi tidak muncul. |
| `client` | — | Dihilangkan → baris klien tidak muncul. |
| `borderColor` | ✅ | Hex. Warna tepi kartu. |
| `gradient` | ✅ | Gradien latar kartu. |
| `url` | — | Link repo. `null` → tombol source nonaktif. |
| `delay` | ✅ | Jeda animasi (ms). |

**Gambar** → simpan di `public/assets/project/`.
Rasio ideal **16:9** (mis. 1600×900) agar seragam. Kartu memakai `object-fit: cover`, jadi rasio yang jauh berbeda akan terpotong.

> **Jangan mengarang** `duration`, `client`, atau `techStack`. Field opsional lebih baik dikosongkan daripada diisi tebakan — modal otomatis menyembunyikan barisnya.

`category` di luar keempat nilai itu tidak error, hanya warnanya jatuh ke abu-abu netral.

---

## 4. Tools & Teknologi

**File:** `src/data/tools.js`

Ada **dua bentuk entri**, tergantung apakah ikonnya tersedia sebagai PNG lokal.

### A. Pakai PNG lokal (`public/assets/tools/`)

```js
// 1. Tambahkan import di bagian atas file
import Tools14 from "/assets/tools/nextjs.png";

// 2. Tambahkan entri
{ id: 17, image: Tools14, name: "Next.js", label: { en: "Framework", id: "Framework" }, delay: "1700" },
```

### B. Pakai ikon react-icons (bila PNG tidak ada)

```js
// 1. Tambahkan ke import yang sudah ada di atas
import { SiLaravel, SiVuedotjs, SiFlutter, SiGo } from "react-icons/si";

// 2. Tambahkan entri — pakai `Icon` + `color`, bukan `image`
{ id: 17, Icon: SiGo, color: "#00ADD8", name: "Go", label: { en: "Language", id: "Bahasa Pemrograman" }, delay: "1700" },
```

| Field | Keterangan |
| --- | --- |
| `image` **atau** `Icon` | Pilih salah satu, jangan keduanya. |
| `color` | Hanya untuk bentuk B — warna merek ikon. |
| `name` | Nama teknologi. Nama diri → string. |
| `label` | Kategori singkat. Dwibahasa. |
| `delay` | Jeda animasi (ms). |

PNG ikon tersedia di `public/assets/tools/`. Beberapa sudah ada tapi belum dipakai: `ai`, `canva`, `figma`, `kotlin`, `nextjs`, `ts`.

---

## Mengatur jumlah yang tampil di awal

Satu konstanta per section:

| Section | File | Nilai sekarang |
| --- | --- | --- |
| Experience | `src/sections/Experience.jsx` baris 9 | `INITIAL = 4` |
| Certificates | `src/sections/Certificates.jsx` baris 9 | `INITIAL = 6` |
| Projects | `src/sections/Projects.jsx` baris 12 | `INITIAL = 3` |

Tools menampilkan seluruh entri (tidak ada see-more).

---

## Alur kerja

```bash
npm run dev      # lihat perubahan langsung, hot reload
npm run build    # pastikan lolos build sebelum deploy
npm run deploy   # publikasikan ke GitHub Pages
```

Jalankan `npm run build` sebelum deploy. Kesalahan seperti nama file gambar yang keliru akan muncul di sini, bukan setelah situs terbit.

---

## Daftar periksa cepat

Sebelum menyimpan, pastikan:

- [ ] `id` unik di dalam file tersebut
- [ ] `type` pada experience persis `work` / `education` / `organization`
- [ ] Field dwibahasa punya **keduanya**: `en` dan `id`
- [ ] File gambar sudah ada di folder yang benar, nama sama persis (termasuk huruf besar-kecil)
- [ ] Tanda koma `,` di akhir tiap entri
- [ ] `npm run build` lolos
