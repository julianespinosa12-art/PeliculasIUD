
import express from "express";

class directorController {
  constructor(){
    
  }

  async getAllDirectors(req, res) {
    try {
        res.status(201).json({status: 'traido todos los directors'});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async getDirector(req, res) {
    try {
        res.status(201).json({status: 'traido todos los directors'});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async createDirector(req, res) {
   try {
        res.status(201).json({status: 'creado director'});
    } catch (e) {
        res.status(500).send(e.message);
    }
    }       
  

  async updateDirector(req, res) {
     try {
        res.status(201).json({status: 'traido todos los directors'});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async deleteDirector(req, res) {
      try {
        res.status(201).json({status: 'traido todos los directors'});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
}
export default new directorController();