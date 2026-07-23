import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";
import { listTools } from "../data";
import { pick } from "../i18n";
import { aosProps } from "../lib/aos";

const Tools = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;

  return (
    <div className="tools mt-20 sm:mt-28">
      <SectionHeader
        title={t("tools.title")}
        subtitle={t("tools.subtitle")}
        subtitleClass="w-full sm:w-2/5 text-sm sm:text-base leading-loose text-zinc-500"
      />

      <div className="tools-box mt-8 sm:mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 sm:gap-4">
        {listTools.map((tool) => (
          <div
            key={tool.id}
            {...aosProps({ delay: tool.delay })}
            className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 border border-zinc-700/50 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/90 hover:border-zinc-500/70 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-[color,background-color,border-color] duration-300 group cursor-default"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-zinc-800/80 border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-800 p-1.5 sm:p-2 flex items-center justify-center transition-[color,background-color,border-color] duration-300">
              {tool.image ? (
                <img src={tool.image} alt={tool.name} className="w-full h-full object-contain" />
              ) : (
                <tool.Icon aria-label={tool.name} className="w-full h-full" style={{ color: tool.color }} />
              )}
            </div>

            {/* Nama tool sebagai teks biasa — 16 kilau tak-berhenti membuat
                halaman tidak pernah diam. Kilau disisakan untuk aksen saja. */}
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm sm:text-base font-semibold text-zinc-100 truncate">{tool.name}</p>
              <p className="text-sm text-zinc-400 truncate">{pick(tool.label, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
