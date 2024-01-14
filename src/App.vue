<template>
  <div id="app" class="container mt-5">
    <h1>Id Shop</h1>
    <PriceSlider
      :slider-status="sliderStatus"
      :maximum.sync="maximum"
    ></PriceSlider>
    <ProductList
      :products="products"
      :maximum="maximum"
      @add="AddItem"
    ></ProductList>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PriceSlider from "./components/PriceSlider.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 20,
      products: [],
      cart: [],
      sliderStatus: true,
    };
  },
  components: {
    // FontAwesomeIcon,
    ProductList,
    PriceSlider,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },

  methods: {
    AddItem: function (product) {
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
  },
};
</script>
