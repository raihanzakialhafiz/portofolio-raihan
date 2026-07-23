import { aosProps } from "../lib/aos";

/**
 * Garis gradien + judul (+ subjudul opsional) yang sebelumnya diulang di 6 section.
 */
const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  gradient = "from-cyan-400 to-violet-500",
  titleClass = "text-3xl sm:text-4xl font-bold mb-2 leading-snug",
  subtitleClass = "text-sm sm:text-base leading-loose text-zinc-500",
  subtitleDelay = 300,
}) => {
  const centered = align === "center";

  return (
    <div className={centered ? "flex flex-col items-center" : undefined}>
      <div {...aosProps()}>
        <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${gradient} mb-3`} />
        <h2 className={`${titleClass} ${centered ? "text-center" : ""}`}>{title}</h2>
      </div>

      {subtitle && (
        <p
          className={`${subtitleClass} ${centered ? "text-center max-w-2xl" : ""}`}
          {...aosProps({ delay: subtitleDelay })}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
