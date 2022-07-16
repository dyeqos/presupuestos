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

const listarTipoAcivo = async(req, res=response) => {

    const tipoActivo = await Parametro.find( 
        { 
            tipo:"ACTIVO", 
            aud_estado: {
                $ne: 3
            }
        }
    );

    res.json({
        ok: true,
        msg: "Listado de tipos de activos",
        data: tipoActivo
    })
}

const crearParametros = async( req, res = response ) => {
    
    const parametro = new Parametro( req.body );
    parametro.aud_usuario = req.aud_usuario;

    await parametro.save();

    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: parametro
    })
}

module.exports = {
    crearParametros,
    listarRoles,
    listarTipoAcivo
}