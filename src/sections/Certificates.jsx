import { useState } from "react";
import { useTranslation } from "react-i18next";
import CertModal from "../components/CertModal/CertModal";
import { listCerts } from "../data";
import { aosProps } from "../lib/aos";

const Certificates = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-24 sm:mt-32" id="certs">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8" {...aosProps()}>
        <div>
          <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-violet-500 mb-3" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-1 leading-snug">{t("certs.title")}</h2>
          <p className="text-sm sm:text-base text-zinc-500">{t("certs.subtitle")}</p>
        </div>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
          {t("certs.count", { count: listCerts.length })}
        </span>
      </div>

      {/* 2 kolom di mobile, 3 di desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {listCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelected(cert)}
            className="relative flex flex-col p-3 sm:p-4 border border-zinc-700/50 rounded-2xl bg-zinc-900/60 backdrop-blur-sm cursor-pointer overflow-hidden hover:border-zinc-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group"
            {...aosProps({ delay: cert.delay, duration: 800 })}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, ${cert.colorFrom}, ${cert.colorTo})` }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top, ${cert.colorFrom}14, transparent 65%)` }}
            />

            <div className="flex items-start justify-between mb-2.5 z-10">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg text-white shadow-md shrink-0"
                style={{ background: `linear-gradient(135deg, ${cert.colorFrom}, ${cert.colorTo})` }}
              >
                <i className={cert.icon} />
              </div>
              <span
                className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
                style={{
                  color: cert.colorFrom,
                  border: `1px solid ${cert.colorFrom}45`,
                  background: `${cert.colorFrom}15`,
                }}
              >
                {cert.year}
              </span>
            </div>

            <div className="z-10 flex-1 min-w-0">
              <h4 className="font-bold text-xs sm:text-sm leading-snug mb-1 group-hover:text-white transition-colors line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-500 truncate">{cert.issuer}</p>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-zinc-700/50 z-10 flex items-center justify-between">
              {cert.driveUrl ? (
                <a
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <i className="ri-drive-line text-sm" />
                  <span>{t("certs.viewDocument")}</span>
                </a>
              ) : (
                <span className="text-[10px] sm:text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors flex items-center gap-1">
                  <i className="ri-link text-xs" />
                  {t("certs.noLink")}
                </span>
              )}
              <span className="text-[10px] sm:text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors flex items-center gap-1">
                <i className="ri-eye-line" /> {t("certs.detail")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default Certificates;
