/** 
 * @module Auth
 * @description Este módulo maneja la generación de tokens JWT (JSON Web Token) para autenticar usuarios.
 */

const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.jwt.secret;

// Genera un token JWT firmado con los datos proporcionados y la clave secreta.
function createToken(data){
    return jwt.sign(data, secret);
}

module.exports = {
    createToken
}