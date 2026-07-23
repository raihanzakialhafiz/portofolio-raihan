/**
 * Latar halaman — menggantikan mesh WebGL "Aurora".
 *
 * Aurora-blob (mesh warna organik yang mengalir di belakang hero) adalah default
 * desain generatif 2022–2023 dan terbaca sebagai template dalam hitungan milidetik.
 * Penggantinya mengikuti resep anti-slop: gradien dua-stop + grain halus,
 * statis — tidak ada gerak abadi yang membuat halaman tak pernah diam.
 */
const Backdrop = () => (
  <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
    {/* Gradien dua-stop nyaris netral. Chroma sengaja sangat rendah (0.008)
        supaya latar terbaca sebagai gelap bersih, bukan permukaan bercorak. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, oklch(19% 0.008 220) 0%, var(--color-ink) 55%)",
      }}
    />

    {/* Grain — opacity < 0.1 sesuai aturan */}
    <svg className="absolute inset-0 h-full w-full opacity-[0.05]">
      <filter id="backdrop-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#backdrop-grain)" />
    </svg>
  </div>
);

export default Backdrop;
