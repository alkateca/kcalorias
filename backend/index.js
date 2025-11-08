// /backend/index.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const popularBanco = require('./seed'); // <-- 1. IMPORTE O SCRIPT

// Importar as rotas
const alimentosRoutes = require('./routes/alimentos');
const consumoRoutes = require('./routes/consumo');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
app.use(cors()); 
app.use(express.json());

// --- Rotas da API ---
app.use('/api/alimentos', alimentosRoutes);
app.use('/api/consumo', consumoRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de Calorias no ar!');
});

// --- Função para Iniciar o Servidor ---
async function iniciarServidor() {
  try {
    // 2. CONECTE AO MONGO
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('✅ Conectado ao MongoDB!');

    // 3. RODE O SCRIPT DE "SEEDING"
    // (Ele só vai popular se o banco estiver vazio)
    await popularBanco();

    // 4. INICIE O SERVIDOR EXPRESS
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });

  } catch (err) {
    console.error('❌ Falha ao iniciar o servidor:', err.message);
  }
}

// --- Inicia tudo ---
iniciarServidor();