const express = require('express');
const config = require('./config');

const genders = require('./modules/genders/routes')

const app = express();

//Configuración
app.set('port', config.app.port)

//Rutas
app.use('/api/genders', genders)

module.exports = app;