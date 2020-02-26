  <template>
  <div class="row d-flex justify-content-center">
    <div class="card house" style="width: 50%;">
      <img :src="details.imgUrl" class="card-img-top" />
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{details.description}}</li>
        <li class="list-group-item">Price: {{details.price}}</li>
        <li class="list-group-item">Year: {{details.year}}</li>
        <li class="list-group-item">Bedrooms: {{details.bedrooms}}</li>
        <li class="list-group-item">Bathrooms: {{details.bathrooms}}</li>
      </ul>
      <div class="card-body">
        <button @click="deleteHouse" class="btn btn-danger float-right">Delete</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "HouseDetails",
  mounted() {
    if (!this.$store.state.houses.length) {
      this.$store.dispatch("getHouseById", this.$route.params.houseId);
    } else {
      this.$store.dispatch(
        "setActiveHouse",
        this.$store.state.houses.find(c => c._id == this.$route.params.houseId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.details._id);
    }
  }
};
</script>
  
  <style>
</style>