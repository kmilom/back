/**
 * @module PeopleController
 * @description Este módulo gestiona las operaciones relacionadas con la tabla `People` en la base de datos.
 */

const db = require('../../db/mysql');

const TABLE = 'People';

// Recupera todos los registros de la tabla `People` desde la base de datos.
function getAll () {
    return db.getAll(TABLE);
}

// Recupera un registro de la tabla `People` por su ID.
function getById (id) {
    return db.getById(TABLE, id);
}

// Agrega un nuevo registro a la tabla `People`.
function addNew (data) {
    return db.addNew(TABLE, data);
}

// Elimina un registro de la tabla `People` por su ID.
function deleteElement (id) {
    return db.deleteElement(TABLE, id);
}

module.exports = {
    getAll,
    getById,
    addNew,
    deleteElement
}