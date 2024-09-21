const db = require('../../db/mysql');

const TABLE = 'People';

function getAll () {
    return db.getAll(TABLE);
}

module.exports = {
    getAll,
}