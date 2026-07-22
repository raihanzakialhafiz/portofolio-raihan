import Tools1 from "/assets/tools/html.png";
import Tools2 from "/assets/tools/css.png";
import Tools3 from "/assets/tools/js.png";
import Tools4 from "/assets/tools/php.png";
import Tools5 from "/assets/tools/mysql.png";
import Tools6 from "/assets/tools/reactjs.png";
import Tools7 from "/assets/tools/tailwind.png";
import Tools8 from "/assets/tools/bootstrap.png";
import Tools9 from "/assets/tools/nodejs.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/vscode.png";
import Tools12 from "/assets/tools/firebase.png";
import Tools13 from "/assets/tools/vite.png";
// Ikon Laravel/Vue/Flutter belum ada sebagai PNG lokal → pakai react-icons (SVG).
import { SiLaravel, SiVuedotjs, SiFlutter } from "react-icons/si";

// CATATAN DWIBAHASA
// Field teks yang berubah menurut bahasa ditulis sebagai objek { en, id }
// dan dibaca lewat helper `pick(value, lang)` dari src/i18n.
// Field berupa nama diri (nama institusi, judul sertifikat) tetap string biasa.

export const listTools = [
  { id: 1, gambar: Tools1, nama: "HTML", ket: { en: "Markup Language", id: "Bahasa Markup" }, dad: "100" },
  { id: 2, gambar: Tools2, nama: "CSS", ket: { en: "Styling Language", id: "Bahasa Styling" }, dad: "200" },
  { id: 3, gambar: Tools3, nama: "JavaScript", ket: { en: "Language", id: "Bahasa Pemrograman" }, dad: "300" },
  { id: 4, gambar: Tools4, nama: "PHP", ket: { en: "Language", id: "Bahasa Pemrograman" }, dad: "400" },
  { id: 5, Icon: SiLaravel, color: "#FF2D20", nama: "Laravel", ket: { en: "PHP Framework", id: "Framework PHP" }, dad: "500" },
  { id: 6, gambar: Tools5, nama: "MySQL", ket: { en: "Database", id: "Basis Data" }, dad: "600" },
  { id: 7, gambar: Tools6, nama: "React JS", ket: { en: "Framework", id: "Framework" }, dad: "700" },
  { id: 8, Icon: SiVuedotjs, color: "#42B883", nama: "Vue.js", ket: { en: "Framework", id: "Framework" }, dad: "800" },
  { id: 9, gambar: Tools7, nama: "Tailwind CSS", ket: { en: "CSS Framework", id: "Framework CSS" }, dad: "900" },
  { id: 10, gambar: Tools8, nama: "Bootstrap", ket: { en: "CSS Framework", id: "Framework CSS" }, dad: "1000" },
  { id: 11, gambar: Tools9, nama: "Node JS", ket: { en: "JavaScript Runtime", id: "Runtime JavaScript" }, dad: "1100" },
  { id: 12, Icon: SiFlutter, color: "#02569B", nama: "Flutter", ket: { en: "Mobile Framework", id: "Framework Mobile" }, dad: "1200" },
  { id: 13, gambar: Tools10, nama: "GitHub", ket: { en: "Version Control", id: "Kontrol Versi" }, dad: "1300" },
  { id: 14, gambar: Tools11, nama: "VS Code", ket: { en: "Code Editor", id: "Editor Kode" }, dad: "1400" },
  { id: 15, gambar: Tools12, nama: "Firebase", ket: { en: "Backend Service", id: "Layanan Backend" }, dad: "1500" },
  { id: 16, gambar: Tools13, nama: "Vite", ket: { en: "Build Tool", id: "Build Tool" }, dad: "1600" },
];

// type: "work" | "education" | "organization"
export const listExperience = [
  {
    id: 1,
    type: "work",
    period: { en: "Dec 2025 – Jun 2026", id: "Des 2025 – Jun 2026" },
    title: { en: "Full Stack Developer", id: "Full Stack Developer" },
    place: "Politeknik ATI Padang",
    badge: { en: "Internship", id: "Magang" },
    desc: {
      en: "Responsible for computer-based information technology activities covering planning, analysis, design, implementation, and operation of information systems. Developed and maintained web applications with Laravel and Vue.js across front-end and back-end, including IT infrastructure maintenance, troubleshooting, and system optimization.",
      id: "Bertanggung jawab atas kegiatan teknologi informasi berbasis komputer, meliputi perencanaan, analisis, desain, implementasi, dan pengoperasian sistem informasi. Mengembangkan dan memelihara aplikasi web menggunakan Laravel dan Vue.js untuk front-end maupun back-end, termasuk pemeliharaan infrastruktur IT, troubleshooting, dan optimasi sistem.",
    },
    delay: "0",
  },
  {
    id: 2,
    type: "work",
    period: { en: "Feb – May 2025", id: "Feb – Mei 2025" },
    title: { en: "Full Stack Web Developer", id: "Full Stack Web Developer" },
    place: "PT Media Sarana Data",
    badge: { en: "Internship", id: "Magang" },
    desc: {
      en: "Built a web-based appointment booking system to address inefficiencies of manual booking in clinics and consultation services. Developed with Laravel & Vue.js and a RESTful API following Agile Scrum. Features: authentication, service scheduling, reviews, Mapbox integration, email verification, and OTP-based password reset.",
      id: "Mengembangkan Sistem Pemesanan Janji temu berbasis web untuk mengatasi ketidakefisienan pemesanan manual di sektor klinik dan konsultasi. Dibangun menggunakan Laravel & Vue.js dengan RESTful API mengikuti Agile Scrum. Fitur: autentikasi, penjadwalan layanan, ulasan, integrasi Mapbox, verifikasi email, dan reset sandi berbasis OTP.",
    },
    delay: "100",
  },
  {
    id: 3,
    type: "work",
    period: { en: "Aug 2024 – Jan 2025", id: "Agt 2024 – Jan 2025" },
    title: { en: "Full Stack Web Developer", id: "Full Stack Web Developer" },
    place: "PT Media Sarana Data",
    badge: { en: "Internship", id: "Magang" },
    desc: {
      en: "Developed an integration system between Sentry (issue monitoring platform) and OpenProject (project management system) to automate issue transfer. Features include an issue statistics dashboard, integrated project management, and an admin-only user management page.",
      id: "Mengembangkan sistem integrasi antara Sentry (platform pemantauan isu) dan OpenProject (sistem manajemen proyek) untuk mengotomatiskan transfer isu. Fitur meliputi dashboard statistik isu, manajemen proyek terintegrasi, dan halaman manajemen pengguna khusus admin.",
    },
    delay: "200",
  },
  {
    id: 4,
    type: "work",
    period: { en: "Feb – Jun 2024", id: "Feb – Jun 2024" },
    title: { en: "Student Intern", id: "Mahasiswa Magang" },
    place: { en: "Dukcapil, Sukoharjo Regency", id: "Dukcapil Kabupaten Sukoharjo" },
    badge: { en: "Internship", id: "Magang" },
    desc: {
      en: "Developed a web-based system to facilitate data collection of vulnerable populations and make it easier for the community to report data quickly and efficiently. Replaced a previous service abandoned by the former programmer with a more accessible approach.",
      id: "Mengembangkan sistem berbasis web untuk memfasilitasi pengumpulan data penduduk rentan dan memudahkan masyarakat melaporkan data secara cepat dan efisien. Menggantikan layanan sebelumnya yang ditinggalkan programmer lama dengan pendekatan yang lebih mudah diakses.",
    },
    delay: "300",
  },
  {
    id: 5,
    type: "work",
    period: { en: "Aug – Sep 2023", id: "Agt – Sep 2023" },
    title: { en: "Mobile App Developer", id: "Mobile App Developer" },
    place: "UNS — Application Mobile Development",
    badge: { en: "Project", id: "Proyek" },
    desc: {
      en: "Built a cinema ticket booking mobile app with Flutter and Google authentication. Users can browse currently showing films, access film details including synopsis and rating, and select seats according to their preference.",
      id: "Mengembangkan aplikasi mobile pemesanan tiket bioskop menggunakan Flutter dengan autentikasi Google. Pengguna dapat melihat film yang sedang tayang, mengakses detail film termasuk sinopsis dan rating, serta memilih kursi sesuai preferensi.",
    },
    delay: "400",
  },
  {
    id: 6,
    type: "work",
    period: { en: "May – Jun 2023", id: "Mei – Jun 2023" },
    title: { en: "Web Developer", id: "Web Developer" },
    place: "UNS — Web Development Project",
    badge: { en: "Project", id: "Proyek" },
    desc: {
      en: "Built a car rental website with client-server architecture for three user types: renters, car owners, and admins. Admins have full access to manage all data, bookings, user records, and car listings.",
      id: "Membangun website rental mobil dengan arsitektur client-server untuk tiga jenis pengguna: penyewa, pemilik mobil, dan admin. Admin memiliki akses penuh untuk mengelola semua data, pemesanan, data pengguna, dan daftar mobil.",
    },
    delay: "500",
  },
  {
    id: 7,
    type: "education",
    period: { en: "Aug 2022 – Aug 2025", id: "Agt 2022 – Agt 2025" },
    title: { en: "Informatics Engineering", id: "Teknik Informatika" },
    place: "Universitas Sebelas Maret (UNS) — Surakarta",
    badge: { en: "GPA 3.80 / 4.00", id: "IPK 3.80 / 4.00" },
    desc: {
      en: "Focused on software engineering and full stack web development. Built expertise in Laravel, Vue.js, React, and a range of modern web technologies. Active in the student technology community and software development projects.",
      id: "Berfokus pada rekayasa perangkat lunak dan pengembangan web full stack. Membangun keahlian di bidang Laravel, Vue.js, React, dan berbagai teknologi web modern. Aktif dalam komunitas teknologi mahasiswa dan proyek pengembangan perangkat lunak.",
    },
    delay: "600",
  },
  {
    id: 8,
    type: "organization",
    period: { en: "Sep 2019 – Dec 2021", id: "Sep 2019 – Des 2021" },
    title: { en: "Chairman of MPK", id: "Ketua MPK" },
    place: "MPK — Bukittinggi",
    badge: { en: "Organization", id: "Organisasi" },
    desc: {
      en: "The Class Representative Assembly is an official organization that supports school community activities. MPK plays an important role in motivating students to actively participate in the school environment.",
      id: "Majelis Perwakilan Kelas adalah organisasi resmi untuk membantu kelancaran kegiatan komunitas sekolah. MPK berperan penting dalam memotivasi siswa agar aktif berpartisipasi dalam lingkungan sekolah.",
    },
    delay: "700",
  },
  {
    id: 9,
    type: "organization",
    period: { en: "Feb 2020 – Dec 2021", id: "Feb 2020 – Des 2021" },
    title: { en: "Environmental Affairs Coordinator", id: "Sekbid Lingkungan Hidup" },
    place: "KKR — Bukittinggi",
    badge: { en: "Organization", id: "Organisasi" },
    desc: {
      en: "The Environmental Maintenance Section is responsible for arranging, planning, and designing environmental care programs to maintain ecosystem balance and improve environmental quality.",
      id: "Seksi Pemeliharaan Lingkungan bertugas menyusun, merencanakan, dan merancang program kegiatan pemeliharaan lingkungan untuk menjaga keseimbangan ekosistem dan meningkatkan kualitas lingkungan hidup.",
    },
    delay: "800",
  },
];

// Gambar sertifikat ada di public/assets/certs/ (di-serve apa adanya oleh Vite).
const certImg = (file) =>
  `${import.meta.env.BASE_URL}assets/certs/${encodeURIComponent(file)}`;

// Judul & penerbit sertifikat adalah nama diri → tidak diterjemahkan.
export const listCerts = [
  {
    id: 1,
    title: "Sertifikasi Programmer",
    issuer: "BNSP",
    year: "2025",
    icon: "ri-award-line",
    colorFrom: "#fbbf24",
    colorTo: "#f97316",
    image: certImg("bnsp.png"),
    driveUrl: "https://drive.google.com/file/d/1zm9-PgD_TCbWCMQiA5A1nry4GNkJlmLC/view?usp=sharing",
    delay: "0",
  },
  {
    id: 2,
    title: "DD Database Design Learner",
    issuer: "Oracle Academy",
    year: "2024",
    icon: "ri-database-2-line",
    colorFrom: "#ef4444",
    colorTo: "#b91c1c",
    image: certImg("DD Database.png"),
    driveUrl: "https://drive.google.com/file/d/11go_Y3B1ICm0pnT7tabfMGGdwxIimQ-k/view?usp=sharing",
    delay: "100",
  },
  {
    id: 3,
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    year: "2023",
    icon: "ri-code-s-slash-line",
    colorFrom: "#f97316",
    colorTo: "#dc2626",
    image: certImg("Java Fundamentals.png"),
    driveUrl: "https://drive.google.com/file/d/1W2nlfX-3j22QeIYFDRQVzZ1Fi9Yhk2K5/view?usp=sharing",
    delay: "200",
  },
  {
    id: 4,
    title: "DP Database Programming with SQL",
    issuer: "Oracle Academy",
    year: "2024",
    icon: "ri-database-line",
    colorFrom: "#ef4444",
    colorTo: "#b91c1c",
    image: certImg("DP Database.png"),
    driveUrl: "https://drive.google.com/file/d/1-nOd_1j9miOnMDHDXDw7mQNJnE76qX53/view?usp=sharing",
    delay: "300",
  },
  {
    id: 5,
    title: "Introduction to IoT & CCNA RS",
    issuer: "Cisco",
    year: "2023",
    icon: "ri-wifi-line",
    colorFrom: "#3b82f6",
    colorTo: "#1d4ed8",
    image: certImg("Introduction to IoT.png"),
    driveUrl: "https://drive.google.com/file/d/1sjGUQiWlJ6QAuXvdhhvdWDCNMF8WjME_/view?usp=sharing",
    delay: "400",
  },
  {
    id: 6,
    title: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat",
    year: "2023",
    icon: "ri-server-line",
    colorFrom: "#dc2626",
    colorTo: "#991b1b",
    image: certImg("RH134.png"),
    driveUrl: "https://drive.google.com/file/d/1gkbX3OztovpkN6ROU8Htd80tYzkqZo8K/view?usp=sharing",
    delay: "500",
  },
  {
    id: 7,
    title: "SQL",
    issuer: "Sololearn",
    year: "2023",
    icon: "ri-terminal-box-line",
    colorFrom: "#06b6d4",
    colorTo: "#0891b2",
    image: certImg("SQL.png"),
    driveUrl: "https://drive.google.com/file/d/1SeEtTMm966eKruz32e5UWKDJ_64WwOMj/view?usp=sharing",
    delay: "600",
  },
  {
    id: 8,
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    year: "2023",
    icon: "ri-server-line",
    colorFrom: "#dc2626",
    colorTo: "#991b1b",
    image: certImg("RH124.png"),
    driveUrl: "https://drive.google.com/file/d/1Am1vQzUZITN79Y-NIZ1ggwGaD-Y05OJz/view?usp=sharing",
    delay: "700",
  },
  {
    id: 9,
    title: "Red Hat OpenStack Administration I (CL110)",
    issuer: "Red Hat",
    year: "2023",
    icon: "ri-cloud-line",
    colorFrom: "#7c3aed",
    colorTo: "#6d28d9",
    image: certImg("CL110.png"),
    driveUrl: "https://drive.google.com/file/d/1-D5n3-zSaapreEZ8KiaCOxVOBhI-0bQb/view?usp=sharing",
    delay: "800",
  },
];

// Screenshot proyek ada di public/assets/project/ (di-serve apa adanya oleh Vite).
const projectImg = (file) =>
  `${import.meta.env.BASE_URL}assets/project/${encodeURIComponent(file)}`;

export const listProyek = [
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
    dad: "100",
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
    dad: "200",
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
    dad: "300",
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
    dad: "400",
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
    dad: "500",
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
    dad: "600",
  },
];
