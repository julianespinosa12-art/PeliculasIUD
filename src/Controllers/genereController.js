import express from "express";
import DirectorModel from '../models/Director.js';

class directorController {
  constructor(){
    
  }



 async createDirector(req, res) {
   try {

        const data = await DirectorModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    }  
  async getAllDirectors(req, res) {
    try {
        const data = await DirectorModel.getAll();
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async getOneDirector(req, res) {
    try {
      const { id } = req.params;
      const data = await DirectorModel.getOneDirector(id);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async updateDirector(req, res) {
     try {
      const { id } = req.params;
      const data = await DirectorModel.updateDirector(id, req.body);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async deleteDirector(req, res) {
      try {
        const { id } = req.params;
        const data = await DirectorModel.deleteDirector(id);
        res.status(206).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
}
export default new directorController();