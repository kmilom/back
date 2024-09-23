/**
 * @module TasksController
 * @description Este módulo gestiona las operaciones CRUD de la tabla `Tasks` en la base de datos.
 */

const db = require('../../db/mysql');

const TABLE = 'Tasks';

// Recupera todas las tareas de la tabla `Tasks` desde la base de datos.
function getAll () {
    return db.getAll(TABLE);
}

// Recupera una tarea específica por su ID.
function getById (id) {
    return db.getById(TABLE, id);
}

// Agrega una nueva tarea a la base de datos.
function addNew (data) {
    return db.addNew(TABLE, data);
}

// Actualiza una tarea existente en la base de datos.
function updateElement (data) {
    return db.updateElement(TABLE, data);
}

// Elimina una tarea de la base de datos por su ID.
function deleteElement (id) {
    return db.deleteElement(TABLE, id);
}

module.exports = {
    getAll,
    getById,
    addNew,
    updateElement,
    deleteElement
}