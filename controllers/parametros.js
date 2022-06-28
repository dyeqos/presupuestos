const { response } = require('express');

const Parametro = require('../models/parametro');

const listarRoles = async(req, res=response) => {

    const roles = await Parametro.find({tipo:"ROL"}).where('aud_estado').ne(3);

    res.json({
        ok: true,
        msg: "Listado de roles",
        data: roles
    });
}

const crearParametros = async( req, res = response ) => {
    
    const parametro = new Parametro( req.body );
    parametro.aud_usuario = req.uid;

    await parametro.save();

    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: parametro
    })
}

module.exports = {
    crearParametros,
    listarRoles
}