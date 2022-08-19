const { Schema, model } = require('mongoose');

const detalle_movimientoSchema = Schema({
    movimiento: { 
        type: Schema.Types.ObjectId,
        ref: 'Movimiento',
        required: [ true, 'Se necesita un movimiento']
    },
    nombre:{
        type: String,
        required: [ true, 'El nompre producto es obligatorio']
    },
    detalle:{
        type: String,
        required: [ true, 'El detalle producto es obligatorio']
    },
    cantidad:{
        type: Number,
        default: 1,
        required: [ true, 'La cantidad es obligatorio']
    },
    unitario:{
        type: Number,
        required: [ true, 'La cantidad es obligatorio']
    },
    sub_total:{
        type: Number,
        required: [ true, 'El subtotal es obligatorio']
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

detalle_movimientoSchema.methods.toJSON = function () {
    const { __v, _id,
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...detalle_movimiento } = this.toObject();
    detalle_movimiento.uid = _id;
    return detalle_movimiento;
}

module.exports = model( 'Detalle_movimiento', detalle_movimientoSchema );