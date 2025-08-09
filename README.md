# api-receitas
API REST simples para gestão de receitas (ingredientes, categorias e usuários) com Node.js + Express + Knex + MySQL e JWT

# API de Receitas (Node.js + Express + Knex + MySQL)

## Stack
- Node.js, Express
- Knex.js (migrations/seeds)
- MySQL
- JWT (autenticação básica)
- Dotenv, Cors

## Endpoints (exemplo)
- POST /auth/login
- CRUD /users
- CRUD /recipes
- CRUD /ingredients

## Como rodar
1. cp .env.example .env  (preencha variáveis)
2. npm install
3. npx knex migrate:latest
4. npx knex seed:run
5. npm run dev

## Variáveis (.env example)
DB_HOST=localhost
DB_USER=root
DB_PASS=senha
DB_NAME=receitas
JWT_SECRET=uma_chave_segura
PORT=3000

## Scripts (package.json)
- dev: nodemon src/server.js
- migrate, seed, lint (se quiser)

## Estrutura
src/
  controllers/
  routes/
  models/
  middlewares/
  db/ (knexfile.js)
  server.js

## Auth
- /auth/login retorna token JWT
- usar Bearer token nas rotas protegidas

## Observações
- Retornos em JSON
- CORS habilitado
- Exemplos de body nos arquivos de rotas
