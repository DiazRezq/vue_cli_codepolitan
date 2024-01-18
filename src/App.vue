<template>
  <div id="app" class="container mt-5">
    <div class="header-container">
      <h1>Id Shop</h1>
      <Navbar
        :cart="cart"
        :cartQty="cartQty"
        :cartTotal="cartTotal"
        @toggle="toggleSLiderStatus"
      ></Navbar>
    </div>
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

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import PriceSlider from "./components/PriceSlider.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 120,
      products: [],
      cart: [],
      sliderStatus: false,
    };
  },
  components: {
    Navbar,
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
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },

  methods: {
    toggleSLiderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
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
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
};
</script>
