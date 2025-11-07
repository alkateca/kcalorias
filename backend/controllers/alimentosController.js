const Alimento = require("../models/Alimento");

exports.createAlimento = async (req, res) => {
    
    try{
        const novoAlimento = new Alimento(req.body);
        const alimentoSalvo = await novoAlimento.save();
        res.status(201).json(alimentoSalvo);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.getAlimentos = async (req,res) => {
    
    try{
        const alimentos = await Alimento.find();
        res.status(200).json(alimentos);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}