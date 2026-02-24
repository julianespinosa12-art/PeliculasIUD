import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';

const connectDB = dbClient;

class DirectorModel {

  async create(director) {
    const colDirectores = connectDB.db.collection('Directores');
   return await colDirectores.insertOne(director)
   
  } 

  async getAll() {
    const colDirectores = connectDB.db.collection('Directores');
    return await colDirectores.find({}).toArray();
  }

  async getOneDirector(id) {
    const colDirectores = connectDB.db.collection('Directores');
    return await colDirectores.findOne({_id: new ObjectId(id)});
  }

  async updateDirector(id, director) {
    const colDirectores = connectDB.db.collection('Directores');
    return await colDirectores.updateOne({_id: new ObjectId(id)}, {$set: director});
  }

  async deleteDirector(id) {
    const colDirectores = connectDB.db.collection('Directores');
    return await colDirectores.deleteOne({_id: new ObjectId(id)});
  }

}
export default new DirectorModel();