import { useState } from "react";
import { useTranslation } from "react-i18next";
import ShowMore from "../components/ShowMore";
import { listExperience } from "../data";
import { pick } from "../i18n";
import { aosProps } from "../lib/aos";

// Jumlah entri yang tampil sebelum pengguna menekan "tampilkan lainnya".
const INITIAL = 4;

const TYPE_STYLES = {
  work: {
    node: "bg-cyan-400",
    ring: "ring-cyan-400/25",
    icon: "ri-briefcase-4-line text-cyan-400",
    period: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    tab: "bg-cyan-500/20 border-cyan-500/60 text-cyan-300",
  },
  education: {
    node: "bg-violet-400",
    ring: "ring-violet-400/25",
    icon: "ri-graduation-cap-line text-violet-400",
    period: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    tab: "bg-violet-500/20 border-violet-500/60 text-violet-300",
  },
  organization: {
    node: "bg-amber-400",
    ring: "ring-amber-400/25",
    icon: "ri-group-line text-amber-400",
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
const IDLE_TAB =
  "bg-zinc-900/60 border-zinc-700/50 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  // AOS memberi opacity:0 pada [data-aos] dan menandainya lewat event scroll.
  // Entri yang muncul setelah interaksi sudah berada di viewport, jadi tidak
  // pernah dianimasikan — karena itu animasi hanya dipakai pada render pertama.
  const [interacted, setInteracted] = useState(false);

  const matching = listExperience.filter(
    (item) => filter === "all" || item.type === filter
  );
  const visible = expanded ? matching : matching.slice(0, INITIAL);
  const remaining = matching.length - visible.length;

  const applyFilter = (key) => {
    setFilter(key);
    setExpanded(false);
    setInteracted(true);
  };

  return (
    <div className="mt-28 sm:mt-40" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
        <div>
          <div {...aosProps()}>
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-snug">
              {t("experience.title")}
            </h2>
          </div>
          <p
            className="text-sm sm:text-base leading-loose text-zinc-500"
            {...aosProps({ delay: 200 })}
          >
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2" {...aosProps({ delay: 300 })}>
          {FILTERS.map((tab) => {
            const active = filter === tab.key;
            const count =
              tab.key === "all"
                ? listExperience.length
                : listExperience.filter((i) => i.type === tab.key).length;
            return (
              <button
                key={tab.key}
                onClick={() => applyFilter(tab.key)}
                aria-pressed={active}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-[color,background-color,border-color] duration-200 cursor-pointer ${
                  active ? TYPE_STYLES[tab.key]?.tab ?? ACTIVE_ALL_TAB : IDLE_TAB
                }`}
              >
                <i className={`${tab.icon} text-base`} />
                {t(`experience.filter.${tab.key}`)}
                <span className="text-[11px] tabular-nums opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline — rail tunggal menggantikan grid 9 kartu berbobot sama.
          Urutan kronologis jadi terbaca sebagai perjalanan, bukan tumpukan. */}
      <ol className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-zinc-700 via-zinc-700/60 to-transparent"
        />

        {visible.map((item, i) => {
          const style = TYPE_STYLES[item.type];
          return (
            <li
              key={item.id}
              className="relative pl-8 sm:pl-10 pb-9 last:pb-0"
              {...(interacted ? {} : aosProps({ delay: i * 80, duration: 700 }))}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full ring-4 ${style.node} ${style.ring}`}
              />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className={`text-xs font-bold uppercase tracking-wider tabular-nums ${style.period}`}
                >
                  {pick(item.period, lang)}
                </span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full border font-semibold ${style.badge}`}
                >
                  {pick(item.badge, lang)}
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg leading-snug text-zinc-100">
                {pick(item.title, lang)}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 mb-2 flex items-center gap-1.5">
                <i className={`${style.icon} text-sm`} />
                {pick(item.place, lang)}
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                {pick(item.desc, lang)}
              </p>
            </li>
          );
        })}
      </ol>

      <ShowMore
        expanded={expanded}
        remaining={remaining}
        onToggle={() => {
          setExpanded((v) => !v);
          setInteracted(true);
        }}
      />
    </div>
  );
};

export default Experience;
