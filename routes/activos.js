const { Router } = require('express');
const { check, body } = require("express-validator");

const { validarJWT } = require('../middlewares/validarJWT');
const { validarCampos } = require('../middlewares/validarCampos');

const { listarCotizaciones,listarActivos, crearActivo, modificarPosicion, modificarActivo, verActivo, eliminarActivo } = require('../controllers/activos');
const { validacionTipoActivo, validacionActivo } = require('../helpers/validaciones-db');

const router = Router();

router.get( '/', listarActivos );

router.get( '/cotizacion', listarCotizaciones );

router.get( '/:uid',[
    check('uid',"No es un ID válido").isMongoId(),
    check("uid").custom( validacionActivo ),
], verActivo );

router.post( '/', [
    validarJWT,
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("tipo_activo","Revise el formato del tipo").isMongoId(),
    check('tipo_activo').custom( validacionTipoActivo ),
    check("detalle","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("costo","Revise el formato del nombre").exists().notEmpty().isNumeric({min:0}),
    check("fecha", "Revise el formato de la fecha").exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    validarCampos
], crearActivo );

router.put('/',[
    validarJWT,
    body().isArray(),
    body("*.uid","Revise el formato del Id").isMongoId(),
    body("*.uid",).custom( validacionActivo ),
    body("*.posicion","Revise el formato de la posición").exists().notEmpty().isNumeric({min:0}),
    validarCampos
], modificarPosicion);

router.put( '/cotizacion', [
    validarJWT,
    check("uid","Revise el ID").isMongoId(),
    check("uid",).custom( validacionActivo ),
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("tipo_activo","Revise el formato del tipo").isMongoId(),
    check('tipo_activo').custom( validacionTipoActivo ),
    check("detalle","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("costo","Revise el formato del nombre").exists().notEmpty().isNumeric({min:0}),
    check("fecha", "Revise el formato de la fecha").exists().notEmpty().isDate({format: 'YYYY-MM-DD'}),
    validarCampos
], modificarActivo );

router.delete( '/cotizacion', [
    validarJWT,
    check("uid","Revise el ID").isMongoId(),
    check("uid",).custom( validacionActivo ),
    validarCampos
], eliminarActivo );


module.exports = router;