<template>
  <div class="create-car">
    <form @submit.prevent="createCar">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="make">Make</label>
          <input
            name="make"
            type="text"
            class="form-control"
            id="make"
            v-model="newCar.make"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="model">Model</label>
          <input
            name="model"
            type="text"
            class="form-control"
            id="model"
            v-model="newCar.model"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          name="description"
          type="text"
          class="form-control"
          id="description"
          v-model="newCar.description"
          required
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="year">Year</label>
          <input
            name="year"
            type="number"
            class="form-control"
            id="year"
            v-model="newCar.year"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="price">Price</label>
          <input
            name="price"
            type="number"
            class="form-control"
            id="price"
            v-model="newCar.price"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image Url</label>
        <input
          name="imgUrl"
          type="text"
          class="form-control"
          id="imgUrl"
          v-model="newCar.imgUrl"
          required
        />
      </div>
      <button type="submit" class="btn btn-success float-right">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCar",
  data() {
    return {
      newCar: {}
    };
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.newCar);
    }
  }
};
</script>

<style>
</style>