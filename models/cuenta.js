const { Schema, model } = require('mongoose');

const cuentaSchema = Schema({
    numero_cuenta: {
        type: String,
        required: [ true, 'El numero de cuenta es obligatorio']
    },
    banco:{
        type: Schema.Types.ObjectId,
        ref: 'Parametro',
        required: [ true, 'El banco es obligatorio']
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'El usuario es obligatorio']
    },
    tipo_cuenta:{
        type: Schema.Types.ObjectId,
        ref: 'Parametro',
        required: [ true, 'El tipo de cuenta es obligatorio']
    },
    saldo:{
        type: Number,
        default: 0,
        required: [ true , 'El saldo de la cuenta es obligatorio']
    },
    aud_estado: {
        type: Number,
        default: 1
    },
    aud_fecha: {
        type: Date,
        default: new Date().toDateString()
    },
    aud_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Usuario Registro Obligatorio']
    }
});

cuentaSchema.methods.toJSON = function () {
    const { __v, _id,
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...cuenta } = this.toObject();
    cuenta.uid = _id;
    return cuenta;
}

module.exports = model( 'Cuenta', cuentaSchema );