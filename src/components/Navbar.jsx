import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LINKS = [
  { href: "#home",       key: "home" },
  { href: "#about",      key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#certs",      key: "certs" },
  { href: "#project",    key: "projects" },
  { href: "#contact",    key: "contact" },
];

// Tombol ID | EN
const LangSwitch = ({ className = "" }) => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div
      className={`flex items-center rounded-full border border-zinc-700/60 bg-zinc-900/60 p-0.5 ${className}`}
      role="group"
      aria-label={i18n.t("nav.switchLanguage")}
    >
      {["id", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={current === lng}
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-[color,background-color,border-color] duration-200 cursor-pointer ${
            current === lng
              ? "bg-cyan-500/20 text-cyan-300"
              : "text-zinc-500 hover:text-zinc-200"
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
};

const Navbar = ({ hidden = false }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // highlight active section
      const ids = LINKS.map(l => l.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          return;
        }
      }
      setActive("home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Early-return diletakkan setelah semua hook agar tidak melanggar Rules of Hooks
  if (hidden) return null;

  return (
    /* N10 — scroll-morph: di puncak halaman nav menempel di tepi tanpa latar dan
       tanpa hairline border-bottom (sidik jari "AI nav"); begitu di-scroll ia
       menyusut jadi pill mengambang yang terlepas dari tepi layar. */
    <nav
      className={`fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-[padding] duration-300 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-[max-width,background-color,border-color,border-radius,padding] duration-300 ease-out ${
          scrolled
            ? "max-w-3xl rounded-full border border-zinc-700/60 bg-zinc-950/80 backdrop-blur-xl px-4 md:px-5 py-2 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.8)]"
            : "max-w-7xl rounded-none border border-transparent px-6 md:px-10 py-1"
        }`}
      >

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 text-xl font-bold text-white select-none">
          Raihan<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map(({ href, key }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {t(`nav.${key}`)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 rounded-full transition-[color,background-color,border-color] duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Tombol CTA dilepas: duplikat dengan link "Kontak", dan membuat pill
            melewati batas lebar yang membuatnya kembali terbaca sebagai bar. */}
        <div className="hidden md:flex items-center">
          <LangSwitch />
        </div>

        {/* Language switch + hamburger (mobile) */}
        <div className="md:hidden flex items-center gap-2">
        <LangSwitch />
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={t("nav.toggleMenu")}
        >
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-[transform,opacity] duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-[transform,opacity] duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-[transform,opacity] duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="mx-4 mt-2 flex flex-col p-3 gap-1 rounded-2xl border border-zinc-700/60 bg-zinc-950/90 backdrop-blur-xl shadow-[0_8px_28px_-14px_rgba(0,0,0,0.8)]">
          {LINKS.map(({ href, key }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
