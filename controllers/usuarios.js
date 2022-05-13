const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const listarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

const crearUsuarios = async(req, res = response) => {

    const {password, correo, ...rest} = req.body;

    const usuario = new Usuario( rest );

    ///verificar correo
    const existeCorreo = await Usuario.findOne( {correo} );
    if( existeCorreo ){
        return res.status(400).json({
            msg: "el coreo esta registrado"
        })
    }
    ///Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    await usuario.save();
    
    res.json({
        usuario
    });
}

const modificarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

const eliminarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

module.exports = {
    listarUsuarios,
    crearUsuarios,
    modificarUsuarios,
    eliminarUsuarios,
}