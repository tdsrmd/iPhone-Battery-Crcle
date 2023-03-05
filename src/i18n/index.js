import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      welcome: "İphone Şarj Döngüsü Öğrenme",
      content1: "Analiz dosyanıza",
      content2:
        "Ayarlar > Gizlilik ve Güvenlik > Analizler ve İyileştirmeler > Analiz Verileri",
      content3: "adımlarını izleyerek erişebilirsiniz.",
    },
  },
  en: {
    translation: {
      welcome: "Learn iPhone Charge Cycle",
      content1: "You can access your analytics file by going to",
      content2:
        "Settings > Privacy & Security > Analytics & Improvements > Analytics Data",
      content3: "",
    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "en",
  resources,
});

export default i18n;
