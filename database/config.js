const mysql = require('mysql');
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnectionMysql = async() => {
    try {
        const db = mysql.createConnection({
            host: process.env.BD_CONEXION,
            user: process.env.BD_USER,
            password: process.env.BD_PASS,
            database: process.env.BD_BD
        });

        db.connect((err) => {
            if (!err) {
                console.log('Conexión Exitosa a la DB Mysql');
            } else {
                console.log('Sin Conexion: ' + err);
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error('Error en iniciar la base de datos Mysql: '+error);
    }
}

const dbConnectionMongoose = async() => {

    try {

        await mongoose.connect( process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conexión Exitosa a la DB Mongo');

    } catch (error) {
        throw new Error('Error en iniciar la base de datos Mongo: '+error);
    }

}

module.exports ={
    dbConnectionMysql,
    dbConnectionMongoose,
}