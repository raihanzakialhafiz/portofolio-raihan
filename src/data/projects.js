// Field teks dwibahasa ditulis sebagai objek { en, id } dan dibaca lewat
// helper pick(value, lang) dari src/i18n. Nama diri tetap string biasa.

// Screenshot proyek ada di public/assets/project/ (di-serve apa adanya oleh Vite).
const projectImg = (file) =>
  `${import.meta.env.BASE_URL}assets/project/${encodeURIComponent(file)}`;

export const listProjects = [
  {
    id: 1,
    image: projectImg("Booking Appointment System.jpeg"),
    title: "Booking Appointment System",
    subtitle: {
      en: "Appointment booking platform: Laravel REST API, two Vue frontends, and a Flutter mobile app...",
      id: "Platform pemesanan janji temu: REST API Laravel, dua frontend Vue, dan aplikasi mobile Flutter...",
    },
    fullDescription: {
      en: "Built to address the inefficiency of manual service booking in clinics and consultation services. Structured as a multi-platform monorepo: a Laravel backend exposing a RESTful API, two Vue.js frontends (user portal and admin panel), and a Flutter mobile app. Key features: user authentication, service scheduling, reviews, email verification, OTP-based password reset, booking status tracking, and meeting location maps via Mapbox GL. The development environment is containerized with Docker Compose. Testing showed 100% success across eight main scenarios.",
      id: "Sistem dikembangkan untuk mengatasi ketidakefisienan pemesanan layanan manual di sektor klinik dan konsultasi. Dibangun sebagai monorepo multi-platform: backend Laravel yang menyediakan RESTful API, dua aplikasi frontend Vue.js (portal pengguna dan panel admin), serta aplikasi mobile Flutter. Fitur utama: autentikasi pengguna, penjadwalan layanan, ulasan, verifikasi email, reset sandi berbasis OTP, pelacakan status pemesanan, dan peta lokasi pertemuan via Mapbox GL. Lingkungan pengembangan dikemas dengan Docker Compose. Pengujian menunjukkan keberhasilan 100% di delapan skenario utama.",
    },
    techStack: ["Laravel", "Vue.js", "Flutter", "Dart", "MySQL", "Mapbox GL", "Docker", "RESTful API"],
    category: "Full Stack",
    duration: { en: "Feb – May 2025", id: "Feb – Mei 2025" },
    client: "PT Media Sarana Data",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rhzarzky/ta-booking-apps",
    delay: "100",
  },
  {
    id: 2,
    image: projectImg("Sistem Pendataan Penduduk Rentan.jpeg"),
    title: { en: "Vulnerable Population Data System", id: "Sistem Pendataan Penduduk Rentan" },
    subtitle: {
      en: "Web system for recording vulnerable population data for Disdukcapil Sukoharjo...",
      id: "Sistem web untuk pendataan penduduk rentan bagi Disdukcapil Sukoharjo...",
    },
    fullDescription: {
      en: "A web-based system that streamlines data collection on vulnerable populations and makes it easier for citizens to report data quickly and efficiently. It replaces a previous service that became inaccessible after being abandoned by the former programmer. With a friendlier approach, the system provides a complete reporting form (reporter details, subject details, and document uploads such as family card, ID card, and birth certificate) plus a report listing page for officers to review and manage incoming data.",
      id: "Mengembangkan sistem berbasis web untuk memfasilitasi pengumpulan data penduduk rentan dan memudahkan masyarakat melaporkan data secara cepat dan efisien. Sistem ini menggantikan layanan sebelumnya yang tidak lagi dapat diakses akibat ditinggalkan programmer sebelumnya. Dengan pendekatan yang lebih ramah pengguna, sistem menyediakan formulir pelaporan penduduk rentan yang lengkap (data pelapor, data terlapor, hingga unggah dokumen seperti KK, KTP, dan akta kelahiran) serta halaman daftar laporan bagi petugas untuk meninjau dan mengelola data masuk.",
    },
    techStack: ["React", "Material UI", "React Query", "React Router", "Axios", "ApexCharts"],
    category: "Web App",
    duration: { en: "Feb – Jun 2024", id: "Feb – Jun 2024" },
    client: { en: "Dukcapil, Sukoharjo Regency", id: "Dukcapil Kab. Sukoharjo" },
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/raihanzaki03/Makepetantuma",
    delay: "200",
  },
  {
    id: 3,
    image: projectImg("Web App Sistem Penjadwalan Kuliah Otomatis.png"),
    title: { en: "Automated Course Scheduling System", id: "Sistem Penjadwalan Kuliah Otomatis" },
    subtitle: {
      en: "SIPENJAD — automated course timetabling for Politeknik ATI Padang...",
      id: "SIPENJAD — penyusunan jadwal perkuliahan otomatis untuk Politeknik ATI Padang...",
    },
    fullDescription: {
      en: "SIPENJAD is an automated course scheduling system that removes manual timetabling work and minimizes clashes between courses, lecturers, and rooms. It covers master data management (study programs, lecturers, rooms, courses, and classes), academic settings (academic year, semester, and block), automatic schedule generation, and a public schedule page filterable by study program, academic year, semester, and block — including a responsive mobile view. Schedules can be exported to PDF and Excel, with authentication powered by Laravel Sanctum.",
      id: "SIPENJAD adalah sistem penjadwalan kuliah otomatis yang membantu penyusunan jadwal perkuliahan tanpa proses manual dan meminimalkan bentrok antara mata kuliah, dosen, dan ruangan. Mencakup pengelolaan master data (program studi, dosen, ruangan, mata kuliah, dan kelas), pengaturan akademik (tahun akademik, semester, dan blok), fitur generate jadwal otomatis, serta halaman jadwal publik yang dapat difilter berdasarkan program studi, tahun akademik, semester, dan blok — termasuk tampilan responsif untuk perangkat mobile. Jadwal dapat diekspor ke PDF dan Excel, dengan autentikasi berbasis Laravel Sanctum.",
    },
    techStack: ["Laravel", "Inertia.js", "Vue 3", "Tailwind CSS", "Vite", "Sanctum"],
    category: "Full Stack",
    client: "Politeknik ATI Padang",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/raihanzakialhafiz/jadwal-atip",
    delay: "300",
  },
  {
    id: 4,
    image: projectImg("Sistem Monitoring Kinerja.jpeg"),
    title: { en: "Performance Agreement Monitoring System", id: "Sistem Monitoring Perjanjian Kinerja" },
    subtitle: {
      en: "Monitoring & evaluation of performance agreement targets for local government...",
      id: "Monitoring & evaluasi capaian perjanjian kinerja instansi pemerintah daerah...",
    },
    fullDescription: {
      en: "A monitoring and evaluation system for performance agreements, tracking achievement of performance indicators in a structured and measurable way. It includes a summary dashboard (indicator count, total achievements, items pending review, and budget realization), quarterly and per-admin progress tracking, a review center for approving achievements, user and fiscal year management, notifications, and reporting. Supports multiple user roles with superadmin access and a mobile view.",
      id: "Sistem monitoring dan evaluasi perjanjian kinerja untuk memantau capaian indikator kinerja secara terstruktur dan terukur. Dilengkapi dashboard ringkasan (jumlah indikator, total capaian, item menunggu review, serta realisasi anggaran), pemantauan progres per triwulan dan per admin, pusat review untuk persetujuan capaian, manajemen pengguna dan tahun anggaran, notifikasi, serta pelaporan. Mendukung banyak peran pengguna dengan akses superadmin dan tampilan mobile.",
    },
    techStack: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS"],
    category: "Full Stack",
    client: { en: "Local Government", id: "Pemerintah Daerah" },
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/raihanzakialhafiz/sitem-perjanjian-kinerja",
    delay: "400",
  },
  {
    id: 5,
    image: projectImg("Inventaris ATK.jpeg"),
    title: { en: "Office Supplies Inventory System", id: "Sistem Inventaris ATK" },
    subtitle: {
      en: "Recording and managing office stationery stock...",
      id: "Pencatatan dan pengelolaan stok Alat Tulis Kantor...",
    },
    fullDescription: {
      en: "An office supplies (ATK) inventory system for recording and managing stock, covering incoming and outgoing goods, category grouping, availability monitoring, and stock condition reporting so office supplies are easier to track and keep in order. Reports can be exported to PDF and Excel. Built with Laravel and Blade as a server-rendered application.",
      id: "Sistem inventaris Alat Tulis Kantor (ATK) untuk pencatatan dan pengelolaan stok barang, mencakup pendataan barang masuk dan keluar, pengelompokan kategori, pemantauan ketersediaan, serta pelaporan kondisi stok agar pengelolaan perlengkapan kantor lebih tertib dan mudah ditelusuri. Laporan dapat diekspor ke PDF dan Excel. Dibangun dengan Laravel dan Blade sebagai aplikasi server-rendered.",
    },
    techStack: ["Laravel", "Blade", "DomPDF", "Laravel Excel"],
    category: "Full Stack",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/raihanzakialhafiz/inventaris",
    delay: "500",
  },
  {
    id: 6,
    image: projectImg("Portofolio.jpeg"),
    title: { en: "Personal Portfolio Website", id: "Website Portofolio Pribadi" },
    subtitle: {
      en: "Interactive portfolio with React, Vite, and 3D elements...",
      id: "Portofolio interaktif dengan React, Vite, dan elemen 3D...",
    },
    fullDescription: {
      en: "A personal portfolio website presenting profile, experience, certifications, and projects. Built with React and Vite, featuring an interactive interface: a tilt-effect profile card, a 3D lanyard card powered by Three.js (React Three Fiber) with physics simulation, a WebGL Aurora background, plus GSAP, Motion, and AOS animations. Optimized with code-splitting so 3D assets load only when needed, keeping initial load light.",
      id: "Website portofolio pribadi yang menampilkan profil, pengalaman, sertifikasi, dan proyek. Dibangun dengan React dan Vite, dengan antarmuka interaktif: kartu profil dengan efek tilt, kartu lanyard 3D berbasis Three.js (React Three Fiber) dengan simulasi physics, latar Aurora berbasis WebGL, serta animasi GSAP, Motion, dan AOS. Dioptimalkan dengan code-splitting sehingga aset 3D hanya dimuat saat dibutuhkan, menjaga waktu muat awal tetap ringan.",
    },
    techStack: ["React", "Vite", "Tailwind CSS", "Three.js", "GSAP", "Motion"],
    category: "Web App",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/raihanzakialhafiz/portofolio-raihan",
    delay: "600",
  },
];
