// Field teks dwibahasa ditulis sebagai objek { en, id } dan dibaca lewat
// helper pick(value, lang) dari src/i18n. Nama diri tetap string biasa.

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
