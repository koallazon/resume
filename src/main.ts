import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import VueGtag from "vue-gtag";

createApp(App)
  .use(store)
  .use(router)
  .use(VueGtag, {
    config: { id: "G-BYCDE4J88X" },
  })
  .mount("#app");
