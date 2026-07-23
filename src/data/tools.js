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

// Field teks dwibahasa ditulis sebagai objek { en, id } dan dibaca lewat
// helper pick(value, lang) dari src/i18n. Nama diri tetap string biasa.

export const listTools = [
  { id: 1, image: Tools1, name: "HTML", label: { en: "Markup Language", id: "Bahasa Markup" }, delay: "100" },
  { id: 2, image: Tools2, name: "CSS", label: { en: "Styling Language", id: "Bahasa Styling" }, delay: "200" },
  { id: 3, image: Tools3, name: "JavaScript", label: { en: "Language", id: "Bahasa Pemrograman" }, delay: "300" },
  { id: 4, image: Tools4, name: "PHP", label: { en: "Language", id: "Bahasa Pemrograman" }, delay: "400" },
  { id: 5, Icon: SiLaravel, color: "#FF2D20", name: "Laravel", label: { en: "PHP Framework", id: "Framework PHP" }, delay: "500" },
  { id: 6, image: Tools5, name: "MySQL", label: { en: "Database", id: "Basis Data" }, delay: "600" },
  { id: 7, image: Tools6, name: "React JS", label: { en: "Framework", id: "Framework" }, delay: "700" },
  { id: 8, Icon: SiVuedotjs, color: "#42B883", name: "Vue.js", label: { en: "Framework", id: "Framework" }, delay: "800" },
  { id: 9, image: Tools7, name: "Tailwind CSS", label: { en: "CSS Framework", id: "Framework CSS" }, delay: "900" },
  { id: 10, image: Tools8, name: "Bootstrap", label: { en: "CSS Framework", id: "Framework CSS" }, delay: "1000" },
  { id: 11, image: Tools9, name: "Node JS", label: { en: "JavaScript Runtime", id: "Runtime JavaScript" }, delay: "1100" },
  { id: 12, Icon: SiFlutter, color: "#02569B", name: "Flutter", label: { en: "Mobile Framework", id: "Framework Mobile" }, delay: "1200" },
  { id: 13, image: Tools10, name: "GitHub", label: { en: "Version Control", id: "Kontrol Versi" }, delay: "1300" },
  { id: 14, image: Tools11, name: "VS Code", label: { en: "Code Editor", id: "Editor Kode" }, delay: "1400" },
  { id: 15, image: Tools12, name: "Firebase", label: { en: "Backend Service", id: "Layanan Backend" }, delay: "1500" },
  { id: 16, image: Tools13, name: "Vite", label: { en: "Build Tool", id: "Build Tool" }, delay: "1600" },
];
