<template>
  <div class="app-container">
    <div class="header-container">
      <h1>Id Shop</h1>
      <Navbar
        :cart="cart"
        :cartQty="cartQty"
        :cartTotal="cartTotal"
        @toggle-slide="toggleSlider"
        @delete-item="deleteItem"
      ></Navbar>
    </div>
    <PriceSlider
      :slider-status="sliderStatus"
      :maximum.sync="maximum"
    ></PriceSlider>
    <ProductList
      :products="products"
      :maximum.sync="maximum"
      @add-item="AddItem"
    ></ProductList>
  </div>
</template>

<style>
.app-container {
  padding-top: 60px;
  margin-top: 15px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
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
