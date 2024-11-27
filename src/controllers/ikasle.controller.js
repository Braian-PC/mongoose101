const Ikasle = require('../models/ikasle.model');

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

exports.removeIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findByIdAndDelete(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json({ message: 'Ikaslea ondo ezabatu da' });
    } catch (error) {
        next(error);
    }
};

exports.editIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findByIdAndUpdate(
            req.params.id,          // ID del alumno
            req.body,               // Datos a actualizar
            { new: true, runValidators: true } // Opciones
        );
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

exports.createTalde = async (req, res, next) => {
    try {
        const { nombre, descripcion } = req.body;

        const grupo = new Grupo({
            nombre,
            descripcion,
        });

        // Guardar el grupo en la base de datos
        const savedGrupo = await grupo.save();
        res.status(201).json(savedGrupo);
    } catch (error) {
        // Si hay un error (por ejemplo, nombre duplicado), manejarlo
        next(error);
    }
};