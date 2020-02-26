  <template>
  <div class="row d-flex justify-content-center">
    <div class="card job" style="width: 50%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Company: {{details.company}}</li>
        <li class="list-group-item">Job Title: {{details.jobTitle}}</li>
        <li class="list-group-item">{{details.description}}</li>
        <li class="list-group-item">Pay Rate: {{details.rate}}</li>
        <li class="list-group-item">Hours: {{details.hours}}</li>
      </ul>
      <div class="card-body">
        <button @click="deleteJob" class="btn btn-danger float-right">Delete</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "JobDetails",
  mounted() {
    if (!this.$store.state.jobs.length) {
      this.$store.dispatch("getJobById", this.$route.params.jobId);
    } else {
      this.$store.dispatch(
        "setActiveJob",
        this.$store.state.jobs.find(c => c._id == this.$route.params.jobId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.details._id);
    }
  }
};
</script>
  
  <style>
</style>