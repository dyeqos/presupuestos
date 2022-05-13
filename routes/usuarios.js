const { Router } = require('express');
const { check } = require("express-validator");
const { listarUsuarios, modificarUsuarios, crearUsuarios, eliminarUsuarios } = require("../controllers/usuarios");
const { validacionCorreo, validacionID } = require('../helpers/validaciones-db');
const { validarCampos } = require('../middlewares/validarCampos');
const router = Router();

router.get('/', listarUsuarios );

router.post('/',[
    check("nombre","Revise el formato del nombre").exists().notEmpty().isString().isUppercase(),
    check("paterno","Revise el formato del apellido paterno").exists().notEmpty().isString().isUppercase(),
    check("materno","Revise el formato del apellido materno").exists().notEmpty().isString().isUppercase(),
    check("correo","Revise el formato del correo").exists().notEmpty().isEmail().isLowercase(),
    check("correo").custom( validacionCorreo ),
    check("password","Revise el password, debe ser mayor a seis caracteres").exists().notEmpty().isString().isLength({min:6}),
    check('rol',"Revise el rol").exists().notEmpty().isString().isIn(['ADMIN','USUARIO']),
    validarCampos
] ,crearUsuarios );

router.put('/',[
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
    check('id','No es un ID válido').isMongoId(),
    check('id').custom( validacionID ),
], eliminarUsuarios );

module.exports = router; 