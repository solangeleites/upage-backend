"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsletterSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'El email es obligatorio']
    }
});
const Newsletter = (0, mongoose_1.model)('Newsletter', newsletterSchema);
exports.default = Newsletter;
