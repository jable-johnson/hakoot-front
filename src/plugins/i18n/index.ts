import { createI18n } from 'vue-i18n-lite';
import { vi } from '@/translate/vi';
import { en } from '@/translate/en';

const i18n = createI18n({
  locale: navigator.language.toLowerCase(),
  fallbackLocale: 'en',
  messages: {
    vi,
    en,
    'en-us': en,
  },
});

export default i18n;
