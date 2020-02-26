<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="text-center mt-2">
      <router-link to="/">
        <h1>
          <i class="fas fa-peace mr-2"></i>GregsList
        </h1>
      </router-link>
      <router-link class="ml-3" to="/cars">Cars</router-link>
      <router-link class="ml-3" to="/jobs">Jobs</router-link>
      <router-link class="ml-3" to="/houses">Houses</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
i {
  color: purple;
}
</style>
