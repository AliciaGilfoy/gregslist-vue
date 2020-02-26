import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Houses from '../views/Houses.vue'
import Jobs from '../views/Jobs.vue'
import Cars from '../views/Cars.vue'
import CarDetails from '../views/CarDetail.vue'
import JobDetails from '../views/JobDetail.vue'
import HouseDetails from '../views/HouseDetail.vue'


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
    path: '/cars/:carId',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/houses/:houseId',
    name: 'HouseDetails',
    component: HouseDetails
  },
  {
    path: '/jobs/:jobId',
    name: 'JobDetails',
    component: JobDetails
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
