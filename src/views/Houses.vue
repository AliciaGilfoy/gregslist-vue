<template>
  <div class="house row d-flex justify-content-center">
    <house v-for="(houseObj) in houses" :key="houseObj._id" :houseData="houseObj" />
  </div>
</template>

<script>
import House from "../components/House";

export default {
  name: "Houses",
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  components: {
    House
  }
};
</script>

<style>
</style>