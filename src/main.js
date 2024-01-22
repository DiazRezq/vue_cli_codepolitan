import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

library.add(faShoppingCart, faDollarSign, faTrash);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      components: Products,
    },
    {
      path: "/checkout",
      components: Checkout,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
