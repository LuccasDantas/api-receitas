exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', (t) => {
    t.increments('id').primary();
    t.integer('recipe_id').unsigned().references('id').inTable('recipes').onDelete('CASCADE');
    t.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('RESTRICT');
    t.decimal('amount', 10, 2);
    t.string('unit');
  });
};
exports.down = function(knex) { return knex.schema.dropTableIfExists('recipe_ingredients'); };
