import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/router/permission";
import "./global.js";
import "@/assets/index.styl";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
