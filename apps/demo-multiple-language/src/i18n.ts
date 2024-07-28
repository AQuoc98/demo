import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from './common/locales/en/translation.json';
import global_fr from './common/locales/fr/translation.json';
import global_ge from './common/locales/ge/translation.json';

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
    ge: {
      global: global_ge,
    },
  },
});

export default i18n;
