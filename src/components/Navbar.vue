<template>
  <nav class="navbar navbar-ligth bg-light">
    <div class="navbar-text ml-auto d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$emit('toggle-slide')">
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ml-2" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-success">{{ cartQty }}</span>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price :value="Number(cartTotal)"></price>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropDownCart"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge badge-pill badge-warning align-text-top mr-1">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <b>{{ (item.product.price * item.qty) | currencyFormat }}</b>
              <a
                href="#"
                class="badge badge-danger text-white"
                @click.stop="$emit('delete-item', index)"
              >
                <font-awesome-icon
                  icon="trash"
                  class="mx-auto"
                ></font-awesome-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./Price.vue";
export default {
  name: "navbar",
  components: {
    FontAwesomeIcon,
    Price,
  },
  props: ["cart", "cartQty", "cartTotal"],
  filters: {
    currencyFormat: function (value) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });
      return formatter.format(value);
    },
  },
};
</script>
