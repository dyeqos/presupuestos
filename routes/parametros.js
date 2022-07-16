const { Router } = require('express');
const { check } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');

const { validacionParametro } = require('../helpers/validaciones-db');

const { listarRoles, crearParametros, listarTipoAcivo } = require('../controllers/parametros');

const router = Router();

router.get( '/roles', listarRoles );

router.get( '/tipos-activos', listarTipoAcivo );

router.post( '/', [
    validarJWT,
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("tipo","Revise el formato del tipo").exists().notEmpty().isString().isUppercase(),
    check('nombre').custom( validacionParametro),
    validarCampos
], crearParametros );

module.exports = router;