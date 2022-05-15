const { Router } = require('express');
const { check } = require("express-validator");

const { validacionCorreo, validacionID } = require('../helpers/validaciones-db');
const { validarCampos } = require('../middlewares/validarCampos');

const { login } = require('../controllers/login');

const router = Router();

router.post('/login',[
    check('correo','El correo es obligatorio').exists().isEmail().isLowercase(),
    check('password','El password es obligatorio').exists().isString().isLength({min:6}),
    validarCampos
],login );


module.exports = router;