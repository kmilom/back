/**
 * @module TaskStatesController
 * @description Este módulo gestiona la recuperación de datos de la tabla `Genders` en la base de datos.
 */

const db = require('../../db/mysql');

const TABLE = 'TaskStates';

// Recupera todos los registros de la tabla `Genders` desde la base de datos.
function getAll () {
    return db.getAll(TABLE);
}

module.exports = {
    getAll,
}