const { Router } = require('express');
const { check,body } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');
const { validacionCuenta } = require('../helpers/validaciones-db');
const { crearIngreso, listarMovimientos, crearEgreso } = require('../controllers/movimientos');


const router = Router();

router.post('/ingreso',[
    validarJWT,
    //movimiento
    check('fecha_movimiento').exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    check("cuenta","Revise el formato del tipo").isMongoId(),
    check('cuenta').custom( validacionCuenta ),
    check('lugar_compra').exists().notEmpty().isString().isUppercase(),
    //detalleMovimiento
    check('nombre').exists().notEmpty().isString().isUppercase(),
    check('detalle').exists().notEmpty().isString().isUppercase(),
    check('unitario').exists().notEmpty().isNumeric( {min: 1} ),
    validarCampos
], crearIngreso );

router.post('/egreso',[
    validarJWT,
    check('fecha_movimiento').exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    check("cuenta","Revise el formato del tipo").isMongoId(),
    check('cuenta').custom( validacionCuenta ),
    body("detalle_mov").isArray(),
    body("detalle_mov.*.cantidad", "Revise la cantidad").exists().notEmpty().isNumeric({min:1}),
    body("detalle_mov.*.detalle", "Revise el detalle").exists().notEmpty().isString().isUppercase(),
    body("detalle_mov.*.unitario", "Revise el precio unitario").exists().notEmpty().isNumeric({min:1}),
    validarCampos
], crearEgreso)

router.post('/',[
    check('fecha_desde').exists(),
    check('fecha_hasta').exists(),
    check("cuenta","Revise el tipo de cuenta").exists(),
    check("lugar_compra","Revise el tipo de movimiento").isString().isUppercase(),
    check('lugar_compra').exists().notEmpty().isString().isUppercase(),
    validarCampos
], listarMovimientos );


module.exports = router;