const { response } = require('express');

const Compra = require('../models/movimiento');
const Detalle = require('../models/detalle_movimiento');
const Activo = require('../models/activo');
const Cuenta = require('../models/cuenta')

/**
 * Compra => Movimiento 
 * Detalle => Detalle Movimiento
 */
const listarCompras = async(req, res=response) => {

    const compras = await Compra.find({
        aud_estado: {
            $ne: 3
        }
    });

    res.json({
        ok: true,
        msg: "Listado de compras",
        data: compras
    });

}

const verDetalle = async(req, res=response) => {

    const uid = req.params.uid;

    const detalles = await Detalle.find({
        aud_estado: {
            $ne: 3
        }
    }).populate({
        path: 'movimiento',
        match: {
            '_id': uid
        }
    });

    res.json({
        ok: true,
        msg: "Listado de compras",
        data: detalles
    });

}

const comprarActivo = async(req, res=response) => {

    const uidActivo = req.params.uid;
    const activo = await Activo.findById( uidActivo );

    const compra = new Compra( req.body );
    compra.total = activo.costo; 
    compra.aud_usuario = req.aud_usuario;

    const cuenta = await Cuenta.findById( compra.cuenta );
    
    //Verificar Fondos
    if( cuenta.saldo < activo.costo ){
        return res.status(400).json({
               ok: false,
               msg: "Saldo Insuficiente en la Cuenta"
        });
    }

    //guarda la compra
    await compra.save();

    //guardar detalle compra
    const detalle = new Detalle({
        movimiento: compra._id,
        nombre: activo.nombre,
        detalle: activo.detalle,
        unitario: activo.costo,
        sub_total: activo.costo,
        aud_usuario: req.aud_usuario
    });

    //console.log(detalle);
    await detalle.save();

    //acutaliza saldo de la Cuenta
    await Cuenta.findByIdAndUpdate( compra.cuenta, {
        saldo: cuenta.saldo - activo.costo,
        aud_usuario: req.aud_usuario
    });

    //actualiza el activo a Estado 2 -> Comprado
    await Activo.findByIdAndUpdate(uidActivo, {
        estado_activo: 2,
        posicion: 0,
        aud_usuario: req.aud_usuario,
        aud_fecha: new Date().toDateString()
    });


    res.json({
        ok: true,
        msg: "Registro Correcto"
    });

}


module.exports = {
    listarCompras,
    verDetalle,
    comprarActivo
}