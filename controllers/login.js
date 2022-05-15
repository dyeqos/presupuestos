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
                msg: "Usuario o Correo inválidos"
            });
        }

        ///Usuario Activo
        if( !usuario.aud_estado ){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o Correo inválidos"
            });
        }

        ///Password Correcto
        const validPass = bcryptjs.compareSync( password, usuario.password );
        if( !validPass ){
            return res.status(400).json({
                ok: false,
                msg: "Usuario o Correo inválidos"
            });
        }

        ///JWT 
        const token = await generarJWT(usuario.id);

        console.log(usuario.id)

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

module.exports = {
    login
}