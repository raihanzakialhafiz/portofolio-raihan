import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Backdrop from "./Backdrop/Backdrop";

// Urutan keluar: konten terangkat & memudar → layar memudar → unmount.
const LIFT_AT = 1200;
const FADE_AT = 1600;
const HIDE_AT = 2600;

const PreLoader = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [lifted, setLifted] = useState(false);
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLifted(true), LIFT_AT),
      setTimeout(() => setFaded(true), FADE_AT),
      setTimeout(() => setVisible(false), HIDE_AT),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={t("hero.greeting")}
      className={`fixed inset-0 w-full h-dvh bg-[var(--color-ink)] z-[var(--z-overlay)] overflow-hidden transition-opacity duration-1000 ${
        faded ? "opacity-0" : "opacity-100"
      }`}
    >
      <Backdrop />

      {/* Berlabuh di tepi bawah — ruang kosong di atasnya adalah bagian desain,
          bukan kekosongan yang perlu diisi. */}
      <div className="absolute inset-x-0 bottom-0 px-6 sm:px-10 pb-10 sm:pb-14">
        <div
          className={`mx-auto max-w-7xl transition-[opacity,transform] duration-700 ease-out ${
            lifted ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Wordmark identik dengan navbar — kesinambungan merek sejak detik nol */}
          <p className="font-display text-2xl sm:text-3xl font-bold text-white select-none">
            Raihan<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-sm text-zinc-500">{t("hero.profileTitle")}</p>

          {/* Hairline + segmen aksen menyapu. Memakai gradien yang sama dengan
              rule pembuka tiap section, jadi bahasanya konsisten. */}
          <div className="mt-6 h-px w-full overflow-hidden bg-zinc-800">
            <span className="preloader-sweep block h-px w-1/4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
