const { Router } = require('express');
const { check } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');
const { validacionActivo, validacionCuenta } = require('../helpers/validaciones-db');

const { comprarActivo } = require('../controllers/compras');

const router = Router();

router.post('/:uid',[
    validarJWT,
    check('uid',"No es un ID válido").isMongoId(),
    check("uid").custom( validacionActivo ),
    check('fecha_movimiento').exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    check("cuenta","Revise el formato del tipo").isMongoId(),
    check('cuenta').custom( validacionCuenta ),
    check('lugar_compra').exists().notEmpty().isString().isUppercase(),
    validarCampos
], comprarActivo );

module.exports = router;