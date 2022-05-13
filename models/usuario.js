const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
        nombre:{
            type: String,
            required: [ true, 'El nombre es obligatorio']
        },
        paterno:{
            type: String,
            required: [ true, 'El apellido es obligatorio']
        },
        materno:{
            type: String,
            required: [ true, 'El apellido es obligatorio']
        },
        correo:{
            type: String,
            required: [true, 'El correo es obligatorio'],
            unique: true
        },
        password:{
            type: String,
            required: [true, 'La contraseña es obligatoria']
        },
        img:{
            type: String,
        },
        rol:{
            type: String,
            required: [true, 'El rol del usuario es obligatorio'],
            emun: ['ADMIN','USUARIO']
        },
        estado:{
            type: Boolean,
            default: true
        },
        google:{
            type: Boolean,
            default: false
        },
        aud_estado:{
            type: Number,
            default: 1
        },
        aud_fecha:{
            type: Date,
            default:  new Date().toDateString()
        },
        aud_usuario:{
            type: String,
            required: [true, 'Usuario registro obligatorio']
        }
});

usuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', usuarioSchema );