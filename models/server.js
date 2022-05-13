const express = require('express');
const cors = require('cors');
const { dbConnectionMysql, dbConnectionMongoose } = require('../database/config');

class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //conectar a base de datos
        this.conectarDB();     
        
        //middlewares
        this.middlewares();

        //Rutas Aplicacion
        this.routes();        
    }

    async conectarDB(){
        //await dbConnectionMysql();
        await dbConnectionMongoose();
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios.routes'));
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Directorio público
        this.app.use( express.static('public') );

        //Parseo Body
        this.app.use( express.json() );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;