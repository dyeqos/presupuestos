const { response } = require('express');

const Parametro = require('../models/parametro');

const listarParametros = async(req, res=response) => {

    const parametro = await Parametro.find().where('aud_estado').ne(3);

    res.json({
        ok: true,
        msg: "Listado de parametros",
        data: parametro
    });
}

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

const listarBancos = async(req, res=response) => {

    const bancos = await Parametro.find( 
        { 
            tipo:"BANCO", 
            aud_estado: {
                $ne: 3
            }
        }
    );

    res.json({
        ok: true,
        msg: "Listado de bancos",
        data: bancos
    })
}

const listarTiposCuentas = async(req, res=response) => {

    const tipoCuenta = await Parametro.find( 
        { 
            tipo:"CUENTA", 
            aud_estado: {
                $ne: 3
            }
        }
    );

    res.json({
        ok: true,
        msg: "Listado de tipos de cuentas",
        data: tipoCuenta
    })
}

const listarTiposIngresos = async(req, res=response) => {

    const tipoIngreso = await Parametro.find( 
        { 
            tipo:"INGRESOS", 
            aud_estado: {
                $ne: 3
            }
        }
    );

    res.json({
        ok: true,
        msg: "Listado de tipos de Ingresos",
        data: tipoIngreso
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
    listarTipoAcivo,
    listarParametros,
    listarBancos,
    listarTiposCuentas,
    listarTiposIngresos,
}