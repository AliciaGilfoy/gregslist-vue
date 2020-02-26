<template>
  <div class="card house m-1" style="width: 18rem;">
    <img :src="houseData.imgUrl" class="card-img-top" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: {{houseData.price}}</li>
      <li class="list-group-item">Year: {{houseData.year}}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-info">More Info</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "House",
  props: ["houseData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveHouse", this.houseData);
    }
  }
};
</script>

<style scoped>
.house {
  cursor: pointer;
}
</style>