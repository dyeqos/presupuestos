const { Schema, model } = require('mongoose');

const movimientoSchema = Schema({ 
    fecha_movimiento: {
        type: Date,
        required:[ true, 'La fecha compra es obligatoria'],
    },
    cuenta:{
        type: Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: [ true, 'La cuenta es obligatorio']
    },
    total:{
        type: Number,
        default:0,
        required: [ true, 'El total es obligatorio']
    },
    lugar_compra:{ //es como descripcion
        type: String,
        required: [ true, 'El lugar de compra es obligatorio']
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

movimientoSchema.methods.toJSON = function () {
    const { __v, _id,
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...movimiento } = this.toObject();
    movimiento.uid = _id;
    return movimiento;
}

module.exports = model( 'Movimiento', movimientoSchema );