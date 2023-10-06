"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FormSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    telefono: {
        type: Number,
        required: [true, 'El telefono es obligatorio'],
    },
    mensaje: {
        type: String,
        required: [true, 'El mensaje es obligatorio'],
    },
});
const Form = (0, mongoose_1.model)('Form', FormSchema);
exports.default = Form;
