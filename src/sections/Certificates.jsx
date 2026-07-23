import { useState } from "react";
import { useTranslation } from "react-i18next";
import CertModal from "../components/CertModal/CertModal";
import ShowMore from "../components/ShowMore";
import { listCerts } from "../data";
import { aosProps } from "../lib/aos";

// Baris yang tampil sebelum "tampilkan lainnya".
const INITIAL = 6;

// Grid dipakai ulang oleh header kolom dan tiap baris supaya kolomnya sejajar.
const ROW_GRID =
  "grid grid-cols-[1fr_auto] sm:grid-cols-[1.6rem_1fr_10rem_4rem_1.5rem] items-center gap-x-3 sm:gap-x-4";

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? listCerts : listCerts.slice(0, INITIAL);
  const remaining = listCerts.length - visible.length;

  const selectedIndex = listCerts.findIndex((c) => c.id === selectedId);
  const selected = selectedIndex >= 0 ? listCerts[selectedIndex] : null;
  const step = (dir) => {
    const next = (selectedIndex + dir + listCerts.length) % listCerts.length;
    setSelectedId(listCerts[next].id);
  };

  return (
    <div className="mt-20 sm:mt-28" id="certs">
      <div
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8"
        {...aosProps()}
      >
        <div>
          <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-violet-500 mb-3" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-1 leading-snug">
            {t("certs.title")}
          </h2>
          <p className="text-sm sm:text-base text-zinc-500">{t("certs.subtitle")}</p>
        </div>
        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 tabular-nums">
          {t("certs.count", { count: listCerts.length })}
        </span>
      </div>

      {/* Spec sheet — semua kredensial berbobot sama, dibaca seperti daftar resmi.
          Header kolom memberi konteks tanpa perlu mengulang label di tiap baris. */}
      <div {...aosProps({ delay: 150 })}>
        <div
          className={`${ROW_GRID} hidden sm:grid px-3 pb-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600`}
        >
          <span aria-hidden="true" />
          <span>{t("certs.colCredential")}</span>
          <span>{t("certs.colIssuer")}</span>
          <span className="text-right">{t("certs.colYear")}</span>
          <span aria-hidden="true" />
        </div>

        <ul className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {visible.map((cert) => (
            <li key={cert.id}>
              <button
                type="button"
                onClick={() => setSelectedId(cert.id)}
                aria-label={`${cert.title} — ${cert.issuer}, ${cert.year}`}
                className={`${ROW_GRID} group/row w-full px-3 py-4 text-left cursor-pointer hover:bg-zinc-900/50 transition-colors duration-150`}
              >
                <i
                  className={`${cert.icon} text-base row-start-1 hidden sm:block`}
                  style={{ color: cert.colorFrom }}
                />

                <span className="min-w-0">
                  <span className="block text-sm text-zinc-200 group-hover/row:text-white transition-colors truncate">
                    {cert.title}
                  </span>
                  {/* Penerbit ikut baris judul di mobile, karena kolomnya disembunyikan */}
                  <span className="sm:hidden block text-xs text-zinc-500 mt-0.5 truncate">
                    {cert.issuer}
                  </span>
                </span>

                <span className="hidden sm:block text-xs text-zinc-500 truncate">
                  {cert.issuer}
                </span>

                <span className="text-xs text-zinc-500 tabular-nums text-right shrink-0">
                  {cert.year}
                </span>

                <i className="hidden sm:block ri-arrow-right-s-line text-zinc-700 group-hover/row:text-cyan-400 transition-colors" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ShowMore
        expanded={expanded}
        remaining={remaining}
        onToggle={() => setExpanded((v) => !v)}
      />

      {selected && (
        <CertModal
          cert={selected}
          onClose={() => setSelectedId(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          position={`${selectedIndex + 1}/${listCerts.length}`}
        />
      )}
    </div>
  );
};

export default Certificates;
