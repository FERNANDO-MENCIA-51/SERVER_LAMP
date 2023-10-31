const express = require('express');
const app = express();

// Configura el middleware para servir archivos estáticos desde un directorio llamado 'public'
app.use(express.static('public'));

// El middleware 'express.static' servirá archivos estáticos desde la carpeta 'public'
// Ejemplo: http://localhost:3000/images/logo.png servirá el archivo 'logo.png' en la carpeta 'public/images'

// Agrega tus rutas y lógica adicional aquí

const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
