<template>
  <div class="header-container">
    <h1>Id Shop</h1>
    <Navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"
    ></Navbar>
    <PriceSlider
      :slider-status="sliderStatus"
      :maximum.sync="maximum"
    ></PriceSlider>
    <ProductList
      :products="products"
      :maximum="maximum"
      @add-item="AddItem"
    ></ProductList>
  </div>
</template>

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
import Navbar from "./Navbar.vue";
import PriceSlider from "./PriceSlider.vue";
import ProductList from "./ProductList.vue";

export default {
  name: "products",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  components: {
    Navbar,
    PriceSlider,
    ProductList,
  },
  methods: {
    toggleSlider: function () {
      this.$emit("toggle");
    },
    AddItem: function name(item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>
