/**
 * @module Responses
 * @description Módulo que define las respuestas estándar para las solicitudes HTTP en la API. 
 * Facilita el envío de respuestas exitosas o de error al cliente.
 */

// Envía una respuesta exitosa al cliente con un mensaje opcional.
exports.succes = function (req, res, msg = '', status = 200){
    res.status(status).send({
        error: false,
        status: status,
        body: msg
    }); 
}

// Envía una respuesta de error al cliente con un mensaje opcional y un código de estado.
exports.error = function (req, res, msg = 'Error Interno', status = 500){
    res.status(status).send({
        error: true,
        status: status,
        body: msg
    });
}