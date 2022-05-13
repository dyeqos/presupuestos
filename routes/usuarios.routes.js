const { Router } = require('express');
const { check } = require('express-validator');


const { listarUsuarios, modificarUsuarios, crearUsuarios, eliminarUsuarios } = require("../controllers/usuarios");

const router = Router();

router.get('/', listarUsuarios );

router.post('/',[
    check("correo","asdf").isEmail(),
], (req, res) => res.json({}) );

router.put('/',[
    check("correo","asdf").isEmail(),
], modificarUsuarios );

router.delete('/', eliminarUsuarios );

module.exports = router; 

