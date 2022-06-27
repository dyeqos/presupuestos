const Rol = require('../models/parametro');
const Usuario = require('../models/usuario');

///valida que este registrado el ROL en BD
const validacionRol = async(rol = '') => {
    const existeRol = await Rol.findById( rol );
    if( !existeRol ) {
        throw new Error(`El rol "${rol}" no está registrado en la BD`);
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
}