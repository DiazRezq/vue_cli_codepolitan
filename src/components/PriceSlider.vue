<template>
  <transition
    name="custom"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
  >
    <div v-if="sliderStatus">
      <div class="align-items-center" :class="sliderState">
        <label for="" class="font-weight-bold mr-2">MAX</label>
        <input
          type="number"
          name=""
          id=""
          class="form-control mx-2"
          style="width: 60px; text-align: center"
          v-model="maxAmount"
          @change="$emit('update:maximum', maxAmount)"
        />
        <input
          type="range"
          class="custom"
          min="0"
          max="200"
          v-model="maxAmount"
          @input="$parent.$emit('update:maximum', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  data: function () {
    return {
      maxAmount: 50,
    };
  },
  props: ["sliderStatus", "maximum"],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style>
fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
