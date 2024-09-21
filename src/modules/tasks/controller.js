const db = require('../../db/mysql');

const TABLE = 'Tasks';

function getAll () {
    return db.getAll(TABLE);
}

function deleteElement (body) {
    return db.deleteElement(TABLE, body)
}

module.exports = {
    getAll,
    deleteElement
}