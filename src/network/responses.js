exports.succes = function (req, res, msg, status){
    const statusCode = status || 200;
    const message = msg || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: message
    }); 
}

exports.error = function (req, res, msg, status){
    const statusCode = status || 500;
    const message = msg || 'Error interno.';
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: message
    });
}