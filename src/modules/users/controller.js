const db = require('../../db/mysql');

const TABLE = 'Users';

function getAll () {
    return db.getAll(TABLE);
}

function getById (id) {
    return db.getById(TABLE, id)
}

function addNew (data) {
    return db.addNew(TABLE, data);
}

module.exports = {
    getAll,
    getById, 
    addNew
}