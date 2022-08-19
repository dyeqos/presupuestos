const { Router } = require('express');
const { check } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');

const { validacionID, validacionBanco, validacionTipoCuenta, validacionCuenta } = require('../helpers/validaciones-db');
const { listarCuentas, crearCuenta, modificarCuenta, verCuenta, listarCuentasIndiPub } = require('../controllers/cuentas');


const router = Router();

router.get('/', listarCuentas );

router.get('/mis-cuentas',[
    validarJWT,
    validarCampos,
],listarCuentasIndiPub );

router.get('/:uid',[
    check('uid',"No es un ID válido").isMongoId(),
    check("uid").custom( validacionCuenta ),
], verCuenta );

router.post('/',[
    validarJWT,
    check('numero_cuenta').exists().notEmpty().isString().isUppercase(),
    check("banco","Revise el formato del tipo").isMongoId(),
    check('banco').custom( validacionBanco ),
    check("usuario","Revise el formato del tipo").isMongoId(),
    check('usuario').custom( validacionID ),
    check("tipo_cuenta","Revise el formato del tipo").isMongoId(),
    check('tipo_cuenta').custom( validacionTipoCuenta ),
    check('descripcion').exists().notEmpty().isString().isUppercase(),
    validarCampos
], crearCuenta );

router.put('/',[
    validarJWT,
    check("uid","Revise el uid de la cuenta").isMongoId(),
    check('uid').custom( validacionCuenta ),
    check('numero_cuenta').exists().notEmpty().isString().isUppercase(),
    check("banco","Revise el formato del tipo").isMongoId(),
    check('banco').custom( validacionBanco ),
    check("usuario","Revise el formato del tipo").isMongoId(),
    check('usuario').custom( validacionID ),
    check("tipo_cuenta","Revise el formato del tipo").isMongoId(),
    check('tipo_cuenta').custom( validacionTipoCuenta ),
    check('descripcion').exists().notEmpty().isString().isUppercase(),
    validarCampos
], modificarCuenta );

module.exports = router; 