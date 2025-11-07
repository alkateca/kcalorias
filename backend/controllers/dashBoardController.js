// controllers/dashboardController.js
const Meta = require('../models/Meta');

// GET /api/dashboard
// Certifique-se que esta linha está assim:
exports.getDashboard = async (req, res) => {
  try {
    let metaGlobal = await Meta.findOne();

    // Se não existir, cria
    if (!metaGlobal) {
      metaGlobal = new Meta();
      await metaGlobal.save();
    }

    res.status(200).json(metaGlobal);

  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar dashboard', error: err.message });
  }
};


exports.resetDashboard = async (req, res) => {
    try {
        let metaGlobal = await Meta.findOne();

        if (!metaGlobal) {
            metaGlobal = new Meta();
        }
        
        metaGlobal.metaRestanteSemanal = metaGlobal.metaTotalSemanal;
        await metaGlobal.save();

        res.status(200).json({ message: "Semana resetada!", meta: metaGlobal });

    } catch (err) {
        res.status(500).json({ message: 'Erro ao resetar dashboard', error: err.message });
    }
};