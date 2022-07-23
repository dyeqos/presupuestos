const { Router } = require('express');
const { check } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');

const { validacionID, validacionBanco, validacionTipoCuenta } = require('../helpers/validaciones-db');
const { listarCuentas, crearCuenta } = require('../controllers/cuentas');


const router = Router();

router.get('/', listarCuentas );

router.post('/',[
    validarJWT,
    check('numero_cuenta').exists().notEmpty().isString().isUppercase(),
    check("banco","Revise el formato del tipo").isMongoId(),
    check('banco').custom( validacionBanco ),
    check("usuario","Revise el formato del tipo").isMongoId(),
    check('usuario').custom( validacionID ),
    check("tipo_cuenta","Revise el formato del tipo").isMongoId(),
    check('tipo_cuenta').custom( validacionTipoCuenta ),
    validarCampos
], crearCuenta );

module.exports = router; 