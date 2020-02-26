<template>
  <div class="card job m-1" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{jobData.company}}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Job Title: {{jobData.jobTitle}}</li>
      <li class="list-group-item">Rate: {{jobData.rate}}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-info">More Info</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveJob", this.jobData);
    }
  }
};
</script>

<style scoped>
.job {
  cursor: pointer;
}
</style>