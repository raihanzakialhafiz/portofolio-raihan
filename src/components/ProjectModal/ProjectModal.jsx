import React, { useState, useEffect, useCallback } from 'react';
import { FiX, FiGithub, FiCalendar, FiUser, FiCode } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const CATEGORY_STYLES = {
  'Web App':    'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Mobile App': 'bg-green-500/15 text-green-400 border-green-500/30',
  'Integration':'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'Full Stack': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
};

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 280);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const catClass = CATEGORY_STYLES[project?.category] ?? 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30';

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' }}
    >
      {/* Modal card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-2xl max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl"
        style={{
          boxShadow: '0 0 60px rgba(168,85,247,0.15), 0 30px 60px rgba(0,0,0,0.6)',
          transform: isClosing ? 'translateY(20px) scale(0.97)' : 'translateY(0) scale(1)',
          opacity: isClosing ? 0 : 1,
          transition: 'transform 0.28s ease, opacity 0.28s ease',
        }}
      >
        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-0 bg-zinc-950 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-zinc-700" />
        </div>

        {/* ── Hero Image ── */}
        <div className="relative flex-shrink-0 h-44 sm:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.03)' }}
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <FiX size={15} />
          </button>

          {/* Category badge */}
          {project.category && (
            <span
              className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border ${catClass}`}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {project.category}
            </span>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-3 sm:pb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-lg">
              {project.title}
            </h2>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto flex-1 flex flex-col gap-4 sm:gap-5 p-4 sm:p-6">

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
            {project.client && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <FiUser size={13} className="text-cyan-400 flex-shrink-0" />
                <span>{project.client}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <FiCalendar size={13} className="text-cyan-400 flex-shrink-0" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>

          <div className="w-full h-px bg-zinc-800" />

          {/* Description */}
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Tech Stack */}
          {project.techStack?.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <FiCode size={13} className="text-cyan-400" />
                <h4 className="text-xs sm:text-sm font-semibold text-zinc-300">{t("projects.techStack")}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 font-semibold text-white rounded-2xl p-3 sm:p-3.5 w-full transition-all duration-300 hover:-translate-y-0.5 text-sm"
              style={{ background: 'linear-gradient(135deg, #0891b2, #7c3aed)', boxShadow: '0 8px 24px rgba(124,58,237,0.3)' }}
            >
              <FiGithub size={16} />
              <span>{t("projects.viewSource")}</span>
            </a>
          ) : (
            <div className="mt-auto inline-flex items-center justify-center gap-2 font-semibold rounded-2xl p-3 sm:p-3.5 w-full text-sm text-zinc-600 border border-zinc-800 bg-zinc-900/50 cursor-not-allowed select-none">
              <FiGithub size={16} />
              <span>{t("projects.sourceUnavailable")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
