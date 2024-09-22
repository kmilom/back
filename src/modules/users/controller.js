const db = require('../../db/mysql');
const bcrypt = require('bcryptjs');

const TABLE = 'Users';

function getAll () {
    return db.getAll(TABLE);
}

function getById (id) {
    return db.getById(TABLE, id)
}

async function addNew (data) {

    const authData = {
        Id: data.Id,
        Username: data.Username
    }

    authData.Password = await bcrypt.hash(data.Password, 5);

    return db.addNew(TABLE, authData);
}

module.exports = {
    getAll,
    getById, 
    addNew
}