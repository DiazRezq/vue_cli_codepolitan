import Vue from "vue";
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

library.add(faShoppingCart, faDollarSign, faTrash);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
