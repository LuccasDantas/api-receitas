exports.seed = async function(knex) {
  await knex('recipe_ingredients').del();
  await knex('ingredients').del();
  await knex('recipes').del();

  await knex('recipes').insert([
    { id: 1, title: 'Bolo simples', description: 'Farinha, ovos, açúcar...' },
    { id: 2, title: 'Salada verde', description: 'Alface, rúcula, azeite...' }
  ]);

  await knex('ingredients').insert([
    { id: 1, name: 'Farinha' },
    { id: 2, name: 'Ovo' },
    { id: 3, name: 'Açúcar' },
    { id: 4, name: 'Alface' },
    { id: 5, name: 'Azeite' }
  ]);

  await knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, amount: 200, unit: 'g' },
    { recipe_id: 1, ingredient_id: 2, amount: 3, unit: 'und' },
    { recipe_id: 2, ingredient_id: 4, amount: 1, unit: 'maço' },
    { recipe_id: 2, ingredient_id: 5, amount: 2, unit: 'colher' },
  ]);
};
