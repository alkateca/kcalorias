// /backend/seedData.js

// Lista de alimentos comuns para popular o banco de dados
// Todos os valores de kcal são para porções de 100g (ou 100ml para líquidos)
// Isso padroniza o cadastro e facilita a regra de 3.

const alimentosIniciais = [
  {
    nome: "Arroz Branco (cozido)",
    kcalBase: 130,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Feijão Carioca (cozido)",
    kcalBase: 76,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Peito de Frango (grelhado)",
    kcalBase: 165,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Bife (grelhado)",
    kcalBase: 250,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Ovo (cozido)",
    kcalBase: 155,
    porcaoBase: 100 // 100g (aprox. 2 ovos grandes)
  },
  {
    nome: "Pão Integral (forma)",
    kcalBase: 250,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Leite Integral",
    kcalBase: 60,
    porcaoBase: 100 // 100ml
  },
  {
    nome: "Banana",
    kcalBase: 89,
    porcaoBase: 100 // 100g
  },
  {
    nome: "Batata Inglesa (cozida)",
    kcalBase: 87,
    porcaoBase: 100 // 100g
  },
];

module.exports = alimentosIniciais;