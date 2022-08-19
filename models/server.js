const express = require('express');
const cors = require('cors');
const path  = require('path');
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
            cuentasPath: '/api/cuentas',
            comprasPath: '/api/compras',
            movimientosPath: '/api/movimientos'
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
        this.app.use( this.rutas.cuentasPath, require('../routes/cuentas') );
        this.app.use( this.rutas.comprasPath, require('../routes/compras') );
        this.app.use( this.rutas.movimientosPath, require('../routes/movimientos') );
        this.app.get( '*',(req, res) => {
            res.sendFile( path.resolve( __dirname,'../public/index.html'))
        })
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Directorio público
        this.app.use( express.static('public') );

        //Parseo Body
        this.app.use( express.json() );

        this.app.use((err, req, res, next) => {
            res.status(400).json({
                ok: false,
                msg:"El cuerpo de la petición es incorrecto. "+err
            });
          });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;