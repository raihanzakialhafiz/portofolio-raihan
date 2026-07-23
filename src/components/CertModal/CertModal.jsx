import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const CertModal = ({ cert, onClose, onPrev, onNext, position }) => {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);
  const [closing, setClosing] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => { onClose(); setClosing(false); }, 260);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Gambar & status error direset saat pindah sertifikat lewat prev/next.
  useEffect(() => {
    setImgError(false);
    setZoomed(false);
  }, [cert?.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") return zoomed ? setZoomed(false) : handleClose();
      if (zoomed) return;
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose, onPrev, onNext, zoomed]);

  if (!cert) return null;

  const hasImage = cert.image && !imgError;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col"
        style={{
          boxShadow: `0 0 50px ${cert.colorFrom}20, 0 20px 50px rgba(0,0,0,0.7)`,
          transform: closing ? "translateY(20px) scale(0.97)" : "translateY(0) scale(1)",
          opacity: closing ? 0 : 1,
          transition: "transform 0.26s ease, opacity 0.26s ease",
        }}
      >
        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-zinc-700" />
        </div>

        {/* Top gradient bar */}
        <div className="h-1 w-full"
             style={{ background: `linear-gradient(90deg, ${cert.colorFrom}, ${cert.colorTo})` }} />

        {/* Image / placeholder */}
        <div className="relative bg-zinc-900 flex items-center justify-center overflow-hidden"
             style={{ minHeight: hasImage ? "180px" : "140px" }}>

          {hasImage ? (
            <button
              type="button"
              onClick={() => setZoomed(true)}
              title={t("common.enlarge")}
              className="w-full cursor-zoom-in"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain max-h-64"
                onError={() => setImgError(true)}
              />
            </button>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-8 px-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-xl"
                   style={{ background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})` }}>
                <i className={cert.icon} />
              </div>
              <p className="text-zinc-500 text-xs text-center leading-relaxed">
                {t("certs.noImage")}
              </p>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white transition-[color,background-color,border-color,transform] hover:scale-110"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <i className="ri-close-line text-base" />
          </button>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col gap-4">

          {/* Title + issuer */}
          <div>
            <h3 className="text-lg font-bold text-white leading-snug mb-1">{cert.title}</h3>
            <p className="text-sm text-zinc-400 flex items-center gap-1.5">
              <i className="ri-building-line text-zinc-600 text-sm" />
              {cert.issuer}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                background: `${cert.colorFrom}18`,
                color: cert.colorFrom,
                border: `1px solid ${cert.colorFrom}40`,
              }}
            >
              <i className="ri-calendar-line" />
              {cert.year}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
              <i className="ri-verified-badge-line" />
              {t("certs.verified")}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-2.5">
            {/* Google Drive button — primary */}
            {cert.driveUrl ? (
              <a
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm text-white w-full transition-[color,background-color,border-color] hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})`,
                  boxShadow: `0 6px 20px ${cert.colorFrom}30`,
                }}
              >
                <i className="ri-drive-line text-base" />
                {t("certs.viewOnDrive")}
              </a>
            ) : (
              /* Disabled state */
              <div className="flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm text-zinc-600 w-full border border-zinc-800 bg-zinc-900/50 cursor-not-allowed select-none">
                <i className="ri-drive-line text-base" />
                {t("certs.driveUnavailable")}
              </div>
            )}
          </div>

          {/* Navigasi antar sertifikat — tak perlu tutup lalu cari lagi.
              Panah keyboard ← → juga aktif. */}
          {onPrev && onNext && (
            <div className="flex items-center justify-between border-t border-zinc-800 pt-3 -mb-1">
              <button
                type="button"
                onClick={onPrev}
                aria-label={t("common.prev")}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/60 transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-base" />
                {t("common.prev")}
              </button>
              <span className="text-[11px] text-zinc-600 tabular-nums">{position}</span>
              <button
                type="button"
                onClick={onNext}
                aria-label={t("common.next")}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/60 transition-colors cursor-pointer"
              >
                {t("common.next")}
                <i className="ri-arrow-right-s-line text-base" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lapisan zoom — teks sertifikat sebelumnya terlalu kecil untuk dibaca */}
      {zoomed && hasImage && (
        <div
          onClick={(e) => { e.stopPropagation(); setZoomed(false); }}
          className="fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="max-h-[92vh] max-w-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CertModal;
