import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Horned Beasts API de Ricardo Mauricio Delgado Rivera');
});

// Ruta GET /test
app.get('/test', (req, res) => {
  const response = {
    name: 'Ricardo Mauricio Delgado Rivera',
    date: '2024-10-28',
    timestamp: Date.now,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});