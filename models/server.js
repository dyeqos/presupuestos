const express = require('express');
const cors = require('cors');
const { dbConnectionMysql, dbConnectionMongoose } = require('../database/config');

class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.rutas = {
            usuariosPath : '/api/usuarios',
            loginPath : '/api/auth',
            parametrosPath : '/api/params',
            activosPath: '/api/activos',
        }

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
        this.app.use( this.rutas.loginPath, require('../routes/auth') );
        this.app.use( this.rutas.usuariosPath, require('../routes/usuarios') );
        this.app.use( this.rutas.parametrosPath, require('../routes/parametros') );
        this.app.use( this.rutas.activosPath, require('../routes/activos') );
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