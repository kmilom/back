/**
 * @module Config
 * @description Configuración de la aplicación, que obtiene valores de las variables de entorno (dotenv) para parámetros 
 * como el puerto, secretos JWT y la conexión a la base de datos MySQL.
 */

require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    jwt: {
        secret: process.env.JET_SECRET || 'secretkey'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'mydb'
    }
};