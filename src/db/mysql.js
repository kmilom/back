const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function mysqlConnection (){
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if(err){
            console.log("Error en la db: ", err);
        } else{
            console.log("DB conectada!")
        }
    })
}

mysqlConnection();

function getAll(table){
    return new Promise((resolve, reject) => (
        connection.query(`SELECT * FROM ${table}`, (error, response) => {            
            if(error) return reject(error);
            resolve(response);
    })
    ))
}

function getById(table, id){

}

function addNew(table, data){

}

function deleteById(table, id){

}

module.exports = {
    getAll,
    getById,
    addNew,
    deleteById
}