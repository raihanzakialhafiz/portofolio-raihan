import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ShinyText from "../components/ShinyText/ShinyText";
import BlurText from "../components/BlurText/BlurText";
import LanyardLazy from "../components/Lanyard/LanyardLazy";
import { aosProps } from "../lib/aos";

const STATS = [
  { value: "6", suffix: "+", icon: "ri-folder-check-line", tone: "violet", labelKey: "about.projectsFinished" },
  { value: "3", suffix: "+", icon: "ri-time-line", tone: "cyan", labelKey: "about.yearsExperience" },
  { value: "3.80", suffix: "/4.00", icon: "ri-graduation-cap-line", tone: "amber", labelKey: "about.gpa" },
];

const TONE = {
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
};

const Divider = () => (
  <div
    className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent"
    aria-hidden="true"
  />
);

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;

  return (
    <div
      className="mt-10 sm:mt-15 mx-auto w-full max-w-[1600px] rounded-2xl sm:rounded-3xl border-[3px] sm:border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-4 sm:p-6"
      id="about"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 pt-0 px-3 sm:px-6 md:px-8"
        {...aosProps()}
      >
        {/* Kolom kiri */}
        <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
          <div className="flex-1 text-left">
            <div className="mb-4 sm:mb-5">
              <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("about.title")}</h2>
            </div>

            <BlurText
              key={lang}
              text={t("about.description")}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
            />

            <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-6 sm:gap-y-0 mb-4 w-full">
              {STATS.map((stat, i) => (
                <Fragment key={stat.labelKey}>
                  {i > 0 && <Divider />}
                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg border mb-1 ${TONE[stat.tone]}`}>
                      <i className={`${stat.icon} text-sm`} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {stat.value}
                      <span className="text-violet-500">{stat.suffix}</span>
                    </h3>
                    <p className="text-sm text-zinc-400">{t(stat.labelKey)}</p>
                  </div>
                </Fragment>
              ))}
            </div>

            <ShinyText
              text={t("about.motto")}
              disabled={false}
              speed={3}
              className="text-sm md:text-base text-violet-400"
            />
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
          <LanyardLazy position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
};

export default About;
