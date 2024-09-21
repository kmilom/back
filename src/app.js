const express = require('express');
const morgan = require('morgan');
const config = require('./config');

//módulos
const genders = require('./modules/genders/routes');
const people = require('./modules/people/routes');
const users = require('./modules/users/routes');
const users = require('./modules/tasks/routes');

const app = express();

//middleware
app.use(morgan('dev'));

//Configuración
app.set('port', config.app.port);

//Rutas
app.use('/api/genders', genders);
app.use('/api/people', people);
app.use('/api/users', users);

module.exports = app;