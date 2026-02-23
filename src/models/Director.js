import mongoose from 'mongoose';
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
}