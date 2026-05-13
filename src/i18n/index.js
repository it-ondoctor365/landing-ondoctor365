import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";

export const LANGUAGES = [
  { code: "es", label: "Español", country: "ar" },
  { code: "en", label: "English", country: "us" },
  // { code: "pt", label: "Português", country: "br" },
];

export function flagUrl(country) {
  return `https://flagcdn.com/w20/${country}.png`;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { es: { translation: es }, en: { translation: en } },
    fallbackLng: "es",
    supportedLngs: LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
