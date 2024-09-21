const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const genders = require('./modules/genders/routes');
const people = require('./modules/people/routes');

const app = express();

//middleware
app.use(morgan('dev'));

//Configuración
app.set('port', config.app.port);

//Rutas
app.use('/api/genders', genders);
app.use('/api/people', people);

module.exports = app;