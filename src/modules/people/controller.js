const db = require('../../db/mysql');

const TABLE = 'People';

function getAll () {
    return db.getAll(TABLE);
}

function getById (id) {
    return db.getById(TABLE, id)
}

function deleteElement (body) {
    return db.deleteElement(TABLE, body)
}

module.exports = {
    getAll,
    getById,
    deleteElement
}