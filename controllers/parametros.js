const { response } = require('express');

const Parametro = require('../models/parametro');

const listarRoles = async(req, res=response) => {

    const roles = await Parametro.find({tipo:"ROL"}).where('aud_estado').ne(3);

    res.json({
        ok: true,
        msg: "Listado de roles",
        data: roles
    });
}

module.exports = {
    listarRoles
}