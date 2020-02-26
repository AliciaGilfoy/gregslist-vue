<template>
  <div class="create-job">
    <form @submit.prevent="createJob">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="company">Company</label>
          <input
            name="company"
            type="text"
            class="form-control"
            id="company"
            v-model="newJob.company"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="jobTitle">Job Title</label>
          <input
            name="jobTitle"
            type="text"
            class="form-control"
            id="jobTitle"
            v-model="newJob.jobTitle"
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
          v-model="newJob.description"
          required
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="rate">Pay Rate</label>
          <input
            name="rate"
            type="number"
            class="form-control"
            id="rate"
            v-model="newJob.rate"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="hours">Hours</label>
          <input
            name="hours"
            type="number"
            class="form-control"
            id="hours"
            v-model="newJob.hours"
            required
          />
        </div>
      </div>
      <button type="submit" class="btn btn-success float-right">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateJob",
  data() {
    return {
      newJob: {}
    };
  },
  methods: {
    createJob() {
      this.$store.dispatch("createJob", this.newJob);
    }
  }
};
</script>

<style>
</style>