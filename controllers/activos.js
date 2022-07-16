const { response } = require('express');

const Activos = require('../models/activo');

const listarCotizaciones = async(req, res=response) => {

    const activos = await Activos.find({
        estado_activo: 1,
        aud_estado: {
            $ne: 3
        }
    })
    .populate('tipo_activo','nombre')
    .sort({
        posicion: 1
    });

    res.json({
        ok: true,
        msg: "Listado de cotizaciones",
        data: activos
    });
}

const verCotizacion = async(req, res=response) => {

    const uid = req.params.uid;
    const activos = await Activos.findById(uid).where('aud_estado').ne(3)
    .populate('tipo_activo','nombre');

    res.json({
        ok: true,
        msg: "Ver activo",
        data: activos
    });
}

const crearActivo = async(req, res=response) => {
    
    const activos = new Activos( req.body );
    activos.aud_usuario = req.aud_usuario;

    await activos.save();

    res.json({
        ok: true,
        msg: "Registro Correcto",
        data: activos
    })
    
}

const modificarPosicion = async(req, res=response) => {

    req.body.forEach( async activo => {
        activo.aud_usuario=req.aud_usuario;
        let { uid } = activo;
        await Activos.findByIdAndUpdate( uid, activo );  
    })
    res.json({
        ok: true, 
        msg: "Registro Correcto"
    })
}

const modificarActivo = async(req, res=response) => {

    const { uid } = req.body;

    req.body.aud_usuario = req.aud_usuario;
    req.body.aud_estado = 2;
    const activo = await Activos.findByIdAndUpdate( uid, req.body );  
    
    res.json({
        ok: true, 
        msg: "Modificación correcta",
        data: activo
    })
}

const eliminarActivo = async(req, res=response) => {

    const { uid } = req.body;

    const activo = await Activos.findByIdAndUpdate( uid, 
        {
            aud_estado: 3,
            aud_fecha: new Date().toDateString(),
            aud_usuario: req.aud_usuario
        } 
    ); 
    
    res.json({
        ok: true, 
        msg: "Presupuesto Eliminado",
        data: activo
    })
}
 

module.exports = {
    listarCotizaciones,
    crearActivo,
    modificarPosicion,
    modificarActivo,
    verCotizacion,
    eliminarActivo,
}