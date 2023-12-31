import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "@/assets/css/tailwind.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
