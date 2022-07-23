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

module.exports = {
    listarCuentas,
    crearCuenta,
}