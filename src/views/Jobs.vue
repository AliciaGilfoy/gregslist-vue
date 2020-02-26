<template>
  <div class="job row">
    <job v-for="(jobObj) in Jobs" :key="jobObj._id" :jobData="jobObj" />
  </div>
</template>

<script>
import Job from "../components/Job";

export default {
  name: "Jobs",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  components: {
    Job
  }
};
</script>

<style>
</style>