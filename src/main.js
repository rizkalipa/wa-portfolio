import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./app.scss"
import "tailwindcss/dist/tailwind.css"
import "../src/assets/css/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
