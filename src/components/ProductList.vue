<template>
  <transition-group
    name="fade"
    tag="div"
    @before-enter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row d-none mb-3"
      v-for="(item, index) in ShowItem"
      :key="item.id"
      v-bind:data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add', item)">+</button>
      </div>
      <div class="col-sm-4">
        <img v-bind:src="item.image" alt="" class="img-fluid d-block" />
      </div>
      <div class="col-sm-6 mt-5">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-3">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: {
    Price,
  },
  props: ["products", "maximum"],
  computed: {
    ShowItem: function () {
      let max = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 animated fadeOutLeft";
      }, delay);
    },
  },
};
</script>
