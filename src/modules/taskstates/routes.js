/**
 * @module TaskStatesRoutes
 * @description Este módulo gestiona las rutas relacionadas con las operaciones CRUD de la tabla `TaskStates` en la base de datos.
 */

const express = require('express');

const response = require("../../network/responses");
const controller = require('./controller')

const router = express.Router();

// Rutas para consultas a la base de Datos.
router.get('/', getAll);

// Llama al controlador para recuperar todos los géneros y envía una respuesta exitosa o de error.
async function getAll(req, res){
    try{
        const items = await controller.getAll();
        response.succes(req, res, items, 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

module.exports = router;