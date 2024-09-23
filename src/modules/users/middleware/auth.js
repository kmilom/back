/**
 * @module AuthenticateToken
 * @description Este módulo es un middleware para autenticar y verificar el token JWT en las solicitudes.
 * Protege las rutas asegurando que solo usuarios autenticados puedan acceder a ellas.
 */

const jwt = require('jsonwebtoken');
const config = require('../../../config');

const secret = config.jwt.secret;

// Middleware que autentica el token JWT proporcionado en las cabeceras de la solicitud. Si el token es válido, 
// permite que el usuario acceda a la siguiente etapa del proceso; si no es válido, bloquea la solicitud.
function authenticateToken(req, res, next) {
    // Obtiene el token del encabezado de autorización
    const token = req.headers['authorization']?.split(' ')[1]; 

    // Si no hay token, retorna un error 401 (Acceso no autorizado)
    if (!token) {
        return res.status(401).send('Acceso denegado. No se proporcionó token.');
    }

    // Verifica la validez del token utilizando la clave secreta
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.status(403).send('Token inválido.');
        }

        req.user = user;
        next(); 
    });
}

module.exports = authenticateToken;
