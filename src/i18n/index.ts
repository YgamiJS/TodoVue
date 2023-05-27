import en from "./en.json";
import ru from "./ru.json";

export const messages = { en, ru };

export const i18nConfig = {
  legacy: false,
  fallbackLocale: "en",
  locale: navigator.language.slice(0, 2) || "en",
  messages
};
