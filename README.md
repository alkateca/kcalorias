# Kcalorias - Rastreador de Calorias kcalorias
Um projeto full-stack simples para rastreamento de calorias. Consiste em um frontend React e um backend Node.js (API) que armazena dados em um MongoDB.

Este projeto é totalmente containerizado usando Docker e Nginx.

## 💡 Sobre o Projeto
Já utilizo um tracker em meu dia a dia, mas ao pesquisar outras formas de manter minha dieta, descobri esse formato de uma quantidade de calorias semanais e decidi criar a minha própria versão!

Importante notar: O número de calorias totais está definido com base no meu peso e altura. Logo, caso queira alterar, dentro da pasta backend/models há o arquivo Meta.js. Nele é definido esse valor padrão (no default).

Boa sorte com sua dieta e nos vemos por aí!

## 🚀 O que ele faz?
Cadastrar Alimentos: Permite ao usuário cadastrar um alimento com seu nome, porção base (em g, ml, ou unidades) e o valor calórico dessa porção.

Registrar Consumo: O usuário pode selecionar um alimento cadastrado, informar a quantidade consumida, e a API calcula (usando regra de 3) as calorias a serem descontadas.

Dashboard Semanal: Exibe uma meta de calorias semanais (19500 kcal por padrão) e o valor restante, que é atualizado a cada consumo.

Resetar: Um botão permite resetar a contagem semanal de volta ao valor total.

## 🛠️ Tecnologias Utilizadas
Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express, Mongoose

Banco de Dados: MongoDB

Infraestrutura: Docker, Docker Compose, Nginx (como servidor web para o React e proxy reverso para a API)

## 🏃 Como Rodar o Projeto
Este projeto é 100% containerizado. A única dependência necessária na sua máquina é o Docker e o Docker Compose.

Clone o repositório:

## 🖥️ Bash 

git clone [https://github.com/seu-usuario/kcalorias-app.git](https://github.com/alkateca/kcalorias.git) <br>
cd kcalorias-app <br>
Suba os containers: (Este comando irá construir as imagens do frontend e backend, instalar todas as dependências do npm dentro dos containers e iniciar o banco de dados).

## 🖥️ Bash

docker-compose up --build <br>
Acesse a aplicação: Após o build terminar, abra seu navegador e acesse:

➡️ http://localhost:8080

(Nota: O projeto está configurado para a porta 8080. Se ela estiver em uso, você pode alterá-la no arquivo docker-compose.yml na seção frontend.ports).

<img width="963" height="718" alt="image" src="https://github.com/user-attachments/assets/517a6c2c-3003-478b-a615-a6832a6f3ff8" />

