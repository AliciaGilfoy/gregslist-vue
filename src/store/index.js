import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3500
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    houses: [],
    jobs: [],
    activeCar: [],
    activeJob: [],
    activeHouse: [],

  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setJobs(state, jobs) {
      state.jobs = jobs
    },
    setHouses(state, houses) {
      state.houses = houses
    },
    addCar(state, car) {
      state.cars.push(car)
    },
    addJob(state, job) {
      state.jobs.push(job)
    },
    addHouse(state, house) {
      state.houses.push(house)
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c._id != id)
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(c => c._id != id)
    },
    removeHouse(state, id) {
      state.houses = state.houses.filter(c => c._id != id)
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    },
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars");
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("cars/" + id)
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Home" })
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post("cars", newCar);
        commit("addCar", res.data.data)
        router.push({
          name: "CarDetails",
          params: { carId: res.data.data._id }
        });
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.delete("cars", carId);
        commit("removeCar", carId)
        commit("setActiveCar", {})
      } catch (error) {
        console.error(error)
      }
    },
    setActiveCar({ commit }, car) {
      commit("setActiveCar", car)
    },
    async getJobs({ commit, dispatch }) {
      try {
        let res = await _api.get("jobs");
        commit("setJobs", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getJobById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("jobs/" + id)
        commit("setActiveJob", res.data.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Home" })
      }
    },
    async createJob({ commit, dispatch }, newJob) {
      try {
        let res = await _api.post("jobs", newJob);
        commit("addJob", res.data.data)
        router.push({
          name: "JobDetails",
          params: { jobId: res.data.data._id }
        });
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJob({ commit, dispatch }, jobId) {
      try {
        let res = await _api.delete("jobs", jobId);
        commit("removeJob", jobId)
        commit("setActiveJob", {})
      } catch (error) {
        console.error(error)
      }
    },
    setActiveJob({ commit }, job) {
      commit("setActiveJob", job)
    },
    async getHouses({ commit, dispatch }) {
      try {
        let res = await _api.get("houses");
        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHouseById({ commit, dispatch }, id) {
      try {
        let res = await _api.get("houses/" + id)
        commit("setActiveHouse", res.data.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Home" })
      }
    },
    async createHouse({ commit, dispatch }, newHouse) {
      try {
        let res = await _api.post("houses", newHouse);
        commit("addHouse", res.data.data)
        router.push({
          name: "HouseDetails",
          params: { houseId: res.data.data._id }
        });
      } catch (error) {
        console.error(error)
      }
    },
    async deleteHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _api.delete("houses", houseId);
        commit("removeHouse", houseId)
        commit("setActiveHouse", {})
      } catch (error) {
        console.error(error)
      }
    },
    setActiveHouse({ commit }, house) {
      commit("setActiveHouse", house)
    },

  },
  modules: {
  }
})
