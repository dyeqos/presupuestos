const { Schema, model } = require('mongoose');

const parametroSchema = Schema({
    nombre:{
        type: String,
        required: [ true, 'El nombre del rol es obligatorio']
    },
    tipo:{
        type: String,
        required: [true, 'El tipo de parametro es obligatorio']
    },
    aud_estado:{
        type: Number,
        default: 1
    },
    aud_fecha:{
        type: Date,
        default: new Date().toDateString()
    },
    aud_usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Usuario Registro Obligatorio']
    }
});

parametroSchema.methods.toJSON = function () {
    const { __v, _id,
            aud_estado, 
            aud_fecha,
            aud_usuario, 
            ...parametro } = this.toObject();
    parametro.uid = _id;
    return parametro;
}

module.exports = model( 'Parametro', parametroSchema );