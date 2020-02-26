<template>
  <div class="card car m-1" style="width: 18rem;">
    <img :src="carData.imgUrl" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{carData.make}} - {{carData.model}}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: {{carData.price}}</li>
      <li class="list-group-item">Year: {{carData.year}}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-info">More Info</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["carData"],
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.carData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveCar", this.carData);
    }
  }
};
</script>

<style scoped>
.car {
  cursor: pointer;
}
</style>