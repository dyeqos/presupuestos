const { Router } = require('express');
const { check } = require("express-validator");

const { validarCampos } = require('../middlewares/validarCampos');

const { login, tokenRenovado } = require('../controllers/login');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router();

router.post('/login',[
    check('correo','El correo es obligatorio').exists().isEmail().isLowercase(),
    check('password','El password es obligatorio').exists().isString().isLength({min:6}),
    validarCampos
],login );

router.get('/validarJWT',[
    validarJWT, 
], tokenRenovado );


module.exports = router;