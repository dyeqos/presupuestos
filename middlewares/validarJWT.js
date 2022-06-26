const { response } = require('express');
const jwt = require('jsonwebtoken');
const { generarJWT } = require('../helpers/generar-jwt');

const Usuario = require('../models/usuario');

const validarJWT = async(req, res = response, next ) => {

    try {
        ///Header
        const token = req.header( 'x-token' );

        if( !token ) {
            return res.status(401).json({
                ok: false,
                msg: "Token inválido"
            });
        }

        ///Token Válido
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        ///Buscar el usuario
        const usuario = await Usuario.findById(uid);
        if( !usuario ) {
            return res.status(401).json({
                ok: false,
                msg: "Token inválido"
            });
        }

        ///Usuario Activo
        if( usuario.aud_estado == 3 ) {
            return res.status(401).json({
                ok: false,
                msg: "Token inválido"
            });
        }

        ///Devuleve el Usuario en la Request
        req.usuario = usuario;
        req.token = await generarJWT( uid ) ;

        next();
        
    } catch (error) {
        res.status(401).json({
            ok: false, 
            msg: "Token inválido"
        });
    }
}

module.exports = {
    validarJWT
}