// api/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/hola', (req, res) => {
  res.json({ mensaje: "Hola Mundo desde el Contenedor API" });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
