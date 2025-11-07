const mongoose = require("mongoose");

const AlimentoSchema = new mongoose.Schema({

    nome: { type: String, required: true, unique: true },
    kcalBase: { type: Number, required: true},
    porcaoBase: {type: Number, required: true}

})

module.exports = mongoose.model("Alimento", AlimentoSchema);