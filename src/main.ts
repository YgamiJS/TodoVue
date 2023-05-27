import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { i18nConfig } from "./i18n";
import App from "./App.vue";
import "@/assets/scss/App.scss";

const app = createApp(App);

app.use(createI18n(i18nConfig));
app.use(createPinia());

app.mount("#app");
