const { response } = require('express');

const listarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

const crearUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

const modificarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

const eliminarUsuarios = (req, res = response) => {
    res.json({
        ok: true
    });
}

module.exports = {
    listarUsuarios,
    crearUsuarios,
    modificarUsuarios,
    eliminarUsuarios,
}