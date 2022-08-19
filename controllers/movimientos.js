const { response } = require('express');

const Movimiento = require('../models/movimiento');
const Detalle = require('../models/detalle_movimiento');
const Cuenta = require('../models/cuenta')
const INGRESO = 'INGRESO';
const EGRESO = 'EGRESO';

const crearIngreso = async(req, res=response) => {

    const aud_usuario = req.aud_usuario;
    const uid_cuenta = req.body.cuenta;
    const monto = req.body.unitario;

    const movimiento = new Movimiento( req.body );
    movimiento.aud_usuario  = aud_usuario;
    movimiento.total        = monto;
    movimiento.lugar_compra = INGRESO;

    await movimiento.save();

    const detalleMov = new Detalle( req.body );
    detalleMov.sub_total   = monto;
    detalleMov.aud_usuario = aud_usuario;
    detalleMov.movimiento  = movimiento._id;

    await detalleMov.save();

    const cuenta = await Cuenta.findById(uid_cuenta);
    cuenta.saldo = cuenta.saldo + monto;
    await cuenta.save();

    res.json({
        ok: true,
        msg: "Ingreso Registrado"
    })

}



module.exports = {
    crearIngreso
}