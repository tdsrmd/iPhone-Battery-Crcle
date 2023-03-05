import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      welcome: "İphone",
    },
  },
  en: {
    translation: {
      welcome: "Hi Trying",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "tr",
  resources,
});

export default i18n;
