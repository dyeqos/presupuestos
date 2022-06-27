const { Router } = require('express');
const { check } = require("express-validator");

const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

const { validacionCorreo, validacionID, validacionRol } = require('../helpers/validaciones-db');

const { listarUsuarios, modificarUsuarios, crearUsuarios, eliminarUsuarios } = require("../controllers/usuarios");

const router = Router();

router.get('/', listarUsuarios );

router.post('/',[
    validarJWT,
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("paterno","Revise el formato del apellido paterno").exists().notEmpty().isString().isUppercase(),
    check("materno","Revise el formato del apellido materno").exists().notEmpty().isString().isUppercase(),
    check("correo","Revise el formato del correo").exists().notEmpty().isEmail().isLowercase(),
    check("correo").custom( validacionCorreo ),
    check("password","Revise el password, debe ser mayor a seis caracteres").exists().notEmpty().isString().isLength({min:6}),
    check('rol',"No es un ID válido").isMongoId(),
    check('rol').custom( validacionRol ),
    validarCampos
] ,crearUsuarios );

router.put('/',[
    validarJWT,
    check('id','No es un ID válido').isMongoId(),
    check('id').custom( validacionID ),
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("paterno","Revise el formato del apellido paterno").exists().notEmpty().isString().isUppercase(),
    check("materno","Revise el formato del apellido materno").exists().notEmpty().isString().isUppercase(),
    check("correo","Revise el formato del correo").exists().notEmpty().isEmail().isLowercase(),
    check("password","Revise el password, debe ser mayor a seis caracteres").isString().if(check('password').not().isEmpty()).isLength({min:6}),
    check('rol',"Revise el rol").exists().notEmpty().isString().isIn(['ADMIN','USUARIO']),
    validarCampos
], modificarUsuarios );

router.delete('/',[
    validarJWT,
    check('id','No es un ID válido').isMongoId(),
    check('id').custom( validacionID ),
    validarCampos
], eliminarUsuarios );

module.exports = router; 