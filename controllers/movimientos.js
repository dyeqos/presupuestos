const { response } = require('express');
const { ObjectId } = require('mongodb');

const Movimiento = require('../models/movimiento');
const Detalle = require('../models/detalle_movimiento');
const Cuenta = require('../models/cuenta');
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

const crearEgreso = async(req, res=response) => {

    const aud_usuario = req.aud_usuario;

    const movimiento = new Movimiento( req.body );
    movimiento.aud_usuario  = aud_usuario;
    movimiento.total        = 0;
    movimiento.lugar_compra = EGRESO;

    const movimientoDatos = await movimiento.save();

    let suma = 0;

    req.body.detalle_mov.forEach( async(data) => {
        let detalle = new Detalle( data );
        detalle.movimiento = movimientoDatos._id;
        detalle.nombre = detalle.detalle;
        detalle.sub_total = detalle.cantidad * detalle.unitario;
        detalle.aud_usuario = aud_usuario;
        suma = suma + (detalle.cantidad * detalle.unitario);
        await detalle.save();
    })

    await Movimiento.findByIdAndUpdate(movimientoDatos._id,{
        total: suma
    })
    res.json({
        ok: true,
        msg: "Egreso Registrado"
    })

}

const listarMovimientos = async(req, res=response) => {
    
    const fechaDesde = req.body.fecha_desde ? req.body.fecha_desde : "";
    const fechaHasta = req.body.fecha_hasta ? req.body.fecha_hasta : "";
    const tipoMovimiento = req.body.lugar_compra ? req.body.lugar_compra : "";
    const cuentaUID = req.body.cuenta ? req.body.cuenta : "";
    //armar consulta con fechas
    let consulta = [];
    if(fechaDesde!="" && fechaHasta!="" ){
        consulta.push({ fecha_movimiento: { $gte: new Date(fechaDesde), $lte: new Date(fechaHasta) } });
    }else{
        const fecha = new Date();
        const primeroDeMes = fecha.getFullYear()+"-"+(fecha.getUTCMonth()+1)+"-1";
        consulta.push({ fecha_movimiento: { $gte: new Date(primeroDeMes), $lte: new Date(fecha.getFullYear()+"-"+(fecha.getUTCMonth()+1)+"-"+fecha.getDate()) } });
    }

    if( tipoMovimiento!="" ){
        if(tipoMovimiento==INGRESO || tipoMovimiento==EGRESO){
            consulta.push({lugar_compra:tipoMovimiento});
        }else{
           // consulta.push({lugar_compra:{$nin : [INGRESO, EGRESO]}})
        }
    }

    if( cuentaUID!="" ){
        consulta.push({cuenta:ObjectId(cuentaUID)});
    }

    const movimientos = await Movimiento.aggregate([
        {
            $match: {
                $and: consulta
            }
        },
        {
            $lookup:{
                from: Detalle.collection.name,
                pipeline: [{ $project:{ _id:0,uid: "$_id",nombre:1,detalle:1,cantidad:1,unitario:1,sub_total:1,}}],
                localField: "_id",
                foreignField: "movimiento", 
                as: "detalle_movimiento"
            }
        },
        { $project:{ _id:0, uid: "$_id",lugar_compra:1, fecha_movimiento:1, cuenta:1,total:1,detalle_movimiento:1 } }
    ])

    const detalleMovimientos = 
                await Cuenta.populate(movimientos, { 
                                            path: "cuenta",
                                            populate: { 
                                                path: "banco"
                                            }
                                        });

    res.json({
        ok: true,
        msg: "Listado de movimientos",
        data: detalleMovimientos
    });
 
}

module.exports = {
    crearIngreso,
    listarMovimientos,
    crearEgreso,
}