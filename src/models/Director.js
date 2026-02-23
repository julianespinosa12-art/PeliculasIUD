import connectDB from '../config/database.js';

class DirectorModel {

async getAllDirectors() {
  try {
    const directors = await connectDB();
    return directors;
  } catch (error) {
    console.error('Error al obtener los directores:', error.message);
  }     


} 
async getDirectorById(id) {
  try {
    const director = await connectDB();
    return director;
  } catch (error) {
    console.error('Error al obtener el director:', error.message);
  } 

}

async createDirector(director) {

    const coldirector = dbconnectDB.db.collection('directors');
    await coldirector.insertOne(director);
  } 

  async updateDirector(id, director) {
    const updatedDirector = dbconnectDB.db.collection('directors');
    await updatedDirector.updateOne({ _id: id }, director);
  }

  async deleteDirector(id) {
    const deletedDirector = dbconnectDB.db.collection('directors');
    await deletedDirector.deleteOne({ _id: id });
  }
}
export default new DirectorModel();