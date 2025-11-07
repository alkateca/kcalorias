require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const alimentosRoutes = require('./routes/alimentos');
const consumoRoutes = require('./routes/consumo');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✅ Conectado ao MongoDB!');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar ao MongoDB:', err.message);
  });

app.use("/api/alimentos", alimentosRoutes);
app.use("/api/consumo", consumoRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req,res) => {

    res.send("🍛🍔🍣 API de Calorias 🍣🍔🍛")

})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})