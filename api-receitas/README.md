# api-receitas

API REST simples para gestão de receitas com **Node.js + Express + Knex + MySQL**.

## Stack
- Node.js, Express
- Knex (migrations/seeds)
- MySQL
- dotenv, cors, jsonwebtoken (opcional)

## Endpoints (exemplo)
- POST /auth/login
- GET /recipes
- GET /recipes/:id
- POST /recipes
- PUT /recipes/:id
- DELETE /recipes/:id

## Como rodar
1. `cp .env.example .env` (preencha variáveis)
2. `npm install`
3. `npx knex migrate:latest`
4. `npx knex seed:run`
5. `npm run dev`

## Variáveis (.env.example)
Veja o arquivo `.env.example` neste projeto.
