import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import recipesRouter from './routes/recipes.js';
import authRouter from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.use('/auth', authRouter);
app.use('/recipes', recipesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`[api-receitas] running on :${port}`));
