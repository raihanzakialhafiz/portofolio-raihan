import { useTranslation } from "react-i18next";

/**
 * Tombol pengungkap bertahap.
 * Dipakai Experience, Certificates, dan Projects supaya suara komponennya sama
 * dan menambah entri baru tidak memperberat tampilan awal.
 */
const ShowMore = ({ expanded, remaining, onToggle }) => {
  const { t } = useTranslation();
  if (remaining <= 0 && !expanded) return null;

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="group inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-[color,background-color,border-color] duration-200 hover:border-cyan-500/50 hover:text-cyan-300 cursor-pointer"
      >
        {expanded ? t("common.showLess") : t("common.showMore", { count: remaining })}
        <i
          className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default ShowMore;
