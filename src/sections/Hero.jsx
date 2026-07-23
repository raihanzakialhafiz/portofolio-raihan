import { useTranslation } from "react-i18next";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ShinyText from "../components/ShinyText/ShinyText";
import BlurText from "../components/BlurText/BlurText";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const avatar = `${import.meta.env.BASE_URL}assets/raihan.png`;

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-5 sm:mb-6 bg-zinc-900/80 w-fit max-w-full p-3 sm:p-4 rounded-2xl text-sm border border-zinc-700/60 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-sm">
            <img src={avatar} alt={t("hero.avatarAlt")} className="w-10 rounded-md" />
            <q>{t("hero.quote")}</q>
          </div>

          <div className="mb-4 sm:mb-6">
            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <ShinyText text={t("hero.greeting")} disabled={false} speed={3} className="custom-class" />
            </h1>
          </div>

          {/* key={lang} → animasi diputar ulang saat bahasa berganti */}
          <BlurText
            key={lang}
            text={t("hero.blurb")}
            delay={150}
            animateBy="words"
            direction="top"
            className=" mb-6"
          />

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}assets/cv raihan.pdf`}
              download="Raihan_Zaki_Alhafiz_CV.pdf"
              className="font-semibold flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500/15 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <i className="ri-download-2-line text-base" />
              <ShinyText text={t("hero.downloadCv")} disabled={false} speed={3} className="custom-class" />
            </a>
            <a
              href="#project"
              className="font-semibold flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/60 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/80 transition-all duration-300"
            >
              <i className="ri-folder-2-line text-base" />
              <ShinyText text={t("hero.exploreProjects")} disabled={false} speed={3} className="custom-class" />
            </a>
          </div>
        </div>

        <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
          <ProfileCard
            name="Raihan Zaki A"
            title={t("hero.profileTitle")}
            handle="raihanzaki03"
            status={t("hero.profileStatus")}
            contactText={t("hero.profileContact")}
            avatarUrl={avatar}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>
      </div>

      {/* Pemisah Hero → About */}
      <div className="mt-16 sm:mt-20 flex items-center gap-4" aria-hidden="true">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>
    </>
  );
};

export default Hero;
