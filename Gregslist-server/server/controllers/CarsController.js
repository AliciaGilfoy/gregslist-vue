import express from "express"
import carService from "../services/CarService"

export default class CarsController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await carService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await carService.findByID(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await carService.create(req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await carService.update(req.params.id, req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }


  async delete(req, res, next) {
    try {
      await carService.delete(req.params.id)
      res.send("deleted")
    } catch (error) {
      next(error)
    }
  }
}