const { response } = require('express');

const Activos = require('../models/activo');

const listarCotizaciones = async(req, res=response) => {

    const activos = await Activos.find(
        {
            estado_activo: 1,
            aud_estado: {
                $ne: 3
            }
        }
    ).populate('tipo_activo','nombre');;

    res.json({
        ok: true,
        msg: "Listado de cotizaciones",
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


module.exports = {
    listarCotizaciones,
    crearActivo,
    modificarPosicion,
}