const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req, res= response) => {
    try {
        const { password, correo } = req.body;

        ///Existe correo
        const usuario = await Usuario.findOne({ correo });
        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o Correo inválido"
            });
        }

        ///Usuario Activo
        if( !usuario.aud_estado ){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o Correo inválido"
            });
        }

        ///Password Correcto
        const validPass = bcryptjs.compareSync( password, usuario.password );
        if( !validPass ){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o Correo inválido"
            });
        }

        ///JWT 
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            msg: token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador"
        });
    }
}

const tokenRenovado = (req, res= response) => {

    if(!req.token){
        return res.status(500).json({
            ok:false,
            msg: "verificar token"
        })
    }

    res.json({
        ok:true,
        msg: req.token
    });
}

module.exports = {
    login,
    tokenRenovado
}