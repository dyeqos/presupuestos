const mysql = require('mysql');
require('dotenv').config();

const dbConnection = async() => {
    try {
        const db = mysql.createConnection({
            host: process.env.BD_CONEXION,
            user: process.env.BD_USER,
            password: process.env.BD_PASS,
            database: process.env.BD_BD
        });

        db.connect((err) => {
            if (!err) {
                console.log('Conexión exitosa');
            } else {
                console.log('Sin Conexion: ' + err);
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error('Error en iniciar la base de datos');
    }
}

module.exports ={
    dbConnection
}