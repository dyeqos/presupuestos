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
            type: Schema.Types.ObjectId,
            ref: 'Parametro',
            required: [true, 'El rol del usuario es obligatorio']
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
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: [true, 'Usuario registro obligatorio']
        }
});

usuarioSchema.methods.toJSON = function () {
    const { __v, _id, 
            password, 
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model( 'Usuario', usuarioSchema );