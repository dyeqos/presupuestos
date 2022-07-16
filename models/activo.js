const { Schema, model, default: mongoose } = require('mongoose');

const activoSchema = Schema({
    nombre: {
        type: String,
        required: [ true, 'El nombre del rol es obligatorio']
    },
    tipo_activo:{
        type: Schema.Types.ObjectId,
        ref: 'Parametro',
        required: [ true, 'El tipo de activo es obligatorio']
    },
    detalle:{
        type: String,
        required: [ true, 'El detalle del activo es obligatorio']
    },
    costo:{
        type: Number,
        default: 0,
        required: [ true , 'El costo del activo es obligatorio']
    },
    fecha: {
        type: Date,
        required: [ true, 'La feca es obligatorio' ]
    },
    estado_activo: {
        type: Number,
        default: 1
    },
    posicion: {
        type: Number,
        default: 0
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

activoSchema.methods.toJSON = function () {
    const { __v, _id,
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...activo } = this.toObject();
    activo.uid = _id;
    return activo;
}

module.exports = model( 'Activo', activoSchema );