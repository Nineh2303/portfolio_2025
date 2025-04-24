import { createI18n } from "vue-i18n";

import vi from './vi.json'
import en from './en.json'

const messages = {
    en,
    vi,
  }
const savedLocale = localStorage.getItem('locale') || 'en'

const i18n= createI18n({
    legacy: false, // Use Composition API
    locale: savedLocale, // default locale
    fallbackLocale: 'en',
    messages,
})

export default i18n