exports.up = function(knex) {
  return knex.schema.createTable('recipes', (t) => {
    t.increments('id').primary();
    t.string('title').notNullable();
    t.text('description');
    t.timestamps(true, true);
  });
};
exports.down = function(knex) { return knex.schema.dropTableIfExists('recipes'); };
