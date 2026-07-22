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
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/70 shadow-lg shadow-black/30 py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

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
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Language switch + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitch />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 transition-all duration-300"
          >
            <i className="ri-mail-line" />
            {t("nav.cta")}
          </a>
        </div>

        {/* Language switch + hamburger (mobile) */}
        <div className="md:hidden flex items-center gap-2">
        <LangSwitch />
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={t("nav.toggleMenu")}
        >
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-6 py-4 gap-1 bg-zinc-950/95 border-t border-zinc-800/60">
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
