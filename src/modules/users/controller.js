const db = require('../../db/mysql');

const TABLE = 'Users';

function getAll () {
    return db.getAll(TABLE);
}

function getById (id) {
    return db.getById(TABLE, id)
}

module.exports = {
    getAll,
    getById
}