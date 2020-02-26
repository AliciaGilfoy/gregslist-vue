import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Houses from '../views/Houses.vue'
import Jobs from '../views/Jobs.vue'
import Cars from '../views/Cars.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '*',
    redirect: "/"
  },
]

const router = new VueRouter({
  routes
})

export default router
