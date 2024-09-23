/**
 * @module TasksRoutes
 * @description Este módulo gestiona las rutas relacionadas con las operaciones CRUD de la tabla `Tasks` en la base de datos.
 */

const express = require('express');

const response = require("../../network/responses");
const controller = require('./controller')

const router = express.Router();

// Rutas para consultas a la base de Datos.
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', addNew);
router.post('/editar', updateElement);
router.put('/:id', deleteElement);

// Función que maneja la recuperación de todas las tareas
async function getAll(req, res){
    try{
        const items = await controller.getAll();
        response.succes(req, res, items, 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

// Función que maneja la recuperación de una tarea específica por ID
async function getById(req, res){
    try{
        const item = await controller.getById(req.params.id);
        response.succes(req, res, item, 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

// Función que maneja la creación de una nueva tarea
async function addNew(req, res) {
    try{
        const item = await controller.addNew(req.body);
        console.log(item.Id);
        response.succes(req, res, item.Id, 201);
    } catch(err){
        console.error("Error en addNew: ", err);
        response.error(req, res, err, 500);
    }
}

// Función que maneja la actualización de una tarea existente
async function updateElement(req, res) {
    try{
        const item = await controller.updateElement(req.body);
        console.log(item.Id);
        response.succes(req, res, item.Id, 201);
    } catch(err){
        console.error("Error en updateElement: ", err);
        response.error(req, res, err, 500);
    }
}

// Función que maneja la eliminación de una tarea por ID
async function deleteElement(req, res) {
    try{
        const item = await controller.deleteElement(req.params.id);
        response.succes(req, res, 'La tarea ha sido eliminada.', 200);
    } catch(err){
        response.error(req, res, err, 500);
    }
}

module.exports = router;