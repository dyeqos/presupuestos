const { response } = require('express');

const Cuenta = require('../models/cuenta');

const listarCuentas = async(req, res=response) => {

    const cuentas = await Cuenta.find({
        aud_estado: {
            $ne: 3
        }
    })
    .populate('banco','nombre')
    .populate('tipo_cuenta','nombre')
    .populate('usuario',
     {
        nombre:1,
        paterno:1,
        materno:1,
    });

    res.json({
        ok: true,
        msg: "Listado de cotizaciones",
        data: cuentas
    });
}

const verCuenta = async(req, res=response) => {

    const uid = req.params.uid;
    const cuenta = await Cuenta.findById( uid).where('aud_estado').ne(3)
    .populate('banco','nombre')
    .populate('tipo_cuenta','nombre')
    .populate('usuario',
     {
        nombre:1,
        paterno:1,
        materno:1,
    });

    res.json({
        ok: true,
        msg: "Listado de cotizaciones",
        data: cuenta
    });
}

const crearCuenta = async(req, res=response) => {

    const cuenta = new Cuenta( req.body );
    cuenta.aud_usuario = req.aud_usuario;

    await cuenta.save();

    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: cuenta
    })

}

const modificarCuenta = async(req, res=response) => {

    const {uid} = req.body;

    req.body.aud_usuario = req.aud_usuario;
    req.body.aud_estado = 2;

    const cuenta = await Cuenta.findByIdAndUpdate( uid, req.body );

    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: cuenta
    })

}

module.exports = {
    listarCuentas,
    crearCuenta,
    modificarCuenta,
    verCuenta,
}