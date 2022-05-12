const { Router } = require("express");
const { check } = require('express-validator');

const { listarUsuarios, modificarUsuarios, crearUsuarios, eliminarUsuarios } = require("../controllers/usuarios");

const router = Router();

router.get('/', listarUsuarios );

router.post('/', crearUsuarios );

router.put('/', modificarUsuarios );

router.delete('/', eliminarUsuarios );

module.exports = router;