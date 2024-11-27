const express = require('express');
const app = express();

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
