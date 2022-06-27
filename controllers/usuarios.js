const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const listarUsuarios = async(req, res = response) => {

    const usuarios = await Usuario.find().where('aud_estado').ne(3)
        .populate('rol','nombre');

    res.json({
        ok: true,
        msg: "Listado de usuarios",
        data: usuarios
    });
}

const crearUsuarios = async(req, res = response) => {

    const { password } = req.body;
    const usuario = new Usuario( req.body );

    //Aud_usuario
    usuario.aud_usuario = req.uid;

    ///Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );
    await usuario.save();
    
    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: usuario
    });
}

const modificarUsuarios = async(req, res = response) => {

    const { _id, id, password, google, correo, ...resto } = req.body;

    ///Encripta nuevo password
    if( password ){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    ///Modificación de registro
    resto.aud_estado = 2;
    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json({
        ok: true,
        msg: "Modificación Correcto",
        data: usuario
    });
}

const eliminarUsuarios = async(req, res = response) => {

    const { _id, id } = req.body;

    const usuario = await Usuario.findByIdAndUpdate( id, {aud_estado:3} );

    res.json({
        ok: true,
        msg: "Usuario Eliminado"
    });
}

module.exports = {
    listarUsuarios,
    crearUsuarios,
    modificarUsuarios,
    eliminarUsuarios,
}