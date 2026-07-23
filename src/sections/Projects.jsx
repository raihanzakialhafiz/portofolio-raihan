import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChromaGrid from "../components/ChromaGrid/ChromaGrid";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import { listProjects } from "../data";
import { pick } from "../i18n";
import { aosProps } from "../lib/aos";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const [selectedId, setSelectedId] = useState(null);

  // Field teks proyek disimpan dwibahasa → resolusikan sekali sesuai bahasa aktif.
  const projects = listProjects.map((p) => ({
    ...p,
    title: pick(p.title, lang),
    subtitle: pick(p.subtitle, lang),
    fullDescription: pick(p.fullDescription, lang),
    duration: pick(p.duration, lang),
    client: pick(p.client, lang),
  }));

  // Simpan id (bukan objeknya) supaya modal yang terbuka ikut berganti bahasa.
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <>
      <div className="proyek mt-24 sm:mt-32 py-6 sm:py-10" id="project" {...aosProps()} />

      <SectionHeader
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        align="center"
        titleClass="text-3xl sm:text-4xl font-bold mb-2"
      />

      <div className="proyek-box mt-14">
        <div style={{ height: "auto", position: "relative" }} {...aosProps({ delay: 400 })}>
          <ChromaGrid
            items={projects}
            onItemClick={(project) => setSelectedId(project.id)}
            radius={500}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>

      <ProjectModal isOpen={!!selected} onClose={() => setSelectedId(null)} project={selected} />
    </>
  );
};

export default Projects;
