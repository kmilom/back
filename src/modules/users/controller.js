/**
 * @module UsersController
 * @description Este módulo gestiona la recuperación de datos de la tabla `Genders` en la base de datos.
 */

const db = require('../../db/mysql');
const bcrypt = require('bcryptjs');
const auth = require('../../auth')

const TABLE = 'Users';

// Verifica las credenciales de un usuario (nombre de usuario y contraseña) y genera un token JWT si las credenciales son correctas.

async function login(Username, Password) {
    console.log("controlador:", Username);
    
    // Realiza la consulta del usuario en la base de datos
    const data = await db.query(TABLE, { Username });
    console.log("Datos: ", data)

    // Verifica si el usuario existe
    if (!data || data.length === 0) {
        throw new Error('Usuario no encontrado.');
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(Password, data.Password);
    if (isMatch) {
        // Genera un token JWT si las credenciales son correctas
        const token = auth.createToken({ Id: data.Id, Username: data.Username });
        return {
            token,
            Id: data.Id
        }
    } else {
        throw new Error('Información Incorrecta.');
    }
}

// Recupera todos los usuarios almacenados en la tabla `Users` de la base de datos.
function getAll () {
    return db.getAll(TABLE);
}

// Recupera un usuario por su ID desde la tabla `Users` de la base de datos.
function getById (id) {
    return db.getById(TABLE, id)
}

// Crea un nuevo usuario, encriptando su contraseña antes de almacenarlo en la base de datos.
async function addNew (data) {

    const authData = {
        Id: data.Id,
        Username: data.Username
    }

    // Encripta la contraseña antes de almacenarla
    authData.Password = await bcrypt.hash(data.Password, 5);

    return db.addNew(TABLE, authData);
}

module.exports = {
    login,
    getAll,
    getById, 
    addNew
}