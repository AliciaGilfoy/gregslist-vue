<template>
  <div class="create-house">
    <form @submit.prevent="createHouse">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="year">Year Built</label>
          <input
            name="year"
            type="number"
            class="form-control"
            id="year"
            v-model="newHouse.year"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="levels">Floor Levels</label>
          <input
            name="levels"
            type="number"
            class="form-control"
            id="levels"
            v-model="newHouse.levels"
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
          v-model="newHouse.description"
          required
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="bathrooms">Bathrooms</label>
          <input
            name="bathrooms"
            type="number"
            class="form-control"
            id="bathrooms"
            v-model="newHouse.bathrooms"
            required
          />
        </div>
        <div class="form-group col-md-4">
          <label for="bedrooms">Bedrooms</label>
          <input
            name="bedrooms"
            type="number"
            class="form-control"
            id="bedrooms"
            v-model="newHouse.bedrooms"
            required
          />
        </div>
        <div class="form-group col-md-4">
          <label for="price">Price</label>
          <input
            name="price"
            type="number"
            class="form-control"
            id="price"
            v-model="newHouse.price"
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
          v-model="newHouse.imgUrl"
          required
        />
      </div>
      <button type="submit" class="btn btn-success float-right">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateHouse",
  data() {
    return {
      newHouse: {}
    };
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
    }
  }
};
</script>

<style>
</style>