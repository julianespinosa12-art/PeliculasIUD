import express from 'express';
const route = express.Router();
import directorController from '../controllers/directorController.js';


route.get('/', directorController.getAllDirectors);

route.get('/:id', (req, res) => {
  res.json({
    message: 'Directores'
  });
});
export default route; 

route.post('/', (req, res) => {
  res.json({
    message: 'Directores'
  });
});

route.put('/:id', (req, res) => {
  res.json({
    success: false,
    message: 'Directores'
  });
});

route.delete('/:id', (req, res) => {
  res.status(405).json({
    success: false,
    message: 'Directores'
  });
});