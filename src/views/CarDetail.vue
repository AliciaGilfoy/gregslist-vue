  <template>
  <div class="row d-flex justify-content-center">
    <div class="card car" style="width: 50%;">
      <img :src="details.imgUrl" class="card-img-top" />
      <div class="card-body d-flex justify-content-center">
        <h5 class="card-title">{{details.make}} - {{details.model}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{details.description}}</li>
        <li class="list-group-item">Price: {{details.price}}</li>
        <li class="list-group-item">Year: {{details.year}}</li>
      </ul>
      <div class="card-body">
        <button @click="deleteCar" class="btn btn-danger float-right">Delete</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CarDetails",
  mounted() {
    if (!this.$store.state.cars.length) {
      this.$store.dispatch("getCarById", this.$route.params.carId);
    } else {
      this.$store.dispatch(
        "setActiveCar",
        this.$store.state.cars.find(c => c._id == this.$route.params.carId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.details._id);
    }
  }
};
</script>
  
  <style>
</style>
  
  
  
  
  
  
  