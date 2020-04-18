import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

Vue.use(VueI18n);

// console.log(messages);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  // console.log(locales('./en/about.json'));
  const messages: LocaleMessages = {};
  
  locales.keys().forEach(key => {
    // console.log("key:" +key);
    const matched = key.match(/\/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\./i);
    // console.log(matched);
    
    if (matched && matched.length > 1) {
      const locale = matched[1];
      const localeMsgs = messages[locale];
      const newMsgs = {...localeMsgs, ...locales(key)};
      messages[locale] = newMsgs;
    }
  });
  return messages;
}

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});



// export const i18n = new VueI18n({
//   locale: "en", // set locale
//   fallbackLocale: "en"
// });

// function setI18nLanguage(lang: any) {
//   i18n.locale = lang;
//   return lang;
// }

// export function loadLanguageAsync(lang: any, moduleName: any) {
//   If the same language
//   if (i18n.locale === lang) {
//     return Promise.resolve(setI18nLanguage(lang));
//   }

//   If the language was already loaded
//   if (loadedLanguages.includes(lang)) {
//     console.log("Already includes lang:" + lang);
//     // return Promise.resolve(setI18nLanguage(lang));
//   }

//   If the language hasn't been loaded yet
//   return import(
//     /* webpackChunkName: "[request]" */ `@/locales/${moduleName}_${lang}.json`
//   ).then(messages => {
//     i18n.mergeLocaleMessage(lang, messages.default);
//     return setI18nLanguage(lang);
//   });
// }
