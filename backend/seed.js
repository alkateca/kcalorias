const Alimento = require('./models/Alimento');
const Meta = require('./models/Meta');
const alimentosIniciais = require('./seedData');

async function popularBanco() {

      //await Alimento.insertMany(alimentosIniciais);
      //console.log(`✅ ${alimentosIniciais.length} alimentos cadastrados com sucesso.`);

}

module.exports = popularBanco;