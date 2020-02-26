<template>
  <div class="home container">
    <div class="row mt-3">
      <h1 class="col-12 text-center mt-3">Welcome to GregsList!</h1>
      <h3
        class="col-12 text-center mt-3 text-secondary"
      >Here you can search for cars and houses to buy. We also have a new page just for jobs! You can list your items or jobs too!</h3>
      <h5 class="col-12 text-center mt-3 text-dark">What would you like to list?</h5>
    </div>
    <div class="row mt-3 d-flex justify-content-center">
      <button
        @click="carForm = true, houseForm = false, jobForm = false"
        class="btn btn-primary mx-2"
      >Sell A Car</button>
      <button
        @click="carForm = false, houseForm = true, jobForm = false"
        class="btn btn-primary mx-2"
      >Sell A House</button>
      <button
        @click="carForm = false, houseForm = false, jobForm = true"
        class="btn btn-primary mx-2"
      >Post A Job</button>
    </div>
    <div class="row mt-3">
      <create-car v-if="carForm" />
      <create-house v-else-if="houseForm" />
      <create-job v-else-if="jobForm" />
      <div class="col-12 text-center" v-else>
        <p>
          <em>Check our stock by clicking cars, houses, or jobs at the top of the page.</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CreateCar from "@/components/CreateCar";
import CreateHouse from "@/components/CreateHouse";
import CreateJob from "@/components/CreateJob";

export default {
  name: "Home",
  data() {
    return {
      carForm: false,
      houseForm: false,
      jobForm: false
    };
  },
  components: {
    CreateCar,
    CreateJob,
    CreateHouse
  }
};
</script>
