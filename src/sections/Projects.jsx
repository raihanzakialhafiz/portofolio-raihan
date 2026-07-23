import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChromaGrid from "../components/ChromaGrid/ChromaGrid";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import ShowMore from "../components/ShowMore";
import { listProjects } from "../data";
import { pick } from "../i18n";
import { aosProps } from "../lib/aos";

// Tiga dulu; sisanya di balik tombol supaya tetap ringan saat proyek bertambah.
const INITIAL = 3;

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const [selectedId, setSelectedId] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // Field teks proyek disimpan dwibahasa → resolusikan sekali sesuai bahasa aktif.
  const projects = listProjects.map((p) => ({
    ...p,
    title: pick(p.title, lang),
    subtitle: pick(p.subtitle, lang),
    fullDescription: pick(p.fullDescription, lang),
    duration: pick(p.duration, lang),
    client: pick(p.client, lang),
  }));

  const visible = expanded ? projects : projects.slice(0, INITIAL);
  const remaining = projects.length - visible.length;

  // Simpan id (bukan objeknya) supaya modal yang terbuka ikut berganti bahasa.
  const selectedIndex = projects.findIndex((p) => p.id === selectedId);
  const selected = selectedIndex >= 0 ? projects[selectedIndex] : null;
  const step = (dir) => {
    const next = (selectedIndex + dir + projects.length) % projects.length;
    setSelectedId(projects[next].id);
  };

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
            items={visible}
            onItemClick={(project) => setSelectedId(project.id)}
            radius={500}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        <ShowMore
          expanded={expanded}
          remaining={remaining}
          onToggle={() => setExpanded((v) => !v)}
        />
      </div>

      <ProjectModal
        isOpen={!!selected}
        onClose={() => setSelectedId(null)}
        project={selected}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        position={`${selectedIndex + 1}/${projects.length}`}
      />
    </>
  );
};

export default Projects;
