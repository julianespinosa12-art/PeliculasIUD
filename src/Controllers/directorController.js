
import express from "express";

class directorController {
  constructor(){
    
  }

  async getAllDirectors(req, res) {
    try {
        res.status(201).json({status: 'get-OK'}); 
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async getDirector(id) {
    return directors.find((director) => director._id === id);
  }

  async createDirector(req, res) {
   try {
      const director = new directors({
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        biography: req.body.biography
      });
      await director.save();
      res.json(director);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error al crear director',
        error: error.message
      });
    }       
  }

  async updateDirector(id, director) {
    const updatedDirector = directors.find((director) => director._id === id);
    updatedDirector.name = director.name;
    updatedDirector.surname = director.surname;
    updatedDirector.birthdate = director.birthdate;
    updatedDirector.biography = director.biography;
    await updatedDirector.save();
    return updatedDirector;
  }

  async deleteDirector(id) {
    const deletedDirector = directors.find((director) => director._id === id);
    await deletedDirector.remove();
    return deletedDirector;
  }
}
export default new directorController();