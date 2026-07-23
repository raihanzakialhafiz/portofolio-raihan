import { useState } from "react";
import { useTranslation } from "react-i18next";
import { listExperience } from "../data";
import { pick } from "../i18n";
import { aosProps } from "../lib/aos";

// Warna per jenis entri — sebelumnya ternary bersarang tiga tingkat.
const TYPE_STYLES = {
  work: {
    bar: "from-cyan-500 to-teal-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    iconText: "ri-briefcase-4-line text-cyan-400",
    period: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    tab: "bg-cyan-500/20 border-cyan-500/60 text-cyan-300",
  },
  education: {
    bar: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconText: "ri-graduation-cap-line text-violet-400",
    period: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    tab: "bg-violet-500/20 border-violet-500/60 text-violet-300",
  },
  organization: {
    bar: "from-amber-500 to-yellow-400",
    iconBg: "bg-amber-500/15 border-amber-500/30",
    iconText: "ri-group-line text-amber-400",
    period: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    tab: "bg-amber-500/20 border-amber-500/60 text-amber-300",
  },
};

const FILTERS = [
  { key: "all", icon: "ri-apps-line" },
  { key: "work", icon: "ri-briefcase-4-line" },
  { key: "education", icon: "ri-graduation-cap-line" },
  { key: "organization", icon: "ri-group-line" },
];

const ACTIVE_ALL_TAB = "bg-white/10 border-white/30 text-white";
const IDLE_TAB = "bg-zinc-900/60 border-zinc-700/50 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const [filter, setFilter] = useState("all");
  // AOS memberi opacity:0 pada [data-aos] dan baru menambah .aos-animate lewat event
  // scroll. Kartu yang dibuat ulang saat filter berubah sudah berada di viewport,
  // jadi tidak pernah dianimasikan dan tetap tak terlihat. Karena itu animasi hanya
  // dipakai untuk render pertama; setelah difilter kartu tampil langsung.
  const [filtered, setFiltered] = useState(false);

  const applyFilter = (key) => {
    setFilter(key);
    setFiltered(true);
  };

  const visible = listExperience.filter((item) => filter === "all" || item.type === filter);

  return (
    <div className="mt-24 sm:mt-32" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div>
          <div {...aosProps()}>
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-snug">{t("experience.title")}</h2>
          </div>
          <p className="text-sm sm:text-base leading-loose text-zinc-500" {...aosProps({ delay: 200 })}>
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2" {...aosProps({ delay: 300 })}>
          {FILTERS.map((tab) => {
            const active = filter === tab.key;
            const activeClass = TYPE_STYLES[tab.key]?.tab ?? ACTIVE_ALL_TAB;
            return (
              <button
                key={tab.key}
                onClick={() => applyFilter(tab.key)}
                aria-pressed={active}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  active ? activeClass : IDLE_TAB
                }`}
              >
                <i className={`${tab.icon} text-base`} />
                {t(`experience.filter.${tab.key}`)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {visible.map((item) => {
          const style = TYPE_STYLES[item.type];
          return (
            <div
              key={item.id}
              className="relative flex gap-4 p-5 bg-zinc-900/60 border border-zinc-700/50 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-zinc-600 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
              {...(filtered ? {} : aosProps({ delay: item.delay, duration: 800 }))}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b rounded-l-2xl ${style.bar}`} />

              <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border ${style.iconBg}`}>
                <i className={`text-lg ${style.iconText}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`text-xs font-bold uppercase tracking-wider ${style.period}`}>
                    {pick(item.period, lang)}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${style.badge}`}>
                    {pick(item.badge, lang)}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-0.5 group-hover:text-white transition-colors leading-snug">
                  {pick(item.title, lang)}
                </h3>
                <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1">
                  <i className="ri-map-pin-line text-zinc-600" />
                  {pick(item.place, lang)}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{pick(item.desc, lang)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
