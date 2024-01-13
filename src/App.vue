<template>
  <div id="app" class="container mt-5">
    <h1>Id Shop</h1>
    <ProductList :products="products" :maximum="maximum"></ProductList>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 20,
      products: [],
    };
  },
  components: {
    // FontAwesomeIcon,
    ProductList,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>
