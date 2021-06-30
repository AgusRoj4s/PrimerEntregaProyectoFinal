const express = require('express');
const routes = require('./src/routes/index');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/', routes());

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});
server.on('error', error => {
    console.log('error en el servidor:', error);
});