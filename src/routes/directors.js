import express from 'express';
const route = express.Router();
import directorController from '../controllers/directorController.js';


route.get('/', directorController.getAllDirectors);
route.get('/:id', directorController.getDirector);
route.post('/', directorController.createDirector);
route.put('/:id', directorController.updateDirector);
route.delete('/:id', directorController.deleteDirector);

export default route;