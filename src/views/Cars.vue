<template>
  <div class="car row d-flex justify-content-center">
    <car v-for="(carObj) in cars" :key="carObj._id" :carData="carObj" />
  </div>
</template>

<script>
import Car from "../components/Car";

export default {
  name: "Cars",
  mounted() {
    this.$store.dispatch("getCars");
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  components: {
    Car
  }
};
</script>

<style>
</style>