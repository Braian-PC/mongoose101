const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del grupo es obligatorio'],
        unique: true,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    miembros: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ikasle', // Relacionado con el modelo de alumnos
    }],
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Grupo', GrupoSchema);
