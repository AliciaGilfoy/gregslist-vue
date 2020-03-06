import express from "express"
import jobService from "../services/JobService"

export default class JobsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }


  async getAll(req, res, next) {
    try {
      let data = await jobService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await jobService.findByID(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await jobService.create(req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await jobService.update(req.params.id, req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }


  async delete(req, res, next) {
    try {
      await jobService.delete(req.params.id)
      res.send("deleted")
    } catch (error) {
      next(error)
    }
  }

}