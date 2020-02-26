<template>
  <div class="house row">
    <house v-for="(houseObj) in Houses" :key="houseObj._id" :houseData="houseObj" />
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