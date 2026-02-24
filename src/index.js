import express from 'express';
import 'dotenv/config';  // ← Carga las variables de .env
import directorsRoute from './routes/directors.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/directors', directorsRoute);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '🚀 Servidor activo' });
});

// Servidor
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});