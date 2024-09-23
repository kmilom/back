/**
 * @module Database
 * @description Este módulo maneja la conexión y las operaciones con la base de datos MySQL, incluyendo consultas,
 * inserciones, actualizaciones y eliminaciones.
 */

const mysql = require('mysql');
const config = require('../config');

// Configuración de la base de datos a partir del archivo de configuración
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

// Crea una conexión con la base de datos MySQL y maneja errores de conexión. Si la conexión se pierde,
// intenta reconectarse automáticamente.
function mysqlConnection (){
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if(err){
            console.log("Error en la db: ", err);
        } else{
            console.log("DB conectada!");
        }
    })

    connection.on('error', err => {
        console.log("Error en la db: ", err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            mysqlConnection(); // Reconectar si se pierde la conexión
        } else{
            throw err;
        }
    });
}

mysqlConnection();

// Recupera todos los registros de una tabla específica.
function getAll(table) {
    return new Promise((resolve, reject) => {
        if (table === 'People') {
            connection.query(`SELECT Name, LastName, Birthdate, Email, Gender FROM ${table} INNER JOIN Genders ON People.IdGender = Genders.Id`, 
                (error, response) => {
                if (error) return reject(error);
                resolve(response);
            });
        } else {
            connection.query(`SELECT * FROM ${table}`, (error, response) => {
                if (error) return reject(error);
                resolve(response);
            });
        }
    });
}

// Recupera un registro específico de una tabla usando su ID.
function getById(table, id){
    return new Promise((resolve, reject) => {
        if (table === 'People') {
            connection.query(`SELECT Name, LastName, Birthdate, Email, Gender FROM ${table} INNER JOIN Genders ON People.IdGender = Genders.Id WHERE People.Id = ${id}`, 
                (error, response) => {
                if (error) return reject(error);
                resolve(response);
            });
        } else if (table === 'Tasks'){
            connection.query(`SELECT * FROM ${table} WHERE IdUser = ${id}`, (error, response) => {
                if (error) return reject(error);
                resolve(response);
            });
        } else {
            connection.query(`SELECT * FROM ${table} WHERE Id = ${id}`, (error, response) => {
                if (error) return reject(error);
                resolve(response);
            });
        }
    });
}

// Inserta un nuevo registro en la tabla.
function addNew(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (error, response) => {
            if (error) return reject(error);
            resolve({ Id: response.insertId, ...data }); 
        });
    });
}

// Actualiza un registro existente en la tabla.
function updateElement(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE Id = ?`, [data, data.Id], (error, response) => {
            if (error) return reject(error);
            resolve(response);
        });
    });
}

// Elimina un registro de la tabla usando su ID.
function deleteElement(table, id){
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE Id = ${id}`, (error, response) => {
            if (error) return reject(error);
            resolve(response);
        });
    })
}

// Ejecuta una consulta para buscar un usuario por su nombre de usuario.
function query(table, data){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE Username = ?`, [data.Username], (error, response) => {
            if (error) return reject(error);
            if (response.length > 0) {
                resolve(response[0]); 
            } else {
                reject(new Error('Usuario no encontrado.'));
            }
        });
    });
}


module.exports = {
    getAll,
    getById,
    addNew,
    updateElement,
    deleteElement,
    query
}