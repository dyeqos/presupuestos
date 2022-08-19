const { Router } = require('express');
const { check } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');
const { validacionCuenta } = require('../helpers/validaciones-db');
const { crearIngreso } = require('../controllers/movimientos');


const router = Router();

router.post('/ingreso',[
    validarJWT,
    //movimiento
    check('fecha_compra').exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    check("cuenta","Revise el formato del tipo").isMongoId(),
    check('cuenta').custom( validacionCuenta ),
    check('lugar_compra').exists().notEmpty().isString().isUppercase(),
    //detalleMovimiento
    check('nombre').exists().notEmpty().isString().isUppercase(),
    check('detalle').exists().notEmpty().isString().isUppercase(),
    check('unitario').exists().notEmpty().isNumeric( {min: 1} ),

    validarCampos
], crearIngreso );

module.exports = router;