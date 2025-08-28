import { Router } from 'express';
import db from '../db/knex.js';
import { auth } from '../utils/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  const rows = await db('recipes').select('id', 'title', 'description');
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const row = await db('recipes').where({ id: req.params.id }).first();
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const [id] = await db('recipes').insert({ title, description });
  const created = await db('recipes').where({ id }).first();
  res.status(201).json(created);
});

router.put('/:id', auth, async (req, res) => {
  const { title, description } = req.body;
  await db('recipes').where({ id: req.params.id }).update({ title, description });
  const updated = await db('recipes').where({ id: req.params.id }).first();
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await db('recipes').where({ id: req.params.id }).delete();
  res.status(204).send();
});

export default router;
