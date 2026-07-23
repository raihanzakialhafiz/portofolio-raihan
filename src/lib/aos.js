/**
 * Atribut AOS yang sebelumnya ditulis ulang di ~20 tempat dengan nilai sama.
 * Contoh: <div {...aosProps({ delay: 300 })}>
 */
export const aosProps = ({ delay, duration = 1000, animation = "fade-up" } = {}) => ({
  "data-aos": animation,
  "data-aos-duration": String(duration),
  ...(delay != null ? { "data-aos-delay": String(delay) } : {}),
  "data-aos-once": "true",
});
