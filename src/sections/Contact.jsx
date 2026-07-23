import { useTranslation } from "react-i18next";
import ShinyText from "../components/ShinyText/ShinyText";
import { aosProps } from "../lib/aos";

const SITE_URL = "https://raihanzakialhafiz.github.io/portofolio-raihan/";

// Kanal kontak langsung — murni tautan, tanpa backend/database.
const buildContacts = (t) => [
  {
    label: "WhatsApp",
    value: t("contact.whatsappValue"),
    href: `https://wa.me/6281277751127?text=${encodeURIComponent(t("contact.whatsappText"))}`,
    icon: "ri-whatsapp-line",
    color: "#25D366",
  },
  {
    label: "Email",
    value: "raihanzaki121203@gmail.com",
    href: `mailto:raihanzaki121203@gmail.com?subject=${encodeURIComponent(t("contact.emailSubject"))}`,
    icon: "ri-mail-line",
    color: "#22d3ee",
  },
  {
    label: "LinkedIn",
    value: "in/raihanzaki12",
    href: "https://www.linkedin.com/in/raihanzaki12/",
    icon: "ri-linkedin-fill",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    value: "@raihanzaki03",
    href: "https://github.com/raihanzaki03",
    icon: "ri-github-fill",
    color: "#a1a1aa",
  },
];

const FIELD_CLASS =
  "w-full border border-zinc-700/60 px-4 py-3 rounded-xl placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200";

const Contact = () => {
  const { t } = useTranslation();
  const contacts = buildContacts(t);

  return (
    <div className="kontak mt-24 sm:mt-32" id="contact">
      <div className="flex flex-col items-center" {...aosProps()}>
        <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-3" />
        <h2 className="text-4xl mb-2 font-bold text-center">{t("contact.title")}</h2>
      </div>
      <p className="text-base/loose text-center mb-10 opacity-50" {...aosProps({ delay: 300 })}>
        {t("contact.subtitle")}
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Kontak langsung */}
        <div
          className="flex-1 border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-5 sm:p-8 flex flex-col gap-5 min-h-[300px] relative overflow-hidden shadow-xl"
          {...aosProps({ delay: 400 })}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
          />

          <div className="z-10">
            <h3 className="text-white font-bold text-xl mb-1">{t("contact.connectTitle")}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{t("contact.connectSubtitle")}</p>
          </div>

          <div className="z-10 flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                // mailto: dibuka di tab yang sama agar tidak menyisakan tab kosong
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group/link flex items-center gap-3 p-3 rounded-xl border border-zinc-700/60 bg-zinc-800/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderColor: `${c.color}33` }}
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: `${c.color}1a`, color: c.color, border: `1px solid ${c.color}40` }}
                >
                  <i className={c.icon} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-zinc-200">{c.label}</span>
                  <span className="text-xs text-zinc-500 truncate">{c.value}</span>
                </span>
                <i className="ri-arrow-right-up-line ml-auto text-zinc-600 group-hover/link:text-zinc-300 transition-colors" />
              </a>
            ))}
          </div>

          <span className="z-10 mt-auto self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t("contact.openToWork")}
          </span>
        </div>

        {/* Formulir */}
        <div className="flex-1">
          <form
            action="https://formsubmit.co/raihanzaki121203@gmail.com"
            method="POST"
            className="bg-zinc-900/80 border border-zinc-700/50 p-5 sm:p-8 w-full rounded-2xl backdrop-blur-sm shadow-xl"
            autoComplete="off"
            {...aosProps({ delay: 500 })}
          >
            {/* Opsi FormSubmit */}
            <input type="hidden" name="_subject" value={t("contact.formSubject")} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={SITE_URL} />
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold flex items-center gap-2 text-zinc-300">
                  <i className="ri-user-3-line text-cyan-400 text-base" />
                  {t("contact.formName")}
                </label>
                <input
                  id="name"
                  type="text"
                  name="Name"
                  placeholder={t("contact.formNamePlaceholder")}
                  className={FIELD_CLASS}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold flex items-center gap-2 text-zinc-300">
                  <i className="ri-mail-line text-cyan-400 text-base" />
                  {t("contact.formEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="Email"
                  placeholder={t("contact.formEmailPlaceholder")}
                  className={FIELD_CLASS}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold flex items-center gap-2 text-zinc-300">
                  <i className="ri-message-3-line text-cyan-400 text-base" />
                  {t("contact.formMessage")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  placeholder={t("contact.formMessagePlaceholder")}
                  className={`${FIELD_CLASS} resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-semibold flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500/15 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-[0.98] cursor-pointer transition-all duration-300"
              >
                <i className="ri-send-plane-line text-base" />
                <ShinyText text={t("contact.formSend")} disabled={false} speed={3} className="custom-class" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
