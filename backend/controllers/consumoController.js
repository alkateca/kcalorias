const Alimento = require('../models/Alimento');
const Meta = require('../models/Meta'); 

exports.registrarConsumo = async (req, res) => {
  try {
    const { alimentoId, quantidadeConsumida } = req.body;

    if (!alimentoId || !quantidadeConsumida ) {
      return res.status(400).json({ message: 'Os campos alimentoId e quantidadeConsumida são obrigatórios.' });
    }

    const alimento = await Alimento.findById(alimentoId);
    if (!alimento) {
      return res.status(404).json({ message: 'Alimento não encontrado.' });
    }

    const kcalCalculadas = (quantidadeConsumida / alimento.porcaoBase) * alimento.kcalBase;


    let metaGlobal = await Meta.findOne();

    if (!metaGlobal) {
      metaGlobal = new Meta(); 
    }

    metaGlobal.metaRestanteSemanal -= kcalCalculadas;

    const metaAtualizada = await metaGlobal.save();

    res.status(200).json({
      message: `Consumido ${kcalCalculadas.toFixed(2)} kcal.`,
      metaRestante: metaAtualizada.metaRestanteSemanal
    });

  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar consumo', error: err.message });
  }
};