import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import id from "./locales/id.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "id"],
    // "id-ID" / "en-US" ikut dipetakan ke "id" / "en"
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      // Pilihan tersimpan menang; kalau belum ada, ikuti bahasa browser
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
  });

// Jaga atribut lang pada <html> tetap sinkron (penting untuk aksesibilitas & SEO)
const syncHtmlLang = (lng) => {
  document.documentElement.setAttribute("lang", lng);
};
syncHtmlLang(i18n.resolvedLanguage);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;

/**
 * Ambil nilai sesuai bahasa dari field dwibahasa di data.js.
 * Menerima objek { en, id } maupun string biasa (dilewatkan apa adanya),
 * sehingga field yang tidak diterjemahkan tetap aman.
 */
export const pick = (value, lang) =>
  value && typeof value === "object" && !Array.isArray(value)
    ? value[lang] ?? value.en
    : value;
