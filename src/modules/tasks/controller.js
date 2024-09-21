const db = require('../../db/mysql');

const TABLE = 'Tasks';

function getAll () {
    return db.getAll(TABLE);
}

module.exports = {
    getAll,
}