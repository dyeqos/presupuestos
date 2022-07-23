
const Parametro = require('../models/parametro');
const Usuario = require('../models/usuario');
const Activo = require('../models/activo');

///valida que este registrado el ROL en BD
const validacionTipoActivo = async(tipo_activo = '') => {
    const existeTipoActivo = await Parametro.findById( tipo_activo );
    if( !existeTipoActivo ) {
        throw new Error(`El tipo de activo '${tipo_activo}' no está registrado en la BD`);
    }
}

///valida que este registrado el BANCO en BD
const validacionBanco = async(banco = '') => {
    const existeBanco = await Parametro.findById( banco );
    if( !existeBanco ) {
        throw new Error(`El banco '${banco}' no está registrado en la BD`);
    }
}

///valida que este registrado el tipoCuenta en BD
const validacionTipoCuenta = async(tipo_cuenta = '') => {
    const existeTipoCuenta = await Parametro.findById( tipo_cuenta );
    if( !existeTipoCuenta ) {
        throw new Error(`El tipo de cuenta'${tipo_cuenta}' no está registrado en la BD`);
    }
}

//valida que exista el activo en BD
const validacionActivo = async(uid = '') => {
    const existeActivo = await Activo.findById( uid );
    if( !existeActivo ) {
        throw new Error(`El activo con id '${uid}' no está registrado en la BD`);
    }
}

///valida que este registrado el ROL en BD
const validacionRol = async(rol = '') => {
    const existeRol = await Parametro.findById( rol );
    if( !existeRol ) {
        throw new Error(`El rol '${rol}' no está registrado en la BD`);
    }
}

///valida que no exista el nombre del parametro segun su rol
const validacionParametro = async(parametro = '') => {
    const existeParametro = await Parametro.findOne( {nombre: parametro} );
    if( existeParametro ){
        throw new Error(`El parametro '${parametro}' ya se encuentra registrado en la BD`)
    }
}

///valida que el correo sea unico en BD
const validacionCorreo = async(correo = '') => {
    const existeCorreo = await Usuario.findOne( {correo} );
    if( existeCorreo ){
        throw new Error(`El correo '${correo}' ya se encuentra registrado en la BD`)
    }
}

///valida que el ID exista en la BD
const validacionID = async( id ) => {
    const existeID = await Usuario.findById( id );
    if( !existeID ){
        throw new Error(`El ID no existe en la BD`)
    }
}

module.exports = {
    validacionRol,
    validacionCorreo,
    validacionID,
    validacionParametro,
    validacionTipoActivo,
    validacionActivo,
    validacionBanco,
    validacionTipoCuenta,
}