<template>
  <div id="app" class="container mt-5">
    <h1>Id Shop</h1>
    <p class="animated fadeInRight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque,
      voluptates sit repudiandae, nemo magni nesciunt enim, aspernatur cumque
      rerum totam reprehenderit praesentium. Quia deleniti, quibusdam
      repudiandae sit non eaque?
    </p>
    <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
    <Price :value="4.23"></Price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./components/Price.vue";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Price,
  },
};
</script>
